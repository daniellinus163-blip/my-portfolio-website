"use client";

import { mobileApps, webApps } from "@/data/portfolioData";
import { ScrollReveal } from "./ScrollReveal";
import { MobileAppProjectCard } from "./MobileAppProjectCard";
import { WebAppProjectCard } from "./WebAppProjectCard";

export function ProjectsShowcase() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 pb-24">
      <ScrollReveal>
        <section id="web-apps">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">01 — Web</p>
              <h2 className="mt-2 text-3xl font-extrabold text-indigo-950 md:text-4xl">Web apps</h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Live websites, dashboards, and marketplaces—shown in premium browser previews with direct links to production.
              </p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
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
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-500">02 — Mobile</p>
            <h2 className="mt-2 text-3xl font-extrabold text-indigo-950 md:text-4xl">Mobile apps</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              Realistic phone mockups with app UI screens, colorful surfaces, and smooth hover motion.
            </p>
          </div>
          <div className="grid gap-8">
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
