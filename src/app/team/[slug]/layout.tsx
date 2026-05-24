import { getTeamMembers } from "@/lib/sanity-queries";
import { teamProfiles } from "@/lib/team-data";

export async function generateStaticParams() {
  // Try Sanity first
  const sanityMembers = await getTeamMembers();
  if (sanityMembers && sanityMembers.length > 0) {
    return sanityMembers.map((m: any) => ({ slug: m.slug }));
  }
  // Fallback to hardcoded
  return teamProfiles.map((p) => ({ slug: p.slug }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
