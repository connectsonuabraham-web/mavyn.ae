"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import RegulatoryRadarRow from "./RegulatoryRadarRow";
import PremiumCTA from "./PremiumCTA";
import { DocIcon, ShieldIcon, LockIcon, ChartIcon, UsersIcon, BankIcon } from "./ServiceIcons";
import { IMG } from "@/lib/images";

const rows = [
  {
    index: "01",
    title: "PDPL — Personal Data Protection",
    line1: "Federal Decree-Law No. 45 of 2021.",
    line2: "Data subject rights, controller and processor duties.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    icon: <DocIcon className="w-7 h-7" />,
    href: "/services/payroll-compliance-bundle"
  },
  {
    index: "02",
    title: "AML-CFT & PF",
    line1: "Federal Decree-Law No. 20 of 2018.",
    line2: "Money-laundering, terrorist and proliferation financing.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1600&q=80",
    icon: <ShieldIcon className="w-7 h-7" />,
    href: "/services/aml-cft-risk-tools"
  },
  {
    index: "03",
    title: "Cybercrime Law",
    line1: "Federal Decree-Law No. 34 of 2021.",
    line2: "Digital fraud, data misuse and offence definitions.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&q=80",
    icon: <LockIcon className="w-7 h-7" />,
    href: "/services/fraud-risk-management"
  },
  {
    index: "04",
    title: "ESR — Economic Substance",
    line1: "Cabinet Decision No. 57.",
    line2: "Relevant-activity tests and substance reporting.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=1600&q=80",
    icon: <ChartIcon className="w-7 h-7" />,
    href: "/services/payroll-compliance-bundle"
  },
  {
    index: "05",
    title: "UBO — Beneficial Ownership",
    line1: "Cabinet Decision No. 58.",
    line2: "UBO registers, disclosure and verification.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&q=80",
    icon: <UsersIcon className="w-7 h-7" />,
    href: "/services/payroll-compliance-bundle"
  },
  {
    index: "06",
    title: "VAT & Corporate Tax",
    line1: "FTA registration, return cycles and",
    line2: "the 9% corporate tax regime.",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=1600&q=80",
    icon: <BankIcon className="w-7 h-7" />,
    href: "/services/payroll-compliance-bundle"
  }
];

export default function RegulatoryRadarPreview() {
  return (
    <section className="relative py-24 lg:py-36 section-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center">
            <SectionLabel align="center">Full Capability Set</SectionLabel>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-light text-ink leading-[1.02]"
            style={{ fontSize: "clamp(38px, 5.2vw, 78px)" }}
          >
            UAE regulatory{" "}
            <span className="text-cyan-brand">radar.</span>
          </motion.h2>
          <p className="mt-7 text-ink-muted text-[16px] leading-relaxed mx-auto max-w-2xl">
            The frameworks our clients — banks, DNFBPs and free-zone
            companies — most often need to evidence against.
          </p>
        </div>
        <div className="mt-14 flex flex-col gap-4">
          {rows.map((r, i) => (
            <RegulatoryRadarRow key={r.title} row={r} i={i} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PremiumCTA href="/contact">Learn More</PremiumCTA>
        </div>
      </div>
    </section>
  );
}

