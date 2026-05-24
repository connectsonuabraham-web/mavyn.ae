"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import cx from "@/lib/cx";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function AnimatedButton({
  href,
  children,
  variant = "outline",
  className,
  onClick,
  type = "button"
}: Props) {
  const inner = (
    <motion.span
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cx(
        "group relative inline-flex items-center gap-3 px-7 py-4 rounded-2xl",
        "border border-cyan-brand/40 text-ink uppercase tracking-[0.28em] text-[12px]",
        "transition-all duration-300 ease-out",
        "hover:border-cyan-brand hover:bg-cyan-brand/[0.06] hover:shadow-glow",
        variant === "ghost" && "border-white/15",
        className
      )}
    >
      <span
        aria-hidden
        className="block w-[7px] h-[7px] rotate-45 bg-cyan-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110 shadow-[0_0_10px_rgba(20, 123, 88,0.6)]"
      />
      <span className="transition-colors duration-300 group-hover:text-cyan-brand">
        {children}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, rgba(20, 123, 88,0.10), transparent 60%)"
        }}
      />
    </motion.span>
  );

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} className="cursor-pointer inline-block" target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className="cursor-pointer inline-block">
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="cursor-pointer inline-block">
      {inner}
    </button>
  );
}

