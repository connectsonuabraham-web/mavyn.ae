"use client";

import { useEffect, useState } from "react";
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
import { sanityClient } from "@/lib/sanity";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "/team" }
];

const DEFAULTS = {
  contactEmail: "hello@mavyn.ae",
  contactPhone: "+971 (0) 56 856 5999",
  contactAddress: "Sharjah, United Arab\nEmirates",
  linkedinUrl: "https://www.linkedin.com",
  instagramUrl: "https://www.instagram.com",
  twitterUrl: "https://x.com",
};

export default function Footer() {
  const [settings, setSettings] = useState(DEFAULTS);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "siteSettings"][0] {
            contactEmail,
            contactPhone,
            contactAddress,
            linkedinUrl,
            instagramUrl,
            twitterUrl
          }`
        );
        if (data) {
          setSettings({
            contactEmail: data.contactEmail || DEFAULTS.contactEmail,
            contactPhone: data.contactPhone || DEFAULTS.contactPhone,
            contactAddress: data.contactAddress || DEFAULTS.contactAddress,
            linkedinUrl: data.linkedinUrl || DEFAULTS.linkedinUrl,
            instagramUrl: data.instagramUrl || DEFAULTS.instagramUrl,
            twitterUrl: data.twitterUrl || DEFAULTS.twitterUrl,
          });
        }
      } catch (err) {
        // Sanity not available — use defaults
        console.error("Footer: Failed to fetch site settings:", err);
      }
    }
    fetchSettings();
  }, []);

  const socials: { label: string; href: string; icon: React.ReactNode }[] = [
    { label: "LinkedIn", href: settings.linkedinUrl, icon: <LinkedInIcon /> },
    { label: "Instagram", href: settings.instagramUrl, icon: <InstagramIcon /> },
    { label: "X / Twitter", href: settings.twitterUrl, icon: <XIcon /> }
  ];

  const scrollTop = () =>
    typeof window !== "undefined" &&
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t overflow-hidden" style={{ background: "var(--bg)", borderColor: "rgba(12,43,21,0.1)" }}>
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
                onClick={() => window.scrollTo(0, 0)}
                className="group relative cursor-pointer text-[14px] tracking-[0.18em] uppercase transition-colors duration-300 w-fit"
                style={{ color: "var(--ink)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}
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
              <li><a href={`mailto:${settings.contactEmail}`} className="cursor-pointer transition-colors duration-300" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#101820"}>{settings.contactEmail}</a></li>
              <li>{settings.contactPhone}</li>
              <li style={{ whiteSpace: "pre-line" }}>{settings.contactAddress}</li>
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

        {/* Back to top — above the line */}
        <div className="mt-12 flex justify-center md:justify-end">
          <button type="button" onClick={scrollTop} aria-label="Back to top" className="group cursor-pointer flex flex-col items-center gap-3">
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

        {/* Bottom bar — below the line */}
        <div className="mt-6 pt-6 border-t text-[12.5px]" style={{ borderColor: "rgba(12,43,21,0.12)", color: "#5F6B65" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left — Copyright */}
            <span>&copy; 2026 MAVYN Advisory. All Rights Reserved</span>

            {/* Center — Privacy & Terms */}
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" className="cursor-pointer transition-colors" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#5F6B65"}>Privacy Policy</Link>
              <span className="opacity-30">|</span>
              <Link href="/terms" className="cursor-pointer transition-colors" onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#5F6B65"}>Terms and conditions</Link>
            </div>

            {/* Right — Crafted by */}
            <a href="https://webkonic.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-0 cursor-pointer" style={{ lineHeight: 1 }}>
              <span className="text-[14px] font-semibold transition-all duration-300 group-hover:underline underline-offset-4" style={{ color: "#5F6B65" }}>Crafted by</span>
              <img src="/images/webkonic (12).png" alt="Webkonic" className="h-[64px] w-auto block relative -top-1 -ml-3" style={{ margin: 0, padding: 0 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

