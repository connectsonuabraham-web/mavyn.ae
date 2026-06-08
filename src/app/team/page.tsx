import { getTeamMembers } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { teamProfiles } from "@/lib/team-data";
import TeamPageClient from "./TeamPageClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TeamPage() {
  // Fetch all members from Sanity
  let allMembers: any[] = [];
  try {
    const fetched = await getTeamMembers();
    if (fetched && fetched.length > 0) {
      allMembers = fetched.map((m: any) => ({
        name: m.name,
        slug: m.slug,
        title: m.jobTitle || "",
        practice: m.practice || "",
        image: m.photo ? urlFor(m.photo).width(600).height(800).url() : "/images/placeholder.jpg",
        isFounder: m.isFounder || false,
      }));
    }
  } catch (err) {
    // Sanity not available — fall back to hardcoded
  }

  // Fall back to hardcoded if Sanity returned nothing
  if (allMembers.length === 0) {
    allMembers = teamProfiles.map((p) => ({
      name: p.name,
      slug: p.slug,
      title: p.title,
      practice: p.practice,
      image: p.image,
      isFounder: p.slug === "muna-salvi",
    }));
  }

  return <TeamPageClient members={allMembers} />;
}
