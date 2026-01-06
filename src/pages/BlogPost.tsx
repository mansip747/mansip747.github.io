import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

// Sample blog post with rich content including images, quotes, and wireframes
const samplePost = {
  id: 1,
  title: "The Art of Wireframing",
  category: "Product Design",
  date: "Feb 14, 2024",
  readTime: "5 min read",
  heroImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200&h=600&fit=crop",
  content: [
    {
      type: "paragraph",
      content: "Wireframing is one of the most fundamental skills in product design. It's where ideas start to take shape, where constraints become visible, and where the foundation of great products is laid.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000&h=600&fit=crop",
      alt: "Wireframe sketches on paper",
      caption: "Early-stage wireframe sketches exploring different layouts",
    },
    {
      type: "paragraph",
      content: "The beauty of wireframing lies in its simplicity. Without the distraction of colors, images, or detailed typography, we can focus purely on structure and user flow.",
    },
    {
      type: "quote",
      content: "Design is not just what it looks like and feels like. Design is how it works.",
      author: "Steve Jobs",
    },
    {
      type: "paragraph",
      content: "When I start a new project, I always begin with pen and paper. There's something about the tactile nature of sketching that frees the mind from the constraints of digital tools.",
    },
    {
      type: "wireframe",
      src: "https://images.unsplash.com/photo-1586717799252-bd134f7e3d20?w=1000&h=800&fit=crop",
      alt: "Digital wireframe mockup",
      caption: "Mid-fidelity wireframe showing the main user flow",
    },
    {
      type: "paragraph",
      content: "Moving from low-fidelity to mid-fidelity wireframes is where the magic happens. This is where we start to see how the actual content will fit, where spacing becomes important, and where accessibility considerations come into play.",
    },
    {
      type: "quote",
      content: "Simplicity is the ultimate sophistication.",
      author: "Leonardo da Vinci",
    },
    {
      type: "paragraph",
      content: "Remember: wireframes are meant to be disposable. Don't get too attached to any single solution. The goal is exploration, not perfection.",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1000&h=600&fit=crop",
      alt: "Team reviewing wireframes",
      caption: "Collaborative wireframe review session",
    },
  ],
};

const BlogPost = () => {
  const { id } = useParams();

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {samplePost.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {samplePost.date}
              </span>
              <span className="text-xs text-muted-foreground">
                {samplePost.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-8">
              {samplePost.title}
            </h1>
            <div className="aspect-[2/1] overflow-hidden bg-muted">
              <img
                src={samplePost.heroImage}
                alt={samplePost.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>
          
          <div className="prose-custom space-y-8">
            {samplePost.content.map((block, index) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                      {block.content}
                    </p>
                  );
                case "image":
                  return (
                    <figure key={index} className="my-12">
                      <div className="overflow-hidden bg-muted">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full h-auto"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-sm text-muted-foreground mt-3 text-center italic">
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "wireframe":
                  return (
                    <figure key={index} className="my-12 p-6 bg-muted/50 border border-border">
                      <div className="overflow-hidden">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full h-auto"
                        />
                      </div>
                      {block.caption && (
                        <figcaption className="text-sm text-muted-foreground mt-4 text-center">
                          <span className="uppercase tracking-wider text-xs">Wireframe:</span> {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "quote":
                  return (
                    <blockquote
                      key={index}
                      className="my-12 pl-8 border-l-4 border-highlight"
                    >
                      <p className="text-2xl font-serif italic mb-4">
                        "{block.content}"
                      </p>
                      {block.author && (
                        <cite className="text-sm text-muted-foreground not-italic">
                          — {block.author}
                        </cite>
                      )}
                    </blockquote>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
