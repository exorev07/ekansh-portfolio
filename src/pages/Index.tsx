import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import MusicVisualizer from "@/components/MusicVisualizer";

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen text-foreground">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Leadership />
      <Contact />
      <MusicVisualizer />
    </main>
  );
};

export default Index;
