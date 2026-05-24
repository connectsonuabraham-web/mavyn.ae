"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PremiumCTA from "@/components/PremiumCTA";
import { sanityClient, urlFor } from "@/lib/sanity";

// Hardcoded insights for now — will be replaced by Sanity data
const insightsData = [
  {
    slug: "four-pressures-redefining-uae-compliance-2026",
    category: "Perspective · 6 min",
    title: "Four pressures redefining UAE compliance in 2026",
    description: "Real-time sanctions screening, UBO transparency, AI-driven monitoring and conduct expectations. What the most supervisory cycle will actually test for.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=80",
    content: [
      "The UAE regulatory landscape is evolving faster than most compliance teams can keep pace with. Four distinct pressures are converging in 2026 that will fundamentally reshape how regulated firms approach their obligations.",
      "First, real-time sanctions screening is no longer optional. The days of batch processing are over. Regulators expect immediate, continuous screening against all relevant lists — OFAC, UN, EU, UK, and UAE local lists.",
      "Second, UBO transparency requirements have teeth. Cabinet Decision No. 58 demands accurate, up-to-date beneficial ownership registers. The penalties for non-compliance are significant.",
      "Third, AI-driven monitoring is becoming the baseline expectation. Manual transaction monitoring with static rules is no longer defensible. Supervisors want to see adaptive, risk-based approaches.",
      "Fourth, conduct expectations are expanding. It's no longer enough to have policies on paper. Regulators want evidence of a compliance culture — from board level to front-line staff."
    ]
  },
  {
    slug: "managed-compliance-when-outsourcing-works",
    category: "Point of View · 4 min",
    title: "Managed compliance: when outsourcing the function actually works",
    description: "When in-house cost curves meet rising regulator expectations, an outcome-based model can pay back inside a single supervisory cycle.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    content: [
      "The economics of in-house compliance are breaking down for mid-market firms. Rising regulatory expectations demand specialist skills that are expensive to recruit and retain.",
      "Managed compliance — outsourcing the function to a specialist provider under defined SLAs — offers a different model. One where cost is predictable, expertise is guaranteed, and the regulator sees consistent quality.",
      "The key is outcome-based contracting. Not headcount, not hours — outcomes. Alert disposition rates, STR quality scores, inspection readiness metrics.",
      "For firms with 50-500 employees, the math often works inside a single supervisory cycle. The cost of one failed inspection typically exceeds two years of managed service fees."
    ]
  },
  {
    slug: "dnfbp-playbook-aml-you-can-evidence",
    category: "Briefing · 5 min",
    title: "The DNFBP playbook: AML you can actually evidence",
    description: "Real estate, dealers in precious metals, auditors, lawyers and corporate service providers — what MOEC and the FIU expect, in plain language.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80",
    content: [
      "DNFBPs face a unique challenge: they must comply with the same AML/CFT framework as banks, but with a fraction of the resources and often without dedicated compliance staff.",
      "The Ministry of Economy and the FIU have made their expectations clear. Every DNFBP needs a documented risk assessment, written policies and procedures, ongoing monitoring, and evidence of staff training.",
      "The key word is 'evidence'. It's not enough to have a policy document. You need to show it's being followed — transaction records, screening logs, training attendance, and suspicious activity reports where warranted.",
      "Start with the basics: know your customer, understand the source of funds, screen against sanctions lists, and report anything suspicious. Document everything."
    ]
  },
  {
    slug: "ubo-esr-free-zone-companies",
    category: "Briefing · 3 min",
    title: "UBO and ESR for free-zone companies",
    description: "What free-zone and mainland entities miss most often on UBO registers and ESR notifications — and how to fix it before renewal.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80",
    content: [
      "Free-zone companies frequently underestimate their UBO and ESR obligations. The penalties for non-compliance can include fines, licence suspension, and reputational damage.",
      "UBO registers must be accurate and current. Any change in beneficial ownership must be reported within 15 days. Many companies fail this basic requirement.",
      "ESR notifications are due annually. If your company conducts a 'relevant activity' — and the definition is broader than most assume — you must file.",
      "The fix is straightforward: audit your current filings, identify gaps, and establish a calendar of obligations. Most issues can be resolved before your next licence renewal."
    ]
  },
  {
    slug: "building-compliance-bench-18-months",
    category: "Point of View · 5 min",
    title: "Building the compliance bench you'll need in 18 months",
    description: "Why GCC institutions are shifting from headcount plans to capability plans — and what a defensible target operating model looks like.",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=2000&q=80",
    content: [
      "The compliance talent market in the GCC is tightening. Experienced professionals command premium salaries, and the pipeline of qualified candidates isn't keeping pace with demand.",
      "Forward-thinking institutions are responding by shifting from headcount-based planning to capability-based planning. The question isn't 'how many people do we need?' but 'what capabilities must we have?'",
      "A defensible target operating model balances three elements: in-house expertise for strategic decisions, managed services for operational execution, and technology for scale.",
      "Start planning now. The regulatory expectations of 2027 are already visible. The firms that build their bench today will be inspection-ready when the cycle turns."
    ]
  },
  {
    slug: "readiness-assessment-three-tiers",
    category: "Briefing · 4 min",
    title: "The readiness assessment, in three tiers",
    description: "A short MAVYN framework for benchmarking AML, sanctions and conduct programmes against what an inspection actually tests.",
    image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=2000&q=80",
    content: [
      "Not all compliance programmes are created equal. Our three-tier framework helps firms understand where they stand — and what it takes to move up.",
      "Tier 1: Foundational. Policies exist, basic screening is in place, training happens annually. This meets minimum requirements but won't withstand detailed scrutiny.",
      "Tier 2: Defensible. Risk assessments drive controls, monitoring is tuned to actual typologies, evidence is organised and retrievable. This is where most inspections pass.",
      "Tier 3: Exemplary. Proactive risk identification, real-time monitoring, board-level engagement, and continuous improvement. This is where regulators hold you up as an example.",
      "Most firms sit between Tier 1 and Tier 2. The gap is usually not resources — it's discipline and documentation."
    ]
  }
];

