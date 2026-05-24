"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Diamond from "./Diamond";

export default function TeamHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[420px] lg:min-h-[780px] flex items-end lg:items-center">
        {/* Group photo background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/make_a_grouup_phoot_of_202605220118.jpeg"
            alt="Mavyn team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top lg:object-center"
          />
        </motion.div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,63,54,0.92) 0%, rgba(7,63,54,0.78) 40%, rgba(7,63,54,0.95) 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,63,54,0.95) 0%, rgba(7,63,54,0.6) 60%, rgba(7,63,54,0.75) 100%)"
          }}
        />

        <div className="relative w-full mx-auto max-w-[1440px] px-6 lg:px-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="flex items-center gap-3"
          >
            <Diamond size={7} />
            <span className="label-cyan">Our Team</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 display-uppercase leading-[0.95] max-w-5xl text-shadow-soft"
            style={{ fontSize: "clamp(58px, 9.4vw, 140px)", color: "#FFFFFF" }}
          >
            Meet our experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.05 }}
            className="mt-8 max-w-xl text-[16.5px] lg:text-[18px] leading-relaxed"
            style={{ color: "rgba(241,238,234,0.7)" }}
          >
            We're more than just a company; we're a community. Get to know the
            incredible people who make it all happen.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

