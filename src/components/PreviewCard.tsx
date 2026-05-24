"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Diamond from "./Diamond";

type Props = {
  number?: string;
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
};

export default function PreviewCard({
  number,
  title,
  description,
  href = "/services",
  icon
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="group relative block h-full p-8 lg:p-10 glass-card rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-brand/60 hover:shadow-glow"
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(120% 120% at 0% 0%, rgba(20, 123, 88,0.08), transparent 60%)"
          }}
        />
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            {icon ? (
              <div className="text-cyan-brand">{icon}</div>
            ) : (
              <Diamond size={9} />
            )}
            {number && (
              <span className="text-[11px] tracking-[0.32em] uppercase text-ink-muted">
                {number}
              </span>
            )}
          </div>
          <h3 className="text-[22px] lg:text-[26px] font-light leading-tight text-ink display-uppercase">
            {title}
          </h3>
          <p className="mt-4 text-ink-muted leading-relaxed text-[15px]">
            {description}
          </p>
          <div className="mt-8 flex items-center gap-3 text-cyan-brand text-[12px] tracking-[0.28em] uppercase transition-transform duration-300 group-hover:translate-x-1">
            Learn more
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
              <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

