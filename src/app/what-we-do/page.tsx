import PageHero from "@/components/PageHero";
import FourPractices from "@/components/FourPractices";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import ServicesStepCarousel from "@/components/ServicesStepCarousel";
import ServiceCard from "@/components/ui/service-card";
import TwelvePracticesCarousel from "@/components/TwelvePracticesCarousel";
import TransformationPractices from "@/components/TransformationPractices";
import StickyDeliverCards from "@/components/StickyDeliverCards";
import RegulatoryRadarPreview from "@/components/RegulatoryRadarPreview";
import CTASection from "@/components/CTASection";
import { IMG, CAP_IMG } from "@/lib/images";

// 12 strategic practices (Twelve Practices carousel)
const twelvePractices = [
  {
    title: "Regulatory Compliance",
    blurb:
      "AML/CFT, sanctions, KYC and supervisory-grade programmes for banks, exchange houses and DNFBPs.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Risk Management",
    blurb:
      "Enterprise, credit, operational and conduct risk — from framework to the next board pack.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Internal & External Audit",
    blurb:
      "Statutory, internal, IT and financial-crime audits that read like findings, not literature.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Cybersecurity",
    blurb:
      "Cyber, third-party risk and incident readiness aligned to NESA, ISO 27001 and PDPL.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Data & Analytics",
    blurb:
      "Data governance, MIS dashboards and AI-ready foundations for risk, compliance and finance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Digital Transformation",
    blurb:
      "Process redesign, RPA and operating models that scale without breaking the controls.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Finance Transformation",
    blurb:
      "Close, control, FP&A, IFRS and the finance-system upgrade you keep deferring.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Operations",
    blurb:
      "Back-office redesign, payroll and shared-service build-out for banks and corporates.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Customer Experience",
    blurb:
      "NPS, voice-of-customer analytics, journey design and complaints handled like controls.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "People & Change",
    blurb:
      "Capability uplift, change management and the training that makes a new policy stick.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Managed Solutions",
    blurb:
      "Outcome-based managed services and specialists deployable in 48 hours.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Strategic Advisory",
    blurb:
      "Market entry, feasibility, M&A and portfolio calls — with the regulator already in the room.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
  }
];

// Operational services (SERVICES carousel)
const services = [
  {
    title: "AML / CFT Risk Tools",
    blurb:
      "Risk-rating engines, customer scoring, screening calibration and monitoring tuning — built on UAE typologies, not imported templates.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Sanctions Screening",
    blurb:
      "List management, fuzzy-match tuning and alert disposition for OFAC, UN, EU, UK and UAE local lists — with the QA trail to defend each call.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Transaction Monitoring",
    blurb:
      "Scenarios that catch what matters. Tuning that keeps false positives under control. Managed L1 / L2 alert handling under SLA.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Fraud Risk Management",
    blurb:
      "Application, transaction and identity fraud frameworks — rule libraries, model oversight and case workflows that close the loop.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "MIS Dashboards",
    blurb:
      "Power BI, Tableau and bespoke dashboards for risk, compliance, finance and operations — instrumented for the committee, not the screensaver.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Website Development",
    blurb:
      "Corporate, brand and product sites for regulated firms — accessible, fast and built around UAE PDPL and cookie-consent rules from day one.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Training & Certification",
    blurb:
      "FATF-style assessor prep, AML/CFT and sanctions training, board briefings and tailored learning paths for compliance, audit and front-line teams.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Payroll Management",
    blurb:
      "WPS-aligned payroll, gratuity, leave accruals and statutory reporting — run on time, audit-clean, no last-minute scramble.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Payroll & Compliance Bundle",
    blurb:
      "Payroll plus labour, tax and statutory compliance — MOHRE, FTA, ESR, UBO and corporate tax obligations under a single managed service.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Auditing Services",
    blurb:
      "Statutory, internal and special-purpose audits — including AML, sanctions and fraud audits with the evidence pack a supervisor can rely on.",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Bank Account Opening",
    blurb:
      "Corporate account opening with UAE banks — KYC packs, source-of-wealth narratives and the relationship management that gets you past onboarding.",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Feasibility Studies",
    blurb:
      "Market sizing, licensing pathway, operating model and financials — written so a board, a regulator and a lender can read it the same way.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1600&q=80"
  }
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        label="Capability"
        title={"What\nWe Do"}
        subtitle="We design, strengthen and evidence compliance capability for UAE businesses."
        image={IMG.district}
      />

      {/* SECTION 1 — Four flagship practices we lead with */}
      <FourPractices />

      {/* SECTION 2 — Twelve practices (Step-by-step card like Services) */}
      <TwelvePracticesCarousel practices={twelvePractices} />

      {/* SECTION — UAE Regulatory Radar */}
      <RegulatoryRadarPreview />

      {/* SECTION 3 — SERVICES (Step-by-step card like Three Routes) */}
      <ServicesStepCarousel services={services} />

      {/* SECTION — How We Deliver */}
      <section className="relative overflow-hidden pt-12 pb-0 font-sans" style={{ background: "#E0F2E0" }}>
        <div className="mx-4 lg:mx-10">
          <div className="text-center mb-0">
            <h2 className="font-semibold" style={{ fontSize: "clamp(24px, 3.4vw, 42px)", color: "#101820" }}>
              How We Deliver
            </h2>
            <p className="mt-3 text-[15px] max-w-lg mx-auto" style={{ color: "#5F6B65" }}>
              Four phases. Clear milestones. Built to operate, not to sit on a shelf.
            </p>
          </div>
        </div>
      </section>

      {/* How We Deliver — Sticky Card Stack */}
      <StickyDeliverCards />

      {/* SECTION 4 — Transformation Practices */}
      <TransformationPractices />

      {/* CTA before footer */}
      <CTASection
        label="Take the next step"
        title="Want to know which capability your business needs first?"
        paragraph="Tell us where the regulatory pressure is — we'll start there. From a single AML review to a multi-year managed programme, the bench scales with the mandate."
        cta="Book a Compliance Discussion"
        ctaHref="/contact"
        image={IMG.modernOfficeSky}
      />
    </>
  );
}
