export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  type: "internal" | "external";
  externalUrl?: string;
  content?: string; // For internal blog posts
}

export const allBlogs: BlogPost[] = [
  {
    id: 1,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: "/src/data/blogs/blog-1-images/roblox-hero.png",
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
      <p>You can use HTML or markdown here.</p>
    `,
  },
  {
    id: 2,
    title: "Carried Away",
    excerpt: "It's always super exciting to spot my photography in the wild, and even more exciting when it's on a gorgeous cover...",
    category: "Visual Design",
    date: "Feb 21, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
    type: "internal",
    content: `
      <p>Full blog content for Carried Away...</p>
    `,
  },
  {
    id: 3,
    title: "Product Strategy Deep Dive",
    excerpt: "A comprehensive presentation on product strategy frameworks and real-world applications...",
    category: "Product Management",
    date: "Mar 5, 2024",
    readTime: "15 slides",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    type: "external",
    externalUrl: "https://drive.google.com/file/d/12q6QL0fDu3DKzYVVBQTeE_qB6u77Iao_/view?usp=drive_link",
  },
  {
    id: 4,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop",
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
      <p>You can use HTML or markdown here.</p>
    `,
  },
];

// Helper functions
export const getBlogById = (id: number) => {
  return allBlogs.find(blog => blog.id === id);
};