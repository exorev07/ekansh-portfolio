import { Card } from "@/components/ui/card";
import { Users, Share2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Leadership = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: card1Ref, isVisible: card1Visible } = useScrollAnimation();
  const { ref: card2Ref, isVisible: card2Visible } = useScrollAnimation();

  const positions = [
    {
      icon: Users,
      role: "Documentation Executive",
      organization: "Design & Documentation Club, IIIT-NR",
      period: "September 2025 - Present",
      description: "Created official content including marketing materials, sponsorship brochures, and event documentation for SAC and college administration."
    },
    {
      icon: Share2,
      role: "Social Media & Content Executive",
      organization: "IEEE Student Branch, IIIT-NR",
      period: "January 2025 - Present",
      description: "Managed social media presence and created content for IEEE Student Branch activities, events, and outreach initiatives."
    }
  ];

  return (
    <section id="leadership" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Leadership & Responsibilities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {positions.map((position, idx) => {
            const Icon = position.icon;
            const refs = [card1Ref, card2Ref];
            const visibles = [card1Visible, card2Visible];
            
            return (
              <Card 
                key={idx}
                ref={refs[idx]}
                className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)] hover:scale-105 scroll-slide-${idx === 0 ? 'left' : 'right'} ${visibles[idx] ? 'visible' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{position.role}</h3>
                    <p className="text-primary font-medium mb-2">
                      {position.organization}
                    </p>
                    <p className="text-sm text-accent mb-3">
                      {position.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
