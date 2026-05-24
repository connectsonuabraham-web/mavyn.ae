import { defineType, defineField } from "sanity";

export default defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    // ─── 1. Full Name ───
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      description: "e.g. Amer Ibrahim",
      validation: (Rule) => Rule.required(),
    }),

    // ─── 2. URL Slug ───
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      description: "Click Generate to auto-create from name",
      validation: (Rule) => Rule.required(),
    }),

    // ─── 3. Profile Photo ───
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      options: { hotspot: true },
      description: "Portrait photo, 3:4 ratio recommended (e.g. 600x800px)",
    }),

    // ─── 4. Profile Label ───
    defineField({
      name: "profileLabel",
      title: "Profile Label",
      type: "string",
      description: "e.g. ADVISOR PROFILE or FOUNDER PROFILE",
      initialValue: "ADVISOR PROFILE",
    }),

    // ─── 5. Job Title ───
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "e.g. Senior Advisor, CEO & Founder, Advisor",
    }),

    // ─── 7. Practice Area ───
    defineField({
      name: "practice",
      title: "Practice Area",
      type: "string",
      description: "e.g. Audit, Risk & Compliance",
    }),

    // ─── 8. Current Role ───
    defineField({
      name: "currentRole",
      title: "Current Role",
      type: "string",
      description: "e.g. CFO, Mawarid Finance PJSC",
    }),

    // ─── 9. Former Roles ───
    defineField({
      name: "formerRoles",
      title: "Former Roles",
      type: "string",
      description: "e.g. First Gulf Bank · Citibank N.A.",
    }),

    // ─── 10. Credentials ───
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "string",
      description: "e.g. Audito · AML/CTF Certified Specialist",
    }),

    // ─── 11. Experience Summary ───
    defineField({
      name: "experienceSummary",
      title: "Experience Summary",
      type: "string",
      description: "e.g. 30+ years across UAE & Sudan banking",
    }),

    // ─── 12. Expertise Tagline ───
    defineField({
      name: "snapshotTagline",
      title: "Expertise Tagline",
      type: "string",
      description: "Shown under 'Expertise Overview' heading, e.g. Governance · AML/CTF · Internal Audit",
    }),

    // ─── 13. Expertise Overview Bullets ───
    defineField({
      name: "bullets",
      title: "Expertise Overview Bullets",
      type: "array",
      of: [{ type: "string" }],
      description: "Main bullet points in the Expertise Overview section (3-4 recommended), e.g. 30+ years of banking experience across UAE and Sudan financial institutions.",
    }),

    // ─── 14. Expertise Tags ───
    defineField({
      name: "expertise",
      title: "Expertise Tags",
      type: "array",
      of: [{ type: "string" }],
      description: "Short tags shown as chips, e.g. Governance & QC, AML/CTF, Transaction Monitoring, Internal Audit",
    }),

    // ─── 15. Career Timeline ───
    defineField({
      name: "timeline",
      title: "Career Timeline",
      type: "array",
      of: [
        {
          type: "object",
          name: "timelineEntry",
          fields: [
            {
              name: "year",
              title: "Year / Location",
              type: "string",
              description: "e.g. Sudan, UAE, 2004, 2018",
            },
            {
              name: "label",
              title: "Description",
              type: "string",
              description: "e.g. Citibank Khartoum, First Gulf Bank, ADIB",
            },
          ],
          preview: {
            select: { title: "year", subtitle: "label" },
          },
        },
      ],
      description: "Career milestones shown as horizontal timeline (5 entries recommended). Add in chronological order.",
    }),

    // ─── 18. Is Founder? ───
    defineField({
      name: "isFounder",
      title: "Is Founder?",
      type: "boolean",
      initialValue: false,
      description: "Check to feature this person as the founder (large card) on team page",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "jobTitle",
      media: "photo",
    },
  },
});
