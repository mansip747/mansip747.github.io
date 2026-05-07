import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="font-serif text-2xl">
              Maanasi
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/maansii30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/mansiip_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:patelmaanasi47@gmail.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
