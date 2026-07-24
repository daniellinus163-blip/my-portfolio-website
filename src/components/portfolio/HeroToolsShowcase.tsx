"use client";

import { heroToolSlides } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROTATE_MS = 5000;

const slideGradients = [
  "from-violet-600/90 via-fuchsia-500/80 to-indigo-600/90",
  "from-lime-500/90 via-emerald-500/80 to-teal-600/90",
  "from-sky-500/90 via-cyan-500/80 to-blue-600/90",
] as const;

type Props = { darkHero?: boolean };

export function HeroToolsShowcase({ darkHero = true }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroToolSlides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroToolSlides[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.6 }}
      className="relative mx-auto w-full max-w-lg"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -12 }}
          transition={{ duration: 0.5 }}
          className={`overflow-hidden rounded-3xl border p-5 shadow-2xl backdrop-blur-md ${
            darkHero
              ? "border-white/20 bg-white/10"
              : "border-violet-200/60 bg-white/90"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slideGradients[index % slideGradients.length]} opacity-30`}
          />
          <div className="relative">
            <p
              className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                darkHero ? "text-violet-200" : "text-violet-600"
              }`}
            >
              Full-stack · 15s showcase
            </p>
            <h3 className={`mt-1 text-lg font-bold ${darkHero ? "text-white" : "text-indigo-950"}`}>
              {slide.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {slide.tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold shadow-lg ${
                    darkHero
                      ? "border border-white/25 bg-white/15 text-white"
                      : "border border-violet-100 bg-white text-indigo-900"
                  }`}
                >
                  <span className="text-base" aria-hidden>
                    {slide.icons[i] ?? "⚡"}
                  </span>
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-3 flex justify-center gap-1.5">
        {heroToolSlides.map((s, i) => (
          <span
            key={s.id}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-violet-400" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>

      <motion.div
        className="pointer-events-none absolute -right-4 -top-6 h-20 w-20 rounded-2xl bg-cyan-400/30 blur-2xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-4 -left-6 h-24 w-24 rounded-full bg-fuchsia-400/25 blur-2xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </motion.div>
  );
}
