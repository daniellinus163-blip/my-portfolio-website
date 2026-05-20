"use client";

import { navLinks } from "@/data/portfolioData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-violet-200/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="text-sm font-bold tracking-tight text-indigo-950">
          dev<span className="gradient-text">folio</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  active ? "text-violet-700" : "text-slate-600 hover:text-violet-600"
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-violet-100"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="btn-primary rounded-full px-4 py-2 text-xs font-semibold text-white transition"
        >
          Hire me
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-violet-100/80 px-3 py-2 md:hidden">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide ${
              pathname === item.href ? "bg-violet-100 text-violet-700" : "text-slate-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
