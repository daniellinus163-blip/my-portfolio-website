type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-2xl ring-1 ring-sky-400/25 dark:bg-cyan-400/15 dark:ring-cyan-400/25">
        <span aria-hidden>{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 group-hover:w-full" />
    </article>
  );
}
