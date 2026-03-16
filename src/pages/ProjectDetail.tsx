import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { getProjectBySlug } from "@/data/projects";

// Parses content string into paragraphs and --> bullet items
const parseContent = (content: string) => {
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const blocks: { type: "bullet" | "paragraph"; text: string }[] = [];

  for (const line of lines) {
    if (line.startsWith("-->")) {
      blocks.push({ type: "bullet", text: line.replace(/^-->\s*/, "") });
    } else {
      blocks.push({ type: "paragraph", text: line });
    }
  }

  // Group consecutive bullets together
  const grouped: { type: "bullets" | "paragraph"; items?: string[]; text?: string }[] = [];
  for (const block of blocks) {
    if (block.type === "bullet") {
      const last = grouped[grouped.length - 1];
      if (last?.type === "bullets") {
        last.items!.push(block.text);
      } else {
        grouped.push({ type: "bullets", items: [block.text] });
      }
    } else {
      grouped.push({ type: "paragraph", text: block.text });
    }
  }

  return grouped;
};

const HighlightedText = ({ text, highlights }: { text: string; highlights: string[] }) => {
  if (!highlights?.length) return <>{text}</>;
  const regex = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase())
          ? <mark key={i} className="bg-highlight/20 text-foreground font-medium px-0.5 rounded">{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </>
  );
};

const ContentRenderer = ({ content }: { content: string }) => {
  const blocks = parseContent(content);
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {block.text}
            </p>
          );
        }
        return (
          <ul key={i} className="space-y-2 my-2">
            {block.items!.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="text-highlight font-bold mt-0.5 shrink-0">→</span>
                <span className="text-base md:text-lg text-muted-foreground leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

// Section accent colors cycle
const accentColors = [
  "border-blue-400",
  "border-purple-400",
  "border-emerald-400",
  "border-amber-400",
  "border-rose-400",
  "border-cyan-400",
  "border-indigo-400",
  "border-teal-400",
  "border-orange-400",
  "border-pink-400",
  "border-lime-400",
  "border-sky-400",
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : null;

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* Back Button */}
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider font-medium text-highlight">
                {project.category}
              </span>
              <span>•</span>
              <span>{project.readTime}</span>
              <span>•</span>
              <span>
                {new Date(project.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-highlight pl-4">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          {project.heroImage && (
            <div className="overflow-hidden rounded-xl bg-muted mb-16 shadow-md">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Sections */}
          <div className="space-y-16">
            {project.sections?.map((section: any, index: number) => (
              <section key={index} className="relative">
                {/* Colored left border accent per section */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-full ${
                    accentColors[index % accentColors.length]
                  }`}
                />
                <div className="pl-6">
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground mb-4">
                    {section.title}
                  </h2>
                  <ContentRenderer content={section.content} />

                  {section.image && (
                    <figure className="my-8">
                      <div className="overflow-hidden bg-muted mb-3 rounded-xl shadow-sm max-w-3xl mx-auto">
                        <img
                          src={section.image.url}
                          alt={section.image.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <figcaption className="text-sm text-muted-foreground text-center italic">
                        {section.image.caption}
                      </figcaption>
                    </figure>
                  )}

                  {section.additionalContent && (
                    <div className="mt-4">
                      <ContentRenderer content={section.additionalContent} />
                    </div>
                  )}
                </div>
              </section>
            ))}

            {/* My Role */}
            {project.myRole && (
              <section className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full border-highlight bg-highlight opacity-60" />
                <div className="pl-6">
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground mb-4">
                    My Role
                  </h2>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.myRole.trim()}
                  </p>
                </div>
              </section>
            )}

            {/* Impact */}
            {project.impact && project.impact.length > 0 && (
              <section className="bg-muted/40 rounded-2xl p-8 border border-border">
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground mb-6">
                  Impact
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.impact.map((item: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-background rounded-xl px-4 py-3 border border-border shadow-sm"
                    >
                      <span className="text-highlight font-bold text-lg shrink-0">→</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technologies */}
            {project.technologies && (
              <section>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-foreground mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-border text-sm hover:bg-highlight hover:border-highlight hover:text-foreground transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}
             {project.paperLink && (
                <section className="flex items-center gap-4 p-6 rounded-2xl border border-border bg-muted/40">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-1">Research Paper</h2>
                      <p className="text-muted-foreground text-sm">
                      Full methodology, code, and results from EEE549 Statistical Machine Learning.
                      </p>
                  </div>
    
                href={project.paperLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-highlight hover:text-foreground transition-colors shrink-0"
                  <a>
                    {project.paperLink.label} →
                  </a>
                </section>
            )}
            {/* Testimonial */}
            {project.testimonial && (
              <section className="relative overflow-hidden rounded-2xl bg-muted/40 border border-border p-8">
                <div className="absolute top-4 left-6 text-6xl text-highlight opacity-20 font-serif leading-none select-none">
                  "
                </div>
                <blockquote className="text-xl font-serif mb-4 relative z-10 leading-relaxed">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic font-medium">
                  — {project.testimonial.author}, {project.testimonial.role}
                </cite>
              </section>
            )}
          </div>
        </div>
      </article>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-foreground text-background rounded-full shadow-lg hover:bg-highlight hover:text-foreground transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </Layout>
  );
};

export default ProjectDetail;