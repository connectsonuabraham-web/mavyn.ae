"use client";

import { motion } from "framer-motion";

export default function ClientQuote() {
  return (
    <section className="relative py-24 lg:py-32" style={{ background: "#04110A" }}>
      <div className="relative mx-auto max-w-[900px] px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "center", background: "#16D6A3", height: "1px" }}
          className="w-16 mx-auto mb-12"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-light leading-[1.22] tracking-[-0.005em] text-white"
          style={{ fontSize: "clamp(22px, 3vw, 44px)" }}
        >
          &ldquo;Mavyn helped us turn regulatory{" "}
          <span style={{ color: "#16D6A3" }}>pressure</span> into a clear
          operating roadmap.&rdquo;
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <div
            className="h-px w-12"
            style={{ background: "rgba(22,214,163,0.4)" }}
          />
          <span
            className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.32em] uppercase text-center"
            style={{ color: "rgba(241,238,234,0.5)" }}
          >
            Client Director · UAE Financial Services Group
          </span>
        </motion.div>
      </div>
    </section>
  );
}

