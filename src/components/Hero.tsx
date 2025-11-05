import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated curvy blob background - only at edges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Corner */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] animate-float opacity-40">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M43.5,-66.2C58,-58.3,72.5,-49,72.2,-36.8C71.9,-24.5,56.7,-9.3,51.6,5.5C46.6,20.3,51.6,34.7,46,38.1C40.3,41.4,24,33.8,12.9,31.3C1.8,28.9,-4.1,31.6,-17,37.3C-29.9,43,-49.8,51.7,-59,47.5C-68.2,43.4,-66.8,26.4,-64.5,12.1C-62.2,-2.2,-59.1,-13.9,-51.9,-21.3C-44.7,-28.7,-33.6,-31.8,-24.3,-42C-15,-52.2,-7.5,-69.4,3.5,-74.8C14.5,-80.3,29,-74,43.5,-66.2Z" transform="translate(100 100)" strokeWidth="0.4" stroke="hsl(270 70% 60%)"></path>
            <path fill="transparent" d="M43.5,-66.2C58,-58.3,72.5,-49,72.2,-36.8C71.9,-24.5,56.7,-9.3,51.6,5.5C46.6,20.3,51.6,34.7,46,38.1C40.3,41.4,24,33.8,12.9,31.3C1.8,28.9,-4.1,31.6,-17,37.3C-29.9,43,-49.8,51.7,-59,47.5C-68.2,43.4,-66.8,26.4,-64.5,12.1C-62.2,-2.2,-59.1,-13.9,-51.9,-21.3C-44.7,-28.7,-33.6,-31.8,-24.3,-42C-15,-52.2,-7.5,-69.4,3.5,-74.8C14.5,-80.3,29,-74,43.5,-66.2Z" transform="translate(100 100) scale(0.92) rotate(2)" strokeWidth="0.4" stroke="hsl(280 70% 75%)"></path>
            <path fill="transparent" d="M43.5,-66.2C58,-58.3,72.5,-49,72.2,-36.8C71.9,-24.5,56.7,-9.3,51.6,5.5C46.6,20.3,51.6,34.7,46,38.1C40.3,41.4,24,33.8,12.9,31.3C1.8,28.9,-4.1,31.6,-17,37.3C-29.9,43,-49.8,51.7,-59,47.5C-68.2,43.4,-66.8,26.4,-64.5,12.1C-62.2,-2.2,-59.1,-13.9,-51.9,-21.3C-44.7,-28.7,-33.6,-31.8,-24.3,-42C-15,-52.2,-7.5,-69.4,3.5,-74.8C14.5,-80.3,29,-74,43.5,-66.2Z" transform="translate(100 100) scale(0.85) rotate(4)" strokeWidth="0.4" stroke="hsl(270 70% 70%)"></path>
          </svg>
        </div>
        
        {/* Top Right Corner */}
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] animate-float opacity-35" style={{ animationDelay: "2s" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M39.5,-65.4C49.9,-58.5,56.7,-45.3,63.7,-31.2C70.7,-17.1,77.9,-2.1,76.4,12.3C74.9,26.7,64.6,40.5,52.1,50.9C39.6,61.3,24.8,68.3,9.3,70.1C-6.2,71.9,-22.4,68.5,-36.8,60.9C-51.2,53.3,-63.8,41.5,-69.3,27C-74.8,12.5,-73.2,-4.7,-66.9,-18.9C-60.6,-33.1,-49.6,-44.3,-37.4,-50.8C-25.2,-57.3,-12.6,-59.1,1.3,-61.1C15.2,-63.1,29.1,-72.3,39.5,-65.4Z" transform="translate(100 100)" strokeWidth="0.4" stroke="hsl(280 70% 75%)"></path>
            <path fill="transparent" d="M39.5,-65.4C49.9,-58.5,56.7,-45.3,63.7,-31.2C70.7,-17.1,77.9,-2.1,76.4,12.3C74.9,26.7,64.6,40.5,52.1,50.9C39.6,61.3,24.8,68.3,9.3,70.1C-6.2,71.9,-22.4,68.5,-36.8,60.9C-51.2,53.3,-63.8,41.5,-69.3,27C-74.8,12.5,-73.2,-4.7,-66.9,-18.9C-60.6,-33.1,-49.6,-44.3,-37.4,-50.8C-25.2,-57.3,-12.6,-59.1,1.3,-61.1C15.2,-63.1,29.1,-72.3,39.5,-65.4Z" transform="translate(100 100) scale(0.92) rotate(-2)" strokeWidth="0.4" stroke="hsl(270 70% 60%)"></path>
          </svg>
        </div>
        
        {/* Bottom Left Corner */}
        <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] animate-float opacity-30" style={{ animationDelay: "4s" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M47.3,-75.5C59.9,-68.5,67.7,-53.3,71.4,-38.1C75.1,-22.9,74.7,-7.7,71.1,6.3C67.5,20.3,60.7,33.1,51.3,43.7C41.9,54.3,30,62.7,16.9,66.8C3.8,70.9,-10.5,70.7,-23.3,66.1C-36.1,61.5,-47.4,52.5,-56.8,41.3C-66.2,30.1,-73.7,16.7,-75.3,2.4C-76.9,-11.9,-72.6,-27.1,-64.5,-39.5C-56.4,-51.9,-44.5,-61.5,-31.5,-68.3C-18.5,-75.1,-4.6,-79.1,9.6,-80.8C23.8,-82.5,34.7,-82.5,47.3,-75.5Z" transform="translate(100 100)" strokeWidth="0.4" stroke="hsl(270 70% 70%)"></path>
            <path fill="transparent" d="M47.3,-75.5C59.9,-68.5,67.7,-53.3,71.4,-38.1C75.1,-22.9,74.7,-7.7,71.1,6.3C67.5,20.3,60.7,33.1,51.3,43.7C41.9,54.3,30,62.7,16.9,66.8C3.8,70.9,-10.5,70.7,-23.3,66.1C-36.1,61.5,-47.4,52.5,-56.8,41.3C-66.2,30.1,-73.7,16.7,-75.3,2.4C-76.9,-11.9,-72.6,-27.1,-64.5,-39.5C-56.4,-51.9,-44.5,-61.5,-31.5,-68.3C-18.5,-75.1,-4.6,-79.1,9.6,-80.8C23.8,-82.5,34.7,-82.5,47.3,-75.5Z" transform="translate(100 100) scale(0.9) rotate(3)" strokeWidth="0.4" stroke="hsl(280 70% 75%)"></path>
          </svg>
        </div>

        {/* Bottom Right Corner */}
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] animate-float opacity-35" style={{ animationDelay: "1s" }}>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="transparent" d="M41.2,-71.8C52.6,-64.2,60.5,-51.1,66.1,-37.4C71.7,-23.7,75,-9.4,73.8,4.3C72.6,18,66.9,31.1,58.4,41.8C49.9,52.5,38.6,60.8,26.1,65.3C13.6,69.8,-0.1,70.5,-13.5,67.8C-26.9,65.1,-40,59,-51.4,50.1C-62.8,41.2,-72.5,29.5,-75.8,16.3C-79.1,3.1,-76,-11.6,-69.3,-24.2C-62.6,-36.8,-52.3,-47.3,-40.3,-54.6C-28.3,-61.9,-14.2,-66,0.4,-66.6C15,-67.2,29.8,-79.4,41.2,-71.8Z" transform="translate(100 100)" strokeWidth="0.4" stroke="hsl(280 70% 75%)"></path>
            <path fill="transparent" d="M41.2,-71.8C52.6,-64.2,60.5,-51.1,66.1,-37.4C71.7,-23.7,75,-9.4,73.8,4.3C72.6,18,66.9,31.1,58.4,41.8C49.9,52.5,38.6,60.8,26.1,65.3C13.6,69.8,-0.1,70.5,-13.5,67.8C-26.9,65.1,-40,59,-51.4,50.1C-62.8,41.2,-72.5,29.5,-75.8,16.3C-79.1,3.1,-76,-11.6,-69.3,-24.2C-62.6,-36.8,-52.3,-47.3,-40.3,-54.6C-28.3,-61.9,-14.2,-66,0.4,-66.6C15,-67.2,29.8,-79.4,41.2,-71.8Z" transform="translate(100 100) scale(0.9) rotate(-3)" strokeWidth="0.4" stroke="hsl(270 70% 65%)"></path>
          </svg>
        </div>
      </div>
      
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
            <a 
              href="https://github.com/exorev07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ekansharohi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:ekansharohi135@gmail.com"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+918500721305"
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all hover:shadow-[0_0_15px_hsl(270_70%_60%/0.3)]"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
