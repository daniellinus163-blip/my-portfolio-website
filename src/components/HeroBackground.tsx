"use client";

import { useCallback, useState } from "react";

const HERO_VIDEO_SRC = "/videos/ai-coding-bg.mp4";

/** Fallback still image when video cannot load (local asset). */
const HERO_FALLBACK_SRC = "/projects/p6-automation.png";

/**
 * Hero backdrop: `/videos/ai-coding-bg.mp4` on md+ (muted, loop, cover).
 * Small screens use the still image only (lighter). Dark overlay keeps typography readable.
 */
export function HeroBackground() {
  const [videoBroken, setVideoBroken] = useState(false);

  const onVideoError = useCallback(() => {
    setVideoBroken(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black" aria-hidden>
      {/* Mobile: image only */}
      <img
        src={HERO_FALLBACK_SRC}
        alt=""
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-center md:hidden"
      />

      {/* Tablet / desktop: video (autoplay + loop + muted + cover) */}
      {!videoBroken ? (
        <video
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_FALLBACK_SRC}
          onError={onVideoError}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <img
          src={HERO_FALLBACK_SRC}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
        />
      )}

      <div className="absolute inset-0 bg-black/58" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65" />
    </div>
  );
}
