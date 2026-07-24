"use client";

import { heroScenes } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_MS = 4000;
const FADE_S = 0.45;

export function HeroCinematicSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroScenes.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-rose-100" aria-hidden>
      {heroScenes.map((scene, i) => (
        <motion.div
          key={scene.id}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: index === i ? 1 : 0 }}
          transition={{ duration: FADE_S, ease: "easeInOut" }}
          style={{ zIndex: index === i ? 1 : 0 }}
        >
          <Image
            src={scene.image}
            alt=""
            fill
            priority={i < 2}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      ))}

      {/* Balanced scrim: readable whether slide is light or dark */}
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,248,248,0.7)_40%,rgba(42,18,24,0.35)_100%)]"
        aria-hidden
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-white/65 via-rose-50/45 to-white/70" aria-hidden />
    </div>
  );
}
