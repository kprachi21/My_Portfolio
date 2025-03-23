
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  summary: string;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Business Intelligence Intern",
    company: "Bauhaus Group",
    date: "August 2024 - December 2024",
    summary: "Engineered automation pipelines in JIRA and constructed interactive Tableau dashboards, reducing manual effort by 95% and improving financial visibility by 35%.",
    tags: ["JIRA", "Tableau", "MySQL", "Apache Superset", "Process Automation"]
  },
  {
    title: "Business Intelligence Intern",
    company: "Gallagher Bassett",
    date: "June 2024 - August 2024",
    summary: "Implemented custom surveys in Alchemer with Power Automate and generated PowerBI reports, boosting feedback response rate by 40% and cutting report generation time by 85%.",
    tags: ["PowerBI", "Power Automate", "Alchemer", "DAX", "Analytics"]
  },
  {
    title: "Senior Data Engineer",
    company: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    summary: "Optimized PostgreSQL queries and developed AWS pipelines using Kinesis, Glue, and Terraform, reducing query time by 90% and data retrieval latency by 83%.",
    tags: ["PostgreSQL", "AWS", "Python", "Terraform", "AWS Glue", "AWS Kinesis"]
  },
  {
    title: "Data Engineer",
    company: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    summary: "Created data tools for Google and Stanford School of Medicine using Hadoop, Looker, and Cloud Composer, reducing architecture analysis time by 87% and improving data accessibility by 40%.",
    tags: ["Hadoop", "Looker", "GCP", "DataFlow", "BigQuery", "Cloud Composer"]
  }
];

export default function Experience() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="experience" className="section">
      <div className="container-tight">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My journey as a data professional across different organizations"
        />
        
        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
          className="space-y-4"
        >
          {experiences.map((experience, index) => (
            <AccordionItem 
              key={`${experience.company}-${index}`}
              value={`item-${index}`}
              className="border rounded-lg p-1 bg-card animate-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full text-left">
                  <div>
                    <h3 className="font-display text-xl font-medium">{experience.title}</h3>
                    <p className="text-base font-medium text-primary">{experience.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground sm:text-right">{experience.date}</span>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-4 pb-4 pt-2">
                <p className="mb-4 text-base">{experience.summary}</p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
