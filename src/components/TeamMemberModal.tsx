"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Member } from "./TeamMember";

export default function TeamMemberModal({
  member,
  onClose
}: {
  member: Member | null;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = member ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [member]);

  useEffect(() => {
    if (!member) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4 lg:p-8 bg-bg-deep/85 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[680px] bg-bg border border-cyan-brand/30 rounded-2xl shadow-[0_30px_80px_-20px_rgba(0,5,10,0.85)] overflow-hidden"
          >
            {/* Cyan top hairline */}
            <span
              aria-hidden
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-brand/60 to-transparent"
            />

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 cursor-pointer p-2 text-ink/85 hover:text-cyan-brand transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <path
                  d="M2 2L20 20M20 2L2 20"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="p-8 lg:p-10">
              {/* Header: image + name/role */}
              <div className="flex items-start gap-5">
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-cyan-brand/50 shrink-0 shadow-[0_8px_30px_-10px_rgba(20, 123, 88,0.4)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 pt-1">
                  <h3
                    className="text-ink uppercase font-medium leading-[1.05]"
                    style={{ fontSize: "clamp(24px, 3vw, 38px)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="mt-2 text-[11px] tracking-[0.32em] uppercase text-cyan-brand font-semibold">
                    {member.title}
                  </p>
                  <p className="mt-1 text-[11px] tracking-[0.28em] uppercase text-ink-muted font-semibold">
                    {member.practice}
                  </p>
                </div>
              </div>

              <span
                aria-hidden
                className="block mt-7 h-px w-full bg-gradient-to-r from-cyan-brand/50 via-cyan-brand/20 to-transparent"
              />

              {/* Bio */}
              <p className="mt-7 text-ink-muted/95 text-[15px] lg:text-[15.5px] leading-[1.8] whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
