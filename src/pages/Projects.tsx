import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Highlight } from "@/components/ui/Highlight";

const projects = [
  {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    description: "Complete brand identity system for a tech startup including logo, color palette, typography, and brand guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    year: "2024",
  },
  {
    id: 2,
    title: "Product Strategy",
    category: "Product Management",
    description: "Led product strategy for a SaaS platform, resulting in 40% increase in user engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 3,
    title: "UX Research Study",
    category: "Design Research",
    description: "Comprehensive user research study informing the redesign of a mobile banking application.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    year: "2023",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Product Design",
    description: "End-to-end product design for a sustainable fashion marketplace.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    year: "2022",
  },
  {
    id: 5,
    title: "Marketing Campaign",
    category: "Marketing",
    description: "Integrated marketing campaign that increased brand awareness by 150%.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    year: "2022",
  },
  {
    id: 6,
    title: "Design System",
    category: "Design Systems",
    description: "Comprehensive design system for a enterprise software company.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
    year: "2021",
  },
];

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
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group block animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <article>
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl mb-2 group-hover:underline">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {project.description}
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
