import { getTeamMembers } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { teamProfiles } from "@/lib/team-data";
import TeamPageClient from "./TeamPageClient";

export default async function TeamPage() {
  // Always start with hardcoded members
  const hardcodedMembers = teamProfiles.map((p) => ({
    name: p.name,
    slug: p.slug,
    title: p.title,
    practice: p.practice,
    image: p.image,
    isFounder: p.slug === "muna-salvi",
  }));

  // Fetch any additional members from Sanity
  let sanityMembers: any[] = [];
  try {
    const fetched = await getTeamMembers();
    if (fetched && fetched.length > 0) {
      // Only include Sanity members whose slug doesn't already exist in hardcoded
      const hardcodedSlugs = new Set(hardcodedMembers.map((m) => m.slug));
      sanityMembers = fetched
        .filter((m: any) => !hardcodedSlugs.has(m.slug))
        .map((m: any) => ({
          name: m.name,
          slug: m.slug,
          title: m.jobTitle || "",
          practice: m.practice || "",
          image: m.photo ? urlFor(m.photo).width(600).height(800).url() : "/images/placeholder.jpg",
          isFounder: m.isFounder || false,
        }));
    }
  } catch (err) {
    // Sanity not available — just use hardcoded
  }

  // Combine: hardcoded first, then new Sanity members
  const allMembers = [...hardcodedMembers, ...sanityMembers];

  return <TeamPageClient members={allMembers} />;
}
