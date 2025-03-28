
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  tasks: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Company Name",
    position: "Job Title",
    period: "Jan 2021 - Present",
    description: "Brief description of your role and responsibilities at this company.",
    tasks: [
      "Key achievement or responsibility",
      "Another significant contribution",
      "A project you worked on",
      "A problem you solved"
    ],
    technologies: ["Technology 1", "Technology 2", "Technology 3"]
  },
  {
    company: "Previous Company",
    position: "Previous Job Title",
    period: "Jun 2018 - Dec 2020",
    description: "Brief description of your role and responsibilities at this company.",
    tasks: [
      "Key achievement or responsibility",
      "Another significant contribution",
      "A project you worked on",
      "A problem you solved"
    ],
    technologies: ["Technology 1", "Technology 2", "Technology 3"]
  },
  {
    company: "First Company",
    position: "First Job Title",
    period: "Sep 2015 - May 2018",
    description: "Brief description of your role and responsibilities at this company.",
    tasks: [
      "Key achievement or responsibility",
      "Another significant contribution",
      "A project you worked on",
      "A problem you solved"
    ],
    technologies: ["Technology 1", "Technology 2", "Technology 3"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-resume-accent mx-auto"></div>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-resume-navy">{exp.position}</h3>
                      <p className="text-lg text-resume-blue">{exp.company}</p>
                    </div>
                    <span className="mt-2 md:mt-0 text-resume-gray font-medium">{exp.period}</span>
                  </div>
                  
                  <p className="text-resume-gray mb-4">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-resume-navy mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-resume-gray">
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge key={i} className="bg-resume-light text-resume-blue hover:bg-resume-light">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
