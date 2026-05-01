import type { SkillSpotlight } from "@/data/portfolioData";

export function SkillSpotlightCard({ title, icon, tools, problem, solution, result }: SkillSpotlight) {
  return (
    <article className="glass-card flex h-full flex-col rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/15 text-xl ring-1 ring-sky-400/25 dark:bg-cyan-400/15 dark:ring-cyan-400/25">
          <span aria-hidden>{icon}</span>
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-sky-700 dark:text-cyan-300">
            Tools for this skill
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tools.map((t) => (
              <span
                key={t}
                className="rounded-full border border-sky-300/55 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-sky-900 dark:border-cyan-400/35 dark:bg-slate-900/40 dark:text-cyan-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        <p>
          <span className="font-semibold text-sky-800 dark:text-cyan-200">Problem:</span> {problem}
        </p>
        <p>
          <span className="font-semibold text-sky-800 dark:text-cyan-200">Solution:</span> {solution}
        </p>
        <p>
          <span className="font-semibold text-sky-800 dark:text-cyan-200">Result:</span> {result}
        </p>
      </div>
    </article>
  );
}
