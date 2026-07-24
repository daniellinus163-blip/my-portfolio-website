"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { accentGradients } from "@/data/portfolioData";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { BrowserFrame } from "./BrowserFrame";

function isLive(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

type Props = { project: PortfolioProject };

export function WebAppProjectCard({ project }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 22 });
  const liveUrl = (project.liveDemoUrl || project.caseStudyVisitUrl || "").trim();
  const live = isLive(liveUrl);
  let hostname = "preview.local";
  if (live) {
    try {
      hostname = new URL(liveUrl).hostname;
    } catch {
      hostname = "live";
    }
  }

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.article
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(0,229,255,0.2)] bg-[rgba(15,23,42,0.5)] shadow-lg shadow-[rgba(0,229,255,0.1)] backdrop-blur-sm transition-shadow hover:shadow-[0_0_40px_rgba(0,229,255,0.2)]"
    >
      <div className={`bg-gradient-to-r ${accentGradients[project.accent]} p-[1px]`}>
        <div className="rounded-t-[1.4rem] bg-[rgba(15,23,42,0.8)] p-4">
          <BrowserFrame src={project.image} alt={project.title} url={hostname} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[rgba(0,229,255,0.1)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#00E5FF]">
            {project.category}
          </span>
          {project.technologies.slice(0, 2).map((t) => (
            <span key={t} className="rounded-full border border-[rgba(0,229,255,0.2)] bg-[rgba(15,23,42,0.5)] px-2 py-1 text-[10px] font-semibold text-muted">
              {t}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-bold text-[#F8FAFC]">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {live ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center rounded-xl px-4 py-3 text-center text-xs font-semibold text-[#050816]"
            >
              View live website
            </a>
          ) : (
            <span className="text-muted inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-[rgba(15,23,42,0.5)] px-4 py-3 text-center text-xs">
              Live site soon
            </span>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="btn-ghost inline-flex items-center justify-center rounded-xl px-4 py-3 text-center text-xs font-semibold"
          >
            View project
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
