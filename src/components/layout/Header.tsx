import { Link, useLocation } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full border-b border-foreground">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-center mb-4">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Product Management & Analytics
          </p>
          <Link to="/" className="inline-block">
            <h1 className="text-5xl md:text-6xl font-serif font-normal tracking-tight">
              maanasi patel
            </h1>
          </Link>
        </div>
      </div>
      
      <nav className="border-t border-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center">
            <ul className="flex items-center">
              {navItems.map((item, index) => (
                <li key={item.name} className="flex items-center">
                  <Link
                    to={item.path}
                    className={`nav-link py-4 px-6 ${
                      location.pathname === item.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {index < navItems.length - 1 && (
                    <span className="w-px h-4 bg-foreground" />
                  )}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 ml-8 border-l border-border pl-8">
              <a
                href="https://linkedin.com/in/maansii30"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com/mansiip_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:patelmaanasi47@gmail.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};