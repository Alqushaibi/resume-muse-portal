
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Technical Skills",
    skills: [
      { name: "Skill 1", level: 90 },
      { name: "Skill 2", level: 85 },
      { name: "Skill 3", level: 75 },
      { name: "Skill 4", level: 80 }
    ]
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Teamwork", level: 90 },
      { name: "Problem Solving", level: 85 },
      { name: "Adaptability", level: 90 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Tool 1", level: 80 },
      { name: "Tool 2", level: 85 },
      { name: "Tool 3", level: 70 },
      { name: "Tool 4", level: 75 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-resume-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-resume-navy mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-resume-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-resume-navy mb-6">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-resume-navy">{skill.name}</span>
                        <span className="text-resume-gray">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-resume-blue" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
