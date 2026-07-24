"use client";

import { RobotHeadAnimation } from "@/components/RobotHeadAnimation";
import { MagneticButton } from "@/components/portfolio/MagneticButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export function HeroHome() {
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 3000);
    const buttonsTimer = setTimeout(() => setShowButtons(true), 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(buttonsTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <RobotHeadAnimation />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,8,22,0.2)_45%,rgba(5,8,22,0.92)_88%)]" />

      {/* VD Logo and text centered in hero with lightning effects */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 text-center md:px-8 flex flex-col items-center justify-center">
        {/* VD Logo */}
        <div className="relative mb-8">
          <img
            src="/vd-logo.png"
            alt="VD Logo"
            className="h-48 w-48 md:h-64 md:w-64 object-contain opacity-80"
            style={{
              filter: "drop-shadow(0 0 30px rgba(0, 229, 255, 0.6)) drop-shadow(0 0 60px rgba(124, 58, 237, 0.4))",
              animation: "lightningFlash 3s infinite",
            }}
          />
          {/* Lightning bolts - golden red */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning1" />
            <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[#FF4500] to-transparent opacity-0 animate-lightning2" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 animate-lightning3" />
          </div>
        </div>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5 md:space-y-6"
          >
            <motion.h1
              className="text-readable text-5xl tracking-tight md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.02em" }}
              transition={{ duration: 1.2 }}
            >
              Welcome to Vibecode Dan Portfolio
            </motion.h1>

            {showButtons && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="pointer-events-auto mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10"
              >
                <MagneticButton>
                  <Link href="/projects" className="btn-primary glow-cyan inline-flex rounded-full px-8 py-4 text-sm">
                    View Projects
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/contact" className="btn-ghost inline-flex rounded-full px-8 py-4 text-sm">
                    Contact Me
                  </Link>
                </MagneticButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
