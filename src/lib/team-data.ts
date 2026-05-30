export type TeamProfile = {
  slug: string;
  name: string;
  title: string;
  profileLabel: string;
  profileNumber: string;
  practice: string;
  snapshotTagline: string;
  bullets: string[];
  expertise: string[];
  current?: string;
  former?: string;
  credentials?: string;
  experience?: string;
  email?: string;
  linkedin?: string;
  timeline?: { year: string; label: string }[];
  image: string;
  profileImage?: string;
};

export const teamProfiles: TeamProfile[] = [
  {
    slug: "muna-salvi",
    name: "Muna Salvi",
    title: "Founder & Advisor",
    profileLabel: "FOUNDER PROFILE",
    profileNumber: "",
    practice: "Compliance, Risk & Financial Crime Advisory",
    snapshotTagline: "AML/CFT · Sanctions/TFS · Governance",
    bullets: [
      "20+ years across banking compliance, governance, risk, financial crime and internal audit environments.",
      "Led financial crime compliance and risk-control workstreams across regulated banking settings.",
      "Hands-on advisory depth across AML/CFT, sanctions/TFS, KYC, FATCA/CRS, governance frameworks and remediation programmes.",
      "Founded Mavyn to deliver practical, regulator-ready advisory and execution support for banks, DNFBPs and growing businesses."
    ],
    expertise: ["AML/CFT", "KYC/CDD/ODD", "Sanctions/TFS", "FATCA/CRS", "Governance & Policy", "Remediation Programmes"],
    current: "Founder, Mavyn LLC",
    credentials: "MBA · ACAMS · CFE · ICA",
    experience: "20+ years across UAE banking compliance",
    email: "muna@mavyn.ae",
    timeline: [
      { year: "MBA", label: "University of Europe" },
      { year: "ACAMS", label: "Anti-Money Laundering" },
      { year: "CFE", label: "Fraud Examiner" },
      { year: "ICA", label: "Compliance" },
      { year: "Mavyn", label: "Founder" }
    ],
    image: "/images/Muna%20Salvi.png",
    profileImage: "/images/Muna%20Salvi.png"
  },
  {
    slug: "ahmed-ismet",
    name: "Ahmed Ismet",
    title: "Senior Advisor",
    profileLabel: "ADVISOR PROFILE",
    profileNumber: "01",
    practice: "Strategic Regulatory Counsel",
    snapshotTagline: "Banking supervision · AML/CFT · Board governance",
    bullets: [
      "39 years of UAE regulatory experience across banking supervision and AML/CFT.",
      "14 years with the UAE FIU — supporting AML/CFT laws, regulations, training and FATF/MENAFATF mutual evaluations.",
      "Current Chairman of Bangladesh Development Bank plc, appointed by the Financial Institutions Division of Bangladesh Ministry of Finance (Nov. 2024).",
      "Former senior banking executive in Bangladesh and advisor/consultant to UAE-regulated financial institutions."
    ],
    expertise: ["Banking Supervision", "AML/CFT", "FIU & FATF", "Board Governance", "Prudential Regulation", "Financial Crime Training"],
    current: "Chairman, Bangladesh Development Bank plc",
    former: "UAE Central Bank · UAE FIU",
    experience: "39 years of UAE regulatory experience",
    credentials: "M.A. Economics, Dhaka University",
    timeline: [
      { year: "1975", label: "CBUAE" },
      { year: "1982", label: "Banking Supervision" },
      { year: "2004", label: "UAE FIU" },
      { year: "2018", label: "Advisory" },
      { year: "2024", label: "Board Chairman" }
    ],
    image: "/images/Ahmed%20Ismet.png"
  },
  {
    slug: "pratick-dalal",
    name: "Pratick Dalal",
    title: "Senior Advisor",
    profileLabel: "ADVISOR PROFILE",
    profileNumber: "02",
    practice: "Finance, Digital & Islamic Banking",
    snapshotTagline: "Finance · Digital banking · Islamic banking",
    bullets: [
      "25+ years of banking experience across the UAE, Oman and India — two decades in the GCC.",
      "CFO of Mawarid Finance PJSC, a CBUAE-regulated finance company.",
      "Leadership exposure across Islamic finance, UAE digital banking, conventional banking and Bank Muscat in Oman.",
      "Expertise spans regulatory and financial reporting, capital planning, taxation, investor relations and finance transformation."
    ],
    expertise: ["Finance Transformation", "Digital Banking", "Islamic Finance", "Regulatory Reporting", "Capital Planning", "Investor Relations"],
    current: "CFO, Mawarid Finance PJSC",
    credentials: "Chartered Accountant",
    experience: "25+ years across UAE, Oman & India",
    linkedin: "pratick-dalal",
    timeline: [
      { year: "India", label: "ABN AMRO · ICICI" },
      { year: "Oman", label: "Bank Muscat" },
      { year: "UAE", label: "Al Masraf" },
      { year: "UAE", label: "Al Maryah CB" },
      { year: "UAE", label: "Mawarid Finance" }
    ],
    image: "/images/Pratick%20Dalal.png"
  },
  {
    slug: "amer-ibrahim",
    name: "Amer Ibrahim",
    title: "Senior Advisor",
    profileLabel: "ADVISOR PROFILE",
    profileNumber: "03",
    practice: "Audit, Risk & Compliance",
    snapshotTagline: "Governance · AML/CTF · Internal Audit",
    bullets: [
      "30+ years of banking experience across UAE and Sudan financial institutions.",
      "Held multiple department-head roles at Abu Dhabi Islamic Bank across governance, quality control, transaction monitoring, compliance and internal audit.",
      "Experience across ADIB, First Gulf Bank, Citibank N.A. Dubai/Khartoum and Saudi Sudanese Bank.",
      "Deep expertise in governance, AML/CTF, regulatory affairs, internal controls, business banking operations and KPI reporting."
    ],
    expertise: ["Governance & QC", "AML/CTF", "Transaction Monitoring", "Internal Audit", "CBUAE Regulatory Affairs", "Business Banking Ops"],
    credentials: "Audito · AML/CTF Certified Specialist",
    former: "First Gulf Bank · Citibank N.A.",
    experience: "30+ years across UAE & Sudan banking",
    timeline: [
      { year: "Sudan", label: "Citibank Khartoum" },
      { year: "Sudan", label: "Saudi Sudanese Bank" },
      { year: "UAE", label: "Citibank Dubai" },
      { year: "UAE", label: "First Gulf Bank" },
      { year: "UAE", label: "ADIB" }
    ],
    image: "/images/Amer%20Ibrahim.png"
  },
  {
    slug: "sreenath-vr",
    name: "Sreenath V R",
    title: "Senior Advisor",
    profileLabel: "ADVISOR PROFILE",
    profileNumber: "04",
    practice: "Senior Consultant Data & Analytics",
    snapshotTagline: "Data Analytics · Cloud Transformation · Project Management",
    bullets: [
      "20+ years of extensive IT experience delivering end-to-end data and cloud transformation projects across diverse industries.",
      "Proven cloud leadership managing large-scale projects on core platforms including AWS, Azure, Nutanix and Google Cloud to optimize performance and ROI.",
      "Advanced expertise in Agentic AI-driven automation to eliminate manual processes, resulting in a 30% improvement in operational efficiency."
    ],
    expertise: ["Data Analytics & Reporting", "Cloud Lifecycle Management", "Process Automation & Agentic AI", "Business Intelligence & ETL", "Data Modeling & Warehousing", "KPI Tracking & Dashboards", "Strategic Planning", "Stakeholder Engagement", "Agile Project Management"],
    former: "Sr. Consultant Data Analytics & Project Manager, F9 Infotech IT Solutions · Managing Partner, Suddi Business Ventures (P) Ltd · Assistant Manager-IT(MIS), Eastern Condiments (P) Ltd",
    experience: "20+ years of Data and Cloud transformation experience",
    credentials: "MBA – Systems\nOCI Certified Data Science Professional",
    timeline: [
      { year: "2004", label: "IT & MIS" },
      { year: "2020", label: "Business Leadership" },
      { year: "2024", label: "Data Analytics Consulting" },
      { year: "2018", label: "Advisory" },
      { year: "2025", label: "OCI Data Science Certification" }
    ],
    image: "/images/Sreenath%20V%20RNEW.jpeg"
  },
  {
    slug: "alanood-almazrouei",
    name: "AlAnood AlMazrouei",
    title: "Advisor",
    profileLabel: "ADVISOR PROFILE",
    profileNumber: "05",
    practice: "Marketing, Innovation & Strategic Growth",
    snapshotTagline: "Marketing, Innovation & Strategic Growth",
    bullets: [
      "Emerging advisor with a strong focus on innovation, brand positioning, customer engagement and strategic growth initiatives within the UAE market.",
      "Supports advisory initiatives across marketing strategy, digital presence, client engagement and innovation-driven business positioning.",
      "Brings a modern perspective on customer experience, market visibility and strategic communications aligned with evolving business and financial sector expectations.",
      "Contributes to MAVYN's growth initiatives through brand development, innovation strategy and stakeholder engagement."
    ],
    expertise: ["Brand Strategy", "Innovation & Growth", "Customer Engagement", "Digital Presence", "Strategic Communications", "Market Positioning"],
    credentials: "Bachelors in Business Transformation",
    timeline: [
      { year: "UAE", label: "" }
    ],
    image: "/images/AlAnood%20AlMazroue.png"
  }
];

export function getProfileBySlug(slug: string): TeamProfile | undefined {
  return teamProfiles.find((p) => p.slug === slug);
}

