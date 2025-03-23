
import SectionTitle from "@/components/ui/SectionTitle";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect - Associate",
    url: "https://www.credly.com/badges/3bb39b3a-840d-4f0b-acc5-061705c661f7/linked_in_profile"
  },
  {
    name: "Google Cloud Certified - Associate Cloud Engineer",
    url: "https://www.credential.net/de43ed47-be98-4ec5-9019-8add2d5756b6#acc.2Bo0qm9h"
  },
  {
    name: "Google Cloud Certified - Professional Data Engineer",
    url: "https://www.credential.net/9e37e8ed-9779-4e6f-b55c-c81a86687909?key=7574bc07fb01ac5d99ae7ef19cab8961cc85bbd2775132ddf5cb4ad07c3dc9df#acc.LSrTKAbm"
  },
  {
    name: "Google Cloud Certified - Looker LookML Developer",
    url: "https://www.credential.net/a74c51a7-c130-43ee-9a01-ab3abc177d99?key=147290eebfe024d44cb99715b31259e3606c3b6bce9498bb658b45eee96c4c84#acc.NtDfBKn0"
  }
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
            <a 
              key={index} 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300 animate-hidden animate-slide-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="min-w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-lg font-medium group-hover:text-primary transition-colors">{cert.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
