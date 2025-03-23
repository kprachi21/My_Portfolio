
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Let's collaborate on your next project"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="animate-hidden animate-slide-in-left">
            <h3 className="text-xl font-display font-medium mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-4">
                  Feel free to reach out for collaboration opportunities, potential projects, or just to say hello!
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:khopkarprachi21@gmail.com" className="hover:text-primary transition-colors">
                        khopkarprachi21@gmail.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+16573196824" className="hover:text-primary transition-colors">
                        +1 (657) 319-6824
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a href="https://linkedin.com/in/prachi-khopkar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        linkedin.com/in/prachi-khopkar/
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3">Connect with me</h4>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <a href="https://linkedin.com/in/prachi-khopkar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <a href="mailto:khopkarprachi21@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon" className="rounded-full">
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" strokeWidth={1.5} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-hidden animate-slide-in-right">
            <h3 className="text-xl font-display font-medium mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Your message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full rounded-lg" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
