"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Diamond from "./Diamond";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  align?: "left" | "center";
  height?: "short" | "tall" | "full";
  verticalAlign?: "bottom" | "center";
};

function renderTitleLines(title: string) {
  return title.split("\n").map((line, i) => (
    <span key={i} className="block">
      {line}
    </span>
  ));
}

const heightMap = {
  short: "min-h-[380px] lg:min-h-[640px]",
  tall: "min-h-[420px] lg:min-h-[780px]",
  full: "min-h-[60vh] lg:min-h-[88vh]"
};

export default function PageHero({
  label,
  title,
  subtitle,
  image,
  align = "left",
  height = "tall",
  verticalAlign = "bottom"
}: Props) {
  return (
    <section
      className={`relative ${heightMap[height]} flex ${verticalAlign === "center" ? "items-end lg:items-center" : "items-end"} overflow-hidden`}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.75) 50%, rgba(7,63,54,0.55) 100%)"
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,63,54,0.85) 0%, rgba(7,63,54,0.6) 40%, rgba(7,63,54,0.9) 100%)"
        }}
      />

      <div
        className={`relative w-full mx-auto max-w-[1440px] px-6 lg:px-10 pb-20 lg:pb-28 pt-32 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <Diamond size={7} />
          <span className="label-cyan">{label}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 display-uppercase text-shadow-soft leading-[0.95]"
          style={{ fontSize: "clamp(58px, 9vw, 130px)", color: "#FFFFFF" }}
        >
          {renderTitleLines(title)}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.0, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-8 max-w-2xl text-[17px] lg:text-[19px] leading-relaxed ${
              align === "center" ? "mx-auto" : ""
            }`}
            style={{ color: "rgba(241,238,234,0.7)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
