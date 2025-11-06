import { useState } from "react";
import { Music, X, Minimize2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicVisualizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="group relative h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_hsl(270_70%_60%/0.4)] hover:shadow-[0_0_30px_hsl(280_70%_75%/0.6)] transition-all duration-300 hover:scale-110"
          aria-label="Open music player"
        >
          <Music className="w-5 h-5 text-primary-foreground" />
          
          {/* Animated visualizer bars */}
          <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-70">
            <div className="w-0.5 bg-primary-foreground rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '30%', animationDelay: '0s' }} />
            <div className="w-0.5 bg-primary-foreground rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '50%', animationDelay: '0.1s' }} />
            <div className="w-0.5 bg-primary-foreground rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '40%', animationDelay: '0.2s' }} />
            <div className="w-0.5 bg-primary-foreground rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '60%', animationDelay: '0.3s' }} />
            <div className="w-0.5 bg-primary-foreground rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" style={{ height: '35%', animationDelay: '0.4s' }} />
          </div>
        </Button>
      ) : (
        <div className={`bg-card/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_0_40px_hsl(270_70%_60%/0.3)] transition-all duration-300 ${isMinimized ? 'w-14 h-14' : 'w-80'}`}>
          <div className="flex items-center justify-between p-3 border-b border-primary/20">
            <div className="flex items-center gap-2">
              {!isMinimized && (
                <>
                  <Music className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Lofi Vibes</span>
                </>
              )}
            </div>
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 hover:bg-primary/20"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 hover:bg-destructive/20"
                onClick={() => setIsOpen(false)}
                aria-label="Close music player"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {!isMinimized && (
            <div className="p-3">
              {/* Animated visualizer */}
              <div className="flex items-end justify-center gap-1 h-16 mb-3">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-primary to-accent rounded-full animate-[pulse_0.8s_ease-in-out_infinite]"
                    style={{
                      height: `${Math.random() * 60 + 20}%`,
                      animationDelay: `${i * 0.05}s`,
                      opacity: 0.7 + Math.random() * 0.3
                    }}
                  />
                ))}
              </div>

              {/* Spotify embed - Soave Lofi playlist */}
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/3Abmr6E4vCMUwNKge9GFUJ?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Soave Lofi Spotify Playlist"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MusicVisualizer;
