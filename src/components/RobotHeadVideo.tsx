"use client";

import { useRef, useState, useEffect } from "react";

export function RobotHeadVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => setIsLoaded(true));
      return () => video.removeEventListener("loadeddata", () => setIsLoaded(true));
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        src="/robot-head-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: isLoaded ? 0.3 : 0,
          transition: "opacity 1s ease-in-out",
          filter: "brightness(0.7) contrast(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/80 via-[#050816]/60 to-[#050816]/90" />
    </div>
  );
}
