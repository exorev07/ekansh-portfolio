import { Card } from "@/components/ui/card";
import { Trophy, Award, Code } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "INSPIRE Awards MANAK 2020",
      description: "State-Level Winner for 'Footwear based Piezo-electric Generator'",
      organization: "National Innovation Foundation (NIF), Govt. of India"
    },
    {
      icon: Award,
      title: "Hardwired - Infotsav 2025",
      description: "National-level Hackathon Finalist for project 'Curalink'",
      organization: "ABV-IIITM Gwalior"
    },
    {
      icon: Code,
      title: "Competitive Programming",
      description: "100+ problems solved on CodeForces",
      organization: "CodeForces Platform"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {achievement.description}
                  </p>
                  <p className="text-xs text-accent">
                    {achievement.organization}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
