"use client";

import { motion } from "framer-motion";
import PremiumCTA from "./PremiumCTA";

const VIDEO_HD =
  "https://videos.pexels.com/video-files/19120397/19120397-hd_1920_1080_30fps.mp4";
const VIDEO_SD =
  "https://videos.pexels.com/video-files/19120397/19120397-sd_960_540_30fps.mp4";
const POSTER =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=80";

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-100px)] mt-[90px] lg:mt-[100px] flex items-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER}
        aria-hidden
      >
        <source src={VIDEO_HD} type="video/mp4" media="(min-width: 768px)" />
        <source src={VIDEO_SD} type="video/mp4" />
      </video>

      {/* Deep green cinematic overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.78) 50%, rgba(7,63,54,0.6) 100%)"
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,63,54,0.7) 0%, rgba(7,63,54,0.4) 40%, rgba(7,63,54,0.85) 100%)"
        }}
      />

      {/* Content — vertically centered, left-aligned */}
      <div className="relative w-full mx-auto max-w-[1320px] px-6 lg:px-12 py-20 lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] sm:text-[11px] tracking-[0.35em] uppercase font-medium"
          style={{ color: "#00A65A" }}
        >
          UAE &middot; GCC &middot; Compliance, Risk &amp; Business Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-light leading-[1.08] tracking-[-0.015em] text-white max-w-4xl"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          Compliance built to work,
          <br />
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            not just to look right on paper.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <PremiumCTA href="/what-we-do" variant="white">Explore Our Work</PremiumCTA>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="mt-14 flex items-center gap-3"
          aria-hidden
        >
          <span className="block w-8 h-px bg-white/30" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

