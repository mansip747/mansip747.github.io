import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";
import { getProjectBySlug } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : null;
  
  // Scroll to top button state
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <Layout>
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
              <span className="uppercase tracking-wider">{project.category}</span>
              <span>•</span>
              <span>{project.readTime}</span>
              <span>•</span>
              <span>
                {new Date(project.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden bg-muted mb-12">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="section-title">Overview</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </section>

            <section>
              <h2 className="section-title">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.challenge}
              </p>
            </section>

            <section>
              <h2 className="section-title">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.solution}
              </p>
            </section>

            {/* Project Images */}
            {project.images && project.images.length > 0 && (
              <section className="space-y-8">
                {project.images.map((image, index) => (
                  <figure key={index}>
                    <div className="aspect-video overflow-hidden bg-muted mb-3">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <figcaption className="text-sm text-muted-foreground text-center">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </section>
            )}

            <section>
              <h2 className="section-title">My Role</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.myRole}
              </p>
            </section>

            <section>
              <h2 className="section-title">Impact</h2>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-highlight mr-3">→</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {project.technologies && (
              <section>
                <h2 className="section-title">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 border border-border text-sm hover:bg-highlight hover:border-highlight transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {project.testimonial && (
              <section className="border-l-4 border-highlight pl-6 py-4">
                <blockquote className="text-xl font-serif mb-4">
                  "{project.testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic">
                  — {project.testimonial.author}, {project.testimonial.role}
                </cite>
              </section>
            )}
          </div>
        </div>
      </article>

      {/* Scroll to Top Button */}
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