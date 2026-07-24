"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { accentGradients } from "@/data/portfolioData";
import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneGallery } from "./PhoneGallery";

function isLive(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

function isExpoLink(url: string) {
  return /expo\.dev/i.test(url.trim());
}

type Props = { project: PortfolioProject };

export function MobileAppProjectCard({ project }: Props) {
  const live = isLive(project.liveDemoUrl || project.caseStudyVisitUrl || "");
  const expoLink = isExpoLink(project.liveDemoUrl || project.caseStudyVisitUrl || "");
  const projectUrl = (project.liveDemoUrl || project.caseStudyVisitUrl)!.trim();

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="glass-card overflow-hidden rounded-2xl p-6 transition-shadow hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]"
    >
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <PhoneGallery images={project.gallery.length ? project.gallery : [project.image]} alt={project.title} />
        <div className="flex flex-col">
          <span
            className={`inline-flex w-fit rounded-full bg-gradient-to-r ${accentGradients[project.accent]} px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
          >
            {project.category}
          </span>
          <h3 className="mt-3 text-xl font-bold text-[#F8FAFC]">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] px-2.5 py-1 text-[10px] font-bold text-[#00E5FF]">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {live ? (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex rounded-xl px-4 py-2.5 text-xs font-bold text-white"
              >
                {expoLink ? "Download APK" : "View live demo"}
              </a>
            ) : null}
            <Link
              href={`/projects/${project.slug}`}
              className="btn-ghost inline-flex rounded-xl px-4 py-2.5 text-xs font-bold"
            >
              View project
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
