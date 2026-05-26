import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "MIS Dashboards" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="MIS Dashboards"
      subtitle="Power BI, Tableau and bespoke dashboards for risk, compliance, finance and operations instrumented for the committee, not the screensaver."
      description={[
        "We build management information systems that give your board, risk committee, and compliance function the data they need to make decisions — not decorative charts that sit unused.",
        "Our dashboards cover risk metrics, compliance KPIs, financial performance, and operational SLAs. Built in Power BI, Tableau, or bespoke solutions depending on your infrastructure.",
        "Every dashboard is designed with the end user in mind: committee-ready views for leadership, operational drill-downs for teams, and automated alerting for exceptions."
      ]}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
