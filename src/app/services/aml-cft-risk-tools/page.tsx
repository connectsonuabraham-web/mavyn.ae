import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "AML/CFT Risk Tools" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="AML/CFT Risk Tools"
      subtitle="Risk-rating engines, customer scoring, screening calibration and monitoring tuning built on UAE typologies, not imported templates."
      description={[
        "We design and implement AML/CFT risk-rating engines calibrated to the UAE's specific threat landscape — not generic models imported from other jurisdictions.",
        "Our tools cover customer risk scoring, screening calibration, and transaction monitoring tuning. Every model is built around CBUAE, SCA, and DFSA expectations so your risk appetite is defensible at inspection.",
        "We handle the full lifecycle: initial build, annual validation, threshold tuning, and the documentation trail that proves each decision to a supervisor."
      ]}
      image="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
