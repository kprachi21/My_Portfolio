
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

// Group skills by category
const skillCategories = {
  "Programming": ["Python", "R", "MySQL", "PostgreSQL", "LookML", "HiveQL", "Spark"],
  "Cloud & Tools": ["AWS", "GCP", "Azure", "JIRA", "Cloud SQL", "Data Fusion", "Airflow", "DynamoDB", "pgAdmin", "Docker", "Snowflake", "Databricks"],
  "Analytics": ["Excel", "Looker", "Tableau", "Data Studio", "PowerBI", "Apache Superset"]
};

export default function Skills() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise across various technologies and tools"
        />
        
        <div className="animate-hidden animate-slide-in-up">
          <div className="space-y-4">
            {Object.entries(skillCategories).map(([category, skills], catIndex) => (
              <div key={category} className="animate-hidden animate-slide-in-up" style={{ animationDelay: `${catIndex * 150}ms` }}>
                <h3 className="text-lg font-medium mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {(expanded ? skills : skills.slice(0, 5)).map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                  {!expanded && skills.length > 5 && (
                    <span className="px-3 py-1.5 text-sm rounded-lg bg-card border border-primary/20 text-primary">
                      +{skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {Object.values(skillCategories).some(skills => skills.length > 5) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setExpanded(!expanded)} 
              className="mt-4 flex items-center gap-1"
            >
              {expanded ? (
                <>Show Less <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Show All Skills <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
