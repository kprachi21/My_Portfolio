
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  summary: string;
  details: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Business Intelligence Intern",
    company: "Bauhaus Group",
    date: "August 2024 - December 2024",
    summary: "Engineered automation pipelines and constructed interactive dashboards for improved business insights.",
    details: [
      "Engineered automation pipelines in JIRA that reduced manual effort by 95%.",
      "Constructed interactive Tableau dashboards that improved financial visibility by 35%.",
      "Integrated Apache Superset with MySQL databases for real-time analytics.",
      "Optimized ETL processes that decreased data processing time by 40%."
    ],
    tags: ["JIRA", "Tableau", "MySQL", "Apache Superset", "Process Automation"]
  },
  {
    title: "Business Intelligence Intern",
    company: "Gallagher Bassett",
    date: "June 2024 - August 2024",
    summary: "Implemented custom surveys and reporting solutions to improve feedback collection and analysis.",
    details: [
      "Implemented custom surveys in Alchemer with Power Automate that boosted feedback response rate by 40%.",
      "Generated PowerBI reports that cut report generation time by 85%.",
      "Created DAX measures and calculations for complex data analysis.",
      "Designed automated data pipelines for survey data collection and analysis."
    ],
    tags: ["PowerBI", "Power Automate", "Alchemer", "DAX", "Analytics"]
  },
  {
    title: "Senior Data Engineer",
    company: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    summary: "Optimized database queries and developed AWS data pipelines for improved data processing.",
    details: [
      "Optimized PostgreSQL queries that reduced query time by 90%.",
      "Developed AWS pipelines using Kinesis, Glue, and Terraform that reduced data retrieval latency by 83%.",
      "Designed and implemented data warehousing solutions using AWS Redshift.",
      "Created data quality monitoring frameworks that improved data accuracy by 75%."
    ],
    tags: ["PostgreSQL", "AWS", "Python", "Terraform", "AWS Glue", "AWS Kinesis"]
  },
  {
    title: "Data Engineer",
    company: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    summary: "Created data tools for clients using cloud technologies and improved data accessibility.",
    details: [
      "Created data tools for Google and Stanford School of Medicine using Hadoop, Looker, and Cloud Composer.",
      "Reduced architecture analysis time by 87% through optimized data pipelines.",
      "Improved data accessibility by 40% with custom Looker dashboards.",
      "Implemented BigQuery data models that enhanced query performance by 65%."
    ],
    tags: ["Hadoop", "Looker", "GCP", "DataFlow", "BigQuery", "Cloud Composer"]
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem>(experiences[0]);

  return (
    <section id="experience" className="section">
      <div className="container-tight">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My journey as a data professional across different organizations"
        />
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left panel - Job list */}
          <div className="space-y-2">
            {experiences.map((experience, index) => (
              <button
                key={`${experience.company}-${index}`}
                onClick={() => setSelectedExperience(experience)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  selectedExperience.title === experience.title && selectedExperience.company === experience.company
                    ? "bg-primary/10 border-l-4 border-primary"
                    : "bg-card hover:bg-secondary"
                }`}
              >
                <h3 className="font-display text-lg font-medium">{experience.title}</h3>
                <p className="text-sm font-medium text-primary">{experience.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{experience.date}</p>
              </button>
            ))}
          </div>
          
          {/* Right panel - Experience details */}
          <div className="md:col-span-2">
            <Card className="animate-fade-in">
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-display font-bold">{selectedExperience.title}</h2>
                  <p className="text-lg font-medium text-primary">{selectedExperience.company}</p>
                  <p className="text-sm text-muted-foreground">{selectedExperience.date}</p>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {selectedExperience.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedExperience.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
