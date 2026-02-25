import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { allProjects } from "@/data/projects";

export const ProjectsPreview = () => {
  const featuredProjects = allProjects.slice(0, 3); // Show first 3 projects

  return (
    <section className="py-16 border-t border-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title mb-8">Featured Projects</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => {
            // External project
            if (project.type === "external" && project.externalUrl) {
              return (
                <a
                  key={project.id}
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <article>
                    <div className="overflow-hidden bg-muted mb-4 relative">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-foreground text-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      {project.category}
                      <ExternalLink size={10} />
                    </span>
                    <h3 className="font-serif text-xl mb-2 group-hover:underline">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.shortDescription}
                    </p>
                  </article>
                </a>
              );
            }

            // Internal project
            return (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group block"
              >
                <article>
                  <div className="overflow-hidden bg-muted mb-4">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl mb-2 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.shortDescription}
                  </p>
                </article>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:underline"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
