"use client";

import { motion } from "framer-motion";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote: "The names in the pitch deck are the names in the room. Every meeting, every escalation. Senior at the table, always.",
    name: "Senior at the Table",
    designation: "Why Clients Stay",
    src: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1368&q=80",
  },
  {
    quote: "Audit packs, control logs and rationale files for every finding. Decisions a supervisor can read. Evidence over slides, every time.",
    name: "Evidence Over Slides",
    designation: "Why Clients Stay",
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1368&q=80",
  },
  {
    quote: "We map controls to CBUAE, FTA, MOHRE and DFSA expectations first. Before any imported template. UAE before everywhere else.",
    name: "UAE Before Everywhere Else",
    designation: "Why Clients Stay",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1368&q=80",
  },
];

export default function WhyClientsCarousel() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "#073F36" }}>
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 lg:mb-16"
        >
          <p className="text-[10.5px] tracking-[0.42em] uppercase font-medium mb-5" style={{ color: "#90D890" }}>
            Why Clients Stay
          </p>
          <h2
            className="font-light leading-[1.05] text-white"
            style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
          >
            Why Clients
            <br />
            <span style={{ color: "#90D890" }}>Keep Us On The Panel.</span>
          </h2>
        </motion.div>

        {/* Circular Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#FFFFFF",
              designation: "#90D890",
              testimony: "rgba(255,255,255,0.8)",
              arrowBackground: "#073F36",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#16D6A3",
            }}
            fontSizes={{
              name: "24px",
              designation: "14px",
              quote: "16px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

