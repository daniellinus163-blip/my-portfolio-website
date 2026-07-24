"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { accentGradients } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";
import { ScrollReveal } from "./ScrollReveal";

function isLive(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

function liveHost(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return "live";
  }
}

type Props = { project: PortfolioProject };

export function ProjectDetailPremium({ project }: Props) {
  const visit = (project.caseStudyVisitUrl || project.liveDemoUrl || "").trim();
  const hasLive = isLive(visit);
  const isMobile = project.type === "mobile";

  return (
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${accentGradients[project.accent]} p-[2px] shadow-2xl`}
      >
        <div className="rounded-[1.4rem] bg-white/95 p-6 md:p-10">
          <p className="section-label">{project.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#F8FAFC] md:text-4xl">{project.title}</h1>
          <p className="mt-4 max-w-2xl text-muted">{project.overview}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {hasLive ? (
              <a
                href={visit}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-sm font-bold text-white"
              >
                Live demo
              </a>
            ) : null}
            {project.codeUrl?.trim() ? (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-full px-6 py-3 text-sm font-bold text-[#F8FAFC]"
              >
                GitHub
              </a>
            ) : null}
          </div>
          <div className="mt-8">
            {isMobile ? (
              <div className="flex justify-center">
                <PhoneFrame src={project.image} alt={project.title} />
              </div>
            ) : (
              <BrowserFrame src={project.image} alt={project.title} url={hasLive ? liveHost(visit) : "preview"} />
            )}
          </div>
        </div>
      </motion.section>

      {project.videoUrl ? (
        <ScrollReveal>
          <section className="glass-card rounded-3xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-[#F8FAFC]">App in motion</h2>
            <p className="mt-1 text-sm text-muted">Looping preview — muted autoplay.</p>
            <div className="relative mt-4 aspect-video overflow-hidden rounded-2xl">
              <video src={project.videoUrl} className="h-full w-full object-cover" autoPlay muted loop playsInline />
            </div>
          </section>
        </ScrollReveal>
      ) : null}

      <ScrollReveal>
        <section className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#F8FAFC]">Overview</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{project.description}</p>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#F8FAFC]">Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 rounded-xl border border-[rgba(0,229,255,0.15)] bg-[rgba(0,229,255,0.06)] px-4 py-3 text-sm text-muted"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                {f}
              </li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: "Problem", text: project.problem },
          { label: "Solution", text: project.solution },
          { label: "Result", text: project.result },
        ].map((block, i) => (
          <ScrollReveal key={block.label} delay={i * 0.05}>
            <div className="glass-card h-full rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#00E5FF]">{block.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{block.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <section className="glass-card rounded-3xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-[#F8FAFC]">Technology stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] px-4 py-2 text-sm font-bold text-[#00E5FF] shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section>
          <h2 className="text-lg font-bold text-[#F8FAFC]">Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((src, i) => (
              <motion.div
                key={`${src}-${i}`}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video overflow-hidden rounded-2xl border border-violet-100 shadow-md"
              >
                <Image src={src} alt="" fill className="object-cover object-top" sizes="50vw" />
              </motion.div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <div className="flex flex-wrap gap-3 border-t border-violet-100 pt-8">
        <Link href="/#projects" className="text-sm font-bold text-[#00E5FF] hover:text-[#F8FAFC]">
          ← All projects
        </Link>
      </div>
    </div>
  );
}
