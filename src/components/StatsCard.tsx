"use client";

import { motion } from "framer-motion";
import Diamond from "./Diamond";

export default function StatsCard({
  number,
  label,
  index = 0
}: {
  number: string;
  label: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative glass-card rounded-2xl p-8 lg:p-10 hover:border-cyan-brand/55 hover:shadow-glow transition-all duration-500"
    >
      <Diamond size={6} />
      <div
        className="mt-6 display-font-light text-ink"
        style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1 }}
      >
        {number}
      </div>
      <div className="mt-4 text-ink-muted text-[13px] tracking-[0.18em] uppercase">
        {label}
      </div>
    </motion.div>
  );
}
