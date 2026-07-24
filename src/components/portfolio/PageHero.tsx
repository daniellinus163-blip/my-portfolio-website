"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-3xl px-5 pt-28 text-center md:px-8 md:pt-36"
    >
      <p className="section-label">{eyebrow}</p>
      <h1 className="text-readable mt-4 text-balance text-3xl tracking-tight md:text-4xl lg:text-5xl">{title}</h1>
      <p className="text-muted mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed md:text-base">{description}</p>
    </motion.header>
  );
}
