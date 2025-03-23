
import SectionTitle from "@/components/ui/SectionTitle";

const allSkills = [
  "Python", "R", "MySQL", "PostgreSQL", "LookML", "HiveQL", "Spark",
  "AWS", "GCP", "Microsoft Azure", "JIRA", "Cloud SQL", "Data Fusion", 
  "Airflow", "DynamoDB", "pgAdmin", "Docker", "Snowflake", "Databricks",
  "Excel", "Looker", "Tableau", "Data Studio", "PowerBI", "Apache Superset"
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise across various technologies and tools"
        />
        
        <div className="animate-hidden animate-slide-in-up">
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 text-base rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
