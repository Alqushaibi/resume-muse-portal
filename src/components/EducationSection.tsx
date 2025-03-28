
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
}

const educationData: Education[] = [
  {
    degree: "Degree Name",
    institution: "Institution Name",
    period: "2012 - 2016",
    description: "Brief description of your studies, focus areas, or thesis.",
    achievements: [
      "Academic achievement",
      "Relevant coursework",
      "Project or research highlight"
    ]
  },
  {
    degree: "Another Degree or Certification",
    institution: "Institution Name",
    period: "2010 - 2012",
    description: "Brief description of your studies or certification."
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-resume-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-resume-navy">{edu.degree}</h3>
                    <p className="text-lg text-resume-blue">{edu.institution}</p>
                  </div>
                  <Badge className="mt-2 md:mt-0 bg-resume-light text-resume-blue hover:bg-resume-light self-start md:self-auto">
                    {edu.period}
                  </Badge>
                </div>
                
                <p className="text-resume-gray mb-4">{edu.description}</p>
                
                {edu.achievements && (
                  <div>
                    <h4 className="font-medium text-resume-navy mb-2">Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-resume-gray">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
