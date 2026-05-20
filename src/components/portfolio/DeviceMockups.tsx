"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DeviceMockups() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <motion.div
        className="glass-card relative z-10 overflow-hidden rounded-2xl p-3 shadow-2xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ y: -6 }}
      >
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
        </div>
        <div className="overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold text-indigo-900">Product dashboard</p>
            <span className="rounded-full bg-lime-200 px-2 py-0.5 text-[10px] font-semibold text-lime-800">Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Revenue", "Users", "Orders"].map((label, i) => (
              <div key={label} className="rounded-lg bg-white/80 p-2 shadow-sm">
                <p className="text-[9px] text-slate-500">{label}</p>
                <p className="text-sm font-bold text-indigo-900">{["$12.4k", "3.2k", "842"][i]}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-24 items-end gap-1 rounded-lg bg-white/70 p-2">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-violet-500 to-sky-400"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-4 z-20 w-[38%] max-w-[160px] sm:-left-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        whileHover={{ scale: 1.04, rotate: -2 }}
      >
        <div className="rounded-[1.75rem] border-[6px] border-indigo-950/90 bg-indigo-950 p-1 shadow-2xl">
          <div className="overflow-hidden rounded-[1.25rem] bg-white">
            <div className="h-5 bg-gradient-to-r from-violet-500 to-sky-400" />
            <div className="space-y-2 p-2">
              <div className="h-2 w-2/3 rounded bg-slate-200" />
              <div className="h-16 rounded-lg bg-gradient-to-br from-rose-100 to-violet-100" />
              <div className="flex gap-1">
                <div className="h-6 flex-1 rounded bg-lime-100" />
                <div className="h-6 flex-1 rounded bg-sky-100" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-8 z-0 hidden w-[42%] max-w-[200px] sm:block lg:-right-10"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
      >
        <div className="glass-card rotate-3 overflow-hidden rounded-2xl p-1.5">
          <Image src="/projects/p1-web-app.png" alt="" width={400} height={240} className="rounded-xl object-cover" />
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-4 right-8 z-0 hidden rounded-2xl border border-white/80 bg-white/90 p-2 shadow-lg md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image src="/projects/p4-shopify-3d.png" alt="" width={120} height={80} className="rounded-lg object-cover" />
      </motion.div>
    </div>
  );
}
