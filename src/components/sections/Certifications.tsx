
import SectionTitle from "@/components/ui/SectionTitle";

const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Google Cloud Certified - Associate Cloud Engineer",
  "Google Cloud Certified - Professional Data Engineer",
  "Google Cloud Certified - Looker LookML Developer"
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-tight">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional qualifications and technical credentials"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300 animate-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="min-w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span className="text-lg font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
