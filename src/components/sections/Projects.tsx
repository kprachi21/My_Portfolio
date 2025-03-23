
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    title: "Mean-Variance Portfolio Optimization",
    description: "Developed PostgreSQL and R scripts for ETL to identify high-return stocks for a given risk level, yielding 12% higher returns than SP500TR",
    tags: ["PostgreSQL", "R", "ETL", "Finance", "Portfolio Optimization"],
    imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Anomaly Motion Detection and Tracking",
    description: "Constructed a predictive model using Multiple Instance Learning (MIL), Artificial Neural Networks, and Optical Flow to detect 13 types of video anomalies",
    tags: ["Computer Vision", "Machine Learning", "Neural Networks", "Security", "Python"],
    imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "KnowFlow",
    description: "Innovated an offline AI platform using Llama 3.2 for text, image, and data analysis, enabling automated dataset visualization and 4-bit quantization, optimized to run on devices with 8GB+ RAM",
    tags: ["AI", "Llama 3.2", "Data Visualization", "Quantization", "Python"],
    imageSrc: "/lovable-uploads/bb4275db-d85d-4391-aac7-8ebea4fe7aed.png"
  },
  {
    title: "Breast Cancer Diagnostics",
    description: "Developed a classification model using Logistic Regression, KNN, and Classification Tree to distinguish between malignant and benign breast cancer cases. Evaluated model performance based on accuracy, sensitivity, and specificity across various cut-off thresholds (0.3 - 0.6)",
    tags: ["Machine Learning", "Classification", "Healthcare", "Python", "R"],
    imageSrc: "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2068&auto=format&fit=crop"
  },
  {
    title: "Spam Message Classification",
    description: "Classified text messages into spam or ham using K-Nearest Neighbors Algorithm, Naive Bayes, Decision Tree and Logistic Regression using Python",
    tags: ["NLP", "Machine Learning", "Text Classification", "Python"],
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
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
              imageSrc={project.imageSrc}
              className="h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
