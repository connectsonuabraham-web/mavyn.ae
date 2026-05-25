"use client";

import { motion } from "framer-motion";

const practices = [
  {
    title: "Data & Analytics",
    body: "Risk MI, regulatory dashboards, customer segmentation and decision-grade reporting.",
    color: "#0077FF"
  },
  {
    title: "Digital Transformation",
    body: "Operating-model design, channel and platform change for regulated firms.",
    color: "#147B58"
  },
  {
    title: "Finance Transformation",
    body: "Close, controls, FP&A redesign and finance-process automation.",
    color: "#E8B84B"
  },
  {
    title: "Operations",
    body: "Process re-engineering, BPO transition support and back-office optimisation.",
    color: "#E8345A"
  }
];

export default function TransformationPractices() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 section-white">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-light text-ink leading-[1.05]"
          style={{ fontSize: "clamp(34px, 4.6vw, 64px)" }}
        >
          Transformation{" "}
          <span className="text-cyan-brand">Practices</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-ink-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-2xl"
        >
          Where business services meet engineering — operating-model change,
          automation and analytics.
        </motion.p>

        <div className="mt-12 flex flex-col gap-4">
          {practices.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative flex items-stretch rounded-2xl border border-white/10 bg-bg/60 backdrop-blur-md overflow-hidden cursor-pointer hover:border-cyan-brand/40 hover:shadow-[0_8px_30px_-8px_rgba(20, 123, 88,0.12)] hover:translate-x-1 transition-all duration-400 card-white"
            >
              {/* Left color bar */}
              <span
                className="block w-[5px] shrink-0"
                style={{ background: p.color }}
              />

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 px-6 lg:px-8 py-5 lg:py-6 flex-1">
                <h3
                  className="text-ink font-semibold text-[17px] lg:text-[19px] min-w-[240px]"
                >
                  {p.title}
                </h3>
                <p className="text-ink-muted text-[14px] lg:text-[15px] leading-[1.6]">
                  {p.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

