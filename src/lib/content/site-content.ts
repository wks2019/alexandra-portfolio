import type {
  HeroContent,
  TimelineEntry,
  Skill,
  ExperienceEntry,
  EducationEntry,
  Certification,
  Project,
  WhyHireCard,
  Testimonial,
} from "@/lib/types";

export const hero: HeroContent = {
  eyebrow: "Human Centric Strategist",
  headline: "Humanising Digital Interactions Through Real-World Insight.",
  subheadline:
    "I believe the best digital marketing is rooted in a deep understanding of the customer — a skill I honed across a decade in fast-paced hospitality. Now I create campaigns that don't just reach audiences; they resonate with them.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Download CV", href: "/cv.pdf" },
};

export const storyTimeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "Hospitality Foundations",
    description:
      "Started in guest-facing roles, mastering clear communication and rapid adaptability — learning to anticipate needs and deliver exceptional experiences.",
  },
  {
    year: "2018",
    title: "Operations & Team Leadership",
    description:
      "Moved into CRM, supply chain coordination, and team leadership — translating guest feedback into operational improvements.",
  },
  {
    year: "2023",
    title: "The Digital Pivot",
    description:
      "Started asking why customers behaved the way they did, not just how to serve them. That question led straight to marketing and analytics.",
  },
  {
    year: "2024",
    title: "Google Certified",
    description:
      "Completed the Google Digital Marketing & E-commerce Professional Certificate — formalising skills in SEO, analytics, email, and social media.",
  },
  {
    year: "Now",
    title: "Career Transition",
    description:
      "Seeking an entry-level role where I can apply my background in customer insights to create high-impact, scalable marketing campaigns.",
  },
];

export const skills: Skill[] = [
  { name: "Digital Marketing", category: "Marketing" },
  { name: "E-Commerce", category: "Marketing" },
  { name: "SEO & SEM", category: "Marketing" },
  { name: "Social Media Marketing", category: "Marketing" },
  { name: "Email Marketing", category: "Marketing" },
  { name: "Content Marketing", category: "Marketing" },
  { name: "Google Analytics", category: "Analytical" },
  { name: "Data Analysis", category: "Analytical" },
  { name: "Managing Online Stores", category: "Analytical" },
  { name: "Communication", category: "Interpersonal" },
  { name: "Adaptability", category: "Interpersonal" },
  { name: "Time Management", category: "Interpersonal" },
  { name: "Curiosity", category: "Interpersonal" },
  { name: "Problem Solving", category: "Interpersonal" },
];

export const toolLogos: string[] = [
  "HubSpot",
  "Canva",
  "Figma",
  "Microsoft 365",
  "Mailchimp",
  "Google Analytics",
  "Shopify",
];

export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    company: "Luxury Hospitality Group",
    role: "Guest Experience Manager",
    startDate: "2020",
    endDate: "Present",
    summary:
      "Owned the end-to-end guest journey for a premium property, using feedback data to drive service and operational improvements.",
    transferableSkills: [
      "Customer Insight",
      "CRM",
      "Performance Improvement",
      "Stakeholder Management",
    ],
    order: 1,
  },
  {
    id: "exp-2",
    company: "Luxury Hospitality Group",
    role: "Front of House Supervisor",
    startDate: "2017",
    endDate: "2020",
    summary:
      "Trained and led a service team, standardising communication and turning recurring issues into fixed processes. Managed supply chain coordination.",
    transferableSkills: [
      "Team Leadership",
      "Supply Chain Coordination",
      "Communication",
      "Problem Solving",
    ],
    order: 2,
  },
  {
    id: "exp-3",
    company: "Boutique Hotel",
    role: "Guest Relations Associate",
    startDate: "2014",
    endDate: "2017",
    summary:
      "First-line guest contact — built the instinct for reading needs quickly and resolving issues before they escalated.",
    transferableSkills: ["Operational Excellence", "Adaptability"],
    order: 3,
  },
];

