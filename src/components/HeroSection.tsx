
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-resume-navy to-resume-blue py-20 px-4">
      <div className="container mx-auto text-center text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
          Your Name
        </h1>
        <h2 className="text-xl md:text-2xl font-medium mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Professional Title
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-10 opacity-80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          A brief description about yourself, your professional focus, and what you're passionate about. Keep it concise but impactful.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-resume-navy hover:bg-resume-light transition-colors"
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("experience")}
            className="border-white text-white hover:bg-white/10 transition-colors"
          >
            View Experience
          </Button>
        </div>
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
