import type { PortfolioProject } from "@/data/portfolioData";

function externalAttrs(href: string) {
  return /^https?:\/\//i.test(href) ? ({ target: "_blank", rel: "noopener noreferrer" } as const) : {};
}

function isLiveUrl(url: string) {
  return /^https?:\/\//i.test(url.trim());
}

export function ProjectCard({
  category,
  title,
  description,
  problem,
  solution,
  result,
  technologies,
  image,
  liveDemoUrl,
  codeUrl,
}: PortfolioProject) {
  const demoReady = isLiveUrl(liveDemoUrl);

  const imageInner = (
    <>
      <img
        src={image}
        alt={`Screenshot of ${title}`}
        className="h-full w-full object-cover object-center transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/78 via-slate-950/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-black/20 ring-1 ring-black/5 backdrop-blur-sm dark:bg-slate-950/90 dark:text-white dark:ring-white/10">
          View Project
        </span>
      </div>
    </>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sky-200/70 bg-white/55 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:border-sky-300/90 hover:shadow-[0_28px_65px_-30px_rgba(14,165,233,0.55)] dark:border-cyan-400/20 dark:bg-slate-950/45 dark:hover:border-cyan-400/35 dark:hover:shadow-[0_28px_65px_-30px_rgba(34,211,238,0.28)]">
      {demoReady ? (
        <a
          href={liveDemoUrl.trim()}
          {...externalAttrs(liveDemoUrl.trim())}
          className="relative isolate block aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900"
          aria-label={`Open live demo: ${title}`}
        >
          {imageInner}
        </a>
      ) : (
        <div className="relative isolate aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          {imageInner}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full border border-sky-300/55 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-800 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100">
            {category}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>

        <dl className="mt-5 space-y-3 rounded-xl border border-sky-100/90 bg-white/60 p-4 text-sm dark:border-white/10 dark:bg-slate-950/35">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
              Problem
            </dt>
            <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{problem}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
              Solution
            </dt>
            <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{solution}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-cyan-300">
              Result
            </dt>
            <dd className="mt-1 leading-relaxed text-slate-700 dark:text-slate-200">{result}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sky-300/55 bg-sky-500/[0.09] px-3 py-1 text-[11px] font-semibold text-sky-900 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 grid gap-3 sm:grid-cols-2">
          {demoReady ? (
            <a
              href={liveDemoUrl.trim()}
              {...externalAttrs(liveDemoUrl.trim())}
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
          <a
            href={codeUrl.trim()}
            {...externalAttrs(codeUrl.trim())}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-center text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white dark:border-white/15 dark:bg-slate-950/35 dark:text-white dark:hover:bg-slate-950/55"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
