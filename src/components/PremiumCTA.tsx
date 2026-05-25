"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "default" | "white";
};

export default function PremiumCTA({
  href,
  children,
  className = "",
  onClick,
  type = "button",
  variant = "default"
}: Props) {
  const isWhite = variant === "white";
  const ctaClass = isWhite ? "premium-cta-white" : "premium-cta";

  const inner = (
    <span className={`${ctaClass} card-white group relative inline-flex items-center gap-2 sm:gap-4 pl-5 sm:pl-8 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full transition-colors duration-350 cursor-pointer ${className}`}>
      {/* Text */}
      <span className={`${ctaClass}__text text-[13px] sm:text-[15px] lg:text-[16px] font-medium whitespace-nowrap`}>
        {children}
      </span>

      {/* Circle with arrow */}
      <span className={`${ctaClass}__circle relative flex items-center justify-center w-9 sm:w-11 h-9 sm:h-11 rounded-full transition-colors duration-350 overflow-hidden`}>
        {/* Arrow icon — animated */}
        <motion.span
          className={`${ctaClass}__arrow absolute inset-0 flex items-center justify-center`}
          initial={false}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 12L12 4M12 4H6M12 4V10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}

