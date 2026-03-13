import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Highlight } from "../ui/Highlight";

export const HeroSection = () => {
  return (
<section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="relative border border-foreground">  {/* Changed: border-2 back to border (1px) */}
      <div className="absolute -top-4 left-8 bg-background px-4">
        <h2 className="text-2xl md:text-3xl font-serif">
          Hi, I'm <Highlight>Maansi</Highlight>
        </h2>
      </div>
          
          <div className="grid md:grid-cols-2 gap-8 p-8 pt-12">
            <div className="flex items-center justify-center">
              <div className="w-64 h-80 bg-muted overflow-hidden">
                <img
                  src="/profilepicture.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a <Highlight>product manager</Highlight>,{" "}
                <Highlight>project manager</Highlight>,{" "}
                <Highlight>business analyst</Highlight>, and I occasionally dabble in{" "}
                <Highlight>technical development stuff</Highlight>.
              </p>
              
              <p className="text-lg leading-relaxed">
              I value <Highlight>continuous learning
              </Highlight>, <Highlight>thoughtful leadership
              </Highlight>, and <Highlight>building 
              solutions</Highlight> that create 
              long-term impact.
              </p>
              
              <p className="text-lg leading-relaxed">
                I get excited about <Highlight>books</Highlight>,{" "}
                <Highlight>visual design</Highlight>, and building{" "}
                <Highlight>team culture</Highlight>.
              </p>
              
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                >
                  More About Me
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
