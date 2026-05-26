import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Bank Account Opening" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Bank Account Opening"
      subtitle="Corporate account opening with UAE banks KYC packs, source-of-wealth narratives and the relationship management that gets you past onboarding."
      description={[
        "We help businesses open corporate bank accounts in the UAE — navigating the KYC requirements, documentation standards, and relationship management that gets you past onboarding.",
        "Our team prepares complete KYC packs, source-of-wealth narratives, business activity descriptions, and the supporting documentation that UAE banks require.",
        "We manage the relationship with the bank's onboarding team, handle follow-up queries, and ensure your application moves through the process without unnecessary delays."
      ]}
      image="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
