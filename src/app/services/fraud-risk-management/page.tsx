import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Fraud Risk Management" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Fraud Risk Management"
      subtitle="Application, transaction and identity fraud frameworks with rule libraries, model oversight and case workflows that close the loop."
      description={[
        "We design fraud risk frameworks that cover application fraud, transaction fraud, and identity fraud — with rule libraries built for the UAE market.",
        "Our approach includes model oversight, scenario testing, and case management workflows that ensure every alert is investigated and closed with a defensible rationale.",
        "We help you build the controls that protect revenue while keeping the firm inspection-ready — balancing customer experience with fraud prevention."
      ]}
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
