import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "A Year of Quotes: 08",
    excerpt: "Very very slowly working through an excessively large Pocket backlog, and this quote from Drew Magary's article...",
    category: "Quotes",
    date: "Feb 28, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Carried Away",
    excerpt: "It's always super exciting to spot my photography in the wild, and even more exciting when it's on a gorgeous cover...",
    category: "Visual Design",
    date: "Feb 21, 2024",
    readTime: "1 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=300&fit=crop",
  },
];

export const BlogPreview = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="section-title mb-8">Brain Dump</h2>
            
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <article className="grid md:grid-cols-2 gap-6">
                    <div className="aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-xs text-muted-foreground mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-xl mb-2 group-hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-muted-foreground">
                        {post.date} · {post.readTime}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:underline"
              >
                View All Posts
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="border-l border-border pl-8">
            <h2 className="section-title mb-4">
              Currently <span className="bg-highlight px-1">Reading</span>
            </h2>
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop"
                alt="Current book"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm mt-4 text-muted-foreground">
              "Thinking, Fast and Slow" by Daniel Kahneman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
