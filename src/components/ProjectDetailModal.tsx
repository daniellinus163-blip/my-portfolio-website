"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { useEffect, useState } from "react";

function externalAttrs(href: string) {
  return /^https?:\/\//i.test(href) ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};
}

function isLiveUrl(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

type Props = {
  project: PortfolioProject | null;
  onClose: () => void;
};

const CASE_STEPS = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "result", label: "Result" },
  { key: "visit", label: "Live site" },
] as const;

export function ProjectDetailModal({ project, onClose }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  useEffect(() => {
    setStep(0);
  }, [project?.title]);

  if (!project) return null;

  const visitUrl = project.caseStudyVisitUrl?.trim() || "";
  const isCaseStudy = Boolean(visitUrl);
  const demoReady = isLiveUrl(project.liveDemoUrl);
  const codeHref = project.codeUrl?.trim();

  const stepLabel = CASE_STEPS[step]?.label ?? "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity dark:bg-black/80"
        onClick={onClose}
        aria-label="Close project preview"
      />

      <div className="relative z-10 flex max-h-[min(96vh,1080px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-sky-200/60 bg-white shadow-2xl dark:border-white/15 dark:bg-slate-950">
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-sky-100/90 px-4 py-3 dark:border-white/10 md:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-300">
              {project.category}
            </p>
            <h2 id="project-modal-title" className="truncate text-lg font-bold text-slate-900 dark:text-white md:text-xl">
              {project.title}
            </h2>
            {isCaseStudy ? (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Step {step + 1} of {CASE_STEPS.length}: {stepLabel}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
          {isCaseStudy ? (
            <div className="flex flex-col px-4 pb-6 pt-5 md:px-8 md:pb-8">
              <div className="mb-6 flex gap-1.5" aria-hidden="true">
                {CASE_STEPS.map((s, i) => (
                  <div
                    key={s.key}
                    className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-sky-500 dark:bg-cyan-400" : "bg-slate-200 dark:bg-slate-700"}`}
                  />
                ))}
              </div>

              <div className="min-h-[12rem] flex-1" aria-live="polite">
                {step === 0 ? (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-300">
                      Problem
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:text-[15px]">
                      {project.problem}
                    </p>
                  </div>
                ) : null}
                {step === 1 ? (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-300">
                      Solution
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:text-[15px]">
                      {project.solution}
                    </p>
                  </div>
                ) : null}
                {step === 2 ? (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-300">
                      Result
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200 md:text-[15px]">
                      {project.result}
                    </p>
                  </div>
                ) : null}
                {step === 3 ? (
                  <div className="space-y-5">
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-sky-300/55 bg-sky-500/[0.09] px-3 py-1 text-[11px] font-semibold text-sky-900 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-900/90 md:p-4">
                      <img
                        src={project.image}
                        alt={`Preview: ${project.title}`}
                        className="mx-auto max-h-[min(55vh,560px)] w-full rounded-lg object-contain shadow-md ring-1 ring-black/5 dark:ring-white/10"
                      />
                    </div>
                    <div className="rounded-xl border border-sky-200/80 bg-sky-50/60 p-4 dark:border-cyan-400/25 dark:bg-slate-900/60">
                      <p className="text-xs font-semibold uppercase tracking-wide text-sky-800 dark:text-cyan-200">
                        Visit the live project
                      </p>
                      <p className="mt-1 break-all text-sm text-slate-600 dark:text-slate-300">{visitUrl}</p>
                      <a
                        href={visitUrl}
                        {...externalAttrs(visitUrl)}
                        className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:brightness-105 sm:w-auto"
                      >
                        Open live site
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-sky-100/90 pt-5 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="rounded-xl border border-slate-300/80 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/15 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  Back
                </button>
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.min(3, s + 1))}
                    className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:brightness-105"
                  >
                    Next
                  </button>
                ) : (
                  <span className="text-xs text-slate-500 dark:text-slate-400">Use the button above to open the site.</span>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="bg-slate-100 p-3 dark:bg-slate-900/90 md:p-5">
                <img
                  src={project.image}
                  alt={`Full screenshot: ${project.title}`}
                  className="mx-auto max-h-[min(85vh,920px)] w-full rounded-xl object-contain shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                />
              </div>

              <div className="space-y-5 px-4 pb-6 pt-5 md:px-8 md:pb-8">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>

                <dl className="space-y-3 rounded-xl border border-sky-100/90 bg-sky-50/40 p-4 text-sm dark:border-white/10 dark:bg-slate-900/50">
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
                      Problem
                    </dt>
                    <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
                      Solution
                    </dt>
                    <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{project.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
                      Result
                    </dt>
                    <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{project.result}</dd>
                  </div>
                </dl>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-sky-300/55 bg-sky-500/[0.09] px-3 py-1 text-[11px] font-semibold text-sky-900 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 pt-1 sm:grid-cols-2">
                  {demoReady ? (
                    <a
                      href={project.liveDemoUrl.trim()}
                      {...externalAttrs(project.liveDemoUrl.trim())}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md shadow-sky-500/25 transition hover:brightness-105 active:brightness-95"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span
                      title="Add a deployed URL in portfolioData.ts (liveDemoUrl)."
                      className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-gradient-to-r from-slate-400/55 to-slate-500/55 px-4 py-3 text-center text-sm font-semibold text-white/90 opacity-75 shadow-inner dark:from-slate-700/55 dark:to-slate-800/55"
                    >
                      Live Demo
                    </span>
                  )}
                  {codeHref ? (
                    <a
                      href={codeHref}
                      {...externalAttrs(codeHref)}
                      className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-slate-950/55 dark:text-white dark:hover:bg-slate-900"
                    >
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
