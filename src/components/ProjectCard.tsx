type ProjectCardProps = {
  category: string;
  caption: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  actionLabel: string;
  actionLink: string;
};

export function ProjectCard({
  category,
  caption,
  title,
  description,
  technologies,
  image,
  actionLabel,
  actionLink,
}: ProjectCardProps) {
  return (
    <article className="glass-card overflow-hidden rounded-2xl">
      <img src={image} alt={title} className="h-52 w-full object-cover object-center md:h-56" />
      <div className="border-b border-sky-100/80 px-5 pb-4 pt-4 dark:border-white/10">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-700 dark:text-cyan-300">
          {category}
        </p>
        <p className="mt-2 text-sm leading-snug text-slate-600 dark:text-slate-300">{caption}</p>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sky-300/60 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-800 dark:border-cyan-400/35 dark:bg-cyan-400/10 dark:text-cyan-100"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={actionLink}
          className="mt-6 inline-flex rounded-full border border-blue-500/40 bg-white/60 px-4 py-2 text-sm font-medium text-blue-800 transition hover:bg-sky-100/80 dark:border-cyan-400/40 dark:bg-slate-900/50 dark:text-cyan-100 dark:hover:bg-slate-900"
        >
          {actionLabel}
        </a>
      </div>
    </article>
  );
}
