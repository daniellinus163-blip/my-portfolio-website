"use client";

import { heroVideoClips } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROTATE_MS = 15000;

export function HeroVideoShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroVideoClips.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const clip = heroVideoClips[index];

  return (
    <div className="relative">
      <motion.div
        className="glass-card overflow-hidden rounded-3xl p-2 shadow-2xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-violet-100/80 to-cyan-100/80 px-4 py-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-700">Live preview</span>
          <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-indigo-900">
            {clip.label}
          </span>
        </div>
        <div className="relative mt-2 aspect-video overflow-hidden rounded-2xl bg-indigo-950/5">
          <AnimatePresence mode="wait">
            <motion.video
              key={clip.src}
              src={clip.src}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
        </div>
        <div className="mt-2 flex gap-1.5 px-1">
          {heroVideoClips.map((c, i) => (
            <button
              key={`${c.src}-${i}`}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 flex-1 rounded-full transition ${i === index ? "bg-violet-500" : "bg-violet-200"}`}
              aria-label={`Show clip ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-6 top-1/4 hidden rounded-2xl border border-white/80 bg-white/90 p-2 shadow-xl md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-bold text-violet-600">Mobile UI</p>
        <div className="mt-1 h-20 w-28 rounded-lg bg-gradient-to-br from-lime-100 to-cyan-100" />
      </motion.div>

      <motion.div
        className="absolute -right-4 bottom-8 hidden rounded-2xl border border-white/80 bg-white/90 p-3 shadow-xl lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-[10px] font-bold text-coral-500">Dashboard</p>
        <div className="mt-2 flex gap-1">
          {[40, 70, 55, 90].map((h, i) => (
            <div key={i} className="w-3 rounded-t bg-gradient-to-t from-violet-500 to-sky-400" style={{ height: h / 4 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
