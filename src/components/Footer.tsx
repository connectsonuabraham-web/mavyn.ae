"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./Logo";
import PremiumCTA from "./PremiumCTA";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon,
  ArrowUpIcon
} from "./SocialIcons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "/team" }
];

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <LinkedInIcon /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <InstagramIcon /> },
  { label: "X / Twitter", href: "https://x.com", icon: <XIcon /> }
];

export default function Footer() {
  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t overflow-hidden" style={{ background: "#E0F2E0", borderColor: "rgba(12,43,21,0.1)" }}>
      {/* Subtle ambient glow at top */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[55%] bg-gradient-to-r from-transparent via-cyan-brand/40 to-transparent"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-12 pt-16 lg:pt-20 pb-8">
        {/* TOP : 4 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1 — Brand + tagline */}
          <div className="lg:col-span-4 lg:pr-6">
            <Logo stacked={false} size="lg" light={false} />
            <p className="mt-6 max-w-[340px] leading-[1.75] text-[14.5px]" style={{ color: "#5F6B65" }}>
              UAE advisory firm. Compliance, risk, audit, cyber and
              transformation built and run for banks, DNFBPs, free-zone and
              mainland businesses.
            </p>
          </div>

          <nav className="lg:col-span-3 lg:border-l lg:pl-8 flex flex-col gap-5" style={{ borderColor: "rgba(12,43,21,0.12)" }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative cursor-pointer text-[14px] tracking-[0.18em] uppercase transition-colors duration-300 w-fit"
                style={{ color: "#101820" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ background: "#00A65A" }} />
              </Link>
            ))}

            <div className="mt-6 lg:mt-8">
              <PremiumCTA href="/contact">Contact Us</PremiumCTA>
            </div>
          </nav>

          {/* Column 3 — Contact */}
          <div className="lg:col-span-3">
            <p className="text-[11px] tracking-[0.32em] uppercase mb-5" style={{ color: "#0C2B15" }}>Contact</p>
            <ul className="space-y-4 text-[14px] leading-relaxed" style={{ color: "#101820" }}>
              <li><a href="mailto:hello@mavyn.ae" className="cursor-pointer transition-colors duration-300" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}>hello@mavyn.ae</a></li>
              <li>+971 (0) 56 856 5999</li>
              <li>Sharjah, United Arab<br />Emirates</li>
              <li style={{ color: "#5F6B65" }}>Mon , Fri &middot; 9am  6pm GST</li>
            </ul>
          </div>

          {/* Column 4 — Follow */}
          <div className="lg:col-span-2">
            <p className="text-[11px] tracking-[0.32em] uppercase mb-5" style={{ color: "#0C2B15" }}>Follow</p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group cursor-pointer flex items-center justify-center w-9 h-9 transition-colors"
                  style={{ color: "#101820" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-between text-[12.5px]" style={{ borderColor: "rgba(12,43,21,0.12)", color: "#5F6B65" }}>
          <span className="flex items-center gap-2">
            &copy; 2026 MAVYN Advisory. All Rights Reserved
          </span>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="cursor-pointer transition-colors" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#5F6B65"}>Privacy Policy</Link>
            <span className="opacity-30">|</span>
            <Link href="/terms" className="cursor-pointer transition-colors" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#5F6B65"}>Terms and conditions</Link>
          </div>
          <button type="button" onClick={scrollTop} aria-label="Back to top" className="group cursor-pointer flex flex-col items-center gap-3 md:self-end">
            <span
              className="back-to-top-circle relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden transition-all duration-350"
              style={{ background: "#073F36" }}
            >
              <span className="back-to-top-arrow absolute inset-0 flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14V2M4 6l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </span>
            <span className="text-[11px] tracking-[0.32em] uppercase text-center transition-colors duration-300 group-hover:text-[#00A65A]" style={{ color: "#5F6B65" }}>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
