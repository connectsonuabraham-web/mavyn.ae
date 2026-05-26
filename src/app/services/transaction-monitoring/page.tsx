import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Transaction Monitoring" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Transaction Monitoring"
      subtitle="Scenarios that catch what matters. Tuning that keeps false positives under control. Managed L1/L2 alert handling under SLA."
      description={[
        "We build transaction monitoring programmes that detect genuine suspicious activity without drowning your team in false positives.",
        "Our approach starts with scenario design based on UAE-specific typologies — trade-based laundering, structuring patterns, and the behaviours regulators actually look for during inspections.",
        "We provide ongoing tuning, threshold management, and managed L1/L2 alert handling under defined SLAs. Your compliance team focuses on genuine cases while we handle the volume."
      ]}
      image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
