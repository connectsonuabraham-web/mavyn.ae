"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import MissionVisionValues from "@/components/MissionVisionValues";
import PageHero from "@/components/PageHero";
import PremiumCTA from "@/components/PremiumCTA";
import ExpertsHoverExpand from "@/components/ExpertsHoverExpand";
import { IMG, CAP_IMG } from "@/lib/images";

const experts = [
  {
    name: "Muna Salvi",
    role: "Founder",
    practice: "Governance & Transformation",
    image: "/images/Muna%20Salvi.png"
  },
  {
    name: "Ahmed Ismet",
    role: "Senior Advisor",
    practice: "Regulatory Counsel",
    image: "/images/Ahmed%20Ismet.png"
  },
  {
    name: "Pratick Dalal",
    role: "Senior Advisor",
    practice: "Finance, Digital & Islamic Banking",
    image: "/images/Pratick%20Dalal.png"
  }
];

export default function AboutPage() {
  return (
    <>
      {/* ==========================================================
          SECTION 1 — Hero (Who We Are)
          ========================================================== */}
      <PageHero
        label="About Mavyn"
        title={"Who\nWe Are"}
        subtitle="Mavyn was founded by senior UAE banking and DNFBP professionals with deep frontline experience in CDD, ODD, sanctions risk and regulatory engagement."
        image={IMG.aboutHero}
      />

      {/* ==========================================================
          SECTION 2 — Our Purpose (split: text left / images right)
          ========================================================== */}
      <PurposeSection />

      {/* ==========================================================
          Mission & Vision + Our Values
          ========================================================== */}
      <MissionVisionValues />

      {/* ==========================================================
          SECTION — Who We Serve
          ========================================================== */}
      <WhoWeServeSection />

      {/* ==========================================================
          SECTION 3 — Our Experts (hover expand cards)
          ========================================================== */}
      <ExpertsHoverExpand experts={experts} />

      {/* ==========================================================
          CTA before footer — Quote style
          ========================================================== */}
      <section className="relative px-3 sm:px-4 lg:px-10 py-6 lg:py-14" style={{ background: "#FFFFFF" }}>
        <div className="relative overflow-hidden rounded-2xl" style={{ background: "#073F36" }}>
          {/* Background image */}
          <img
            src="/images/make_a_grouup_phoot_of_202605220118.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          {/* Green overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.8) 100%)" }} />

          <div className="relative mx-auto max-w-[800px] px-5 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-20 text-center">
            {/* Quote symbol */}
            <svg
              width="36"
              height="28"
              viewBox="0 0 44 36"
              className="mx-auto"
              fill="#90D890"
              opacity={0.5}
            >
              <path d="M0 36V20C0 9 6 2 17 0v6c-7 2-10 7-10 14h10v16H0zm27 0V20C27 9 33 2 44 0v6c-7 2-10 7-10 14h10v16H27z" />
            </svg>

            <blockquote
              className="mt-5 sm:mt-8 font-light leading-[1.35] text-white"
              style={{ fontSize: "clamp(15px, 2.2vw, 28px)" }}
            >
              &ldquo;We build compliance systems that work in the real world, proportionate to your business, your risk and your regulator.&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="mt-5 sm:mt-8 flex flex-col items-center gap-2">
              <span className="block w-8 h-[2px]" style={{ background: "#90D890" }} />
              <span className="text-[11px] sm:text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#90D890" }}>
                Mavyn
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ──────────────────────────────────────────────────────────── */

