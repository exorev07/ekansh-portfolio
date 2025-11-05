import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Wrench, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["C/C++", "Embedded C", "Python", "JavaScript"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: ["HTML", "CSS", "NodeJS", "ReactJS", "NumPy", "Pandas", "OpenCV", "Scikit-learn", "TinyML", "TensorFlow"]
    },
    {
      title: "Tools & Platforms",
      icon: Cpu,
      skills: ["Git", "GitHub", "VS Code", "LaTeX", "Arduino IDE", "Raspberry Pi OS"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/30">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-primary/10 text-foreground border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
