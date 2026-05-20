"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 380, damping: 28 });
  const springY = useSpring(y, { stiffness: 380, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-950"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[199] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-400/45 via-cyan-400/35 to-rose-400/40 blur-2xl"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[198] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/25 blur-xl"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
