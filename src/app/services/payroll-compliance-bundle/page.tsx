import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Payroll & Compliance Bundle" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Payroll & Compliance Bundle"
      subtitle="Payroll plus labour, tax and statutory compliance MOHRE, FTA, ESR, UBO and corporate tax obligations under a single managed service."
      description={[
        "We combine payroll operations with full statutory compliance under a single managed service — so you don't need separate providers for payroll, tax, and regulatory filings.",
        "The bundle covers WPS payroll, MOHRE labour compliance, FTA VAT returns, ESR notifications, UBO register maintenance, and corporate tax obligations.",
        "One team, one SLA, one point of accountability. We handle the filings, the deadlines, and the documentation — you focus on running the business."
      ]}
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
