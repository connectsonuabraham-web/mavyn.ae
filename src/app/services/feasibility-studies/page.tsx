import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Feasibility Studies" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Feasibility Studies"
      subtitle="Market sizing, licensing pathway, operating model and financials written so a board, a regulator and a lender can read it the same way."
      description={[
        "We produce feasibility studies that serve three audiences at once: your board for investment decisions, regulators for licensing applications, and lenders for financing.",
        "Our studies cover market sizing, competitive landscape, licensing pathway analysis, operating model design, and financial projections with sensitivity analysis.",
        "Every study is written in plain language with the evidence trail and assumptions clearly stated — so decision-makers can challenge the numbers and trust the conclusions."
      ]}
      image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
