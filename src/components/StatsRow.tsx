"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  isText?: boolean;
  text?: string;
};

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Years of combined leadership across banking, audit and corporate services" },
  { value: 10000, suffix: "+", label: "KYC, due diligence and remediation cases closed" },
  { value: 99, suffix: "%", label: "SLA adherence on managed compliance and back-office mandates" },
  { value: 0, suffix: "", label: "Local team, regional reach, global delivery standards", isText: true, text: "UAE · GCC" }
];

function AnimatedNumber({ value, suffix, isText, text }: { value: number; suffix: string; isText?: boolean; text?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView || isText) return;

    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (value >= 1000) {
          setDisplay(Math.round(latest).toLocaleString());
        } else {
          setDisplay(Math.round(latest).toString());
        }
      },
    });

    return () => controls.stop();
  }, [isInView, value, isText]);

  if (isText) {
    return (
      <div ref={ref} className="leading-none font-light" style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#073F36" }}>
        {text}
      </div>
    );
  }

  return (
    <div ref={ref} className="leading-none font-light" style={{ fontSize: "clamp(36px, 4vw, 56px)", color: "#073F36" }}>
      {isInView ? `${display}${suffix}` : `0${suffix}`}
    </div>
  );
}

export default function StatsRow() {
  return (
    <section className="relative py-20 lg:py-28 section-white">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10.5px] tracking-[0.42em] uppercase font-medium mb-14"
          style={{ color: "#147B58" }}
        >
          Proof Points
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 lg:p-10 rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(7,63,54,0.15)] card-white"
              style={{ background: "var(--bg)", border: "1px solid rgba(7,63,54,0.08)" }}
            >
              <AnimatedNumber value={s.value} suffix={s.suffix} isText={s.isText} text={s.text} />
              <div
                className="mt-3 h-px w-8 transition-all duration-500 group-hover:w-14"
                style={{ background: "#147B58" }}
              />
              <p
                className="mt-5 text-[13.5px] leading-[1.65]"
                style={{ color: "#5F6B65" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

