"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/service-card";

const cards = [
  {
    title: "Practitioner-led",
    body: "Founders and advisors have built and run controls inside UAE banks and DNFBPs — not theory, lived experience.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Regulator-ready",
    body: "Frameworks designed to pass CBUAE, SCA and DFSA inspections. Documentation, evidence and rationale built in.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Execution under SLA",
    body: "We do not stop at advice. We run the function — CDD, screening, monitoring — to defined service levels.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Business-aware",
    body: "Controls calibrated to commercial reality. We protect revenue while keeping the firm inspection-ready.",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80"
  }
];

export default function WhyChooseMavyn() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36" style={{ background: "#073F36" }}>
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-light leading-[1.0] tracking-[-0.01em] text-white"
            style={{ fontSize: "clamp(40px, 6vw, 84px)" }}
          >
            Why Choose
            <br />
            <span className="text-white font-normal">Mavyn?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[15px] lg:text-[16px] leading-[1.8] max-w-md"
            style={{ color: "rgba(241,238,234,0.65)" }}
          >
            Mavyn is a UAE advisory firm for banks, DNFBPs, free-zone and
            mainland companies. We design controls regulators trust, run them
            under SLA, and help you stand up the back-office that keeps the
            business moving.
          </motion.p>
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left center", background: "rgba(144,216,144,0.25)", height: "1px" }}
          className="w-full mb-16 lg:mb-20"
        />

        {/* 4 Service-style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {cards.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceCard
                title={p.title}
                subtitle={p.body}
                image={p.image}
                href="/contact"
                label="Why Choose Mavyn"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

