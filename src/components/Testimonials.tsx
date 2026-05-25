"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  body: string;
  name: string;
  role: string;
  company: string;
  initial: string;
};

const testimonials: Testimonial[] = [
  {
    body: "MAVYN transformed our compliance operations completely. Their expertise in CBUAE regulations saved us months of work and thousands in potential fines.",
    name: "Ahmed Al Mansouri",
    role: "CEO",
    company: "FinTech Solutions UAE",
    initial: "A"
  },
  {
    body: "The onboarding-as-a-service solution reduced our client acquisition time from weeks to days. The team is professional, responsive, and truly understands our business needs.",
    name: "Fatima Al Mazrouei",
    role: "Operations Director",
    company: "Digital Banking Co.",
    initial: "F"
  },
  {
    body: "MAVYN's digital journey transformation initiative completely revamped our customer experience. Our NPS score improved by 35 points in just 6 months.",
    name: "Mohammed Al Suwaidi",
    role: "Managing Director",
    company: "SME Finance Group",
    initial: "M"
  },
  {
    body: "Working with MAVYN on our KYC/AML framework was seamless. Their consultants are knowledgeable, and the implementation was faster than expected.",
    name: "Layla Al Hashmi",
    role: "Head of Compliance",
    company: "Regional Bank",
    initial: "L"
  },
  {
    body: "As a startup, navigating banking relationships was challenging. MAVYN's business advisory service was invaluable in securing our trade finance facility.",
    name: "Rashid Al Ketbi",
    role: "Founder",
    company: "Tech Startup Sharjah",
    initial: "R"
  },
  {
    body: "The customer experience and NPS program gave us actionable insights. We've implemented their recommendations and already seeing improved customer retention.",
    name: "Noor Al Falasi",
    role: "Customer Experience Manager",
    company: "E-Commerce Platform",
    initial: "N"
  }
];

const GAP = 20;

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [perView, setPerView] = useState(3);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
      if (viewportRef.current) setViewportWidth(viewportRef.current.clientWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = testimonials.length;
  const max = Math.max(0, total - perView);
  const next = () => setActive((a) => (a >= max ? 0 : a + 1));
  const prev = () => setActive((a) => (a <= 0 ? max : a - 1));
  const cardWidth = perView > 0 && viewportWidth > 0 ? (viewportWidth - GAP * (perView - 1)) / perView : 0;
  const x = -active * (cardWidth + GAP);

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "var(--bg)" }}>
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="flex items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10.5px] tracking-[0.42em] uppercase font-medium mb-4" style={{ color: "#16D6A3" }}>
              Client Voices
            </p>
            <h2
              className="font-light leading-[1.05]"
              style={{ fontSize: "clamp(28px, 3.8vw, 56px)", color: "#101820" }}
            >
              Over <span style={{ color: "#0C2B15", fontWeight: 500 }}>10,000+</span> People Trust
            </h2>
          </motion.div>

          {/* Arrow controls */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous"
              className="group flex items-center justify-center w-11 h-11 border rounded-full cursor-pointer transition-all duration-300"
              style={{ borderColor: "rgba(12,43,21,0.25)", color: "#101820" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0C2B15"; (e.currentTarget as HTMLElement).style.color = "#F1EEEA"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#101820"; }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next"
              className="group flex items-center justify-center w-11 h-11 border rounded-full cursor-pointer transition-all duration-300"
              style={{ borderColor: "rgba(12,43,21,0.25)", color: "#101820" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0C2B15"; (e.currentTarget as HTMLElement).style.color = "#F1EEEA"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#101820"; }}
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ gap: `${GAP}px` }}
            animate={{ x }}
            transition={{ type: "spring", stiffness: 120, damping: 22, mass: 0.9 }}
          >
            {testimonials.map((t, i) => (
              <div key={t.name} style={{ width: cardWidth || undefined, flexShrink: 0 }}>
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile arrows */}
        <div className="sm:hidden mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
            style={{ background: "#073F36", color: "#FFFFFF" }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer transition-all duration-300"
            style={{ background: "#073F36", color: "#FFFFFF" }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div
      className="h-full flex flex-col p-8 border rounded-2xl transition-all duration-300 hover:-translate-y-1 card-white"
      style={{ background: "#FFFFFF", borderColor: "rgba(12,43,21,0.1)" }}
    >
      {/* Quote mark */}
      <span
        className="block font-light leading-none mb-6"
        style={{ fontSize: "56px", color: "#16D6A3", lineHeight: 0.7 }}
        aria-hidden
      >
        &ldquo;
      </span>

      <p
        className="flex-1 text-[14px] lg:text-[14.5px] leading-[1.75]"
        style={{ color: "#101820" }}
      >
        {t.body}
      </p>

      <div className="mt-8 pt-6 border-t flex items-center justify-between" style={{ borderColor: "rgba(12,43,21,0.08)" }}>
        <div className="flex items-center gap-3">
          <span
            className="flex items-center justify-center w-9 h-9 text-[12px] font-semibold shrink-0"
            style={{ background: "#0C2B15", color: "#F1EEEA" }}
          >
            {t.initial}
          </span>
          <div>
            <p className="text-[14px] font-semibold" style={{ color: "#101820" }}>{t.name}</p>
            <p className="text-[12px]" style={{ color: "#5F6B65" }}>{t.role}</p>
          </div>
        </div>
        <Stars />
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#16D6A3">
          <path d="M6 0.6l1.7 3.5 3.8.5-2.8 2.7.7 3.8L6 9.3l-3.4 1.8.7-3.8L.5 4.6l3.8-.5z" />
        </svg>
      ))}
    </div>
  );
}

