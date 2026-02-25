import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";
import { allBlogs } from "../data/blogs";  

const Blog = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24  border-t border-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in">
            <Highlight>Brain Dump</Highlight>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Thoughts, insights, and learnings from my journey in product management and design.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {allBlogs.map((post, index) => {
              if (post.type === "external" && post.externalUrl) {
                return (
                  <a
                    key={post.id}
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block animate-slide-up"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <article>
                      <div className="overflow-hidden bg-muted mb-4 relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3 bg-foreground text-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink size={16} />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {post.category}
                        </span>
                        <ExternalLink size={12} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl mb-2 group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </article>
                  </a>
                );
              }

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block animate-slide-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <article>
                    <div className="overflow-hidden bg-muted mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl mb-2 group-hover:underline">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;