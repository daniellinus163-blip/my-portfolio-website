"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Props = {
  onHeadFormed?: () => void;
  onSpeechComplete?: () => void;
};

const WELCOME_LINE = "Welcome to Vibecode Dan Portfolio.";

function sampleHeadPoint(): THREE.Vector3 {
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(2 * Math.random() - 1);

  let r = 1.65 + Math.random() * 0.35;

  const yNorm = Math.cos(phi);
  const xNorm = Math.sin(phi) * Math.cos(theta);
  const zNorm = Math.sin(phi) * Math.sin(theta);

  if (yNorm < -0.15) r *= 1.15 + Math.abs(yNorm) * 0.35;
  if (yNorm > 0.35) r *= 0.92;

  if (zNorm > 0.55 && Math.abs(xNorm) < 0.35 && yNorm > -0.2 && yNorm < 0.45) {
    r += 0.22 * (1 - Math.abs(xNorm) / 0.35);
  }

  if (yNorm < -0.45 && Math.abs(xNorm) < 0.5) r *= 0.88;

  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta) * 1.28,
    r * Math.cos(phi)
  );
}

function useParticleCount() {
  const [count, setCount] = useState(9000);
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    setCount(mobile ? 4500 : 9000);
  }, []);
  return count;
}

function ParticleHead({
  mouse,
  isSpeaking,
  onFormed,
}: {
  mouse: { x: number; y: number };
  isSpeaking: boolean;
  onFormed: () => void;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const assemblyRef = useRef(0);
  const formedRef = useRef(false);
  const driftRef = useRef<Float32Array | null>(null);
  const speakPhase = useRef(0);

  const particleCount = useParticleCount();

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const targets = new Float32Array(particleCount * 3);
    const origins = new Float32Array(particleCount * 3);
    const drift = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color(0x00e5ff);
    const purple = new THREE.Color(0x7c3aed);
    const blue = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const target = sampleHeadPoint();
      targets[i * 3] = target.x;
      targets[i * 3 + 1] = target.y;
      targets[i * 3 + 2] = target.z;

      const spread = 14 + Math.random() * 8;
      origins[i * 3] = (Math.random() - 0.5) * spread;
      origins[i * 3 + 1] = (Math.random() - 0.5) * spread;
      origins[i * 3 + 2] = (Math.random() - 0.5) * spread;

      positions[i * 3] = origins[i * 3];
      positions[i * 3 + 1] = origins[i * 3 + 1];
      positions[i * 3 + 2] = origins[i * 3 + 2];

      drift[i * 3] = (Math.random() - 0.5) * 0.02;
      drift[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      drift[i * 3 + 2] = (Math.random() - 0.5) * 0.02;

      const mix = Math.random();
      const color = cyan.clone().lerp(purple, mix * 0.7).lerp(blue, Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    driftRef.current = drift;
    return { positions, colors, targets, origins };
  }, [particleCount]);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    if (assemblyRef.current < 1) {
      assemblyRef.current = Math.min(1, assemblyRef.current + delta * 0.22);
      if (assemblyRef.current >= 1 && !formedRef.current) {
        formedRef.current = true;
        onFormed();
      }
    }

    const t = state.clock.getElapsedTime();
    const progress = 1 - Math.pow(1 - assemblyRef.current, 3);
    const breath = formedRef.current ? Math.sin(t * 1.4) * 0.025 : 0;
    const positions = points.geometry.attributes.position.array as Float32Array;
    const drift = driftRef.current;

    speakPhase.current = isSpeaking ? Math.abs(Math.sin(t * 14)) : speakPhase.current * 0.92;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const tx = particles.targets[i3];
      const ty = particles.targets[i3 + 1];
      const tz = particles.targets[i3 + 2];

      let ox = particles.origins[i3];
      let oy = particles.origins[i3 + 1];
      let oz = particles.origins[i3 + 2];

      let x = ox + (tx - ox) * progress;
      let y = oy + (ty - oy) * progress;
      let z = oz + (tz - oz) * progress;

      if (!formedRef.current) {
        x += Math.sin(t * 2 + oy) * 0.04 * (1 - progress);
        y += Math.cos(t * 2 + ox) * 0.04 * (1 - progress);
      } else if (drift) {
        const detach = Math.sin(t * 0.7 + i * 0.13) > 0.985 ? 0.12 : 0;
        x += drift[i3] * Math.sin(t + i) + tx * detach * 0.08;
        y += drift[i3 + 1] * Math.cos(t * 1.1 + i) + breath + ty * detach * 0.08;
        z += drift[i3 + 2] * Math.sin(t * 0.8 + i);

        if (isSpeaking && ty < -0.35 && ty > -1.1 && Math.abs(tx) < 0.55) {
          y -= speakPhase.current * 0.08 * (1 + Math.random() * 0.4);
        }
      }

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
    }

    points.geometry.attributes.position.needsUpdate = true;

    if (formedRef.current) {
      points.rotation.y = t * 0.08;
      points.rotation.x = THREE.MathUtils.lerp(points.rotation.x, mouse.y * 0.22, 0.04);
      points.rotation.z = THREE.MathUtils.lerp(points.rotation.z, -mouse.x * 0.12, 0.04);
    } else {
      points.rotation.y = t * 0.04;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions} colors={particles.colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.92}
      />
    </Points>
  );
}

