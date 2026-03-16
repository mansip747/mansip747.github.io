import { project1 } from "./project-1";
import { project2 } from "./project-2";
import { project3 } from "./project-3";
import { project4 } from "./project-4";
import { project5 } from "./project-5";
import { project6 } from "./project-6";
import { project7 } from "./project-7";
import { project8 } from "./project-8";
import { project9 } from "./project-9";
import { project10 } from "./project-10";
// Import more projects...

// TypeScript Interfaces
export interface ProjectSection {
  title: string;
  content: string;
  image?: {
    url: string;
    caption: string;
  };
  additionalContent?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  publishDate: string;
  readTime: string;
  heroImage: string;
  type: "internal" | "external";  // ← NEW: Project type
  externalUrl?: string;  // ← NEW: For external links
  sections?: ProjectSection[];  // ← Make optional for external projects
  impact?: string[];  // ← Make optional
  technologies?: string[];  // ← Make optional
  myRole?: string;  // ← Make optional
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  },
  paperLink?: {       
    label: string;
    url: string;
  };
  caseStudy?: boolean;
}

export const allProjects: Project[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9, 
  project10,
  // Add more...
];

// Helper function to get project by ID
export const getProjectById = (id: number): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};
