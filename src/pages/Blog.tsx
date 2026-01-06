import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";

const blogPosts = [
  {
    id: 1,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's How to Write 10,000 Words a Week really resonated with me.",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Carried Away",
    excerpt: "It's always super exciting to spot my photography in the wild, and even more exciting when it's on a gorgeous cover created by the talented design team.",
    category: "Visual Design",
    date: "Feb 21, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "The Art of Wireframing",
    excerpt: "Exploring the fundamentals of wireframing and how it shapes the product development process from concept to execution.",
    category: "Product Design",
    date: "Feb 14, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Building Team Culture Remotely",
    excerpt: "Lessons learned from building and maintaining team culture in a fully remote environment during unprecedented times.",
    category: "Leadership",
    date: "Feb 7, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Design Systems That Scale",
    excerpt: "How to build design systems that grow with your organization and maintain consistency across products.",
    category: "Design Systems",
    date: "Jan 31, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop",
  },
];

const categories = ["All", "Quotes", "Visual Design", "Product Design", "Leadership", "Design Systems"];

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in">
            Brain <Highlight>Dump</Highlight>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Thoughts on design, product management, books, and everything in between.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm border transition-colors ${
                  category === "All"
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:bg-highlight hover:border-highlight"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <article className="grid md:grid-cols-3 gap-8 pb-12 border-b border-border">
                  <div className="md:col-span-1">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl mb-3 group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
