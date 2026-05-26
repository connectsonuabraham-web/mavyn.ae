import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Sanctions Screening" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Sanctions Screening"
      subtitle="List management, fuzzy-match tuning and alert disposition for OFAC, UN, EU, UK and UAE local lists with the QA trail to defend each call."
      description={[
        "We configure and manage sanctions screening programmes that balance detection with operational efficiency — reducing false positives without missing genuine hits.",
        "Our team handles list management across OFAC, UN, EU, UK, and UAE local sanctions lists. We tune fuzzy-match algorithms, calibrate thresholds, and build the alert disposition workflows your compliance team needs.",
        "Every screening decision is documented with a QA trail that satisfies regulatory expectations. We provide managed L1 alert handling under SLA when your team needs capacity support."
      ]}
      image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
