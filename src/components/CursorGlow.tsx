"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.body.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9998] hidden md:block"
      animate={{ x: pos.x - 160, y: pos.y - 160 }}
      transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.4 }}
      aria-hidden
    >
      <div
        className="h-80 w-80 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(124,58,237,0.08) 35%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
