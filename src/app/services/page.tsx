"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import ThreeRoutesCarousel from "@/components/ThreeRoutesCarousel";
import ServiceCard from "@/components/ui/service-card";
import { ServiceCarousel, type Service as AnimatedService } from "@/components/ui/services-card";
import {
  ShieldCheck,
  Search,
  Activity,
  AlertTriangle,
  BarChart3,
  Globe,
  GraduationCap,
  Wallet,
  FileCheck,
  Building2,
  FileText,
  Target
} from "lucide-react";
import {
  BuildingIcon,
  PulseIcon,
  GlobeIcon,
  ShieldIcon,
  DashboardIcon,
  CodeIcon,
  GraduationIcon,
  UsersIcon,
  WalletIcon,
  FileCheckIcon,
  BankIcon,
  TargetIcon
} from "@/components/ServiceIcons";
import { IMG } from "@/lib/images";

type Service = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "AML / CFT Risk Tools",
    body: "Risk-rating engines, customer scoring, screening calibration and monitoring tuning — built on UAE typologies, not imported templates.",
    icon: <BuildingIcon />
  },
  {
    title: "Sanctions Screening",
    body: "List management, fuzzy-match tuning and alert disposition for OFAC, UN, EU, UK and UAE local lists — with the QA trail to defend each call.",
    icon: <PulseIcon />
  },
  {
    title: "Transaction Monitoring",
    body: "Scenarios that catch what matters. Tuning that keeps false positives under control. Managed L1 / L2 alert handling under SLA.",
    icon: <GlobeIcon />
  },
  {
    title: "Fraud Risk Management",
    body: "Application, transaction and identity fraud frameworks — rule libraries, model oversight and case workflows that close the loop.",
    icon: <ShieldIcon />
  },
  {
    title: "MIS Dashboards",
    body: "Power BI, Tableau and bespoke dashboards for risk, compliance, finance and operations — instrumented for the committee, not the screensaver.",
    icon: <DashboardIcon />
  },
  {
    title: "Website Development",
    body: "Corporate, brand and product sites for regulated firms — accessible, fast and built around UAE PDPL and cookie-consent rules from day one.",
    icon: <CodeIcon />
  },
  {
    title: "Training & Certification",
    body: "FATF-style assessor prep, AML/CFT and sanctions training, board briefings and tailored learning paths for compliance, audit and front-line teams.",
    icon: <GraduationIcon />
  },
  {
    title: "Payroll Management",
    body: "WPS-aligned payroll, gratuity, leave accruals and statutory reporting — run on time, audit-clean, no last-minute scramble.",
    icon: <UsersIcon />
  },
  {
    title: "Payroll & Compliance Bundle",
    body: "Payroll plus labour, tax and statutory compliance — MOHRE, FTA, ESR, UBO and corporate tax obligations under a single managed service.",
    icon: <WalletIcon />
  },
  {
    title: "Auditing Services",
    body: "Internal and special-purpose audits — including AML, sanctions and fraud audits with the evidence pack a supervisor can rely on.",
    icon: <FileCheckIcon />
  },
  {
    title: "Bank Account Opening",
    body: "Corporate account opening with UAE banks — KYC packs, source-of-wealth narratives and the relationship management that gets you past onboarding.",
    icon: <BankIcon />
  },
  {
    title: "Feasibility Studies",
    body: "Market sizing, licensing pathway, operating model and financials — written so a board, a regulator and a lender can read it the same way.",
    icon: <TargetIcon />
  }
];

