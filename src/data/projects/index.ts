import { project1 } from "./project-1";
import { project2 } from "./project-2";
// Import more projects...

export const allProjects = [
  project1,
  // Add more...
];

// Helper function to get project by ID
export const getProjectById = (id: number) => {
  return allProjects.find(project => project.id === id);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string) => {
  return allProjects.find(project => project.slug === slug);
};