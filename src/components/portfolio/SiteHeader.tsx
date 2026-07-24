"use client";

import { VDLogo } from "@/components/brand/VDLogo";
import { navLinks } from "@/data/portfolioData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[rgba(0,229,255,0.15)] bg-[rgba(15,23,42,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <VDLogo size={36} priority />
          <span className="text-sm font-bold tracking-tight text-[#F8FAFC]">VIBECODE DAN</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  active ? "text-[#00E5FF]" : "text-[#94A3B8] hover:text-[#00E5FF]"
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgba(0,229,255,0.1)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <Link href="/contact" className="btn-primary hidden rounded-full px-4 py-2 text-xs font-semibold text-[#050816] md:inline-flex">
          Hire me
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-[rgba(0,229,255,0.1)] px-3 py-2 md:hidden">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide ${
              pathname === item.href ? "bg-[rgba(0,229,255,0.1)] text-[#00E5FF]" : "text-[#94A3B8]"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
