
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 relative">
      {/* Background image with overlay - analytics data visualization background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 after:absolute after:inset-0 after:bg-white/85 dark:after:bg-background/90"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/7bace674-8360-434d-a4c5-cbfd8be3f643.png")',
        }}
      >
        {/* Interactive light particles effect for background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute h-4 w-4 rounded-full bg-primary/20 animate-pulse-soft" style={{ top: '20%', left: '15%' }}></div>
          <div className="absolute h-6 w-6 rounded-full bg-primary/30 animate-pulse-soft" style={{ top: '40%', left: '80%', animationDelay: '0.5s' }}></div>
          <div className="absolute h-3 w-3 rounded-full bg-primary/20 animate-pulse-soft" style={{ top: '70%', left: '40%', animationDelay: '1.2s' }}></div>
          <div className="absolute h-5 w-5 rounded-full bg-primary/30 animate-pulse-soft" style={{ top: '30%', left: '60%', animationDelay: '0.7s' }}></div>
          <div className="absolute h-4 w-4 rounded-full bg-primary/20 animate-pulse-soft" style={{ top: '80%', left: '20%', animationDelay: '1.5s' }}></div>
        </div>
      </div>
      
      <div className="container-tight relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 animate-hidden animate-fade-in">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium">
              Data Engineer & Business Analyst
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6 animate-hidden animate-fade-in animate-delay-100 text-gray-900 dark:text-gray-100">
            Prachi Khopkar
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 max-w-3xl mx-auto mb-8 animate-hidden animate-fade-in animate-delay-200 font-medium">
            Transforming complex data challenges into valuable business insights
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-hidden animate-fade-in animate-delay-300">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="#about">
                Explore My Work
              </a>
            </Button>
          </div>
          
          <a 
            href="#about" 
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-foreground transition-colors animate-pulse-soft animate-hidden animate-fade-in animate-delay-400"
          >
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
