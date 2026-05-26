import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Auditing Services" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Auditing Services"
      subtitle="Statutory, internal and special-purpose audits including AML, sanctions and fraud audits with the evidence pack a supervisor can rely on."
      description={[
        "We deliver statutory, internal, and special-purpose audits with findings that read like actionable recommendations — not academic literature.",
        "Our audit practice covers AML programme audits, sanctions effectiveness reviews, fraud control assessments, IT audits, and external quality assessments (EQA).",
        "Every audit comes with the evidence pack, the rationale, and the remediation roadmap that a supervisor can read and rely on during an inspection."
      ]}
      image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
