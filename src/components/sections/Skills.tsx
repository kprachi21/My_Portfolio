
import SectionTitle from "@/components/ui/SectionTitle";

// Group skills by category
const skillCategories = {
  "Programming": ["Python", "R", "MySQL", "PostgreSQL", "LookML", "HiveQL", "Spark"],
  "Cloud & Tools": ["AWS", "GCP", "Azure", "JIRA", "Cloud SQL", "Data Fusion", "Airflow", "DynamoDB", "pgAdmin", "Docker", "Snowflake", "Databricks"],
  "Analytics": ["Excel", "Looker", "Tableau", "Data Studio", "PowerBI", "Apache Superset"]
};

export default function Skills() {
  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise across various technologies and tools"
        />
        
        <div className="animate-hidden animate-slide-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(skillCategories).map(([category, skills], catIndex) => (
              <div key={category} className="animate-hidden animate-slide-in-up" style={{ animationDelay: `${catIndex * 150}ms` }}>
                <h3 className="text-lg font-medium mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