const clientSegments = [
  {
    title: "Banks & DNFBPs",
    description: "Banks, exchange houses, money services businesses, lawyers, real-estate brokers, dealers in precious metals and stones.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Free-Zone & Mainland",
    description: "DIFC, ADGM and onshore companies operating across financial and corporate verticals.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Investment & Insurance",
    description: "Asset managers, brokers, insurers and reinsurers under SCA, DFSA and CBUAE regimes.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  }
];

function WhoWeServeSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 font-sans" style={{ background: "#E0F2E0" }}>
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
          <span className="text-[11px] tracking-[0.4em] uppercase text-ink/85">
            Our Clients
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-ink leading-[1.05]"
          style={{ fontSize: "clamp(32px, 3.4vw, 52px)" }}
        >
          Who{" "}
          <span className="text-cyan-brand font-normal">We Serve</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-ink-muted text-[15px] lg:text-[16px] leading-[1.7] max-w-xl"
        >
          Regulated firms across UAE banking, financial services and corporate sectors.
        </motion.p>

        {/* 3 Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clientSegments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 group-hover:border-cyan-brand/40 transition-all duration-500 group-hover:shadow-[0_12px_40px_-10px_rgba(20, 123, 88,0.15)]">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,5,10,0.3) 0%, rgba(0,5,10,0.1) 40%, rgba(2,8,15,0.6) 100%)"
                  }}
                />
              </div>

              {/* Text */}
              <h3 className="mt-5 text-ink text-[18px] lg:text-[20px] font-semibold group-hover:text-cyan-brand transition-colors duration-300">
                {segment.title}
              </h3>
              <p className="mt-2 text-ink-muted text-[13.5px] leading-[1.7]">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function ManifestoSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#E0F2E0" }}>
      {/* Decorative background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(7,63,54,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(7,63,54,0.1) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(144,216,144,0.2) 0%, transparent 60%)"
        }}
      />
      {/* Subtle dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #073F36 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-6 lg:px-10 py-24 lg:py-32 text-center">
        {/* Quote symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-hidden
        >
          <svg
            width="48"
            height="40"
            viewBox="0 0 44 36"
            className="mx-auto"
            fill="#073F36"
            opacity={0.3}
          >
            <path d="M0 36V20C0 9 6 2 17 0v6c-7 2-10 7-10 14h10v16H0zm27 0V20C27 9 33 2 44 0v6c-7 2-10 7-10 14h10v16H27z" />
          </svg>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-light leading-[1.3]"
          style={{ fontSize: "clamp(20px, 2.4vw, 34px)", color: "#101820" }}
        >
          &ldquo;We build compliance systems that work in the real world, proportionate to your business, your risk and your regulator, so you can operate, grow and stay ready for what&rsquo;s next.&rdquo;
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <span className="block w-10 h-[2px]" style={{ background: "#073F36" }} />
          <span className="text-[13px] font-semibold tracking-[0.15em] uppercase" style={{ color: "#073F36" }}>
            Mavyn
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────── */

function PurposeSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "#FFFFFF" }}>
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 0% 0%, rgba(3,77,250,0.10), transparent 60%)"
        }}
      />
      {/* small dot grid corner decoration */}
      <DotGridDeco />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span
                aria-hidden
                className="block w-[8px] h-[8px] rotate-45 bg-cyan-brand shadow-[0_0_10px_rgba(20, 123, 88,0.7)]"
              />
              <span className="text-[11px] tracking-[0.4em] uppercase text-cyan-brand font-medium">
                Our Purpose
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-light text-ink leading-[1.0]"
              style={{ fontSize: "clamp(40px, 5.4vw, 78px)" }}
            >
              <span className="block">Compliance</span>
              <span className="block">That</span>
              <span className="block">Protects.</span>
              <span className="block text-cyan-brand">Partnership</span>
              <span className="block">
                That <span className="text-cyan-brand">Drives.</span>
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: "left center" }}
              className="mt-9 flex items-center gap-3 max-w-[420px]"
            >
              <span className="block h-px flex-1 bg-white/25" />
              <span className="block w-[7px] h-[7px] rotate-45 bg-cyan-brand" />
              <span className="block h-px w-10 bg-white/25" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-7 text-ink-muted text-[15px] lg:text-[16.5px] leading-[1.8] max-w-md"
            >
              We help regulated businesses build stronger controls, manage risk
              with confidence, and operate with clarity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10"
            >
              <PremiumCTA href="/what-we-do">Learn More</PremiumCTA>
            </motion.div>
          </div>

          {/* RIGHT — composition of two images */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
            >
              <Image
                src={IMG.boardroomPlanning}
                alt="Mavyn boardroom planning"
                fill
                sizes="(max-width:1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,8,15,0.15) 0%, rgba(2,8,15,0.0) 40%, rgba(2,8,15,0.45) 100%)"
                }}
              />
            </motion.div>

            {/* secondary inset image */}
            <motion.div
              initial={{ opacity: 0, x: 24, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:block absolute -bottom-10 -right-2 lg:-right-6 w-[42%] aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_60px_-20px_rgba(0,5,10,0.85)]"
            >
              <Image
                src={CAP_IMG.misDashboards}
                alt="Risk dashboard"
                fill
                sizes="40vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2,8,15,0.25) 0%, rgba(2,8,15,0.0) 50%, rgba(2,8,15,0.7) 100%)"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DotGridDeco() {
  return (
    <svg
      aria-hidden
      className="absolute top-12 left-8 w-24 h-24 text-cyan-brand/30 hidden lg:block pointer-events-none"
      viewBox="0 0 100 100"
    >
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * 14 + 4}
            cy={r * 14 + 4}
            r="1.2"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────── */

