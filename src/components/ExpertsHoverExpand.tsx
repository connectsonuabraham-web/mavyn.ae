"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import PremiumCTA from "@/components/PremiumCTA";

type Expert = {
  name: string;
  role: string;
  practice: string;
  image: string;
};

interface ExpertsHoverExpandProps {
  experts: Expert[];
  className?: string;
}

export default function ExpertsHoverExpand({ experts, className }: ExpertsHoverExpandProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <span className="block w-[6px] h-[6px] rotate-45 bg-cyan-brand/60" />
          <span className="block h-px w-12 bg-cyan-brand/40" />
          <h2
            className="font-light text-ink"
            style={{ fontSize: "clamp(28px, 3.2vw, 48px)" }}
          >
            Meet Our <span className="text-cyan-brand">Experts</span>
          </h2>
          <span className="block h-px w-12 bg-cyan-brand/40" />
          <span className="block w-[6px] h-[6px] rotate-45 bg-cyan-brand/60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn("relative w-full", className)}
        >
          {/* ===== MOBILE: horizontal expand (unchanged) ===== */}
          <div className="flex md:hidden w-full items-center justify-center gap-1">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-xl"
                animate={{
                  width: activeIndex === index ? "70%" : "10%",
                  height: "18rem",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveIndex(index)}
              >
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 z-10 bg-gradient-to-t from-[#073F36]/90 via-[#073F36]/30 to-transparent"
                    />
                  )}
                </AnimatePresence>

                {activeIndex !== index && (
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#073F36]/70 to-[#073F36]/20" />
                )}

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-0 left-0 right-0 z-20 p-3"
                    >
                      <p className="text-[9px] tracking-[0.3em] uppercase font-medium" style={{ color: "#90D890" }}>
                        {expert.role}
                      </p>
                      <h3 className="mt-1 text-white text-[14px] font-semibold leading-tight">
                        {expert.name}
                      </h3>
                      <p className="mt-0.5 text-white/70 text-[10px] tracking-wide">
                        {expert.practice}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {activeIndex !== index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
                    >
                      <p
                        className="text-white/80 text-[9px] font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {expert.name}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <img
                  src={expert.image}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  alt={expert.name}
                />
              </motion.div>
            ))}
          </div>

          {/* ===== DESKTOP: side by side, expand WIDTH — taller cards, full face visible ===== */}
          <div className="hidden md:flex w-full items-center justify-center gap-2">
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
                animate={{
                  width: activeIndex === index ? "28rem" : "5rem",
                  height: "34rem",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActiveIndex(index)}
                onHoverStart={() => setActiveIndex(index)}
              >
                {/* Gradient overlay — active */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 z-10 bg-gradient-to-t from-[#073F36]/90 via-[#073F36]/20 to-transparent"
                    />
                  )}
                </AnimatePresence>

                {/* Inactive overlay */}
                {activeIndex !== index && (
                  <div className="absolute inset-0 z-10 bg-[#073F36]/50" />
                )}

                {/* Expert info (visible when active) */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute bottom-0 left-0 right-0 z-20 p-6"
                    >
                      <p className="text-[11px] tracking-[0.3em] uppercase font-medium" style={{ color: "#90D890" }}>
                        {expert.role}
                      </p>
                      <h3 className="mt-1.5 text-white text-[20px] font-semibold leading-tight">
                        {expert.name}
                      </h3>
                      <p className="mt-1 text-white/70 text-[13px] tracking-wide">
                        {expert.practice}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Vertical name (visible when inactive) */}
                <AnimatePresence>
                  {activeIndex !== index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
                    >
                      <p
                        className="text-white/90 text-[11px] font-semibold tracking-[0.15em] uppercase whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "mixed",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {expert.name}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Image — object-top to always show the face */}
                <img
                  src={expert.image}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  alt={expert.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet the team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <PremiumCTA href="/team">Meet the team</PremiumCTA>
        </motion.div>
      </div>
    </section>
  );
}
