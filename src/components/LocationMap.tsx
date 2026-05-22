"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

export default function LocationMap() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-[0.06] pointer-events-none" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[520px] lg:min-h-[560px]">
          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 lg:col-span-5 bg-bg-card backdrop-blur-md border border-white/10 text-ink rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,5,10,0.6)] overflow-hidden"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={IMG.heroSkyline}
                alt="Sharjah skyline"
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            <div className="p-7 lg:p-8">
              <p className="text-[12px] tracking-[0.18em] text-ink/55">
                Our Location
              </p>
              <h3
                className="mt-2 uppercase text-ink"
                style={{ fontSize: "clamp(24px, 2.4vw, 32px)", fontWeight: 500 }}
              >
                Mavyn
              </h3>

              <div className="mt-5 flex items-center gap-2.5 text-ink/85">
                <PinIcon className="text-cyan-brand" />
                <span className="text-[14px]">Sharjah, UAE</span>
              </div>

              <div className="my-5 h-px w-full bg-cyan-brand/30" />

              <div className="flex items-start gap-3 text-ink/85">
                <BuildingIcon className="text-cyan-brand mt-0.5" />
                <div>
                  <p className="text-[14px] font-medium text-ink">Office</p>
                  <p className="text-[13px] text-ink/65 leading-[1.6] mt-0.5">
                    Visiting us? Google Maps will get you here easily.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.google.com/maps?q=Sharjah+UAE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 cursor-pointer border border-cyan-brand/55 px-5 py-2.5 rounded-2xl text-ink hover:border-cyan-brand hover:bg-cyan-brand/[0.06] transition-all duration-300"
                >
                  <span
                    aria-hidden
                    className="block w-[8px] h-[8px] rotate-45 bg-cyan-brand"
                  />
                  <span className="text-[12.5px]">
                    Take me there
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-7 lg:-ml-3 bg-bg-deep border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center min-h-[360px]"
          >
            {/* SVG outline of UAE */}
            <UaeMap />

            {/* Map pin */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 18
              }}
              className="absolute top-[28%] right-[18%] flex flex-col items-center"
              aria-hidden
            >
              <PinMarker />
            </motion.span>

            <span className="absolute bottom-8 right-12 text-[13px] tracking-[0.2em] uppercase text-ink/55">
              United Arab Emirates
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 117 4.5a2.5 2.5 0 010 5z" />
    </svg>
  );
}

function BuildingIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect x="4" y="3" width="16" height="18" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M11 21v-4h2v4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PinMarker() {
  return (
    <span className="relative">
      <span className="absolute inset-0 -translate-y-1 flex justify-center">
        <span className="block w-12 h-12 rounded-full bg-cyan-brand/25 blur-md" />
      </span>
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="#147B58"
        aria-hidden
      >
        <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 24 16 24s16-12 16-24C32 7.16 24.84 0 16 0zm0 22a6 6 0 110-12 6 6 0 010 12z" />
        <circle cx="16" cy="16" r="4" fill="#1F6FFF" />
      </svg>
    </span>
  );
}

/**
 * Stylised SVG approximation of the UAE outline.
 * Based on a public-domain simplified path; geographic accuracy is not the
 * point — the silhouette is recognisable and matches the reference's visual
 * weight (dark grey land mass on a darker background).
 */
function UaeMap() {
  return (
    <svg
      viewBox="0 0 600 460"
      className="w-full h-full max-w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient id="land" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0A0A0A" />
          <stop offset="100%" stopColor="#1F6FFF" />
        </linearGradient>
      </defs>
      {/* Soft land path — stylised UAE/Arabian peninsula chunk */}
      <path
        d="M40 230 C 60 200 110 180 160 178 C 200 178 240 188 280 178 C 320 168 360 168 400 158 C 430 152 470 156 510 168 L 540 188 L 555 220 L 545 250 L 530 285 L 510 315 L 485 345 L 455 372 L 420 392 L 380 405 L 340 410 L 300 410 L 260 400 L 225 388 L 195 368 L 165 348 L 130 320 L 95 290 L 65 265 Z"
        fill="url(#land)"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="1"
      />
      {/* Gulf islands accents */}
      <circle cx="180" cy="160" r="3" fill="#0A0A0A" />
      <circle cx="220" cy="155" r="2.4" fill="#0A0A0A" />
      <circle cx="260" cy="160" r="2.8" fill="#0A0A0A" />
      <circle cx="300" cy="158" r="3" fill="#0A0A0A" />

      {/* Faint internal dividers */}
      <path
        d="M250 230 L 320 230 M 360 250 L 430 250 M 280 290 L 380 290"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="1"
      />
    </svg>
  );
}
