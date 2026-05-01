import { ThemeToggle } from "@/components/ThemeToggle";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skill-spotlight", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-sky-200/50 bg-white/55 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/55">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-12">
        <a href="#home" className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
          i<span className="text-sky-600 dark:text-cyan-300">.</span>fullstack
        </a>
        <nav className="hidden flex-1 justify-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-600 md:flex dark:text-slate-300">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-sky-700 dark:hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
