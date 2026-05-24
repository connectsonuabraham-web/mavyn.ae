"use client";

import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import InsightCard from "@/components/InsightCard";
import PremiumCTA from "@/components/PremiumCTA";
import { IMG } from "@/lib/images";
import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";

// Fallback hardcoded data (used when Sanity has no content yet)
const fallbackCards = [
  {
    category: "Perspective · 6 min",
    title: "Four pressures redefining UAE compliance in 2026",
    description: "Real-time sanctions screening, UBO transparency, AI-driven monitoring and conduct expectations. What the most supervisory cycle will actually test for.",
    image: IMG.museumOfFuture,
    href: "/insights/four-pressures-redefining-uae-compliance-2026"
  },
  {
    category: "Point of View · 4 min",
    title: "Managed compliance: when outsourcing the function actually works",
    description: "When in-house cost curves meet rising regulator expectations, an outcome-based model can pay back inside a single supervisory cycle.",
    image: IMG.analytics,
    href: "/insights/managed-compliance-when-outsourcing-works"
  },
  {
    category: "Briefing · 5 min",
    title: "The DNFBP playbook: AML you can actually evidence",
    description: "Real estate, dealers in precious metals, auditors, lawyers and corporate service providers — what MOEC and the FIU expect, in plain language.",
    image: IMG.glassTower,
    href: "/insights/dnfbp-playbook-aml-you-can-evidence"
  },
  {
    category: "Briefing · 3 min",
    title: "UBO and ESR for free-zone companies",
    description: "What free-zone and mainland entities miss most often on UBO registers and ESR notifications — and how to fix it before renewal.",
    image: IMG.modernOfficeSky,
    href: "/insights/ubo-esr-free-zone-companies"
  },
  {
    category: "Point of View · 5 min",
    title: "Building the compliance bench you'll need in 18 months",
    description: "Why GCC institutions are shifting from headcount plans to capability plans — and what a defensible target operating model looks like.",
    image: IMG.bridge,
    href: "/insights/building-compliance-bench-18-months"
  },
  {
    category: "Briefing · 4 min",
    title: "The readiness assessment, in three tiers",
    description: "A short MAVYN framework for benchmarking AML, sanctions and conduct programmes against what an inspection actually tests.",
    image: IMG.greenCorporate,
    href: "/insights/readiness-assessment-three-tiers"
  }
];

const PER_PAGE = 9;

export default function InsightsPage() {
  const [cards, setCards] = useState(fallbackCards);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [usingSanity, setUsingSanity] = useState(false);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const start = (page - 1) * PER_PAGE;
        const end = start + PER_PAGE;

        const insights = await sanityClient.fetch(
          `*[_type == "insight" && published == true] | order(publishedAt desc) [$start...$end] {
            _id,
            title,
            "slug": slug.current,
            category,
            description,
            featuredImage,
            publishedAt
          }`,
          { start, end }
        );

        const total = await sanityClient.fetch(
          `count(*[_type == "insight" && published == true])`
        );

        if (insights && insights.length > 0) {
          const mapped = insights.map((i: any) => ({
            category: i.category || "Insight",
            title: i.title,
            description: i.description || "",
            image: i.featuredImage ? urlFor(i.featuredImage).width(800).url() : IMG.heroSkyline,
            href: `/insights/${i.slug}`,
          }));
          // Merge: keep hardcoded cards + add new Sanity ones (avoid duplicates by title)
          const hardcodedTitles = new Set(fallbackCards.map((c) => c.title));
          const newFromSanity = mapped.filter((c: any) => !hardcodedTitles.has(c.title));
          setCards([...fallbackCards, ...newFromSanity]);
          if (total > PER_PAGE) {
            setTotalPages(Math.ceil((fallbackCards.length + newFromSanity.length) / PER_PAGE));
          }
          setUsingSanity(newFromSanity.length > 0);
        }
      } catch (err) {
        // Sanity not available or no content — use fallback
      }
    }
    fetchInsights();
  }, [page]);

  return (
    <>
      <PageHero
        label="Insights"
        title="Insights"
        subtitle="Fresh perspectives and practical intelligence for compliance, risk and financial crime."
        image={IMG.heroSkyline}
        height="tall"
        verticalAlign="center"
      />

      <section className="relative py-24 lg:py-32 section-white">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>Insights</SectionLabel>
            <h2
              className="mt-6 font-light text-ink leading-[1.02]"
              style={{ fontSize: "clamp(34px, 4.8vw, 70px)" }}
            >
              Briefings that read like{" "}
              <span className="text-cyan-brand">
                findings, not literature.
              </span>
            </h2>
            <p className="mt-7 text-ink-muted text-[16.5px] leading-relaxed max-w-2xl">
              Short, working perspectives on the rules and operating models
              reshaping UAE financial services, DNFBPs and free-zone businesses
              in 2026.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <InsightCard key={c.title} insight={c} index={i} />
            ))}
          </div>

          {/* Pagination */}
          {usingSanity && totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: "#073F36", color: "#FFFFFF" }}
              >
                <svg width="12" height="8" viewBox="0 0 14 10" fill="none">
                  <path d="M14 5H1M5 1L1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className="w-10 h-10 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-300"
                  style={{
                    background: page === i + 1 ? "#073F36" : "transparent",
                    color: page === i + 1 ? "#FFFFFF" : "#101820",
                    border: page === i + 1 ? "none" : "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ background: "#073F36", color: "#FFFFFF" }}
              >
                <svg width="12" height="8" viewBox="0 0 14 10" fill="none">
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}

          <div className="mt-16 flex flex-col items-start gap-6">
            <p className="text-ink-muted max-w-xl text-[16px] leading-relaxed">
              Our insights distil real cases, regulatory shifts and operational
              lessons — so you can act with clarity.
            </p>
            <PremiumCTA href="/contact">Explore All Insights</PremiumCTA>
          </div>
        </div>
      </section>
    </>
  );
}
