
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

export default function Education() {
  return (
    <section id="education" className="section bg-secondary/50">
      <div className="container-tight">
        <SectionTitle 
          title="Academic Journey" 
          subtitle="My educational background and academic achievements"
        />
        
        <Timeline items={educationTimeline} />
      </div>
    </section>
  );
}
