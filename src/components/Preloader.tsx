"use client";

import { VD_CIRCUIT_DOTS, VD_OUTLINE_PATH } from "@/components/brand/vdLogoPaths";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const MIN_BOOT_MS = 2400;

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const logoImgRef = useRef<HTMLDivElement>(null);
  const bootStartRef = useRef(Date.now());

  useEffect(() => {
    const outline = svgRef.current?.querySelector("#vd-outline") as SVGPathElement | null;
    if (!outline) return;

    const length = outline.getTotalLength();
    outline.style.strokeDasharray = `${length}`;
    outline.style.strokeDashoffset = `${length}`;
    outline.style.opacity = "1";

    const finish = () => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.85,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false),
      });
    };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          const elapsed = Date.now() - bootStartRef.current;
          const wait = Math.max(0, MIN_BOOT_MS - elapsed);
          window.setTimeout(finish, wait);
        },
      });

      tl.fromTo(
        outline,
        { strokeDashoffset: length },
        { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }
      );

      tl.fromTo(
        ".boot-particle",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.025, ease: "back.out(2)" },
        "-=1.2"
      );

      tl.to(
        logoImgRef.current,
        { opacity: 1, filter: "brightness(1.1) saturate(1.2)", duration: 0.7, ease: "power2.out" },
        "-=0.4"
      );

      tl.to(
        "#vd-fill",
        { opacity: 0.35, duration: 0.6, ease: "power2.inOut" },
        "-=0.5"
      );

      tl.to(
        logoWrapRef.current,
        {
          filter:
            "drop-shadow(0 0 24px rgba(0,229,255,0.85)) drop-shadow(0 0 48px rgba(124,58,237,0.55))",
          duration: 0.5,
        },
        "-=0.3"
      );

      tl.to(logoWrapRef.current, {
        scale: 1.06,
        duration: 0.25,
        ease: "power2.inOut",
        yoyo: true,
        repeat: 1,
      });

      tl.to(
        ".boot-particle",
        {
          x: () => (Math.random() - 0.5) * 280,
          y: () => (Math.random() - 0.5) * 280,
          opacity: 0,
          scale: 0,
          duration: 0.55,
          stagger: 0.015,
          ease: "power3.in",
        },
        "-=0.05"
      );

      tl.to(
        logoWrapRef.current,
        { opacity: 0, scale: 0.85, duration: 0.45, ease: "power2.in" },
        "-=0.25"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
      style={{ isolation: "isolate" }}
      aria-label="Loading"
      role="status"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00E5FF]/5 blur-3xl" />
        <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-[#7C3AED]/5 blur-3xl" />
      </div>

      <div ref={logoWrapRef} className="relative">

        <svg ref={svgRef} width="280" height="280" viewBox="0 0 360 300" className="relative z-10">
          <defs>
            <linearGradient id="vdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#80F0FF" />
              <stop offset="50%" stopColor="#7DD3FC" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
            <filter id="bootGlow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            id="vd-outline"
            d={VD_OUTLINE_PATH}
            fill="none"
            stroke="url(#vdGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#bootGlow)"
            style={{ opacity: 0 }}
          />

          {VD_CIRCUIT_DOTS.map((dot, i) => (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              r="3.5"
              fill="#00E5FF"
              filter="url(#bootGlow)"
              className="boot-particle"
              style={{ opacity: 0 }}
            />
          ))}

          <path
            id="vd-fill"
            d={VD_OUTLINE_PATH}
            fill="url(#vdGradient)"
            opacity="0"
            style={{ mixBlendMode: "screen" }}
          />
        </svg>

        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="boot-particle absolute h-1 w-1 rounded-full bg-[#00E5FF]"
            style={{
              left: `${42 + (Math.random() - 0.5) * 16}%`,
              top: `${42 + (Math.random() - 0.5) * 16}%`,
              boxShadow: "0 0 8px #00E5FF, 0 0 16px #7C3AED",
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
