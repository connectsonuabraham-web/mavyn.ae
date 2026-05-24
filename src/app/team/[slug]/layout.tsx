import { teamProfiles } from "@/lib/team-data";

export async function generateStaticParams() {
  return teamProfiles.map((p) => ({ slug: p.slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
