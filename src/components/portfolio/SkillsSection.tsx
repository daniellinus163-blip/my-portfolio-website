"use client";

import { skillGroups } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label text-center">Expertise</p>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-[#f5f0f0] md:text-4xl">Skills & stack</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#c4b8b8] md:text-base">
            Modern tooling across web, mobile, and design—chosen for speed, polish, and maintainability.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card h-full rounded-3xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(185,28,60,0.2)]"
              >
                <h3 className="text-lg font-bold text-[#f5f0f0]">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[#b91c3c]/30 bg-[#b91c3c]/10 px-3 py-1.5 text-xs font-semibold text-[#e8a0a8]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
