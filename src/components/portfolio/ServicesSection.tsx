"use client";

import { services } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-[#1c1919] px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label text-center">What I do</p>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-[#f5f0f0] md:text-4xl">Services</h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card group rounded-3xl p-8 text-center transition-shadow hover:shadow-[0_0_48px_rgba(185,28,60,0.25)]"
              >
                <span className="text-4xl" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#f5f0f0]">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#c4b8b8]">{service.description}</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
