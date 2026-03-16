import b1Image from "./blog-1-images/b1_image.png";
import b2Image from "./blog-2-images/b2_image.png";
import b3Image from "./blog-3-images/b3_image.png";
import b4Image from "./blog-4-images/b4_image.png";

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
    image: b1Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
      <p>You can use HTML or markdown here.</p>
    `,
  },
  {
    id: 2,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b2Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
      <p>You can use HTML or markdown here.</p>
    `,
  },
  {
    id: 3,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b3Image,
    type: "internal",
    content: `
      <p>Full blog content goes here...</p>
      <p>You can use HTML or markdown here.</p>
    `,
  },
  {
    id: 4,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: b4Image,
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