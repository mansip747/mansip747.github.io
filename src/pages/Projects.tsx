import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";
import { allProjects } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 animate-fade-in">
            Selected <Highlight>Projects</Highlight>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            A collection of work spanning product management, brand design, and strategic consulting.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <article>
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(project.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl mb-2 group-hover:underline">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;