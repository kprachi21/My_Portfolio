
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Mean-Variance Portfolio Optimization",
    description: "Developed PostgreSQL and R scripts for ETL to identify high-return stocks for a given risk level, yielding 12% higher returns than SP500TR",
    tags: ["PostgreSQL", "R", "ETL", "Finance", "Portfolio Optimization"]
  },
  {
    title: "Anomaly Motion Detection and Tracking for Real-Time Security System",
    description: "Constructed a predictive model using Multiple Instance Learning (MIL), Artificial Neural Networks, and Optical Flow to detect 13 types of video anomalies",
    tags: ["Computer Vision", "Machine Learning", "Neural Networks", "Security", "Python"]
  },
  {
    title: "KnowFlow",
    description: "Innovated an offline AI platform using Llama 3.2 for text, image, and data analysis, enabling automated dataset visualization and 4-bit quantization, optimized to run on devices with 8GB+ RAM",
    tags: ["AI", "Llama 3.2", "Data Visualization", "Quantization", "Python"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-tight">
        <SectionTitle 
          title="Projects" 
          subtitle="Selected works showcasing my technical capabilities"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              className="h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
