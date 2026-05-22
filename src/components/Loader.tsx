"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.77, 0, 0.18, 1] }
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg-deep"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Mavyn Logo */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              src="/images/ChatGPT Image May 21, 2026, 08_27_03 PM.png"
              alt="MAVYN"
              className="w-[260px] sm:w-[320px] h-auto object-contain"
            />

            {/* Expanding line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.18, 1], delay: 0.3 }}
              style={{ transformOrigin: "center" }}
              className="h-[2px] w-56 sm:w-64 bg-[#147B58] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
