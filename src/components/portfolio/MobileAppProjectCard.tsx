"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { accentGradients } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneGallery } from "./PhoneGallery";

function isLive(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

type Props = { project: PortfolioProject };

export function MobileAppProjectCard({ project }: Props) {
  const live = isLive(project.liveDemoUrl || project.caseStudyVisitUrl || "");

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-3xl border border-violet-200/50 bg-gradient-to-br from-white via-violet-50/30 to-cyan-50/40 p-6 shadow-lg shadow-violet-500/10"
    >
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <PhoneGallery images={project.gallery.length ? project.gallery : [project.image]} alt={project.title} />
        <div className="flex flex-col">
          <span
            className={`inline-flex w-fit rounded-full bg-gradient-to-r ${accentGradients[project.accent]} px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
          >
            {project.category}
          </span>
          <h3 className="mt-3 text-xl font-bold text-indigo-950">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-violet-200 bg-white/80 px-2.5 py-1 text-[10px] font-semibold text-violet-800">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {live ? (
              <a
                href={(project.liveDemoUrl || project.caseStudyVisitUrl)!.trim()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-xl bg-gradient-to-r from-lime-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-white shadow-md"
              >
                View live demo
              </a>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex rounded-xl border-2 border-violet-200 bg-white px-4 py-2.5 text-xs font-bold text-violet-700"
            >
              View project
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
