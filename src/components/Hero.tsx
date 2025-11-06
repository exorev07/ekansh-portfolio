import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs - positioned in corners with parallax */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Top Left Corner */}
        <div 
          className="absolute -top-32 -left-32 w-[40vw] h-[40vw] opacity-40 animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M43.5,-66.2C58,-58.3,72.5,-49,72.2,-36.8C71.9,-24.5,56.7,-9.3,51.6,5.5C46.6,20.3,51.6,34.7,46,38.1C40.3,41.4,24,33.8,12.9,31.3C1.8,28.9,-4.1,31.6,-17,37.3C-29.9,43,-49.8,51.7,-59,47.5C-68.2,43.4,-66.8,26.4,-64.5,12.1C-62.2,-2.2,-59.1,-13.9,-51.9,-21.3C-44.7,-28.7,-33.6,-31.8,-24.3,-42C-15,-52.2,-7.5,-69.4,3.5,-74.8C14.5,-80.3,29,-74,43.5,-66.2Z" transform="translate(100 100)" strokeWidth="0.5" stroke="hsl(270 70% 60%)" />
          </svg>
        </div>

        {/* Top Right Corner */}
        <div 
          className="absolute -top-24 -right-24 w-[35vw] h-[35vw] opacity-35 animate-float" 
          style={{ animationDelay: "0.5s", transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M41.2,-71.8C52.6,-64.2,60.5,-51.1,66.1,-37.4C71.7,-23.7,75,-9.4,73.8,4.3C72.6,18,66.9,31.1,58.4,41.8C49.9,52.5,38.6,60.8,26.1,65.3C13.6,69.8,-0.1,70.5,-13.5,67.8C-26.9,65.1,-40,59,-51.4,50.1C-62.8,41.2,-72.5,29.5,-75.8,16.3C-79.1,3.1,-76,-11.6,-69.3,-24.2C-62.6,-36.8,-52.3,-47.3,-40.3,-54.6C-28.3,-61.9,-14.2,-66,0.4,-66.6C15,-67.2,29.8,-79.4,41.2,-71.8Z" transform="translate(100 100)" strokeWidth="0.5" stroke="hsl(280 70% 75%)" />
          </svg>
        </div>

        {/* Bottom Left Corner */}
        <div 
          className="absolute -bottom-28 -left-28 w-[38vw] h-[38vw] opacity-30 animate-float" 
          style={{ animationDelay: "1s", transform: `translateY(${scrollY * -0.25}px)` }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M43.5,-66.2C58,-58.3,72.5,-49,72.2,-36.8C71.9,-24.5,56.7,-9.3,51.6,5.5C46.6,20.3,51.6,34.7,46,38.1C40.3,41.4,24,33.8,12.9,31.3C1.8,28.9,-4.1,31.6,-17,37.3C-29.9,43,-49.8,51.7,-59,47.5C-68.2,43.4,-66.8,26.4,-64.5,12.1C-62.2,-2.2,-59.1,-13.9,-51.9,-21.3C-44.7,-28.7,-33.6,-31.8,-24.3,-42C-15,-52.2,-7.5,-69.4,3.5,-74.8C14.5,-80.3,29,-74,43.5,-66.2Z" transform="translate(100 100)" strokeWidth="0.5" stroke="hsl(280 70% 75%)" />
          </svg>
        </div>

        {/* Bottom Right Corner */}
        <div 
          className="absolute -bottom-32 -right-32 w-[42vw] h-[42vw] opacity-35 animate-float" 
          style={{ animationDelay: "1.5s", transform: `translateY(${scrollY * -0.3}px)` }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M41.2,-71.8C52.6,-64.2,60.5,-51.1,66.1,-37.4C71.7,-23.7,75,-9.4,73.8,4.3C72.6,18,66.9,31.1,58.4,41.8C49.9,52.5,38.6,60.8,26.1,65.3C13.6,69.8,-0.1,70.5,-13.5,67.8C-26.9,65.1,-40,59,-51.4,50.1C-62.8,41.2,-72.5,29.5,-75.8,16.3C-79.1,3.1,-76,-11.6,-69.3,-24.2C-62.6,-36.8,-52.3,-47.3,-40.3,-54.6C-28.3,-61.9,-14.2,-66,0.4,-66.6C15,-67.2,29.8,-79.4,41.2,-71.8Z" transform="translate(100 100)" strokeWidth="0.5" stroke="hsl(270 70% 65%)" />
          </svg>
        </div>
      </div>
      
      <div 
        className="container mx-auto px-4 relative z-10"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY / 500)
        }}
      >
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(270_70%_60%/0.3)] hover:shadow-[0_0_30px_hsl(270_70%_60%/0.5)] hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300"
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
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)] hover:scale-110 duration-300"
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
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)] hover:scale-110 duration-300"
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
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)] hover:scale-110 duration-300"
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
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)] hover:scale-110 duration-300"
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
