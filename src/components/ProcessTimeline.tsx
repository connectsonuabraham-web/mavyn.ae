"use client";

import { motion } from "framer-motion";
import Diamond from "./Diamond";

type Step = { n: string; title: string; body: string };

export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[19px] lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-brand/0 via-cyan-brand/50 to-cyan-brand/0" />
      <ol className="space-y-10">
        {steps.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="relative grid lg:grid-cols-2 items-start gap-6"
            >
              <div
                className={`flex items-start gap-6 ${
                  right ? "lg:col-start-2 lg:pl-14" : "lg:pr-14"
                }`}
              >
                <div className="relative z-10 mt-1 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border border-cyan-brand/55 bg-bg-deep flex items-center justify-center">
                    <Diamond size={7} />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] tracking-[0.32em] uppercase text-cyan-brand">
                    Step {s.n}
                  </div>
                  <h4 className="mt-2 font-light text-ink text-[24px] lg:text-[28px]">
                    {s.title}
                  </h4>
                  <p className="mt-3 text-ink-muted text-[15px] leading-relaxed max-w-md">
                    {s.body}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
