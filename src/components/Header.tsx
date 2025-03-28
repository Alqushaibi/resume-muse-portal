
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-heading text-xl font-bold text-resume-navy">
          Your Name
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-resume-navy hover:text-resume-accent transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-resume-navy hover:text-resume-accent transition-colors font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-resume-navy hover:text-resume-accent transition-colors font-medium"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="text-resume-navy hover:text-resume-accent transition-colors font-medium"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-resume-navy hover:text-resume-accent transition-colors font-medium"
          >
            Contact
          </button>
          <Button
            variant="outline"
            className="ml-4 border-resume-blue text-resume-blue hover:bg-resume-blue hover:text-white transition-colors"
          >
            <Download className="w-4 h-4 mr-2" /> Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-resume-navy"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-resume-navy hover:text-resume-accent transition-colors py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-resume-navy hover:text-resume-accent transition-colors py-2 font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-resume-navy hover:text-resume-accent transition-colors py-2 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-resume-navy hover:text-resume-accent transition-colors py-2 font-medium"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-resume-navy hover:text-resume-accent transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <Button
              variant="outline"
              className="border-resume-blue text-resume-blue hover:bg-resume-blue hover:text-white transition-colors"
            >
              <Download className="w-4 h-4 mr-2" /> Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
