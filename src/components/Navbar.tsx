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

            <div className="relative w-full h-full flex flex-col overflow-y-auto">
              {/* Top bar — logo + close button */}
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 px-6 lg:px-14 pt-3 pb-2 lg:pt-4 lg:pb-3">
                <div className="lg:col-span-7 xl:col-span-7 flex items-center">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="cursor-pointer -ml-7 sm:-ml-8 lg:-ml-9"
                    aria-label="MAVYN home"
                  >
                    <Logo size="lg" />
                  </Link>
                </div>

                <div className="absolute top-4 right-6 lg:top-5 lg:right-14">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300"
                    style={{ background: "#073F36" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 3L21 21M21 3L3 21"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Body — split layout */}
              <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 px-6 lg:px-14 pb-6 lg:pb-8">
                {/* LEFT: Menu nav */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col">
                  {/* Eyebrow */}
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex items-center gap-2.5 mb-5 lg:mb-7"
                  >
                    <span
                      aria-hidden
                      className="block w-[10px] h-[10px] rotate-45"
                      style={{ background: "#16D6A3", boxShadow: "0 0 12px rgba(22,214,163,0.6)" }}
                    />
                    <span
                      className="text-[11px] tracking-[0.4em] uppercase"
                      style={{ color: "var(--ink)", fontWeight: 500 }}
                    >
                      Navigation
                    </span>
                  </motion.div>

                  {/* Menu links — numbered */}
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
                    className="flex flex-col"
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
                          className="border-b"
                          style={{ borderColor: "rgba(12,43,21,0.08)" }}
                        >
                          <Link
                            href={l.href}
                            onClick={() => setOpen(false)}
                            className={cx(
                              "group relative flex items-center justify-between py-1 lg:py-4 transition-colors duration-300",
                              active ? "text-ink" : "text-ink hover:text-cyan-brand"
                            )}
                          >
                            <span
                              className="font-medium leading-none"
                              style={{ fontSize: "clamp(15px, 1.9vw, 26px)" }}
                            >
                              {l.label}
                            </span>

                            {/* Animated arrow */}
                            <span className="relative flex items-center justify-center w-9 h-9 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "#073F36" }}>
                              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M4 12L12 4M12 4H6M12 4V10" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.nav>
                </div>

                {/* RIGHT: Featured panel */}
                <motion.aside
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 lg:gap-6"
                >
                  {/* Featured card */}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group relative block rounded-2xl overflow-hidden p-6 lg:p-8 min-h-[200px] lg:min-h-[260px] cursor-pointer"
                    style={{ background: "#073F36" }}
                  >
                    <div className="relative z-10 flex flex-col h-full">
                      <span className="text-[11px] tracking-[0.4em] uppercase" style={{ color: "#16D6A3" }}>
                        Get in touch
                      </span>
                      <h3 className="mt-4 font-light text-white leading-[1.1]" style={{ fontSize: "clamp(26px, 2.4vw, 36px)" }}>
                        Tell us where the regulatory pressure is.
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-white/65 max-w-sm">
                        Book a compliance discussion with our team — we'll start where it matters.
                      </p>

                      <div className="mt-auto pt-8 inline-flex items-center gap-3 text-white">
                        <span className="text-[12px] tracking-[0.25em] uppercase">Contact us</span>
                        <span className="flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 group-hover:translate-x-1" style={{ background: "#16D6A3" }}>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#073F36" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Decorative blob */}
                    <span
                      aria-hidden
                      className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-50"
                      style={{ background: "#16D6A3" }}
                    />
                  </Link>

                  {/* Contact + Social */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase mb-3 opacity-50" style={{ color: "var(--ink)" }}>
                        Email
                      </p>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="text-[14px] transition-colors duration-300 cursor-pointer block"
                        style={{ color: "var(--ink)" }}
                        onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#00A65A"}
                        onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--ink)"}
                      >
                        {contactEmail}
                      </a>
                      <p className="text-[10px] tracking-[0.4em] uppercase mb-3 mt-5 opacity-50" style={{ color: "var(--ink)" }}>
                        Phone
                      </p>
                      <span className="text-[14px]" style={{ color: "var(--ink)" }}>{contactPhone}</span>
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[0.4em] uppercase mb-3 opacity-50" style={{ color: "var(--ink)" }}>
                        Social
                      </p>
                      <div className="flex items-center gap-3">
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)", borderColor: "rgba(12,43,21,0.15)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "#073F36"; (e.currentTarget as HTMLElement).style.borderColor = "#073F36"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(12,43,21,0.15)"; }}>
                          <LinkedInIcon className="w-4 h-4" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)", borderColor: "rgba(12,43,21,0.15)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "#073F36"; (e.currentTarget as HTMLElement).style.borderColor = "#073F36"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(12,43,21,0.15)"; }}>
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="flex items-center justify-center w-9 h-9 rounded-full border transition-colors duration-300 cursor-pointer" style={{ color: "var(--ink)", borderColor: "rgba(12,43,21,0.15)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "#073F36"; (e.currentTarget as HTMLElement).style.borderColor = "#073F36"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(12,43,21,0.15)"; }}>
                          <XIcon className="w-4 h-4" />
                        </a>
                      </div>

                      <p className="text-[10px] tracking-[0.4em] uppercase mb-3 mt-5 opacity-50" style={{ color: "var(--ink)" }}>
                        Location
                      </p>
                      <span className="text-[14px]" style={{ color: "var(--ink)" }}>Sharjah, UAE</span>
                    </div>
                  </div>
                </motion.aside>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


