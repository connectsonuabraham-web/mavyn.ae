import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Payroll Management" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Payroll Management"
      subtitle="WPS-aligned payroll, gratuity, leave accruals and statutory reporting run on time, audit-clean, no last-minute scramble."
      description={[
        "We run payroll operations that are WPS-aligned, audit-clean, and delivered on time — every cycle, without the last-minute scramble.",
        "Our managed service covers salary processing, gratuity calculations, leave accruals, end-of-service benefits, and all statutory reporting required by UAE labour law.",
        "You get a dedicated payroll team that understands MOHRE requirements, WPS compliance, and the documentation trail that keeps you inspection-ready."
      ]}
      image="https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
