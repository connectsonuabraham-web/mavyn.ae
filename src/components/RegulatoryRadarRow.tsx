"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export type RadarRow = {
  index: string;
  title: string;
  line1: string;
  line2: string;
  image: string;
  icon: React.ReactNode;
};

export default function RegulatoryRadarRow({
  row,
  i
}: {
  row: RadarRow;
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-[60px_1fr] md:grid-cols-[110px_auto_1fr_360px] items-stretch min-h-[100px] md:min-h-[120px] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-0.5 transition-all duration-500 card-white"
      style={{ background: "#073F36", border: "1px solid rgba(22,214,163,0.12)" }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center border-r" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <div
          className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] rounded-xl flex items-center justify-center [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-[2.5]"
          style={{ background: "#90D890", color: "#073F36" }}
        >
          {row.icon}
        </div>
      </div>

      {/* Index — desktop only */}
      <div className="hidden md:flex items-center px-6 border-r" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <span className="text-[11px] tracking-[0.32em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
          {row.index}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center px-4 md:px-6 lg:px-8 py-4 md:py-5">
        <h3 className="text-[15px] md:text-[18px] lg:text-[22px] font-medium text-white">
          {row.title}
        </h3>
        <p className="text-[12px] md:text-[13.5px] lg:text-[14.5px] leading-relaxed mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
          {row.line1}
        </p>
        <p className="text-[11.5px] md:text-[13px] lg:text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          {row.line2}
        </p>
      </div>

      {/* Image strip — hidden on mobile */}
      <div className="relative overflow-hidden hidden md:block">
        <Image
          src={row.image}
          alt=""
          fill
          sizes="360px"
          className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,63,54,1) 0%, rgba(7,63,54,0.5) 45%, rgba(7,63,54,0.15) 100%)"
          }}
        />
      </div>
    </motion.div>
  );
}

