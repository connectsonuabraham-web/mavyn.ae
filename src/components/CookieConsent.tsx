"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mavyn-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("mavyn-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("mavyn-cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[420px] z-[200] rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border"
          style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)" }}
        >
          {/* Cookie icon */}
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center justify-center w-9 h-9 rounded-full" style={{ background: "rgba(7,63,54,0.08)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#073F36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </span>
            <h3 className="text-[15px] font-semibold" style={{ color: "#101820" }}>We use cookies</h3>
          </div>

          {/* Description */}
          <p className="text-[13px] leading-[1.7] mb-5" style={{ color: "#5F6B65" }}>
            We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. By clicking &ldquo;Accept All&rdquo;, you consent to our use of cookies as described in our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 transition-colors duration-300 hover:text-[#00A65A]" style={{ color: "#073F36" }}>
              Privacy Policy
            </Link>.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={accept}
              className="flex-1 px-5 py-2.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:opacity-90"
              style={{ background: "#073F36", color: "#FFFFFF" }}
            >
              Accept All
            </button>
            <button
              onClick={decline}
              className="flex-1 px-5 py-2.5 rounded-full text-[13px] font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-100"
              style={{ background: "transparent", color: "#101820", border: "1px solid rgba(0,0,0,0.15)" }}
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
