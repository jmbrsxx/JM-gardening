import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/garden-gallery_1.jpg`}
          alt="Beautiful lush garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 md:px-6 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in zoom-in duration-1000 slide-in-from-bottom-8">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-sm font-medium mb-2">
            Professional Landscaping & Gardening
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            Cultivating Beauty in <span className="text-primary-foreground italic">Your Sanctuary</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            At JM Garden, we transform ordinary outdoor spaces into breathtaking living environments tailored to your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white min-w-[180px] h-14 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/50 backdrop-blur-sm min-w-[180px] h-14 text-lg"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Gallery <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}