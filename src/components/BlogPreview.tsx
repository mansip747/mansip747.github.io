import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { allBlogs } from "@/data/blogs";

export const BlogPreview = () => {
  // Show only first 2-3 posts on homepage
  const featuredBlogs = allBlogs.slice(0, 2);

  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="section-title mb-8">Brain Dump</h2>
            
            <div className="space-y-8">
              {featuredBlogs.map((post) => {
                if (post.type === "external" && post.externalUrl) {
                  return (
                    <a
                      key={post.id}
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <article className="grid md:grid-cols-2 gap-6">
                        <div className="aspect-[16/9] overflow-hidden bg-muted relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-foreground text-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                            <ExternalLink size={16} />
                          </div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-muted-foreground">
                              {post.category}
                            </span>
                            <ExternalLink size={12} className="text-muted-foreground" />
                          </div>
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
                    </a>
                  );
                }
                
                return (
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
                );
              })}
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