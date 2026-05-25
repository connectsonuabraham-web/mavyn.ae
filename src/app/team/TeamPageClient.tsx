"use client";

import Image from "next/image";
import Link from "next/link";
import TeamHero from "@/components/TeamHero";
import TeamMember, { type Member } from "@/components/TeamMember";

type TeamMemberData = {
  name: string;
  slug: string;
  title: string;
  practice: string;
  image: string;
  isFounder: boolean;
};

export default function TeamPageClient({ members }: { members: TeamMemberData[] }) {
  const founder = members.find((m) => m.isFounder);
  const team = members.filter((m) => !m.isFounder);

  const founderMember: Member | null = founder
    ? { name: founder.name, title: founder.title, practice: founder.practice, bio: "", image: founder.image, slug: founder.slug }
    : null;

  const teamMembers: Member[] = team.map((m) => ({
    name: m.name,
    title: m.title,
    practice: m.practice,
    bio: "",
    image: m.image,
    slug: m.slug,
  }));

  return (
    <>
      <TeamHero />

      <section className="relative section-white text-ink pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-10 lg:pt-14">
          {/* Heading */}
          <div className="text-center mb-16 lg:mb-20">
            <h2
              className="font-light text-ink leading-[1.0]"
              style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
            >
              Get to know our teamwork
            </h2>
          </div>

          {/* Founder feature */}
          {founderMember && (
            <div className="flex flex-col items-center">
              <Link href={`/team/${founderMember.slug}`} className="group flex flex-col items-center text-center cursor-pointer">
                <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-bg-deep/10 group-hover:border-cyan-brand/45 group-hover:shadow-[0_20px_60px_-15px_rgba(20,123,88,0.2)] transition-all duration-500">
                  <Image
                    src={founderMember.image}
                    alt={founderMember.name}
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
                    <span className="block w-[8px] h-[8px] rotate-45 bg-cyan-brand shadow-[0_0_10px_rgba(20,123,88,0.6)]" />
                    <span className="text-[11px] tracking-[0.32em] uppercase text-cyan-brand font-semibold">
                      {founderMember.title}
                    </span>
                  </div>
                  <h3
                    className="mt-3 uppercase font-medium text-ink leading-tight group-hover:text-cyan-brand transition-colors"
                    style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
                  >
                    {founderMember.name}
                  </h3>
                  <p className="mt-2 text-[11.5px] tracking-[0.24em] uppercase text-ink/60 font-semibold">
                    {founderMember.practice}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[10px] tracking-[0.28em] uppercase text-ink/45 group-hover:text-cyan-brand transition-colors">
                    View profile →
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Grid of team members */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 lg:gap-8 items-start mx-auto px-2 sm:px-0">
            {teamMembers.map((m, i) => (
              <TeamMember key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 lg:px-10 py-10 lg:py-14 section-white">
        <div className="relative overflow-hidden rounded-2xl" style={{ background: "#073F36" }}>
          <div className="relative min-h-[300px] lg:min-h-[360px] flex items-center">
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
                  href={founderMember ? `/team/${founderMember.slug}` : "/team"}
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
