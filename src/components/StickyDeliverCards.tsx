"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Diagnose",
    body: "Regulatory mapping, control inventory, gap analysis against UAE expectations.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "02",
    title: "Design",
    body: "Frameworks, policies, procedures and operating models calibrated to your business.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "03",
    title: "Implement",
    body: "Roll out controls, train teams, configure tools and tooling. Go-live discipline.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "04",
    title: "Operate",
    body: "Run the function under SLA. CDD, screening, monitoring, reporting at production scale.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  }
];

function StickyCard({
  i,
  step,
  progress,
  range,
  targetScale
}: {
  i: number;
  step: typeof steps[0];
  progress: any;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-[120px] flex items-center justify-center h-[420px] lg:h-[480px]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${i * 30}px)`,
        }}
        className="relative origin-top w-full max-w-[900px] h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(7,63,54,0.3)]"
      >
        {/* Background image */}
        <img
          src={step.image}
          alt={step.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Green overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.75) 100%)" }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[12px] font-medium mb-5 card-white"
              style={{ background: "#90D890", color: "#073F36" }}
            >
              Step {step.step}
            </span>
            <h3 className="text-white text-[28px] lg:text-[36px] font-semibold leading-tight">
              {step.title}
            </h3>
            <p className="mt-4 text-[15px] lg:text-[16px] leading-[1.7] max-w-md" style={{ color: "rgba(255,255,255,0.7)" }}>
              {step.body}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {steps.map((_, idx) => (
                <span
                  key={idx}
                  className="block w-2 h-2 rounded-full"
                  style={{ background: idx === i ? "#90D890" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
            <span className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              {step.step}/04
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StickyDeliverCards() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={container}
      className="relative"
      style={{ background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12 pb-[50vh] pt-[10vh]">
        {steps.map((step, i) => {
          const targetScale = Math.max(0.85, 1 - (steps.length - i - 1) * 0.05);
          return (
            <StickyCard
              key={step.step}
              i={i}
              step={step}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

