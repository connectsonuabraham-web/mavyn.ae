"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Insight = {
  category: string;
  title: string;
  description: string;
  image: string;
  href?: string;
};

export default function InsightCard({
  insight,
  index = 0
}: {
  insight: Insight;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group h-full"
    >
      <Link
        href={insight.href || `/insights/${insight.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
        className="block h-full rounded-2xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(7,63,54,0.2)]"
        style={{ background: "#90D890", border: "1px solid rgba(7,63,54,0.08)" }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={insight.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,63,54,0.4) 0%, rgba(7,63,54,0.05) 35%, rgba(7,63,54,0.6) 100%)"
            }}
          />
          <div
            className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full card-white"
            style={{ background: "#90D890" }}
          >
            <span className="block w-[6px] h-[6px] rotate-45" style={{ background: "#073F36" }} />
            <span className="text-[10.5px] tracking-[0.24em] uppercase font-medium" style={{ color: "#073F36" }}>
              {insight.category}
            </span>
          </div>
        </div>
        <div className="p-7 lg:p-8">
          <h3 className="text-[20px] lg:text-[22px] font-light leading-snug" style={{ color: "var(--ink)" }}>
            {insight.title}
          </h3>
          <p className="mt-4 leading-relaxed text-[14.5px]" style={{ color: "var(--cyan)" }}>
            {insight.description}
          </p>
          <div
            className="mt-7 flex items-center gap-3 text-[12px] tracking-[0.28em] uppercase transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "var(--cyan)" }}
          >
            Learn more
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
              <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

