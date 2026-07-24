"use client";

import { heroBackgroundVideo } from "@/data/portfolioData";
import Image from "next/image";
import { useCallback, useState } from "react";

const FALLBACK = "/projects/vibecode-market.png";

type Props = {
  enabled: boolean;
  /** 0 = lighter overlay, 1 = darkest (video most visible through contrast) */
  darkness: number;
};

export function HeroVideoBackdrop({ enabled, darkness }: Props) {
  const [broken, setBroken] = useState(false);
  const onError = useCallback(() => setBroken(true), []);

  const overlay =
    darkness >= 0.5
      ? `rgba(0,0,0,${0.62 + darkness * 0.22})`
      : `rgba(255,255,255,${0.55 - darkness * 0.3})`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-950" aria-hidden>
      {enabled && !broken ? (
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={FALLBACK}
          onError={onError}
        >
          <source src={heroBackgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <Image src={FALLBACK} alt="" fill className="object-cover object-top opacity-40" priority sizes="100vw" />
      )}

      <div className="absolute inset-0 transition-colors duration-500" style={{ backgroundColor: overlay }} />
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          darkness >= 0.5
            ? "bg-gradient-to-b from-black/50 via-black/25 to-black/70"
            : "bg-gradient-to-b from-white/60 via-white/30 to-violet-100/50"
        }`}
      />
    </div>
  );
}
