
import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resume-navy text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Your Name</h3>
            <p className="text-resume-light opacity-80 mb-4 max-w-xs">
              A brief professional tagline or statement about your career focus and aspirations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-resume-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-resume-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-resume-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-resume-light opacity-80 hover:opacity-100 hover:text-resume-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-resume-light opacity-80 hover:opacity-100 hover:text-resume-accent transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-resume-light opacity-80 hover:opacity-100 hover:text-resume-accent transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className="text-resume-light opacity-80 hover:opacity-100 hover:text-resume-accent transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-resume-light opacity-80 hover:opacity-100 hover:text-resume-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">Contact</h3>
            <p className="text-resume-light opacity-80 mb-2">
              Email: your.email@example.com
            </p>
            <p className="text-resume-light opacity-80 mb-2">
              Phone: (123) 456-7890
            </p>
            <p className="text-resume-light opacity-80">
              Location: City, State, Country
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 text-center">
          <p className="text-resume-light opacity-70">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
