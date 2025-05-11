'use client';

const projects = [
  {
    id: 1,
    title: "Real-time Analytics Dashboard",
    description: "Designed and implemented a real-time analytics dashboard for monitoring customer behavior and sales metrics. The solution processes over 1 million events per day.",
    technologies: ["Apache Kafka", "Spark Streaming", "Python", "React", "Grafana"],
    highlights: [
      "Reduced data processing latency from 30 minutes to near real-time",
      "Implemented fault-tolerant architecture with 99.9% uptime",
      "Scalable design supporting 50+ concurrent users"
    ]
  },
  {
    id: 2,
    title: "Data Warehouse Migration",
    description: "Led a project to migrate the company's data warehouse from on-premise to Snowflake. The project involved transferring 5+ years of historical data and redesigning ETL processes.",
    technologies: ["Snowflake", "AWS S3", "Apache Airflow", "dbt", "Python"],
    highlights: [
      "Completed migration within budget and 2 weeks ahead of schedule",
      "Achieved 40% cost reduction in data storage and processing",
      "Improved query performance by 60% on average"
    ]
  },
  {
    id: 3,
    title: "Customer Segmentation Engine",
    description: "Built a customer segmentation engine that analyzes customer data to create targeted marketing segments. The system processes data from multiple sources including CRM, website, and mobile app.",
    technologies: ["Python", "Apache Spark", "ML libraries", "PostgreSQL", "Docker"],
    highlights: [
      "Identified 15 distinct customer segments that led to a 25% increase in marketing ROI",
      "Automated data preprocessing and feature engineering pipeline",
      "Implemented CI/CD for model retraining and deployment"
    ]
  },
  {
    id: 4,
    title: "Data Quality Monitoring Framework",
    description: "Developed a comprehensive data quality monitoring framework to detect anomalies and inconsistencies in data pipelines across the organization.",
    technologies: ["Python", "Great Expectations", "Apache Airflow", "Prometheus", "Grafana"],
    highlights: [
      "Reduced invalid data incidents by 75%",
      "Created automated alerts and reporting system",
      "Implemented data lineage tracking for compliance requirements"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-background">
      <div className="container-custom">
        <h2 className="heading-lg mb-10 text-center">Key Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold uppercase text-gray-500 mb-2">Highlights</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 