export const education: EducationEntry[] = [
  {
    id: "edu-1",
    institution: "Google",
    qualification:
      "Digital Marketing & E-commerce Professional Certificate",
    dates: "2024",
    description:
      "SEO, SEM, analytics, email marketing, social media, and e-commerce fundamentals.",
  },
  {
    id: "edu-2",
    institution: "University",
    qualification: "BA (Hons) Global Business — 2.1",
    dates: "2014",
    description:
      "Core business strategy, marketing principles, and international commerce.",
  },
  {
    id: "edu-3",
    institution: "College",
    qualification: "HND International Travel & Tourism Management",
    dates: "2012",
    description:
      "Foundations in service operations, customer psychology, and hospitality management.",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "Digital Marketing & E-commerce Professional Certificate",
    provider: "Google",
    issueDate: "2024",
    credentialUrl: "#",
  },
  {
    id: "cert-2",
    name: "Google Analytics Certification",
    provider: "Google",
    issueDate: "2024",
    credentialUrl: "#",
  },
  {
    id: "cert-3",
    name: "Fundamentals of Digital Marketing",
    provider: "Google",
    issueDate: "2023",
    credentialUrl: "#",
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "social-media-campaign",
    title: "Social Media Marketing",
    description:
      "A social media post designed in Canva for a pet day care business, built to drive awareness and create engagement across platforms.",
    problem: "Low brand visibility on social channels for a local pet care business.",
    solution:
      "Created scroll-stopping visual content with clear CTAs, optimised for Instagram and Facebook reach.",
    tools: ["Canva", "Meta Business Suite"],
    categories: ["Social Media"],
    featured: true,
    order: 1,
    isDemo: true,
  },
  {
    id: "proj-2",
    slug: "email-newsletter",
    title: "Email Marketing — Newsletter",
    description:
      "A veterinary clinic newsletter designed to provide relevant news and information content to subscribers, building trust and long-term relationships.",
    problem: "The clinic had no regular touchpoint with pet owners between visits.",
    solution:
      "Designed a value-first newsletter with pet care tips, driving repeat bookings through an embedded appointment CTA.",
    tools: ["Mailchimp"],
    categories: ["Email Marketing"],
    featured: true,
    order: 2,
    isDemo: true,
  },
  {
    id: "proj-3",
    slug: "promotional-email",
    title: "Email Marketing — Promotional",
    description:
      "A promotional email for a wellness centre, designed to inform subscribers of a new offer and encourage them to take action.",
    problem: "Low direct booking conversion from existing client base.",
    solution:
      "Created a clear, on-brand promotional email with a time-limited discount code and a single strong CTA.",
    tools: ["Mailchimp"],
    categories: ["Email Marketing"],
    featured: true,
    order: 3,
    isDemo: true,
  },
  {
    id: "proj-4",
    slug: "shopify-product-page",
    title: "Shopify Product Page",
    description:
      "A product detail page created in Shopify based on a product specification sheet, designed to increase awareness, drive traffic, and increase conversions.",
    problem: "Products listed without optimised descriptions or structured detail pages.",
    solution:
      "Built a conversion-focused product page with clear specifications, imagery, and purchase flow.",
    tools: ["Shopify"],
    categories: ["E-Commerce"],
    featured: true,
    order: 4,
    isDemo: true,
  },
];

export const whyHireCards: WhyHireCard[] = [
  {
    title: "Strategic Experience",
    description:
      "Proven experience in CRM, supply chain coordination, and team leadership — I know how to make plans run.",
  },
  {
    title: "Digital Proficiency",
    description:
      "Google Certified in Digital Marketing & E-Commerce, with hands-on project work across SEO, email, social, and analytics.",
  },
  {
    title: "Academic Foundation",
    description:
      "Bachelor's degree in Global Business (2.1 hons), grounding every campaign in solid commercial thinking.",
  },
  {
    title: "Data-Driven Mindset",
    description:
      "Fast-adapting and relentless in pursuing brand growth — I let the numbers guide the strategy.",
  },
  {
    title: "Customer-First Approach",
    description:
      "A decade of reading what people need before they say it — the same instinct behind every good campaign.",
  },
  {
    title: "Human Centric Strategist",
    description:
      "My purpose is to build authentic connections between brands and the communities they serve.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Demo Testimonial",
    role: "General Manager",
    company: "Luxury Hospitality Group",
    quote:
      "Alexandra reads a room, and a report, with the same precision. That combination is rare.",
    rating: 5,
  },
];
