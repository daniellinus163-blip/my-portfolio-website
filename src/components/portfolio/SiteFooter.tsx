import Link from "next/link";
import { navLinks } from "@/data/portfolioData";

export function SiteFooter() {
  return (
    <footer className="border-t border-violet-200/50 bg-white/60 px-5 py-10 backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} Frontend &amp; Mobile Developer Portfolio
        </p>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-violet-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
