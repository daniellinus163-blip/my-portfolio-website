"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-card inline-flex items-center gap-2 rounded-full border px-2 py-1.5 shadow-md transition hover:scale-[1.02] dark:border-cyan-400/25"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Brand monogram — edit the letter in data or here if you use a different mark */}
      <span
        className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-sm font-bold text-white shadow-inner"
        aria-hidden
      >
        i
      </span>
      <span className="hidden pr-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 sm:inline">
        {isDark ? "Dark" : "Light"}
      </span>
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/55 text-lg dark:bg-slate-900/60" aria-hidden>
        {isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