export default function InsightDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [insight, setInsight] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchInsight() {
      try {
        // Try Sanity first
        const sanityInsight = await sanityClient.fetch(
          `*[_type == "insight" && slug.current == $slug][0] {
            title,
            "slug": slug.current,
            category,
            description,
            featuredImage,
            content
          }`,
          { slug }
        );

        if (sanityInsight) {
          setInsight({
            title: sanityInsight.title,
            slug: sanityInsight.slug,
            category: sanityInsight.category || "Insight",
            description: sanityInsight.description || "",
            image: sanityInsight.featuredImage ? urlFor(sanityInsight.featuredImage).width(1600).url() : "",
            content: sanityInsight.content, // Rich text blocks from Sanity
            isSanity: true,
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        // Sanity not available
      }

      // Fallback to hardcoded
      const fallback = insightsData.find((i) => i.slug === slug);
      if (fallback) {
        setInsight(fallback);
      }
      setLoading(false);
    }
    fetchInsight();
  }, [slug]);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ background: "#FFFFFF" }}>
        <div className="animate-pulse text-ink/40 text-[14px]">Loading...</div>
      </section>
    );
  }

  if (!insight) {
    return (
      <section className="min-h-screen flex items-center justify-center" style={{ background: "#FFFFFF" }}>
        <div className="text-center">
          <h1 className="text-[24px] font-semibold text-ink">Insight not found</h1>
          <div className="mt-6">
            <PremiumCTA href="/insights">Back to Insights</PremiumCTA>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden mt-[90px] lg:mt-[100px]">
        <div className="absolute inset-0">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(7,63,54,0.6) 0%, rgba(7,63,54,0.9) 100%)" }} />
        </div>
        <div className="relative w-full mx-auto max-w-[860px] px-6 lg:px-12 pb-14 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.3em] uppercase font-medium"
            style={{ color: "#16D6A3" }}
          >
            {insight.category}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-white font-light leading-[1.1]"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {insight.title}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 lg:py-24" style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[860px] px-6 lg:px-12">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-ink/60 hover:text-cyan-brand transition-colors duration-300 cursor-pointer mb-10"
          >
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" className="transition-transform duration-300 hover:-translate-x-1">
              <path d="M16 5H2M6 1L2 5L6 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Back to Insights
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose-mavyn"
          >
            <p className="text-[16px] leading-[1.8] font-medium" style={{ color: "#101820" }}>
              {insight.description}
            </p>
            <div className="mt-8 space-y-6">
              {insight.isSanity && insight.content ? (
                // Sanity rich text — render blocks
                insight.content.map((block: any, i: number) => {
                  if (block._type === "block") {
                    const text = block.children?.map((c: any) => c.text).join("") || "";
                    if (block.style === "h2") return <h2 key={i}>{text}</h2>;
                    if (block.style === "h3") return <h3 key={i}>{text}</h3>;
                    if (block.style === "blockquote") return <blockquote key={i}>{text}</blockquote>;
                    return <p key={i}>{text}</p>;
                  }
                  if (block._type === "image" && block.asset) {
                    return (
                      <div key={i} className="my-8 rounded-xl overflow-hidden">
                        <img src={urlFor(block).width(800).url()} alt="" className="w-full" />
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                // Hardcoded fallback — array of strings
                insight.content?.map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))
              )}
            </div>
          </motion.div>

          <div className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <PremiumCTA href="/contact">Discuss This Topic</PremiumCTA>
          </div>
        </div>
      </section>
    </>
  );
}
