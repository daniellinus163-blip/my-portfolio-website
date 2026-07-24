"use client";

import { mobileApps, webApps } from "@/data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";
import { MobileAppProjectCard } from "./MobileAppProjectCard";
import { WebAppProjectCard } from "./WebAppProjectCard";

export function ProjectsShowcase() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      <ScrollReveal>
        <section id="web-apps">
          <p className="section-label">01 — Web</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#F8FAFC] md:text-4xl">Web apps</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Live websites and marketplaces in premium browser previews.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {webApps.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.06}>
                <WebAppProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="mobile-apps">
          <p className="section-label">02 — Mobile</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#F8FAFC] md:text-4xl">Mobile apps</h2>
          <p className="mt-2 max-w-xl text-sm text-muted">Phone mockups with polished app UI.</p>
          <div className="mt-8 grid gap-8">
            {mobileApps.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <MobileAppProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
