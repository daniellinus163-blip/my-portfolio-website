"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { useState } from "react";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";

export function ProjectCard(project: PortfolioProject) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="flex h-full flex-col rounded-2xl border border-sky-200/70 bg-white/55 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-300/90 hover:shadow-[0_28px_65px_-30px_rgba(14,165,233,0.55)] dark:border-cyan-400/20 dark:bg-slate-950/45 dark:hover:border-cyan-400/35 dark:hover:shadow-[0_28px_65px_-30px_rgba(34,211,238,0.28)]">
        <span className="inline-flex w-fit rounded-full border border-sky-300/55 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-800 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100">
          {project.category}
        </span>

        <h3 className="mt-4 flex-1 text-xl font-bold tracking-tight text-slate-900 dark:text-white">{project.title}</h3>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:brightness-105 active:brightness-95 sm:w-auto sm:self-start"
        >
          View full project
        </button>
      </article>

      <ProjectDetailModal project={open ? project : null} onClose={() => setOpen(false)} />
    </>
  );
}
