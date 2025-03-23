
import SectionTitle from "@/components/ui/SectionTitle";
import Timeline, { TimelineItem } from "@/components/ui/Timeline";

const educationTimeline: TimelineItem[] = [
  {
    title: "Masters in Information Systems - Business Analytics",
    subtitle: "California State University, Fullerton, USA",
    date: "August 2023 - May 2025",
    description: [
      "GPA: 3.9/4.0",
      "Specialization in Business Analytics and Data Management",
      "Coursework: Advanced Database Management, Business Intelligence, Data Visualization, Machine Learning"
    ],
    tags: ["Information Systems", "Business Analytics", "Data Management"]
  },
  {
    title: "Bachelors in Engineering, Computer Science",
    subtitle: "Savitribai Phule Pune University, India",
    date: "August 2016 - May 2020",
    description: [
      "GPA: 3.7/4.0",
      "Specialization in Computer Science",
      "Coursework: Database Systems, Data Structures & Algorithms, Software Engineering"
    ],
    tags: ["Computer Science", "Software Engineering", "Databases"]
  }
];

const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Google Cloud Certified - Associate Cloud Engineer",
  "Google Cloud Certified - Professional Data Engineer",
  "Google Cloud Certified - Looker LookML Developer"
];

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

export default function Education() {
  return (
    <section id="education" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Education & Skills" 
          subtitle="My academic background and technical expertise"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h3 className="text-xl font-display font-medium mb-6 animate-hidden animate-slide-in-up">Academic Journey</h3>
            <Timeline items={educationTimeline} />
          </div>
          
          <div className="lg:col-span-5">
            <div className="mb-10">
              <h3 className="text-xl font-display font-medium mb-6 animate-hidden animate-slide-in-up">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card animate-hidden animate-slide-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="min-w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-display font-medium mb-6 animate-hidden animate-slide-in-up">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div 
                    key={skillGroup.category}
                    className="animate-hidden animate-slide-in-up"
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <h4 className="text-lg font-medium mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-sm rounded-md bg-card border border-border"
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
        </div>
      </div>
    </section>
  );
}
