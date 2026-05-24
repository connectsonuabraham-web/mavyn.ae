"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    step: "Step 1",
    title: "Diagnostic.",
    description: "Independent gap analysis of your AML, CDD, sanctions or risk framework with a regulator-ready findings report. Delivered in 2 to 3 weeks.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 2",
    title: "Programme.",
    description: "Full design and implementation of a regulated function, from policy through to operating procedures and tooling. Delivered in 6 to 16 weeks.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    step: "Step 3",
    title: "Managed Service.",
    description: "Run the function with us. CDD, screening, monitoring and reporting under defined service levels. Ongoing under SLA.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
  }
];

export default function ThreeRoutesCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a <= 0 ? steps.length - 1 : a - 1));
  const next = () => setActive((a) => (a >= steps.length - 1 ? 0 : a + 1));

  return (
    <section className="relative py-12 lg:py-16 section-white">
      <div className="lg:mx-10">
        {/* Outer light green box — full width on mobile */}
        <div className="sm:rounded-2xl p-4 sm:p-8 lg:p-10" style={{ background: "var(--bg)" }}>
          {/* Heading inside green box */}
          <div className="text-center mb-8 lg:mb-10">
            <h2
              className="font-semibold"
              style={{ fontSize: "clamp(24px, 3.4vw, 42px)", color: "#101820" }}
            >
              Three Routes To Get Started
            </h2>
            <p className="mt-4 text-[15px] max-w-lg mx-auto" style={{ color: "#5F6B65" }}>
              Step-by-step guide to easily navigate and make the most of Mavyn&rsquo;s compliance advisory services.
            </p>
          </div>

          {/* Inner white box */}
          <div className="rounded-2xl overflow-hidden relative card-white">
            {/* All steps rendered, only active one visible */}
            {steps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-2 transition-opacity duration-300"
                style={{
                  opacity: i === active ? 1 : 0,
                  position: i === active ? "relative" : "absolute",
                  inset: i === active ? undefined : 0,
                  pointerEvents: i === active ? "auto" : "none"
                }}
              >
                {/* Left — Image (fills fully) */}
                <div className="relative min-h-[200px] sm:min-h-[280px] lg:min-h-[480px] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Right — Content + Arrows */}
                <div className="flex flex-col p-5 sm:p-8 lg:p-14">
                  <div className="flex-1 flex flex-col justify-center">
                    <span
                      className="inline-block w-fit px-4 py-1.5 rounded-full text-[12px] font-medium mb-5"
                      style={{ background: "#90D890", color: "#073F36" }}
                    >
                      {step.step}
                    </span>

                    <h3
                      className="font-semibold leading-tight"
                      style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#101820" }}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.7]" style={{ color: "#5F6B65" }}>
                      {step.description}
                    </p>
                  </div>

                  {/* Navigation arrows — bottom of right half */}
                  <div className="flex items-center gap-3 mt-10">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous step"
                      className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
                      style={{ background: "#073F36", color: "#FFFFFF" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
                    >
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next step"
                      className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
                      style={{ background: "#073F36", color: "#FFFFFF" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
                    >
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                        <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

