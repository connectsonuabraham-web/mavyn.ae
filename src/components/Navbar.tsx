"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import AnnouncementBar from "./AnnouncementBar";
import ThemeToggle from "./ThemeToggle";
import { navLinks, menuLinks } from "@/lib/nav";
import {
  LinkedInIcon,
  XIcon,
  InstagramIcon
} from "./SocialIcons";
import cx from "@/lib/cx";
import { sanityClient } from "@/lib/sanity";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [contactEmail, setContactEmail] = useState("hello@mavyn.ae");
  const [contactPhone, setContactPhone] = useState("+971 (0) 56 856 5999");

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "siteSettings"][0] { contactEmail, contactPhone }`
        );
        if (data) {
          if (data.contactEmail) setContactEmail(data.contactEmail);
          if (data.contactPhone) setContactPhone(data.contactPhone);
        }
      } catch (err) {}
    }
    fetchSettings();
  }, []);
  const [entered, setEntered] = useState(false);

  // Slide in once the loader finishes
  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Hide-on-scroll-down, show-on-scroll-up
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;

        // Always show near the top
        if (y < 80) {
          setHidden(false);
        } else if (delta > 6) {
          // Scrolling down past threshold
          setHidden(true);
        } else if (delta < -6) {
          // Scrolling up past threshold
          setHidden(false);
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Always show navbar when the menu is open
  const navHidden = hidden && !open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -160, opacity: 0 }}
        animate={{
          y: !entered || navHidden ? -160 : 0,
          opacity: !entered || navHidden ? 0 : 1
        }}
        transition={{
          duration: navHidden ? 0.4 : 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="fixed top-0 left-0 right-0 z-[120] border-b"
        style={{ background: "var(--bg)", borderColor: "rgba(12,43,21,0.08)" }}
      >
        {/* Announcement Bar */}
        <AnnouncementBar />
        <div className="w-full px-5 lg:px-10">
          <div className="h-[90px] lg:h-[100px] flex items-center justify-between">
            {/* Left: Logo + Nav links */}
            <div className="flex items-center gap-8 lg:gap-12">
              <Link href="/" className="cursor-pointer shrink-0" aria-label="MAVYN home">
                <Logo size="md" />
              </Link>

              <nav className="hidden md:flex items-center gap-7 lg:gap-9">
                {navLinks.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cx(
                        "group relative text-[16px] lg:text-[17px] transition-colors duration-300 cursor-pointer",
                        active ? "font-medium" : ""
                      )}
                      style={{ color: "var(--ink)" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}
                    >
                      {l.label}
                      <span
                        className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                        style={{ background: "#00A65A" }}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Contact Us button + Theme toggle + Menu icon */}
            <div className="flex items-center gap-4">

              {/* Contact Us — pill button with hover animation */}
              <Link
                href="/contact"
                className="premium-cta hidden sm:inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full text-[15px] font-medium transition-colors duration-350 cursor-pointer"
              >
                <span className="premium-cta__text text-white whitespace-nowrap">Contact Us</span>
                <span className="premium-cta__circle relative flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-350 overflow-hidden">
                  <span className="premium-cta__arrow absolute inset-0 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </Link>

              {/* Dark / Light mode toggle */}
              <ThemeToggle />

              {/* Menu hamburger — right corner */}
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="cursor-pointer relative flex flex-col items-center justify-center gap-[5px] w-9 h-9 rounded-full transition-all duration-300 hover:opacity-90"
                style={{
                  background: "#073F36",
                  borderColor: "#073F36"
                }}
              >
                <span className="block w-[18px] h-[2px] rounded-full bg-white" />
                <span className="block w-[18px] h-[2px] rounded-full bg-white" />
                <span className="block w-3 h-[2px] rounded-full bg-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen hamburger menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[140] overflow-hidden"
          >
            {/* Solid background matching site palette */}
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: "var(--bg)" }}
            />
            {/* Hairline frame top */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-ink/10"
            />

            <div className="relative w-full h-full flex flex-col overflow-y-auto">
              {/* Top bar — close button (mobile shows logo, desktop shows MENU label) */}
              <div className="relative flex items-center justify-between px-6 lg:px-14 pt-7 pb-5 lg:py-9 border-b border-ink/10 lg:border-0">
                {/* Mobile: show MAVYN logo. Desktop: empty (MENU label is in body) */}
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="lg:hidden cursor-pointer"
                  aria-label="MAVYN home"
                >
                  <Logo size="md" />
                </Link>

                <div className="hidden lg:block" />

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="cursor-pointer p-2 text-ink/85 hover:text-cyan-brand transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 3L21 21M21 3L3 21"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* MENU eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="px-6 lg:px-14 pt-8 lg:pt-2 flex items-center gap-2.5"
              >
                <span
                  aria-hidden
                  className="block w-[10px] h-[10px] rotate-45 bg-cyan-brand shadow-[0_0_12px_rgba(20, 123, 88,0.7)]"
                />
                <span
                  className="text-[12px] tracking-[0.4em] uppercase text-ink"
                  style={{ fontWeight: 500 }}
                >
                  Menu
                </span>
              </motion.div>

              {/* Menu links */}
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="px-6 lg:px-14 mt-5 flex flex-col"
              >
                {menuLinks.map((l, i) => {
                  const active = isActive(l.href);
                  
                  return (
                    <motion.div
                      key={l.href}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cx(
                          "group relative inline-flex items-center uppercase transition-colors overflow-hidden",
                          active
                            ? "text-ink"
                            : "text-ink-muted/55 hover:text-ink"
                        )}
                        style={{
                          fontSize: "clamp(26px, 3.6vw, 52px)",
                          fontWeight: 400,
                          lineHeight: 1.3,
                          paddingTop: "0.05em",
                          paddingBottom: "0.05em"
                        }}
                      >
                        
                        <span className="relative">
                          {l.label}
                          <span className="absolute bottom-1 left-0 h-[2px] w-full bg-cyan-brand origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Contact Us CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="px-6 lg:px-14 mt-6 lg:mt-0 lg:absolute lg:right-14 lg:bottom-32"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="premium-cta inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full transition-colors duration-350 cursor-pointer w-full lg:w-auto justify-center lg:justify-start"
                >
                  <span className="premium-cta__text text-[14px] lg:text-[14.5px] tracking-[0.18em] uppercase font-medium text-white">
                    Contact Us
                  </span>
                  <span className="premium-cta__circle relative flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-350 overflow-hidden">
                    <span className="premium-cta__arrow absolute inset-0 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </motion.div>

              {/* Social media + contact info */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="px-6 lg:px-14 pb-8 lg:pb-10 pt-8 lg:pt-6 mt-auto"
              >
                {/* Contact info */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-[14px] mb-6" style={{ color: "var(--ink)" }}>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="transition-colors duration-300 cursor-pointer"
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}
                  >
                    {contactEmail}
                  </a>
                  <span>{contactPhone}</span>
                </div>

                {/* Social media */}
                <p className="text-[11px] tracking-[0.4em] uppercase font-medium mb-4" style={{ color: "var(--ink)" }}>
                  Social Media
                </p>
                <div className="flex items-center gap-5">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}>
                    <LinkedInIcon className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}>
                    <InstagramIcon className="w-6 h-6" />
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)" }} onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"} onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}>
                    <XIcon className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


