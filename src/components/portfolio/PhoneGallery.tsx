"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
};

export function PhoneGallery({ images, alt }: Props) {
  const slides = images.length > 0 ? images : ["/projects/vibecode-market.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <motion.div
      className="relative mx-auto w-[220px] sm:w-[240px]"
      whileHover={{ y: -8, rotate: -1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="rounded-[2.25rem] border-[8px] border-indigo-950 bg-indigo-950 p-1.5 shadow-[0_24px_60px_-20px_rgba(79,70,229,0.55)]">
        <div className="relative overflow-hidden rounded-[1.65rem] bg-white">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-indigo-950/90" />
          <div className="relative aspect-[9/19] pt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index]}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 pt-6"
              >
                <Image src={slides[index]} alt={alt} fill className="object-cover object-top" sizes="240px" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {slides.length > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-violet-500" : "w-1.5 bg-violet-200"}`}
              aria-label={`Screen ${i + 1}`}
            />
          ))}
        </div>
      ) : null}
      <motion.div
        className="absolute -right-6 top-1/4 h-16 w-16 rounded-2xl bg-gradient-to-br from-lime-300/40 to-cyan-300/30 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
