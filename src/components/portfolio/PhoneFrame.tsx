"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export function PhoneFrame({ src, alt }: Props) {
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
            <Image src={src} alt={alt} fill className="object-cover object-top" sizes="240px" />
          </div>
        </div>
      </div>
      <motion.div
        className="absolute -right-6 top-1/4 h-16 w-16 rounded-2xl bg-gradient-to-br from-lime-300/40 to-cyan-300/30 blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
