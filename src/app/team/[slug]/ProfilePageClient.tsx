"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProfileData = {
  name: string;
  slug: string;
  jobTitle: string;
  practice: string;
  image: string;
  profileLabel: string;
  profileNumber: string;
  currentRole?: string;
  formerRoles?: string;
  credentials?: string;
  experienceSummary?: string;
  snapshotTagline?: string;
  bullets: string[];
  expertise: string[];
  timeline: { year: string; label: string }[];
  email?: string;
  isFounder: boolean;
};

export default function ProfilePageClient({
  profile,
  prevSlug,
  nextSlug,
}: {
  profile: ProfileData;
  prevSlug: string | null;
  nextSlug: string | null;
}) {
  return (
    <main className="min-h-screen section-white">
      <section className="relative lg:min-h-screen grid grid-cols-1 lg:grid-cols-[420px_1fr] xl:grid-cols-[480px_1fr]">
        {/* LEFT PANEL */}
        <div className="relative border-r px-8 lg:px-12 pt-44 lg:pt-52 pb-6 lg:pb-16 flex flex-col" style={{ borderColor: "rgba(0,0,0,0.06)", minHeight: "auto" }}>
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/team"
              className="group inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink/60 hover:text-cyan-brand transition-colors duration-300 cursor-pointer"
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Back to Team
            </Link>
          </div>

          {/* Decorative dots */}
          <div className="flex items-center gap-1.5 mb-8">
            <span className="block w-[10px] h-[10px] rounded-full bg-cyan-brand animate-pulse" />
            <span className="block w-[7px] h-[7px] rounded-full bg-cyan-brand/50" />
          </div>

          {/* Profile label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11px] tracking-[0.4em] uppercase text-cyan-brand font-medium"
          >
            {profile.profileLabel}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 text-ink font-light leading-[1.0] tracking-[0.01em]"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            {(() => {
              const parts = profile.name.split(" ");
              const firstName = parts[0];
              const lastName = parts.slice(1).join(" ");
              return (
                <>
                  <span className="block">{firstName}</span>
                  {lastName && <span className="block">{lastName}</span>}
                </>
              );
            })()}
          </motion.h1>

          {/* Cyan bar */}
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block h-[4px] bg-cyan-brand mt-8"
          />

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-ink text-[17px] font-medium"
          >
            {profile.jobTitle}
          </motion.p>

          {/* Practice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-1 text-ink/60 text-[14px]"
          >
            {profile.practice}
          </motion.p>

          {/* Current */}
          {profile.currentRole && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-cyan-brand font-semibold">
                Current
              </p>
              <p className="mt-2 text-ink text-[14px] font-semibold">
                {profile.currentRole}
              </p>
            </motion.div>
          )}

          {/* Former */}
          {profile.formerRoles && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6"
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-cyan-brand font-semibold">
                Former
              </p>
              <p className="mt-2 text-ink text-[14px] font-semibold">
                {profile.formerRoles}
              </p>
            </motion.div>
          )}

          {/* Credentials */}
          {profile.credentials && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6"
            >
              <p className="text-[10px] tracking-[0.35em] uppercase text-cyan-brand font-semibold">
                Credentials
              </p>
              <p className="mt-2 text-ink text-[14px] font-semibold whitespace-pre-line">
                {profile.credentials}
              </p>
            </motion.div>
          )}

          {/* Experience */}
          {profile.experienceSummary && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-6 text-ink/50 text-[13px]"
            >
              {profile.experienceSummary}
            </motion.p>
          )}

          {/* Email */}
          {profile.email && (
            <motion.a
              href={`mailto:${profile.email}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-6 text-ink/40 text-[12px] hover:text-cyan-brand transition-colors duration-300 cursor-pointer inline-block"
            >
              {profile.email}
            </motion.a>
          )}

          {/* Navigation buttons — desktop */}
          <div className="mt-auto pt-10 hidden lg:flex items-center gap-4">
            {prevSlug ? (
              <Link
                href={`/team/${prevSlug}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase"
                style={{ background: "#073F36", color: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
              >
                <svg width="14" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                  <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Prev
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full opacity-30 cursor-not-allowed font-medium text-[13px] tracking-[0.15em] uppercase" style={{ background: "#073F36", color: "rgba(255,255,255,0.4)" }}>
                <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
                  <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                Prev
              </span>
            )}

            {nextSlug ? (
              <Link
                href={`/team/${nextSlug}`}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 font-medium text-[13px] tracking-[0.15em] uppercase"
                style={{ background: "#073F36", color: "#FFFFFF" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#00A65A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#073F36"}
              >
                Next
                <svg width="14" height="8" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full opacity-30 cursor-not-allowed font-medium text-[13px] tracking-[0.15em] uppercase" style={{ background: "#073F36", color: "rgba(255,255,255,0.4)" }}>
                Next
                <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
                  <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
            )}
          </div>
        </div>

        {/* RIGHT PANEL — Photo + Profile Snapshot */}
        <div className="relative px-6 lg:px-12 xl:px-16 pt-6 lg:pt-52 pb-10 lg:pb-16 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-10 xl:gap-14">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl border-2 border-cyan-brand/30 group-hover:border-cyan-brand/70 transition-all duration-500 group-hover:shadow-[0_10px_40px_-10px_rgba(20,123,88,0.25)]">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  sizes="320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <span className="block w-10 h-[4px] bg-cyan-brand mt-4 transition-all duration-500 group-hover:w-16" />
            </motion.div>

            {/* Expertise Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="text-ink text-[28px] lg:text-[34px] font-light">
                Expertise <span className="text-cyan-brand font-normal">Overview</span>
              </h2>

              {profile.snapshotTagline && (
                <p className="mt-3 text-ink/60 text-[14px]">
                  {profile.snapshotTagline}
                </p>
              )}

              {/* Bullet points */}
              {profile.bullets.length > 0 && (
                <div className="mt-8 space-y-5">
                  {profile.bullets.map((bullet, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                      className="group/bullet flex gap-3 cursor-default"
                    >
                      <span className="mt-1.5 block w-[8px] h-[8px] min-w-[8px] bg-cyan-brand transition-transform duration-300 group-hover/bullet:scale-125" />
                      <p className="text-ink/80 text-[13.5px] leading-[1.7] transition-colors duration-300 group-hover/bullet:text-ink">
                        {bullet}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Expertise Tags */}
          {profile.expertise.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-14"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-ink/50 font-semibold mb-4">
                Expertise
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {profile.expertise.map((tag) => (
                  <div
                    key={tag}
                    className="px-4 py-2.5 text-center text-[12px] text-ink/80 border border-cyan-brand/30 rounded-2xl bg-cyan-brand/[0.04] cursor-pointer hover:border-cyan-brand hover:bg-cyan-brand/[0.12] hover:text-ink transition-all duration-300 hover:shadow-[0_4px_16px_-4px_rgba(20,123,88,0.2)]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Timeline */}
          {profile.timeline && profile.timeline.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-12"
            >
              <div className="relative flex items-center justify-between">
                <span className="absolute top-[9px] left-0 right-0 h-[2px] bg-cyan-brand/30" />
                {profile.timeline.map((item, i) => (
                  <div key={i} className="group/dot relative flex flex-col items-center z-10 cursor-pointer">
                    <span className="block w-[10px] h-[10px] rounded-full bg-cyan-brand border-2 border-cyan-brand transition-all duration-300 group-hover/dot:scale-150 group-hover/dot:shadow-[0_0_12px_rgba(20,123,88,0.6)]" />
                    <span className="mt-2 text-[11px] font-semibold text-cyan-brand transition-all duration-300 group-hover/dot:text-ink">
                      {item.year}
                    </span>
                    <span className="mt-0.5 text-[10px] text-ink/50 text-center max-w-[80px] transition-colors duration-300 group-hover/dot:text-ink/80">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile navigation */}
      <div className="lg:hidden flex items-center justify-center gap-4 px-6 py-6" style={{ background: "#FFFFFF" }}>
        {prevSlug ? (
          <Link
            href={`/team/${prevSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer font-medium text-[13px] tracking-[0.15em] uppercase"
            style={{ background: "#073F36", color: "#FFFFFF" }}
          >
            <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
              <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Prev
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full opacity-30 font-medium text-[13px] tracking-[0.15em] uppercase" style={{ background: "#073F36", color: "rgba(255,255,255,0.4)" }}>
            <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
              <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Prev
          </span>
        )}

        {nextSlug ? (
          <Link
            href={`/team/${nextSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer font-medium text-[13px] tracking-[0.15em] uppercase"
            style={{ background: "#073F36", color: "#FFFFFF" }}
          >
            Next
            <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
              <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </Link>
        ) : (
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full opacity-30 font-medium text-[13px] tracking-[0.15em] uppercase" style={{ background: "#073F36", color: "rgba(255,255,255,0.4)" }}>
            Next
            <svg width="14" height="8" viewBox="0 0 16 10" fill="none">
              <path d="M0 5H14M10 1L14 5L10 9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        )}
      </div>
    </main>
  );
}
