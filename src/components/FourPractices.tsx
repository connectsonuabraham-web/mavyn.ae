"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import PremiumCTA from "./PremiumCTA";
import {
  BuildingIcon,
  ShieldIcon,
  FileCheckIcon,
  LockIcon
} from "./ServiceIcons";

type Practice = {
  n: string;
  title: string;
  body: string;
  tags: string[];
  icon: React.ReactNode;
};

const practices: Practice[] = [
  {
    n: "01",
    title: "Regulatory Compliance",
    body: "AML/CFT programmes, sanctions screening, transaction monitoring and fraud controls — calibrated to whether you're a bank, an exchange house, a real-estate broker or a precious-metal dealer.",
    tags: ["AML/CFT", "Sanctions", "Transaction monitoring", "Fraud risk"],
    icon: <BuildingIcon className="w-6 h-6" />
  },
  {
    n: "02",
    title: "Risk Management",
    body: "Enterprise, credit, operational and conduct risk — framework design, model validation, RCSA and the committee packs that get decisions made the same week.",
    tags: ["ERM", "RCSA", "Model validation", "Board reporting"],
    icon: <ShieldIcon className="w-6 h-6" />
  },
  {
    n: "03",
    title: "Internal & External Audit",
    body: "Internal audit co-sourcing, IT audit, financial-crime audit and EQA reviews — with reports that read like findings, not literature.",
    tags: ["Statutory", "IA-aligned", "IT audit", "EQA"],
    icon: <FileCheckIcon className="w-6 h-6" />
  },
  {
    n: "04",
    title: "Cybersecurity",
    body: "Cyber risk programmes, third-party assessments, resilience testing and incident readiness — mapped to CBUAE, NESA / SIA, ISO 27001 and the UAE Personal Data Protection Law.",
    tags: ["NESA / SIA", "ISO 27001", "PDPL", "TRM"],
    icon: <LockIcon className="w-6 h-6" />
  }
];

export default function FourPractices() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="absolute inset-0 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(3,77,250,0.10), transparent 60%), radial-gradient(45% 40% at 100% 100%, rgba(20, 123, 88,0.06), transparent 70%)"
        }}
      />
      {/* Hairline frame top + bottom */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[55%] bg-gradient-to-r from-transparent via-cyan-brand/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12 py-14 lg:py-20">
        {/* Heading row — split, editorial */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="block w-[7px] h-[7px] rotate-45 bg-cyan-brand shadow-[0_0_10px_rgba(20, 123, 88,0.7)]" />
              <span className="text-[11px] tracking-[0.4em] uppercase text-cyan-brand font-medium">
                Flagship Practices
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-light text-ink leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.6vw, 64px)" }}
            >
              Four practices we lead with. <span className="font-normal text-cyan-brand">Twelve we deliver.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:pl-6 lg:border-l lg:border-white/10"
          >
            <p className="text-ink/75 text-[15px] lg:text-[16px] leading-[1.75] max-w-md">
              Most clients start with one of these four. The rest of the bench
              plugs in as the mandate grows , from a single AML review to
              a multi-year managed programme.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {practices.map((p, i) => (
            <PracticeCard key={p.n} practice={p} index={i} />
          ))}
        </div>

        {/* Footnote — anchors the section */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 lg:mt-16 flex flex-col items-center gap-6 pt-6"
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-ink-muted/80">
            Built for global standards &middot; Delivered worldwide
          </span>
          <PremiumCTA href="/services">Explore all capabilities</PremiumCTA>
        </motion.div>
      </div>
    </section>
  );
}

function PracticeBadge({ n }: { n: string }) {
  return (
    <span className="relative flex items-center justify-center bg-bg-deep">
      <span className="block w-7 h-7 rotate-45 bg-bg-deep border border-cyan-brand" />
      <span className="absolute text-[10.5px] tracking-[0.18em] text-cyan-brand font-medium tabular-nums">
        {n}
      </span>
    </span>
  );
}

function PracticeCard({
  practice,
  index
}: {
  practice: Practice;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 26, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full min-h-[380px] lg:min-h-[440px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT — light gray */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl"
          style={{ background: "#E0F2E0", backfaceVisibility: "hidden" }}
        >
          <div
            className="flex items-center justify-center w-14 h-14 rounded-xl mb-6"
            style={{ background: "#073F36" }}
          >
            <span className="[&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-[2]" style={{ color: "#90D890" }}>
              {practice.icon}
            </span>
          </div>
          <h3 className="text-[20px] font-semibold text-center" style={{ color: "#101820" }}>
            {practice.title}
          </h3>
          <span className="mt-6 text-[13px]" style={{ color: "#5F6B65" }}>
            {practice.n}/04
          </span>
        </div>

        {/* BACK — dark green */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-8 rounded-2xl"
          style={{
            background: "#073F36",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div>
            <h3 className="text-[20px] font-bold text-white">
              {practice.title}
            </h3>
            <p className="mt-4 text-[14px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.7)" }}>
              {practice.body}
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-xl"
              style={{ background: "#90D890" }}
            >
              <span className="[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-[2.5]" style={{ color: "#073F36" }}>
                {practice.icon}
              </span>
            </div>
            <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              {practice.n}/04
            </span>
          </div>
        </div>
      </motion.div>

      <Link
        href="/services"
        aria-label={`Learn more about ${practice.title}`}
        className="absolute inset-0 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-brand/60 rounded-2xl"
        onClick={e => e.stopPropagation()}
      />
    </motion.div>
  );
}
