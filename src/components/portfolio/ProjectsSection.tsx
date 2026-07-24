"use client";

import { ProjectsShowcase } from "./ProjectsShowcase";
import { ScrollReveal } from "./ScrollReveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="section-label text-center">Portfolio</p>
          <h2 className="mt-3 text-center text-3xl font-extrabold text-[#f5f0f0] md:text-4xl">Projects</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#c4b8b8]">
            Live web apps and mobile experiences—open a case study or visit production.
          </p>
        </ScrollReveal>
        <div className="mt-12">
          <ProjectsShowcase />
        </div>
      </div>
    </section>
  );
}
