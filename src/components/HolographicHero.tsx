"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";

function ParticleHead({ mouse }: { mouse: { x: number; y: number } }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [time, setTime] = useState(0);

  // Generate particles in a head-like shape
  const particles = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Create a rough head shape using spherical coordinates with modifications
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 1.5 + Math.random() * 0.3;

      // Modify radius to create head shape (wider at bottom for jaw)
      const headModifier = 1 + Math.sin(phi) * 0.3;
      const r = radius * headModifier;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.2; // Stretch vertically
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color gradient from cyan to purple
      const colorMix = Math.random();
      const cyan = new THREE.Color(0x00E5FF);
      const purple = new THREE.Color(0x7C3AED);
      const mixedColor = cyan.lerp(purple, colorMix);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      const t = state.clock.getElapsedTime();
      setTime(t);

      // Slow rotation
      pointsRef.current.rotation.y = t * 0.1;

      // Mouse follow with damping
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(
        pointsRef.current.rotation.x,
        mouse.y * 0.3,
        0.05
      );
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(
        pointsRef.current.rotation.z,
        mouse.x * 0.3,
        0.05
      );

      // Periodic dispersion effect
      const dispersion = Math.sin(t * 0.5) * 0.5 + 0.5;
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        const originalX = particles.positions[i];
        const originalY = particles.positions[i + 1];
        const originalZ = particles.positions[i + 2];

        // Add subtle wave motion
        positions[i] = originalX + Math.sin(t * 2 + originalY) * 0.02 * dispersion;
        positions[i + 1] = originalY + Math.cos(t * 2 + originalX) * 0.02 * dispersion;
        positions[i + 2] = originalZ + Math.sin(t * 2 + originalZ) * 0.02 * dispersion;
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function BackgroundParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 1000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        transparent
        color="#38BDF8"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function LightRays() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i / 8) * Math.PI * 2]}>
          <planeGeometry args={[0.1, 15]} />
          <meshBasicMaterial
            color="#00E5FF"
            transparent
            opacity={0.05}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

export function HolographicHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onPointerMove={(e) => {
          setMouse({
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1,
          });
        }}
      >
        <color attach="background" args={['#050816']} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.5} />
        
        {/* Point lights for glow effect */}
        <pointLight position={[10, 10, 10]} color="#00E5FF" intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#7C3AED" intensity={1} />
        
        {/* Background particles */}
        <BackgroundParticles />
        
        {/* Light rays */}
        <LightRays />
        
        {/* Main particle head */}
        <ParticleHead mouse={mouse} />
      </Canvas>
    </div>
  );
}
