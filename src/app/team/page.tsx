"use client";

import Image from "next/image";
import Link from "next/link";
import TeamHero from "@/components/TeamHero";
import TeamMember, { type Member } from "@/components/TeamMember";

// Local portraits saved in /public/images/
const PORTRAITS = {
  muna: "/images/muna.team.png",
  ahmed: "/images/Ahmed%20Ismet.png",
  pratick: "/images/Pratick%20Dalal.png",
  amer: "/images/Amer%20Ibrahim.png",
  sreenath: "/images/Sreenath%20V%20RNEW.jpeg",
  alanood: "/images/AlAnood%20AlMazroue.png"
};

const founder: Member = {
  name: "Muna Salvi",
  title: "Founder",
  practice: "Governance & Transformation",
  bio: "",
  image: PORTRAITS.muna,
  slug: "muna-salvi"
};

const team: Member[] = [
  {
    name: "Ahmed Ismet",
    title: "Senior Advisor",
    practice: "Regulatory Counsel",
    bio: "",
    image: PORTRAITS.ahmed,
    slug: "ahmed-ismet"
  },
  {
    name: "Pratick Dalal",
    title: "Senior Advisor",
    practice: "Finance, Digital & Islamic Banking",
    bio: "",
    image: PORTRAITS.pratick,
    slug: "pratick-dalal"
  },
  {
    name: "Amer Ibrahim",
    title: "Senior Advisor",
    practice: "Audit, Risk & Compliance",
    bio: "",
    image: PORTRAITS.amer,
    slug: "amer-ibrahim"
  },
  {
    name: "Sreenath V R",
    title: "Senior Advisor",
    practice: "Senior Consultant Data & Analytics",
    bio: "",
    image: PORTRAITS.sreenath,
    slug: "sreenath-vr"
  },
  {
    name: "AlAnood AlMazrouei",
    title: "Advisor",
    practice: "Marketing & Innovation",
    bio: "",
    image: PORTRAITS.alanood,
    slug: "alanood-almazrouei"
  }
];

export default function TeamPage() {
  return (
    <>
      <TeamHero />

      <section className="relative bg-bg-deep text-ink pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-10 lg:pt-14">
          {/* Heading — centered */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              className="font-light text-ink leading-[1.0]"
              style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
            >
              Get to know our teamwork
            </h2>
          </div>

          {/* Founder feature */}
          <div className="flex flex-col items-center">
            <Link href="/team/muna-salvi" className="group flex flex-col items-center text-center cursor-pointer">
              <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-bg-deep/10 group-hover:border-cyan-brand/45 group-hover:shadow-[0_20px_60px_-15px_rgba(20, 123, 88,0.2)] transition-all duration-500">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={520}
                  height={693}
                  sizes="520px"
                  className="w-full h-auto object-contain grayscale-[20%] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(2,8,15,0) 0%, rgba(2,8,15,0) 60%, rgba(2,8,15,0.5) 100%)"
                  }}
                />
              </div>
              <div className="mt-7">
                <div className="flex items-center justify-center gap-2">
                  <span className="block w-[8px] h-[8px] rotate-45 bg-cyan-brand shadow-[0_0_10px_rgba(20, 123, 88,0.6)]" />
                  <span className="text-[11px] tracking-[0.32em] uppercase text-cyan-brand font-semibold">
                    {founder.title}
                  </span>
                </div>
                <h3
                  className="mt-3 uppercase font-medium text-ink leading-tight group-hover:text-cyan-brand transition-colors"
                  style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
                >
                  {founder.name}
                </h3>
                <p className="mt-2 text-[11.5px] tracking-[0.24em] uppercase text-ink/60 font-semibold">
                  {founder.practice}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-[10px] tracking-[0.28em] uppercase text-ink/45 group-hover:text-cyan-brand transition-colors">
                  View profile →
                </span>
              </div>
            </Link>
          </div>

          {/* Grid of 4 team members — first row */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            {team.slice(0, 4).map((m, i) => (
              <TeamMember
                key={m.name}
                member={m}
                index={i}
              />
            ))}
          </div>

          {/* Remaining team members — left aligned for future additions */}
          {team.length > 4 && (
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
              {team.slice(4).map((m, i) => (
                <TeamMember
                  key={m.name}
                  member={m}
                  index={i + 4}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section — Quote + View Profiles */}
      <section className="relative px-4 lg:px-10 py-10 lg:py-14" style={{ background: "#FFFFFF" }}>
        <div className="relative overflow-hidden rounded-2xl" style={{ background: "#073F36" }}>
          <div className="relative min-h-[300px] lg:min-h-[360px] flex items-center">
            {/* Background image */}
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(7,63,54,0.95) 0%, rgba(7,63,54,0.7) 60%, rgba(7,63,54,0.5) 100%)" }}
            />

            <div className="relative w-full mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-14 py-12">
              <p className="text-[11px] tracking-[0.4em] uppercase font-medium mb-5" style={{ color: "#16D6A3" }}>
                Our People
              </p>
              <h2
                className="font-light leading-[1.12] text-white max-w-2xl"
                style={{ fontSize: "clamp(22px, 3.5vw, 40px)" }}
              >
                We&rsquo;re proud of the talented individuals who make our company great. Get to know the incredible people behind Mavyn.
              </h2>
              <div className="mt-8">
                <Link
                  href="/team/muna-salvi"
                  className="premium-cta-white inline-flex items-center gap-3 pl-7 pr-2 py-2 rounded-full transition-colors duration-350 cursor-pointer"
                >
                  <span className="premium-cta-white__text text-[15px] font-medium whitespace-nowrap">
                    View Profiles
                  </span>
                  <span className="premium-cta-white__circle relative flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-350 overflow-hidden">
                    <span className="premium-cta-white__arrow absolute inset-0 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
