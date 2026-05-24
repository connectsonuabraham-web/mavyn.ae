export function generateStaticParams() {
  const slugs = [
    "four-pressures-redefining-uae-compliance-2026",
    "managed-compliance-when-outsourcing-works",
    "dnfbp-playbook-aml-you-can-evidence",
    "ubo-esr-free-zone-companies",
    "building-compliance-bench-18-months",
    "readiness-assessment-three-tiers",
  ];
  return slugs.map((slug) => ({ slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
