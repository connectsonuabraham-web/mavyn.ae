"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  description: string[];
  image: string;
};

export default function ServiceLandingPage({ title, subtitle, description, image }: Props) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[420px] lg:min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.75) 50%, rgba(7,63,54,0.55) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,63,54,0.85) 0%, rgba(7,63,54,0.6) 40%, rgba(7,63,54,0.9) 100%)" }} />
        <div className="relative w-full mx-auto max-w-[1320px] px-6 lg:px-12 pb-16 lg:pb-24 pt-44">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.35em] uppercase font-medium"
            style={{ color: "#16D6A3" }}
          >
            Service
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-light leading-[1.05] text-white max-w-3xl"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-[17px] leading-relaxed"
            style={{ color: "rgba(241,238,234,0.7)" }}
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-20 lg:py-28 section-white">
        <div className="mx-auto max-w-[860px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-light leading-[1.1]"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#101820" }}
            >
              What we deliver
            </h2>
            <div className="mt-8 space-y-5">
              {description.map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.8]"
                  style={{ color: "#5F6B65" }}
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 cursor-pointer hover:opacity-70"
                style={{ color: "#FFFFFF" }}
              >
                Learn More
                <svg width="22" height="8" viewBox="0 0 22 8" fill="none">
                  <path d="M0 4H20M16 1L20 4L16 7" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
