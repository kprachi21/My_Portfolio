import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

// Formspree form ID - replace with your own
const FORMSPREE_FORM_ID = "xeoapjky";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log("Sending form data:", values);
      
      // Send form data to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(values)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log("Form submitted successfully:", data);
        
        // Success message
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset the form
        form.reset();
      } else {
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <a href="https://github.com/kprachi21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" strokeWidth={1.5} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-hidden animate-slide-in-right">
            <h3 className="text-xl font-display font-medium mb-6">Send a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="Your email address" 
                          {...field}
                          className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message" 
                          {...field}
                          rows={5}
                          className="w-full p-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full rounded-lg flex items-center gap-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
