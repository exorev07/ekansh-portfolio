import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Wrench, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useScrollVanish } from "@/hooks/useScrollVanish";

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();
  const { ref: card3Ref, isVisible: card3Visible } = useScrollAnimation();
  const { ref: vanishRef, style: vanishStyle } = useScrollVanish();
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
      <div
        ref={vanishRef}
        style={vanishStyle}
        className="container mx-auto max-w-6xl transition-transform duration-500 ease-out"
      >
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const refs = [card1Ref, card2Ref, card3Ref];
            const visibles = [card1Visible, card2Visible, card3Visible];
            
            return (
              <Card 
                key={category.title}
                ref={refs[idx]}
                className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)] hover:scale-105 scroll-scale-in ${visibles[idx] ? 'visible' : ''}`}
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
