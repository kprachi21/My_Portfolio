
import SectionTitle from "@/components/ui/SectionTitle";

const skills = [
  {
    category: "Programming",
    items: ["Python", "R", "MySQL", "PostgreSQL", "LookML", "HiveQL", "Spark"]
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "Microsoft Azure", "JIRA", "Cloud SQL", "Data Fusion", "Airflow", "DynamoDB", "pgAdmin", "Docker", "Snowflake", "Databricks"]
  },
  {
    category: "Analytics",
    items: ["Excel", "Looker", "Tableau", "Data Studio", "PowerBI", "Apache Superset"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise across various technologies and tools"
        />
        
        <div className="space-y-10">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-hidden animate-slide-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-display font-medium mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-base rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
