export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  category: "Marketing" | "Analytical" | "Interpersonal";
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  transferableSkills: string[];
  summary: string;
  order: number;
}

export interface EducationEntry {
  id: string;
  institution: string;
  qualification: string;
  dates: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  issueDate: string;
  credentialUrl: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  categories: string[];
  featured: boolean;
  order: number;
  isDemo: boolean;
}

export interface WhyHireCard {
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}
