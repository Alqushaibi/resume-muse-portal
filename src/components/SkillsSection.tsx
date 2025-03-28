
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "HTML/CSS", proficiency: 95 },
    { name: "Node.js", proficiency: 75 },
    { name: "Git", proficiency: 85 },
  ];

  const softSkills = [
    { name: "Communication", proficiency: 90 },
    { name: "Team Collaboration", proficiency: 95 },
    { name: "Problem Solving", proficiency: 85 },
    { name: "Time Management", proficiency: 80 },
    { name: "Adaptability", proficiency: 90 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-resume-navy">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-resume-blue">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-resume-gray">{skill.proficiency}%</span>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    className="h-2 bg-gray-200" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-resume-blue">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-resume-gray">{skill.proficiency}%</span>
                  </div>
                  <Progress 
                    value={skill.proficiency} 
                    className="h-2 bg-gray-200" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-resume-blue text-center">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {["VS Code", "GitHub", "Docker", "AWS", "Firebase", "Redux", "GraphQL", "Webpack"].map(
              (tool) => (
                <Card key={tool} className="border-none shadow-sm">
                  <CardContent className="p-4 text-center">{tool}</CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
