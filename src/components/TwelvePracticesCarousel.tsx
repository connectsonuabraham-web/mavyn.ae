"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Practice = {
  title: string;
  blurb: string;
  image: string;
};

export default function TwelvePracticesCarousel({ practices }: { practices: Practice[] }) {
  const [active, setActive] = useState(0);
  const total = practices.length;

  const prev = () => setActive((a) => (a <= 0 ? total - 1 : a - 1));
  const next = () => setActive((a) => (a >= total - 1 ? 0 : a + 1));

  return (
    <section className="relative py-12 lg:py-16" style={{ background: "#073F36" }}>
      <div className="sm:mx-4 lg:mx-10">
        {/* Outer box — full width on mobile, rounded on sm+ */}
        <div className="sm:rounded-2xl p-4 sm:p-8 lg:p-10" style={{ background: "#073F36" }}>
          {/* Heading */}
          <div className="text-center mb-8 lg:mb-10">
            <span className="text-[11px] tracking-[0.4em] uppercase font-medium" style={{ color: "#90D890" }}>
              Full Capability Set
            </span>
            <h2
              className="mt-3 font-semibold"
              style={{ fontSize: "clamp(24px, 3.4vw, 42px)", color: "#FFFFFF" }}
            >
              Twelve practices, one bench.
            </h2>
            <p className="mt-3 text-[14px] max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              Pick one. Combine three. Hand us the whole thing. The structure flexes to the mandate, the standards don&rsquo;t.
            </p>
          </div>

          {/* Inner white box */}
          <div className="rounded-2xl overflow-hidden relative" style={{ background: "#FFFFFF" }}>
            {practices.map((practice, i) => (
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
                {/* Left — Image */}
                <div className="relative min-h-[260px] sm:min-h-[280px] lg:min-h-[440px] overflow-hidden">
                  <Image
                    src={practice.image}
                    alt={practice.title}
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
                      {String(active + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                    </span>

                    <h3
                      className="font-semibold leading-tight"
                      style={{ fontSize: "clamp(22px, 2.8vw, 32px)", color: "#101820" }}
                    >
                      {practice.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-[1.7]" style={{ color: "#5F6B65" }}>
                      {practice.blurb}
                    </p>

                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium transition-colors duration-300 cursor-pointer"
                      style={{ color: "#073F36" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#073F36"}
                    >
                      Learn more
                      <svg width="16" height="6" viewBox="0 0 22 8" fill="none">
                        <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.2" />
                      </svg>
                    </Link>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center gap-3 mt-8">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous"
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
                      aria-label="Next"
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
