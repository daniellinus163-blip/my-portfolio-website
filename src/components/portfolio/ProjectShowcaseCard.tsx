"use client";

import type { PortfolioProject } from "@/data/portfolioData";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  project: PortfolioProject;
  showVideo?: boolean;
};

export function ProjectShowcaseCard({ project, showVideo = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 24 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hasVideo = showVideo && Boolean(project.videoUrl);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl glass-card">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-50 to-sky-50">
          {hasVideo ? (
            <video
              src={project.videoUrl}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-900 opacity-0 shadow transition group-hover:opacity-100">
            View case study →
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600">{project.category}</span>
          <h3 className="mt-2 text-lg font-bold text-indigo-950">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
