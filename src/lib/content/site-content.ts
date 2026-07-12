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
  eyebrow: "Hospitality → Digital Marketing",
  headline: "Turning Customer Experience Into Digital Growth.",
  subheadline:
    "Over 10 years creating exceptional customer experiences in luxury hospitality. Now applying that same precision, empathy, and analytical thinking to digital marketing.",
  primaryCta: { label: "View Portfolio", href: "#work" },
  secondaryCta: { label: "Download CV", href: "/cv.pdf" },
};

export const storyTimeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "Front of House, Luxury Hospitality",
    description:
      "Started in guest-facing roles, learning that every interaction is a chance to read intent and deliver the right experience at the right moment.",
  },
  {
    year: "2018",
    title: "Operations & Team Leadership",
    description:
      "Moved into managing teams and service standards — translating guest feedback into operational change, on a weekly cadence.",
  },
  {
    year: "2023",
    title: "Curiosity Meets Data",
    description:
      "Started asking why guests behaved the way they did, not just how to serve them. That question led straight to marketing and analytics.",
  },
  {
    year: "2024",
    title: "Google Digital Marketing & E-commerce Certificate",
    description:
      "Formalised the shift — SEO, analytics, email and social — while continuing to apply it inside a live hospitality operation.",
  },
  {
    year: "Now",
    title: "Career Transition",
    description:
      "Bringing a decade of customer insight into digital strategy, campaign execution, and measurable growth.",
  },
];

export const skills: Skill[] = [
  { name: "SEO", category: "Marketing" },
  { name: "Google Analytics", category: "Analytical" },
  { name: "Email Marketing", category: "Marketing" },
  { name: "Content Marketing", category: "Marketing" },
  { name: "Social Media", category: "Marketing" },
  { name: "Customer Experience", category: "Interpersonal" },
  { name: "Data Analysis", category: "Analytical" },
  { name: "Digital Strategy", category: "Analytical" },
  { name: "Communication", category: "Interpersonal" },
  { name: "Problem Solving", category: "Interpersonal" },
  { name: "Project Coordination", category: "Analytical" },
  { name: "Team Collaboration", category: "Interpersonal" },
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
      "Trained and led a service team, standardising communication scripts and turning recurring complaints into fixed processes.",
    transferableSkills: ["Training", "Communication", "Problem Solving"],
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
    transferableSkills: ["Operational Excellence", "Leadership"],
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
    qualification: "BA (Hons) Global Business",
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
    slug: "seo-website-audit",
    title: "SEO Website Audit",
    description:
      "A full technical and content SEO audit for a hospitality small business, identifying quick wins and a 90-day roadmap.",
    problem: "Organic visibility had plateaued for two years.",
    solution:
      "Prioritised fixes across technical SEO, on-page content, and local search signals.",
    tools: ["Google Search Console", "Screaming Frog", "Ahrefs"],
    categories: ["SEO"],
    featured: true,
    order: 1,
    isDemo: true,
  },
  {
    id: "proj-2",
    slug: "social-media-campaign",
    title: "Social Media Campaign",
    description:
      "A 6-week Instagram and TikTok campaign concept built around guest storytelling for a boutique hotel brand.",
    problem: "Low engagement despite a strong visual product.",
    solution:
      "Shifted from polished promotional content to guest-story-driven short-form video.",
    tools: ["Meta Business Suite", "CapCut", "Canva"],
    categories: ["Social Media"],
    featured: true,
    order: 2,
    isDemo: true,
  },
  {
    id: "proj-3",
    slug: "email-marketing-campaign",
    title: "Email Marketing Campaign",
    description:
      "A lifecycle email sequence concept for post-stay guest retention and repeat bookings.",
    problem: "One-time guests rarely rebooked directly.",
    solution:
      "Designed a 5-email nurture sequence with segmentation by stay type.",
    tools: ["Mailchimp", "Figma"],
    categories: ["Email Marketing"],
    featured: true,
    order: 3,
    isDemo: true,
  },
  {
    id: "proj-4",
    slug: "google-analytics-dashboard",
    title: "Google Analytics Dashboard",
    description:
      "A custom reporting dashboard translating raw analytics into decisions non-technical stakeholders could act on.",
    problem: "Leadership couldn't interpret raw GA4 reports.",
    solution:
      "Built a simplified dashboard highlighting the 5 metrics that mattered most.",
    tools: ["GA4", "Looker Studio"],
    categories: ["Data Analysis"],
    featured: false,
    order: 4,
    isDemo: true,
  },
  {
    id: "proj-5",
    slug: "content-marketing-strategy",
    title: "Content Marketing Strategy",
    description:
      "A quarterly content strategy connecting hospitality expertise to top-of-funnel search demand.",
    problem: "Content was produced ad hoc with no measurable goal.",
    solution:
      "Mapped content pillars to search intent and booking-funnel stage.",
    tools: ["Ahrefs", "Notion"],
    categories: ["Content Marketing"],
    featured: false,
    order: 5,
    isDemo: true,
  },
];

export const whyHireCards: WhyHireCard[] = [
  {
    title: "Customer-First Mindset",
    description:
      "A decade of reading what people need before they say it — the same instinct behind every good campaign.",
  },
  {
    title: "Analytical Thinking",
    description:
      "Comfortable turning raw feedback and data into a clear, prioritised action plan.",
  },
  {
    title: "Fast Learner",
    description:
      "Self-directed a full career pivot, from certification to applied projects, in under a year.",
  },
  {
    title: "Operations Experience",
    description:
      "Knows how to make a plan actually run — budgets, timelines, and teams included.",
  },
  {
    title: "Digital Marketing Knowledge",
    description:
      "Google-certified across SEO, analytics, email, and social, with hands-on project work.",
  },
  {
    title: "Adaptability",
    description:
      "Hospitality means the plan changes hourly. Comfortable adjusting strategy in real time.",
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
