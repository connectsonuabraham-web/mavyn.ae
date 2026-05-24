"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type Member = {
  name: string;
  title: string;
  practice: string;
  bio: string;
  image: string;
  slug?: string;
};

type Props = {
  member: Member;
  index?: number;
};

export default function TeamMember({ member, index = 0 }: Props) {
  const slug = member.slug || member.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="w-full"
    >
      <Link href={`/team/${slug}`} className="group flex flex-col items-center text-center cursor-pointer w-full">
        {/* Portrait image */}
        <div className="relative w-full aspect-[3/3.5] sm:aspect-[3/4] overflow-hidden rounded-lg sm:rounded-2xl border border-white/10 group-hover:border-cyan-brand/45 group-hover:shadow-glow transition-all duration-500">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover object-top grayscale-[30%] contrast-[1.05] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(2,8,15,0.05) 0%, rgba(2,8,15,0) 40%, rgba(2,8,15,0.7) 100%)"
            }}
          />
        </div>

        {/* Role label — tight to name */}
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5">
          <span
            aria-hidden
            className="block w-[5px] sm:w-[6px] h-[5px] sm:h-[6px] rotate-45 bg-cyan-brand"
          />
          <span className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-cyan-brand font-semibold">
            {member.title}
          </span>
        </div>

        {/* Name */}
        <h3
          className="mt-1 sm:mt-1.5 uppercase text-ink font-medium leading-tight group-hover:text-cyan-brand transition-colors text-[11px] sm:text-[14px] lg:text-[18px] text-center"
        >
          {member.name}
        </h3>

        {/* Practice — wraps nicely on mobile */}
        <p className="mt-1 sm:mt-1.5 text-[8px] sm:text-[10px] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-ink/60 font-medium leading-relaxed px-1 text-center">
          {member.practice}
        </p>

        {/* View profile hint */}
        <span
          aria-hidden
          className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-[8px] sm:text-[10px] tracking-[0.2em] uppercase text-ink/40 group-hover:text-cyan-brand transition-colors"
        >
          View profile
          <svg width="14" height="5" viewBox="0 0 22 8" fill="none">
            <path
              d="M0 4H20M16 1L20 4L16 7"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

