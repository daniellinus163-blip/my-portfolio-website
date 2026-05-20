"use client";

import { profile } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Link from "next/link";
import { DeviceMockups } from "./DeviceMockups";
import { HeroVideoShowcase } from "./HeroVideoShowcase";
import { MagneticButton } from "./MagneticButton";

const titleWords = ["Full-Stack", "Web", "&", "Mobile", "Developer"];

export function HeroHome() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex rounded-full border border-violet-200 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-700 shadow-sm"
            >
              {profile.name} · {profile.yearsExperience}+ years · {profile.projectsDelivered} projects
            </motion.p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.25rem]">
              <span className="flex flex-wrap gap-x-2 gap-y-1">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={
                      word === "Web" || word === "Mobile" || word === "Developer"
                        ? "gradient-text"
                        : "text-indigo-950"
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
            >
              {profile.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <MagneticButton>
                <Link href="/projects" className="btn-primary inline-flex rounded-full px-7 py-3.5 text-sm font-bold text-white">
                  View projects
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border-2 border-violet-200 bg-white px-7 py-3.5 text-sm font-bold text-indigo-900 shadow-sm transition hover:border-violet-300"
                >
                  Hire me
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="relative space-y-8">
            <HeroVideoShowcase />
            <DeviceMockups />
          </div>
        </div>
      </div>
    </section>
  );
}
