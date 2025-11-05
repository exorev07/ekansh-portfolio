import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="text-accent text-lg font-medium">Hello, I'm</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Ekansh Arohi
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Data Science & AI Sophomore
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            International Institute of Information Technology, Naya Raipur
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(270_70%_60%/0.3)] hover:shadow-[0_0_30px_hsl(270_70%_60%/0.5)] transition-all"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/exorev07"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub: https://github.com/exorev07"
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="backdrop-blur-md bg-background/40 border-border/40 text-foreground">
                https://github.com/exorev07
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://linkedin.com/in/ekansharohi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn: https://linkedin.com/in/ekansharohi"
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="backdrop-blur-md bg-background/40 border-border/40 text-foreground">
                https://linkedin.com/in/ekansharohi
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:ekansharohi135@gmail.com"
                  aria-label="Email: ekansharohi135@gmail.com"
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="backdrop-blur-md bg-background/40 border-border/40 text-foreground">
                ekansharohi135@gmail.com
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="tel:+918500721305"
                  aria-label="Phone: +91 85007 21305"
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" className="backdrop-blur-md bg-background/40 border-border/40 text-foreground">
                +91 85007 21305
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
