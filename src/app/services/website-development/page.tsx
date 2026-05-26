import ServiceLandingPage from "@/components/ServiceLandingPage";

export const metadata = { title: "Website Development" };

export default function Page() {
  return (
    <ServiceLandingPage
      title="Website Development"
      subtitle="Corporate, brand and product sites for regulated firms accessible, fast and built around UAE PDPL and cookie-consent rules from day one."
      description={[
        "We build corporate websites for regulated firms that are fast, accessible, and compliant with UAE data protection requirements from day one.",
        "Every site is designed with PDPL cookie-consent rules, accessibility standards, and the performance expectations of modern users. No retrofitting compliance after launch.",
        "From corporate branding sites to product platforms, we handle design, development, and deployment — with the hosting and maintenance that keeps you live and secure."
      ]}
      image="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1600&q=80"
    />
  );
}
