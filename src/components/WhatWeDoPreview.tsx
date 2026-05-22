"use client";

import SectionLabel from "./SectionLabel";
import PreviewCard from "./PreviewCard";
import { motion } from "framer-motion";
import { ShieldIcon, NetworkIcon, BuildingIcon, RadarIcon } from "./ServiceIcons";

const items = [
  {
    number: "01",
    title: "AML & Financial Crime",
    description:
      "Risk assessments, policies, screening, monitoring and evidence packs for AML-CFT obligations.",
    icon: <ShieldIcon />
  },
  {
    number: "02",
    title: "Managed Compliance",
    description:
      "Outcome-based compliance support for teams that need capability without unnecessary headcount.",
    icon: <NetworkIcon />
  },
  {
    number: "03",
    title: "Corporate & Free-Zone Compliance",
    description:
      "UBO, ESR, licensing, governance and documentation support for UAE entities.",
    icon: <BuildingIcon />
  },
  {
    number: "04",
    title: "Regulatory Readiness",
    description:
      "Inspection preparation, gap assessments, remediation roadmaps and board-ready reporting.",
    icon: <RadarIcon />
  }
];

export default function WhatWeDoPreview() {
  return (
    <section className="relative py-24 lg:py-36 bg-bg-deep">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>What We Do</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-light text-ink leading-[1.02]"
            style={{ fontSize: "clamp(34px, 4.8vw, 70px)" }}
          >
            Compliance capability, designed around what regulators{" "}
            <span className="accent text-cyan-brand normal-case tracking-normal">
              actually test.
            </span>
          </motion.h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <PreviewCard
              key={item.title}
              number={item.number}
              title={item.title}
              description={item.description}
              icon={item.icon}
              href="/what-we-do"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
