"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    n: "01",
    title: "Integrity",
    body: "Transparent, accountable advisory in regulated environments.",
    color: "#0077FF"
  },
  {
    n: "02",
    title: "Excellence",
    body: "High-quality work shaped by judgement, discipline and execution.",
    color: "#4A90E2"
  },
  {
    n: "03",
    title: "Practicality",
    body: "Solutions built to operate, not sit on a shelf.",
    color: "#E8B84B"
  },
  {
    n: "04",
    title: "Innovation",
    body: "Fresh thinking applied to complex compliance, risk and business-services challenges.",
    color: "#E8345A"
  },
  {
    n: "05",
    title: "Partnership",
    body: "Working closely with clients to create value that lasts.",
    color: "#147B58"
  }
];

export default function MissionVisionValues() {
  return (
    <>
      {/* Mission & Vision */}
      <section className="relative overflow-hidden py-20 lg:py-28 font-sans" style={{ background: "#073F36" }}>
        <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="block w-10 h-[3px] bg-cyan-brand" />
            <span className="text-[11px] tracking-[0.4em] uppercase" style={{ color: "#90D890" }}>
              Our Purpose
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 leading-[1.05] text-white"
            style={{ fontSize: "clamp(28px, 3.2vw, 48px)" }}
          >
            Mission{" "}
            <span style={{ color: "#90D890" }}>
              &amp; Vision
            </span>
          </motion.h2>

          {/* Two cards */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative p-8 lg:p-10 rounded-2xl"
              style={{ background: "#E0F2E0" }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-7">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                  alt="Mission — teamwork"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span className="block w-8 h-[3px]" style={{ background: "#073F36" }} />
              <p className="mt-3 text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: "#073F36" }}>
                Mission
              </p>
              <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.7]" style={{ color: "#101820" }}>
                To help organisations strengthen governance, manage risk, and
                improve performance through practical advisory and trusted
                execution.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative p-8 lg:p-10 rounded-2xl"
              style={{ background: "#E0F2E0" }}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mb-7">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                  alt="Vision — Dubai skyline"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <span className="block w-8 h-[3px]" style={{ background: "#073F36" }} />
              <p className="mt-3 text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: "#073F36" }}>
                Vision
              </p>
              <p className="mt-5 text-[16px] lg:text-[17px] leading-[1.7]" style={{ color: "#101820" }}>
                To be a trusted advisory partner known for clarity, integrity,
                and meaningful client impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values — Timeline Layout */}
      <section className="relative overflow-hidden py-20 lg:py-28 font-sans" style={{ background: "#FFFFFF" }}>
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="block w-10 h-[3px] bg-cyan-brand" />
            <span className="text-[11px] tracking-[0.4em] uppercase text-ink/85">
              Partnership Principles
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-ink leading-[1.05]"
            style={{ fontSize: "clamp(32px, 3.4vw, 52px)" }}
          >
            Our{" "}
            <span className="text-cyan-brand">Values</span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative max-w-[900px] mx-auto">
            {/* Background line (static, faint) */}
            <span className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-ink/10" />

            {/* Animated growing line */}
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-ink/30 origin-top"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />

            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative grid grid-cols-[1fr_auto_1fr] items-start gap-6 lg:gap-10 cursor-pointer"
                style={{ paddingBottom: i < values.length - 1 ? "3.5rem" : "0" }}
              >
                {/* Left — Title */}
                <div className="flex items-start justify-end pt-1">
                  <h3 className="text-ink text-[22px] sm:text-[28px] lg:text-[34px] font-light leading-[1.2] text-right transition-colors duration-300 group-hover:text-cyan-brand">
                    {v.title}
                  </h3>
                </div>

                {/* Center — Dot */}
                <div className="relative flex flex-col items-center">
                  <motion.span
                    className="relative z-10 block w-[10px] h-[10px] rounded-full bg-cyan-brand/60 border-[1.5px] border-cyan-brand/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-cyan-brand group-hover:border-cyan-brand"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.15 + 0.2,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{ marginTop: "0.5rem" }}
                  />
                </div>

                {/* Right — Description */}
                <div className="pt-1">
                  <p className="text-ink-muted text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.7] max-w-[340px] transition-colors duration-300 group-hover:text-ink">
                    {v.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
