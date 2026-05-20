"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function externalAttrs(href: string) {
  return /^https?:\/\//i.test(href) ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};
}

type Props = { project: PortfolioProject };

export function CaseStudyDetail({ project }: Props) {
  const visitUrl = project.caseStudyVisitUrl?.trim() || project.liveDemoUrl?.trim() || "";
  const hasVisit = /^https?:\/\//i.test(visitUrl);

  return (
    <article className="space-y-8">
      {hasVisit ? (
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-2xl p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Live project</p>
          <p className="mt-3 text-sm text-slate-600">{project.description}</p>
          <a
            href={visitUrl}
            {...externalAttrs(visitUrl)}
            className="btn-primary mt-5 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Open live site
          </a>
        </motion.section>
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl glass-card">
          <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        </div>
      )}

      {(["problem", "solution", "result"] as const).map((key, i) => {
        const label = key.charAt(0).toUpperCase() + key.slice(1);
        const text = project[key];
        return (
          <motion.section
            key={key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.08 }}
            className="glass-card rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-sm font-bold uppercase tracking-wider text-violet-600">{label}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{text}</p>
          </motion.section>
        );
      })}

      <section className="glass-card rounded-2xl p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-violet-600">Tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {hasVisit ? (
            <a
              href={visitUrl}
              {...externalAttrs(visitUrl)}
              className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            >
              Visit live site
            </a>
          ) : null}
          {project.codeUrl?.trim() ? (
            <Link
              href={project.codeUrl}
              className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-950"
            >
              View code
            </Link>
          ) : null}
          <Link href="/projects" className="rounded-full px-5 py-2.5 text-sm font-semibold text-violet-700">
            ← All projects
          </Link>
        </div>
      </section>
    </article>
  );
}
