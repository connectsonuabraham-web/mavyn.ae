"use client";

import { motion } from "framer-motion";
import Diamond from "./Diamond";

export default function SectionLabel({
  children,
  align = "left"
}: {
  children: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <Diamond size={7} />
      <span className="label-cyan">{children}</span>
      <span className="h-px w-10 bg-gradient-to-r from-cyan-brand/60 to-transparent" />
    </motion.div>
  );
}