function AmbientField() {
  const positions = useMemo(() => {
    const count = 1800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 28;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 28;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 28;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#38BDF8"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function VolumetricFog() {
  return (
    <>
      <fog attach="fog" args={["#050816", 4, 18]} />
      <mesh position={[0, 0, -4]}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial color="#0B1120" transparent opacity={0.35} />
      </mesh>
    </>
  );
}

function Scene({
  mouse,
  isSpeaking,
  onFormed,
}: {
  mouse: { x: number; y: number };
  isSpeaking: boolean;
  onFormed: () => void;
}) {
  return (
    <>
      <color attach="background" args={["#050816"]} />
      <VolumetricFog />
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 6, 8]} color="#00E5FF" intensity={1.2} />
      <pointLight position={[-8, -4, 6]} color="#7C3AED" intensity={0.9} />
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        <AmbientField />
      </Float>
      <ParticleHead mouse={mouse} isSpeaking={isSpeaking} onFormed={onFormed} />
    </>
  );
}

export function ParticleHeadHero({ onHeadFormed, onSpeechComplete }: Props) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [headFormed, setHeadFormed] = useState(false);
  const speechStarted = useRef(false);

  const handleFormed = useCallback(() => {
    setHeadFormed(true);
    onHeadFormed?.();
  }, [onHeadFormed]);

  useEffect(() => {
    if (!headFormed || speechStarted.current) return;
    speechStarted.current = true;

    const startSpeech = () => {
      setShowWelcome(true);
      setIsSpeaking(true);

      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(WELCOME_LINE);
        utterance.rate = 0.92;
        utterance.pitch = 0.95;
        utterance.onend = () => {
          setIsSpeaking(false);
          window.setTimeout(() => {
            setShowWelcome(false);
            onSpeechComplete?.();
          }, 600);
        };
        utterance.onerror = () => {
          setIsSpeaking(false);
          window.setTimeout(() => {
            setShowWelcome(false);
            onSpeechComplete?.();
          }, 2800);
        };
        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => {
          setIsSpeaking(false);
          setShowWelcome(false);
          onSpeechComplete?.();
        }, 3200);
      }
    };

    const timer = window.setTimeout(startSpeech, 400);
    return () => window.clearTimeout(timer);
  }, [headFormed, onSpeechComplete]);

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 48 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onPointerMove={(e) => {
          setMouse({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
          });
        }}
      >
        <Scene mouse={mouse} isSpeaking={isSpeaking} onFormed={handleFormed} />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,8,22,0.35)_70%,rgba(5,8,22,0.85)_100%)]" />

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute bottom-[18%] left-0 right-0 z-20 px-6 text-center md:bottom-[22%]"
          >
            <p
              className="text-lg font-bold tracking-wide text-[#00E5FF] md:text-2xl"
              style={{
                textShadow:
                  "0 0 24px rgba(0,229,255,0.75), 0 0 48px rgba(124,58,237,0.45), 0 2px 8px rgba(0,0,0,0.8)",
              }}
            >
              {WELCOME_LINE}
            </p>
            {isSpeaking && (
              <motion.div
                className="mx-auto mt-3 flex h-1 max-w-[200px] justify-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 rounded-full bg-[#38BDF8]"
                    animate={{ height: [4, 14, 6, 18, 4] }}
                    transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.08 }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
