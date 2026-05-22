"use client";

import { motion } from "framer-motion";
import Diamond from "./Diamond";

type Props = {
  number: string;
  title: string;
  bullets: string[];
  icon?: React.ReactNode;
  index?: number;
};

export default function ServiceCard({
  number,
  title,
  bullets,
  icon,
  index = 0
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative h-full p-8 lg:p-10 glass-card rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-cyan-brand/55 hover:shadow-glow transition-all duration-500"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, rgba(20, 123, 88,0.08), transparent 60%)"
        }}
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          {icon ? (
            <div className="text-cyan-brand">{icon}</div>
          ) : (
            <Diamond size={9} />
          )}
          <span className="text-[11px] tracking-[0.32em] uppercase text-ink-muted">
            {number}
          </span>
        </div>
        <h3 className="mt-9 font-light text-ink text-[22px] lg:text-[26px] leading-tight">
          {title}
        </h3>
        <div className="mt-5 mb-2 h-px w-10 bg-cyan-brand/60" />
        <ul className="mt-5 space-y-2.5">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[14px] text-ink-muted leading-relaxed"
            >
              <span className="block w-[6px] h-[6px] rotate-45 bg-cyan-brand/60 mt-2 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
