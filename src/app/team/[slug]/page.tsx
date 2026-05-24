import { getTeamMemberBySlug, getTeamMembers } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { getProfileBySlug, teamProfiles } from "@/lib/team-data";
import ProfilePageClient from "./ProfilePageClient";
import { notFound } from "next/navigation";

type ProfileData = {
  name: string;
  slug: string;
  jobTitle: string;
  practice: string;
  image: string;
  profileLabel: string;
  profileNumber: string;
  currentRole?: string;
  formerRoles?: string;
  credentials?: string;
  experienceSummary?: string;
  snapshotTagline?: string;
  bullets: string[];
  expertise: string[];
  timeline: { year: string; label: string }[];
  email?: string;
  isFounder: boolean;
};

// Build a combined slug list for prev/next navigation
async function getAllSlugs(): Promise<string[]> {
  const hardcodedSlugs = teamProfiles.map((p) => p.slug);

  try {
    const sanityMembers = await getTeamMembers();
    if (sanityMembers && sanityMembers.length > 0) {
      const hardcodedSet = new Set(hardcodedSlugs);
      const newSlugs = sanityMembers
        .filter((m: any) => !hardcodedSet.has(m.slug))
        .map((m: any) => m.slug);
      return [...hardcodedSlugs, ...newSlugs];
    }
  } catch (err) {
    // Sanity not available
  }

  return hardcodedSlugs;
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try hardcoded first
  const hardcoded = getProfileBySlug(slug);

  if (hardcoded) {
    const allSlugs = await getAllSlugs();
    const currentIndex = allSlugs.indexOf(slug);
    const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
    const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

    const profile: ProfileData = {
      name: hardcoded.name,
      slug: hardcoded.slug,
      jobTitle: hardcoded.title,
      practice: hardcoded.practice,
      image: hardcoded.image,
      profileLabel: hardcoded.profileLabel,
      profileNumber: hardcoded.profileNumber,
      currentRole: hardcoded.current,
      formerRoles: hardcoded.former,
      credentials: hardcoded.credentials,
      experienceSummary: hardcoded.experience,
      snapshotTagline: hardcoded.snapshotTagline,
      bullets: hardcoded.bullets,
      expertise: hardcoded.expertise,
      timeline: hardcoded.timeline || [],
      email: hardcoded.email,
      isFounder: hardcoded.slug === "muna-salvi",
    };

    return <ProfilePageClient profile={profile} prevSlug={prevSlug} nextSlug={nextSlug} />;
  }

  // Not in hardcoded — try Sanity (new member added by client)
  try {
    const sanityMember = await getTeamMemberBySlug(slug);

    if (sanityMember) {
      const allSlugs = await getAllSlugs();
      const currentIndex = allSlugs.indexOf(slug);
      const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
      const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

      const profile: ProfileData = {
        name: sanityMember.name,
        slug: sanityMember.slug,
        jobTitle: sanityMember.jobTitle || "",
        practice: sanityMember.practice || "",
        image: sanityMember.photo ? urlFor(sanityMember.photo).width(640).height(853).url() : "/images/placeholder.jpg",
        profileLabel: sanityMember.profileLabel || "ADVISOR PROFILE",
        profileNumber: sanityMember.profileNumber || "",
        currentRole: sanityMember.currentRole,
        formerRoles: sanityMember.formerRoles,
        credentials: sanityMember.credentials,
        experienceSummary: sanityMember.experienceSummary,
        snapshotTagline: sanityMember.snapshotTagline,
        bullets: sanityMember.bullets || [],
        expertise: sanityMember.expertise || [],
        timeline: sanityMember.timeline || [],
        email: sanityMember.email,
        isFounder: sanityMember.isFounder || false,
      };

      return <ProfilePageClient profile={profile} prevSlug={prevSlug} nextSlug={nextSlug} />;
    }
  } catch (err) {
    // Sanity not available
  }

  notFound();
}
