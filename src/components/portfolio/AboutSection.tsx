"use client";

import { profile } from "@/data/portfolioData";
import Image from "next/image";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing bg-[#E0F7FA] px-5 md:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <ScrollReveal>
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#00BCD4]/40 to-[#03A9F4]/20 blur-2xl" />
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name} — professional portrait`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <p className="section-label">About me</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#f5f0f0] md:text-4xl">
              Building products with clarity & craft
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#c4b8b8] md:text-base">
              <p>
                I am <strong className="text-[#f5f0f0]">Daniel</strong>, a <strong className="text-[#f5f0f0]">full-stack web and mobile developer</strong> with{" "}
                <strong className="text-[#e8a0a8]">{profile.yearsExperience}+ years</strong> shipping real products for
                clients across the US, Europe, and the UK.
              </p>
              <p>
                Much of my work comes through <strong className="text-[#f5f0f0]">Fiverr</strong> and direct engagements—
                marketplaces, configurators, mobile storefronts, and launch experiences delivered on deadline.
              </p>
              <p>
                I have completed <strong className="text-[#e8a0a8]">{profile.projectsDelivered} projects</strong>,
                focused on measurable outcomes: faster releases, cleaner UX, and interfaces people trust.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { label: "Experience", value: `${profile.yearsExperience}+ yrs` },
                { label: "Projects", value: profile.projectsDelivered },
                { label: "Clients", value: profile.marketplaces },
              ].map((stat) => (
                <div key={stat.label} className="glass-card-light rounded-2xl p-4 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#e8a0a8]">{stat.label}</p>
                  <p className="mt-1 text-sm font-bold text-[#f5f0f0]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
