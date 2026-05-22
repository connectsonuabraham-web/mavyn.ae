"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PremiumCTA from "./PremiumCTA";

const principles = [
  {
    n: "01",
    title: "Practical",
    body: "Built to actually run. Frameworks designed by people who'll be on the call when the regulator follows up. No shelf-ware, no theatre."
  },
  {
    n: "02",
    title: "Proportionate",
    body: "Right-sized for the business. A four-person brokerage doesn't need a Tier-1 bank's policy stack. We calibrate to the risk, the headcount and the regulator that supervises you."
  },
  {
    n: "03",
    title: "Defensible",
    body: "Evidence first, narrative second. Every recommendation comes with the audit pack, the rationale and the version history a supervisor can read in 20 minutes."
  }
];

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                alt="Mavyn advisory"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Deep green overlay strip */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "#16D6A3" }}
              />
            </div>
          </motion.div>

          {/* RIGHT — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-[10.5px] tracking-[0.42em] uppercase font-medium"
              style={{ color: "#16D6A3" }}
            >
              About Mavyn
            </p>

            <h2
              className="mt-6 font-light leading-[1.06] tracking-[-0.01em]"
              style={{ fontSize: "clamp(30px, 3.4vw, 52px)", color: "#101820" }}
            >
              A UAE Firm That Knows The File
              <br />
              <span style={{ color: "#0C2B15", fontStyle: "normal" }}>
                Before It Lands On Your Desk.
              </span>
            </h2>

            <p
              className="mt-8 text-[15px] lg:text-[16px] leading-[1.8] max-w-lg"
              style={{ color: "#5F6B65" }}
            >
              Mavyn is a UAE advisory firm for banks, DNFBPs, free-zone and
              mainland companies. We design controls regulators trust, run them
              under SLA, and help you stand up the back-office that keeps the
              business moving.
            </p>

            {/* Principles */}
            <div className="mt-12 space-y-8">
              {principles.map((p, i) => (
                <div
                  key={p.n}
                  className="group flex gap-6 cursor-pointer transition-all duration-300 hover:translate-x-1 pb-6 border-b-2 border-transparent hover:border-[#16D6A3]"
                >
                  <span
                    className="text-[11px] tracking-[0.2em] font-medium pt-1 shrink-0"
                    style={{ color: "#16D6A3" }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h4
                      className="text-[16px] font-semibold transition-colors duration-300 group-hover:text-[#0C2B15]"
                      style={{ color: "#101820" }}
                    >
                      {p.title}
                    </h4>
                    <p
                      className="mt-1.5 text-[13.5px] leading-[1.7]"
                      style={{ color: "#5F6B65" }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <PremiumCTA href="/about">Learn More About Mavyn</PremiumCTA>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