const animatedServices: AnimatedService[] = [
  { number: "001", title: "AML/CFT Risk Tools", description: "Risk-rating engines, customer scoring, screening calibration and monitoring tuning.", icon: ShieldCheck, gradient: "bg-[#073F36]" },
  { number: "002", title: "Sanctions Screening", description: "List management, fuzzy-match tuning and alert disposition for OFAC, UN, EU, UK and UAE local lists.", icon: Search, gradient: "bg-[#0A5240]" },
  { number: "003", title: "Transaction Monitoring", description: "Scenarios that catch what matters. Tuning that keeps false positives under control.", icon: Activity, gradient: "bg-[#073F36]" },
  { number: "004", title: "Fraud Risk Management", description: "Application, transaction and identity fraud frameworks with rule libraries and case workflows.", icon: AlertTriangle, gradient: "bg-[#0A5240]" },
  { number: "005", title: "MIS Dashboards", description: "Power BI, Tableau and bespoke dashboards for risk, compliance, finance and operations.", icon: BarChart3, gradient: "bg-[#073F36]" },
  { number: "006", title: "Website Development", description: "Corporate, brand and product sites for regulated firms, accessible and PDPL-compliant.", icon: Globe, gradient: "bg-[#0A5240]" },
  { number: "007", title: "Training & Certification", description: "AML/CFT and sanctions training, board briefings and tailored learning paths.", icon: GraduationCap, gradient: "bg-[#073F36]" },
  { number: "008", title: "Payroll Management", description: "WPS-aligned payroll, gratuity, leave accruals and statutory reporting.", icon: Wallet, gradient: "bg-[#0A5240]" },
  { number: "009", title: "Auditing Services", description: "Statutory, internal and special-purpose audits with the evidence pack a supervisor can rely on.", icon: FileCheck, gradient: "bg-[#073F36]" },
  { number: "010", title: "Bank Account Opening", description: "Corporate account opening with UAE banks, KYC packs and source-of-wealth narratives.", icon: Building2, gradient: "bg-[#0A5240]" },
  { number: "011", title: "Feasibility Studies", description: "Market sizing, licensing pathway, operating model and financials.", icon: FileText, gradient: "bg-[#073F36]" },
  { number: "012", title: "Compliance Bundle", description: "Payroll plus labour, tax and statutory compliance under a single managed service.", icon: Target, gradient: "bg-[#0A5240]" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title={"Services"}
        subtitle="Focused advisory and implementation support across the regulatory obligations UAE businesses need to manage."
        image={IMG.glassTower}
        verticalAlign="center"
      />

      <section className="relative py-24 lg:py-32 section-white">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Services</SectionLabel>
            <h2
              className="mt-6 font-light text-ink leading-[1.05]"
              style={{ fontSize: "clamp(34px, 4.8vw, 70px)" }}
            >
              The work behind the work,{" "}
              <span className="font-normal text-cyan-brand">
                built and run.
              </span>
            </h2>
            <p className="mt-7 max-w-xl text-ink-muted text-[15px] lg:text-[16px] leading-[1.75]">
              Whether you&rsquo;re a Tier-1 bank or a five-person free-zone
              company, the back office still has to file, pay, monitor and
              report. We do the building, the running, or both.
            </p>
          </div>

          {/* 4x3 Grid of Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <ServiceCard title="AML/CFT Risk Tools" subtitle="Risk-rating engines, customer scoring, screening calibration and monitoring tuning built on UAE typologies, not imported templates." image="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=800&q=80" href="/services/aml-cft-risk-tools" />
            <ServiceCard title="Sanctions Screening" subtitle="List management, fuzzy-match tuning and alert disposition for OFAC, UN, EU, UK and UAE local lists with the QA trail to defend each call." image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80" href="/services/sanctions-screening" />
            <ServiceCard title="Transaction Monitoring" subtitle="Scenarios that catch what matters. Tuning that keeps false positives under control. Managed L1/L2 alert handling under SLA." image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" href="/services/transaction-monitoring" />
            <ServiceCard title="Fraud Risk Management" subtitle="Application, transaction and identity fraud frameworks with rule libraries, model oversight and case workflows that close the loop." image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" href="/services/fraud-risk-management" />
            <ServiceCard title="MIS Dashboards" subtitle="Power BI, Tableau and bespoke dashboards for risk, compliance, finance and operations instrumented for the committee, not the screensaver." image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" href="/services/mis-dashboards" />
            <ServiceCard title="Website Development" subtitle="Corporate, brand and product sites for regulated firms accessible, fast and built around UAE PDPL and cookie-consent rules from day one." image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80" href="/services/website-development" />
            <ServiceCard title="Training & Certification" subtitle="FATF-style assessor prep, AML/CFT and sanctions training, board briefings and tailored learning paths for compliance, audit and front-line teams." image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" href="/services/training-certification" />
            <ServiceCard title="Payroll Management" subtitle="WPS-aligned payroll, gratuity, leave accruals and statutory reporting run on time, audit-clean, no last-minute scramble." image="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=800&q=80" href="/services/payroll-management" />
            <ServiceCard title="Payroll & Compliance Bundle" subtitle="Payroll plus labour, tax and statutory compliance MOHRE, FTA, ESR, UBO and corporate tax obligations under a single managed service." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" href="/services/payroll-compliance-bundle" />
            <ServiceCard title="Auditing Services" subtitle="Statutory, internal and special-purpose audits including AML, sanctions and fraud audits with the evidence pack a supervisor can rely on." image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" href="/services/auditing-services" />
            <ServiceCard title="Bank Account Opening" subtitle="Corporate account opening with UAE banks KYC packs, source-of-wealth narratives and the relationship management that gets you past onboarding." image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=800&q=80" href="/services/bank-account-opening" />
            <ServiceCard title="Feasibility Studies" subtitle="Market sizing, licensing pathway, operating model and financials written so a board, a regulator and a lender can read it the same way." image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" href="/services/feasibility-studies" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — Three Routes To Get Started (Carousel) */}
      <ThreeRoutesCarousel />

      <CTASection
        label="Talk to Us"
        title="Tell us where the regulatory pressure is. We'll start there."
        cta="Contact Us"
        image={IMG.contactAerial}
      />
    </>
  );
}

function ServiceTile({
  service,
  index
}: {
  service: Service;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative h-full p-7 lg:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-12px_rgba(7,63,54,0.3)] overflow-hidden cursor-pointer"
      style={{ background: "#073F36", borderColor: "rgba(22,214,163,0.15)" }}
    >
      {/* Icon in green rounded square */}
      <div
        className="flex items-center justify-center w-14 h-14 rounded-xl mb-6"
        style={{ background: "#90D890" }}
      >
        <span className="[&>svg]:w-7 [&>svg]:h-7 [&>svg]:stroke-[2.5]" style={{ color: "#073F36" }}>
          {service.icon}
        </span>
      </div>

      <h3
        className="font-semibold leading-[1.18]"
        style={{ fontSize: "17px", color: "#FFFFFF" }}
      >
        {service.title}
      </h3>

      <p className="mt-4 text-[13.5px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
        {service.body}
      </p>

      {/* Bottom glow on hover */}
      <span
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-16 bg-cyan-brand/0 group-hover:bg-cyan-brand/10 blur-2xl transition-all duration-700 pointer-events-none"
      />

      <Link
        href="/contact"
        aria-label={`Enquire about ${service.title}`}
        className="absolute inset-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-brand/60 rounded-2xl"
      />
    </motion.div>
  );
}

