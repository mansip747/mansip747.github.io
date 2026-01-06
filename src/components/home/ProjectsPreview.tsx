import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Product Strategy",
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "UX Research",
    category: "Design Research",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
  },
];

export const ProjectsPreview = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="section-title">Featured Projects</h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:underline"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group block"
            >
              <div className="aspect-[3/2] overflow-hidden bg-muted mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {project.category}
              </span>
              <h3 className="font-serif text-lg mt-1 group-hover:underline">
                {project.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
