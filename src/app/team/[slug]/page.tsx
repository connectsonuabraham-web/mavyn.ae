"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getProfileBySlug, teamProfiles } from "@/lib/team-data";
import { sanityClient, urlFor } from "@/lib/sanity";
import ProfilePageClient from "./ProfilePageClient";

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

export default function ProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [prevSlug, setPrevSlug] = useState<string | null>(null);
  const [nextSlug, setNextSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      // Try hardcoded first
      const hardcoded = getProfileBySlug(slug);
      if (hardcoded) {
        const currentIndex = teamProfiles.findIndex((p) => p.slug === slug);
        setPrevSlug(currentIndex > 0 ? teamProfiles[currentIndex - 1].slug : null);
        setNextSlug(currentIndex < teamProfiles.length - 1 ? teamProfiles[currentIndex + 1].slug : null);

        setProfile({
          name: hardcoded.name,
          slug: hardcoded.slug,
          jobTitle: hardcoded.title,
          practice: hardcoded.practice,
          image: hardcoded.profileImage || hardcoded.image,
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
        });
        setLoading(false);
        return;
      }

      // Try Sanity
      try {
        const member = await sanityClient.fetch(
          `*[_type == "teamMember" && slug.current == $slug][0] {
            name,
            "slug": slug.current,
            jobTitle,
            practice,
            photo,
            profileLabel,
            profileNumber,
            currentRole,
            formerRoles,
            credentials,
            experienceSummary,
            snapshotTagline,
            bullets,
            expertise,
            timeline,
            email,
            isFounder
          }`,
          { slug }
        );

        if (member) {
          // Get all members for prev/next navigation
          const allMembers = await sanityClient.fetch(
            `*[_type == "teamMember"] | order(order asc) { "slug": slug.current }`
          );
          const allSlugs = [...teamProfiles.map(p => p.slug), ...allMembers.filter((m: any) => !teamProfiles.find(p => p.slug === m.slug)).map((m: any) => m.slug)];
          const currentIndex = allSlugs.indexOf(slug);
          setPrevSlug(currentIndex > 0 ? allSlugs[currentIndex - 1] : null);
          setNextSlug(currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null);

          setProfile({
            name: member.name,
            slug: member.slug,
            jobTitle: member.jobTitle || "",
            practice: member.practice || "",
            image: member.photo ? urlFor(member.photo).width(640).height(853).url() : "/images/placeholder.jpg",
            profileLabel: member.profileLabel || "ADVISOR PROFILE",
            profileNumber: member.profileNumber || "",
            currentRole: member.currentRole,
            formerRoles: member.formerRoles,
            credentials: member.credentials,
            experienceSummary: member.experienceSummary,
            snapshotTagline: member.snapshotTagline,
            bullets: member.bullets || [],
            expertise: member.expertise || [],
            timeline: member.timeline || [],
            email: member.email,
            isFounder: member.isFounder || false,
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        // Sanity not available
      }

      setLoading(false);
    }

    loadProfile();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#FFFFFF" }}>
        <div className="animate-pulse text-ink/40 text-[14px]">Loading...</div>
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#FFFFFF" }}>
        <div className="text-center">
          <h1 className="text-[24px] font-semibold text-ink">Profile not found</h1>
          <a href="/team" className="mt-4 inline-block text-cyan-brand">Back to Team</a>
        </div>
      </main>
    );
  }

  return <ProfilePageClient profile={profile} prevSlug={prevSlug} nextSlug={nextSlug} />;
}
