"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden"
          style={{ background: "#073F36" }}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5">
            <Link
              href="/insights"
              className="flex-1 text-[9px] sm:text-[13px] text-white/90 hover:text-white tracking-wide transition-colors duration-300 cursor-pointer text-center pr-6 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Read our latest insights on UAE compliance &amp; regulatory trends →
            </Link>

            {/* Close button */}
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="shrink-0 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10"
            >
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1l-8 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

