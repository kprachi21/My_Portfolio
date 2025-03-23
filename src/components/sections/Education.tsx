
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { School, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EducationItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  details: string[];
  specialization: string;
}

const educationItems: EducationItem[] = [
  {
    title: "Masters in Information Systems - Business Analytics",
    institution: "California State University",
    location: "Fullerton, USA",
    period: "August 2023 - May 2025",
    gpa: "3.9/4.0",
    specialization: "Business Analytics and Data Management",
    details: [
      "Advanced Database Management",
      "Business Intelligence",
      "Data Visualization",
      "Machine Learning"
    ]
  },
  {
    title: "Bachelors in Engineering, Computer Science",
    institution: "Savitribai Phule Pune University",
    location: "India",
    period: "August 2016 - May 2020",
    gpa: "3.7/4.0",
    specialization: "Computer Science",
    details: [
      "Database Systems",
      "Data Structures & Algorithms",
      "Software Engineering"
    ]
  }
];

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="space-y-5">
          {educationItems.map((item, index) => (
            <Card key={index} className="animate-hidden animate-slide-in-up overflow-hidden" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader className="flex flex-row items-start justify-between pb-2">
                <div className="flex gap-2">
                  <School className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <CardTitle className="text-xl font-medium">{item.title}</CardTitle>
                    <CardDescription className="text-base">
                      {item.institution}, {item.location}
                    </CardDescription>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{item.period}</div>
                  <div className="text-sm font-medium">GPA: {item.gpa}</div>
                </div>
              </CardHeader>
              
              <CardContent className="pb-3">
                <div className="flex justify-between items-center">
                  <p className="text-base font-medium text-primary">
                    Specialization: {item.specialization}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-1"
                  >
                    {expandedIndex === index ? (
                      <>Less <ChevronUp className="h-4 w-4" /></>
                    ) : (
                      <>More <ChevronDown className="h-4 w-4" /></>
                    )}
                  </Button>
                </div>
                
                {expandedIndex === index && (
                  <div className="mt-3 pt-3 border-t animate-fade-in">
                    <p className="mb-2 font-medium">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail, idx) => (
                        <Badge key={idx} variant="secondary">{detail}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
