import { sanityClient } from "./sanity";

// Insights / White Papers
export async function getInsights(page = 1, perPage = 9) {
  const start = (page - 1) * perPage;
  const end = start + perPage;

  const insights = await sanityClient.fetch(
    `*[_type == "insight" && published == true] | order(publishedAt desc) [$start...$end] {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      featuredImage,
      publishedAt
    }`,
    { start, end }
  );

  const total = await sanityClient.fetch(
    `count(*[_type == "insight" && published == true])`
  );

  return { insights, total, totalPages: Math.ceil(total / perPage) };
}

export async function getInsightBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "insight" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      featuredImage,
      content,
      publishedAt
    }`,
    { slug }
  );
}

// Team Members
export async function getTeamMembers() {
  return sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id,
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
      isFounder,
      order
    }`
  );
}

export async function getTeamMemberBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "teamMember" && slug.current == $slug][0] {
      _id,
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
      isFounder,
      order
    }`,
    { slug }
  );
}

// Site Settings
export async function getSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      announcementBar,
      announcementLink,
      contactEmail,
      contactPhone,
      contactAddress,
      linkedinUrl,
      instagramUrl,
      twitterUrl
    }`
  );
}
