import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";
import { allProjects } from "@/data/projects";

// Only show projects that have caseStudy: true flag
const caseStudyProjects = allProjects.filter((p) => p.caseStudy === true);

const CaseStudies = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in">
            Case <Highlight>Studies</Highlight>
          </h1>
          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Deep dives into how I approach problems — from research and strategy
            through execution and impact.
          </p>

          <div className="space-y-0 divide-y divide-border">
            {caseStudyProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group flex flex-col md:flex-row gap-8 py-12 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Image */}
                <div className="md:w-80 shrink-0 overflow-hidden rounded-xl bg-muted">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-highlight uppercase tracking-widest font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{project.readTime}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(project.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl mb-3 group-hover:underline leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Impact preview */}
                  {project.impact && project.impact.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.impact.slice(0, 2).map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-highlight/10 text-foreground border border-highlight/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="mt-5 text-sm font-medium text-highlight group-hover:underline">
                    Read case study →
                  </span>
                </div>
              </Link>
            ))}

            {caseStudyProjects.length === 0 && (
              <p className="text-muted-foreground py-12 text-center">
                No case studies published yet — check back soon.
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;