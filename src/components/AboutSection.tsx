
import { Card, CardContent } from "@/components/ui/card";
import { User, FileText, Phone, Mail, Linkedin, Github } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-resume-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-resume-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-resume-gray">
              Welcome to my professional portfolio. I am a passionate [Your Profession] with [X years] of experience specializing in [Your Specialties]. I believe in [Your Professional Philosophy] and am committed to [Your Professional Goals].
            </p>
            <p className="text-lg text-resume-gray">
              Throughout my career, I've worked on various projects that have allowed me to develop expertise in [Key Areas]. I'm particularly skilled at [Notable Skill] and have a proven track record of [Notable Achievement].
            </p>
            <p className="text-lg text-resume-gray">
              When I'm not working, I enjoy [Relevant Hobbies/Interests] which helps me maintain a fresh perspective and approach to my professional work.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="shadow-md transition-transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-center">
                <User className="h-5 w-5 text-resume-blue mr-4" />
                <div>
                  <h3 className="font-medium text-resume-navy">Name</h3>
                  <p className="text-resume-gray">Your Name</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md transition-transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-center">
                <FileText className="h-5 w-5 text-resume-blue mr-4" />
                <div>
                  <h3 className="font-medium text-resume-navy">Title</h3>
                  <p className="text-resume-gray">Your Professional Title</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md transition-transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-center">
                <Mail className="h-5 w-5 text-resume-blue mr-4" />
                <div>
                  <h3 className="font-medium text-resume-navy">Email</h3>
                  <p className="text-resume-gray">your.email@example.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-md transition-transform hover:-translate-y-1">
              <CardContent className="p-6 flex items-center">
                <Phone className="h-5 w-5 text-resume-blue mr-4" />
                <div>
                  <h3 className="font-medium text-resume-navy">Phone</h3>
                  <p className="text-resume-gray">(123) 456-7890</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center space-x-4 pt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-resume-blue hover:text-resume-navy transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-resume-blue hover:text-resume-navy transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
