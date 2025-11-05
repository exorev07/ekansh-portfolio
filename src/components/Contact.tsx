import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ekansharohi135@gmail.com",
      href: "mailto:ekansharohi135@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8500721305",
      href: "tel:+918500721305"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "exorev07",
      href: "https://github.com/exorev07"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ekansharohi",
      href: "https://linkedin.com/in/ekansharohi"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <Card className="p-8 bg-card border-primary/20 shadow-[0_0_40px_hsl(270_70%_60%/0.2)]">
          <p className="text-center text-muted-foreground mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Button
                  key={method.label}
                  variant="outline"
                  className="h-auto p-4 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all justify-start text-left"
                  asChild
                >
                  <a 
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 w-full justify-start min-w-0"
                  >
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{method.label}:</span>
                      <span className="font-medium truncate" title={method.value}>{method.value}</span>
                    </div>
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Ekansh Arohi. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
