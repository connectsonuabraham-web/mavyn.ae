import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import InsightCard from "@/components/InsightCard";
import PremiumCTA from "@/components/PremiumCTA";
import { IMG } from "@/lib/images";

const cards = [
  {
    category: "Perspective · 6 min",
    title: "Four pressures redefining UAE compliance in 2026",
    description:
      "Real-time sanctions screening, UBO transparency, AI-driven monitoring and conduct expectations. What the most supervisory cycle will actually test for.",
    image: IMG.museumOfFuture
  },
  {
    category: "Point of View · 4 min",
    title: "Managed compliance: when outsourcing the function actually works",
    description:
      "When in-house cost curves meet rising regulator expectations, an outcome-based model can pay back inside a single supervisory cycle.",
    image: IMG.analytics
  },
  {
    category: "Briefing · 5 min",
    title: "The DNFBP playbook: AML you can actually evidence",
    description:
      "Real estate, dealers in precious metals, auditors, lawyers and corporate service providers — what MOEC and the FIU expect, in plain language.",
    image: IMG.glassTower
  },
  {
    category: "Briefing · 3 min",
    title: "UBO and ESR for free-zone companies",
    description:
      "What free-zone and mainland entities miss most often on UBO registers and ESR notifications — and how to fix it before renewal.",
    image: IMG.modernOfficeSky
  },
  {
    category: "Point of View · 5 min",
    title: "Building the compliance bench you'll need in 18 months",
    description:
      "Why GCC institutions are shifting from headcount plans to capability plans — and what a defensible target operating model looks like.",
    image: IMG.bridge
  },
  {
    category: "Briefing · 4 min",
    title: "The readiness assessment, in three tiers",
    description:
      "A short MAVYN framework for benchmarking AML, sanctions and conduct programmes against what an inspection actually tests.",
    image: IMG.greenCorporate
  }
];

export default function InsightsPage() {
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

      <section className="relative py-24 lg:py-32" style={{ background: "#FFFFFF" }}>
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
