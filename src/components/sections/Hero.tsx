
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 relative bg-cover bg-center" 
      style={{ backgroundImage: "url('/lovable-uploads/e3395581-b478-4e6b-b837-9f764362706a.png')" }}>
      
      {/* Overlay to enhance text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-tight relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 animate-hidden animate-fade-in">
            <span className="inline-block px-3 py-1 text-sm bg-primary/20 text-white font-medium rounded-full">
              Data Engineer & Business Analyst
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6 text-white animate-hidden animate-fade-in animate-delay-100">
            Prachi Khopkar
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-hidden animate-fade-in animate-delay-200">
            Transforming complex data challenges into valuable business insights
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-hidden animate-fade-in animate-delay-300">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full bg-black/30 text-white border-white/20 hover:bg-black/50 hover:text-white">
              <a href="#experience">
                Explore My Work
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down positioned at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white hover:text-white/80 transition-colors animate-pulse-soft animate-hidden animate-fade-in animate-delay-400">
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
