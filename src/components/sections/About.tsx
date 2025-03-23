
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Github, Linkedin, Mail, Phone, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="About Me" 
          subtitle="Data professional with expertise in business intelligence and engineering"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col items-center">
            <AnimatedImage
              src="/lovable-uploads/f9e98c5a-785d-4c41-9623-8ec2d6b74a28.png"
              alt="Prachi Khopkar"
              className="rounded-xl overflow-hidden w-full max-w-xs shadow-soft animate-hidden animate-slide-in-up"
              imgClassName="object-cover" 
            />
            
            <div className="mt-6 flex items-center justify-center gap-3 animate-hidden animate-slide-in-up animate-delay-200">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://linkedin.com/in/prachi-khopkar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="mailto:khopkarprachi21@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="tel:+16573196824" aria-label="Phone">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://github.com/kprachi21" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                  <Github className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <a href="https://leetcode.com/u/khopkarprachi21/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode Profile">
                  <Code className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-8 animate-hidden animate-slide-in-up animate-delay-100">
            <div className="space-y-4 text-base">
              <p>
                With over 5 years in data engineering and business intelligence, I specialize in optimizing data pipelines, implementing cloud solutions, and delivering impactful business insights through analytics.
              </p>
              
              <p>
                Currently pursuing a Masters in Information Systems at California State University, Fullerton, I'm enhancing my skills to bridge technical implementation with business strategy.
              </p>
              
              <p>
                Throughout my career at Quantiphi Analytics and other organizations, I've implemented solutions that reduce costs, improve efficiency, and enable data-driven decision making across AWS, GCP, and Azure platforms.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Contact Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <a href="mailto:khopkarprachi21@gmail.com" className="hover:text-primary transition-colors text-base">
                      khopkarprachi21@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <a href="tel:+16573196824" className="hover:text-primary transition-colors text-base">
                      +1 (657) 319-6824
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <a href="https://linkedin.com/in/prachi-khopkar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                      linkedin.com/in/prachi-khopkar/
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <a href="https://github.com/kprachi21" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                      github.com/kprachi21
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <a href="https://leetcode.com/u/khopkarprachi21/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors text-base">
                      leetcode.com/u/khopkarprachi21
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">Data Engineering</span>
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">Cloud Solutions</span>
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">Business Intelligence</span>
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">ETL/ELT Pipelines</span>
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">SQL & NoSQL</span>
                  <span className="px-2 py-1 text-sm rounded-md bg-primary/10 text-primary">Dashboard Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
