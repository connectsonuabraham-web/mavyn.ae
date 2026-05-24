"use client";

import SectionLabel from "./SectionLabel";
import InsightCard from "./InsightCard";
import PremiumCTA from "./PremiumCTA";
import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

const insights = [
  {
    category: "Perspective · 6 min",
    title: "Four pressures redefining UAE compliance in 2026",
    description:
      "Real-time sanctions screening, UBO transparency, AI-driven monitoring and conduct expectations.",
    image: IMG.museumOfFuture
  },
  {
    category: "Point of View · 4 min",
    title: "Managed compliance: when outsourcing the function actually works",
    description:
      "When in-house cost curves meet rising regulator expectations, an outcome-based model can pay back inside a single supervisory cycle.",
    image: IMG.analytics
  },
  {
    category: "Briefing · 5 min",
    title: "The DNFBP playbook: AML you can actually evidence",
    description:
      "Real estate, dealers in precious metals, auditors, lawyers and corporate service providers — what MOEC and the FIU expect.",
    image: IMG.glassTower
  }
];

export default function InsightsPreview() {
  return (
    <section className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <SectionLabel>Insights</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-light text-ink leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.8vw, 70px)" }}
            >
              Briefings that read like{" "}
              <span className="accent text-cyan-brand normal-case tracking-normal">
                findings, not literature.
              </span>
            </motion.h2>
          </div>
          <div className="hidden lg:block">
            <PremiumCTA href="/insights">
              Explore All Insights
            </PremiumCTA>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((i, idx) => (
            <InsightCard key={i.title} insight={i} index={idx} />
          ))}
        </div>

        <div className="mt-12 lg:hidden">
          <PremiumCTA href="/insights">Explore All Insights</PremiumCTA>
        </div>
      </div>
    </section>
  );
}

