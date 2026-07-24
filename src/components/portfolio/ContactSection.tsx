"use client";

import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing bg-[#1c1919] px-5 pb-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label text-center">Get in touch</p>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-[#f5f0f0] md:text-4xl">Contact me</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-[#c4b8b8]">
            Tell me what you want to build—I&apos;ll reply with a clear plan and timeline.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ScrollReveal>
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <ContactForm />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col justify-center space-y-6">
              <div className="glass-card-light rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#e8a0a8]">Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="mt-2 block text-lg font-semibold text-[#f5f0f0] transition hover:text-[#e8a0a8]"
                >
                  {profile.email}
                </a>
              </div>
              <p className="text-sm leading-relaxed text-[#c4b8b8]">
                Available for freelance, contract, and long-term product work. Fast replies and transparent delivery.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
