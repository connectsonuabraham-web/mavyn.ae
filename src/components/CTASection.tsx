"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PremiumCTA from "./PremiumCTA";

type Props = {
  label: string;
  title: string;
  paragraph?: string;
  cta: string;
  ctaHref?: string;
  image: string;
};

export default function CTASection({
  label,
  title,
  paragraph,
  cta,
  ctaHref = "/contact",
  image
}: Props) {
  return (
    <section className="relative px-4 lg:px-10 py-10 lg:py-14" style={{ background: "#FFFFFF" }}>
      <div className="relative overflow-hidden rounded-2xl" style={{ background: "#073F36" }}>
        <div className="relative min-h-[400px] lg:min-h-[440px] flex items-center">
          {/* Background image */}
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          {/* Green gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7,63,54,0.95) 0%, rgba(7,63,54,0.7) 60%, rgba(7,63,54,0.5) 100%)"
            }}
          />

          <div className="relative w-full mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-14 py-10 lg:py-16">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[11px] tracking-[0.4em] uppercase font-medium mb-5"
              style={{ color: "#16D6A3" }}
            >
              {label}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-light max-w-2xl leading-[1.08] text-white"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {title}
            </motion.h2>

            {paragraph && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-5 max-w-lg text-[15px] leading-[1.7]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {paragraph}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8"
            >
              <PremiumCTA href={ctaHref} variant="white">{cta}</PremiumCTA>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
