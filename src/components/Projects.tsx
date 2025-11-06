import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Curalink - IoT Smart Hospital Bed Management",
      description: "Developed an IoT-based bed occupancy system using ESP8266 with RFID, MLX90614 temperature, and FSR sensors. Built a React.js dashboard with Firebase for real-time bed status, role-based access, and ML-powered patient flow predictions.",
      tags: ["Python", "Embedded C", "React.js", "Firebase", "Flask", "Scikit-learn", "TailwindCSS", "ESP8266"],
      github: "#",
      status: "Finalist - Hardwired Hackathon 2025"
    },
    {
      title: "Car Rental Management System",
      description: "Designed and implemented a Python-based car rental system using OOP principles. Managed persistent data storage with SQLite for secure authentication, fleet management, and booking with a terminal interface.",
      tags: ["Python 3", "SQLite3", "Colorama", "PyFiglet"],
      github: "#"
    },
    {
      title: "Bike Guardian - Bicycle Safety Alert System",
      description: "Engineered a safety system for cyclists using ultrasonic sensors to detect vehicles approaching from behind. Developed C/C++ firmware for real-time sensor interfacing with visual and haptic alerts.",
      tags: ["Embedded C", "Arduino", "Ultrasonic Sensors"],
      github: "#"
    },
    {
      title: "TinyML Intrusion Detection for EVs",
      description: "Developing an on-device intrusion detection and battery health monitoring system for EVs using ESP32 and TFLite Micro. Implements CAN signal analysis with XGBoost and quantized MLP models.",
      tags: ["Python", "TensorFlow Lite Micro", "XGBoost", "Scikit-learn", "ESP32", "CAN Bus"],
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 
          ref={titleRef}
          className={`text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation();
            
            return (
            <Card 
              key={index}
              ref={cardRef}
              className={`p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(270_70%_60%/0.2)] hover:scale-105 flex flex-col scroll-fade-in ${cardVisible ? 'visible' : ''}`}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                  {project.github && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  )}
                </div>
                
                {project.status && (
                  <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
                    {project.status}
                  </Badge>
                )}
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="text-xs border-primary/30 text-muted-foreground"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Projects;
