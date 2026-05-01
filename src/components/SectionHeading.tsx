type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
