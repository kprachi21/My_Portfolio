
import SectionTitle from "@/components/ui/SectionTitle";
import Timeline, { TimelineItem } from "@/components/ui/Timeline";

const experiences: TimelineItem[] = [
  {
    title: "Business Intelligence Intern",
    subtitle: "Bauhaus Group",
    date: "August 2024 - December 2024",
    description: [
      "Engineered automation pipelines in JIRA to automatically generate tasks and subtasks upon new project creation, reducing the manual effort from 2 hours to 5 minutes and saving 150+ work hours per quarter",
      "Constructed interactive Tableau dashboards for real-time financial tracking, integrating MySQL-stored income and expense data, improving financial visibility by 35% and reducing budget discrepancies by $4K annually",
      "Analyzed 2 years of cleaning, maintenance, and repair expenses using Apache Superset dashboards, identifying cost-saving opportunities, and reducing unnecessary expenditures by $5,500"
    ],
    tags: ["JIRA", "Tableau", "MySQL", "Apache Superset", "Process Automation"]
  },
  {
    title: "Business Intelligence Intern",
    subtitle: "Gallagher Bassett",
    date: "June 2024 - August 2024",
    description: [
      "Implemented custom surveys in Alchemer and automated email distribution to stakeholders using Power Automate; boosted feedback response rate by 40% and cut manual follow-up time by 50%",
      "Generated PowerBI reports and dashboards utilizing DAX calculations to analyze feedback data, reducing report generation time from 1 week to 1 day, and enabling 40% faster decision-making"
    ],
    tags: ["PowerBI", "Power Automate", "Alchemer", "DAX", "Analytics"]
  },
  {
    title: "Senior Data Engineer",
    subtitle: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    description: [
      "Optimized PostgreSQL queries by implementing partitioning and indexing, cutting query execution time from 5 minutes to under 30 seconds, improving system efficiency, and reducing cloud query costs by 25%",
      "Developed a Python AWS Kinesis pipeline to transfer historical data from Amazon RDS PostgreSQL to AWS S3, reducing data retrieval latency from 1 hour to 10 minutes, saving approximately $10K annually in storage costs",
      "Designed and deployed AWS Glue pipeline scripts to automate email alerts, enhancing communication efficiency by 30%",
      "Authored Terraform scripts for AWS EC2 Autoscaling, and secured Redshift data, enabling scaling from 2 to 10+ instances reducing downtime-related revenue loss by 40%, and improving system availability"
    ],
    tags: ["PostgreSQL", "AWS", "Python", "Terraform", "AWS Glue", "AWS Kinesis"]
  },
  {
    title: "Data Engineer",
    subtitle: "Quantiphi Analytics Solutions Pvt Ltd",
    date: "July 2020 - June 2023",
    description: [
      "Devised a Hadoop Discovery tool for Google, extracting architectural insights from Hive, HDFS, and Spark with Python-based KPIs reducing manual architecture analysis from 3 days to 2 hours",
      "Crafted Looker dashboards to analyze sports data and predict outcomes, improving data-driven decision-making by 35%",
      "Created data migration pipelines using DataFlow and COVID-19 dashboards for the Stanford School of Medicine, enabling real-time patient updates and improving data accessibility by 40%",
      "Enhanced execution time from 4 hours to 20 minutes by writing DAG scripts in Google Cloud Composer to ETL zipped data from API endpoints into Google Cloud Storage and BigQuery",
      "Mentored and guided 25 interns to learn the Google Cloud Platform and attain Looker LookML certification"
    ],
    tags: ["Hadoop", "Looker", "GCP", "DataFlow", "BigQuery", "Cloud Composer"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-tight">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My journey as a data professional across different organizations"
        />
        
        <Timeline items={experiences} />
      </div>
    </section>
  );
}
