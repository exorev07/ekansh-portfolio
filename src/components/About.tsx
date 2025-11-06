import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card 
            ref={card1Ref}
            className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)] hover:scale-105 scroll-slide-left ${card1Visible ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">B.Tech in Data Science & AI</h3>
                <p className="text-muted-foreground mb-2">
                  International Institute of Information Technology, Naya Raipur
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent">2024 - Present</span>
                  <span className="font-semibold text-primary">CGPA: 7.50/10</span>
                </div>
              </div>
            </div>
          </Card>

          <Card 
            ref={card2Ref}
            className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)] hover:scale-105 scroll-slide-right ${card2Visible ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Class 12 (TSBIE)</h3>
                <p className="text-muted-foreground mb-2">
                  Excellencia Junior College, Hyderabad
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-accent">2021 - 2023</span>
                  <span className="font-semibold text-primary">87.2%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
