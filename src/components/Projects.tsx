'use client';

const projects = [
  {
    id: 1,
    title: "Real-Time User Behavior Streaming",
    description: "Integrated user behavior data from Kafka into a Postgres data warehouse for view analysis with optimized data structure using Star Schema.",
    technologies: ["Spark", "Kafka", "Postgres", "PySpark", "Airflow", "Docker"],
    highlights: [
      "Used Spark for parallel reads from Kafka and dimension aggregation to improve query efficiency",
      "Wrote data in parallel to Postgres to ensure storage performance",
      "Automated end-to-end pipelines with Airflow, including email alerts for pipeline failures",
      "Deployed Spark, Kafka, Airflow and Postgres with Docker for easier management and deployment"
    ],
    githubUrl: "https://github.com/yourusername/real-time-user-behavior"
  },
  {
    id: 2,
    title: "Ecommerce User Behavior Data Pipeline",
    description: "Built a user behavior data warehouse on BigQuery for analysis and visualization with 30GB of user data containing over 40 million events.",
    technologies: ["DBT", "SQL", "Cloud Storage", "Cloud Function", "BigQuery", "Looker"],
    highlights: [
      "Exported data from MongoDB to Google Cloud Storage as a data lake",
      "Used Cloud Function to automatically load data into BigQuery staging layer when added to the datalake",
      "Crawled product images and names with BeautifulSoup, then loaded them into the datalake and BigQuery staging",
      "Transformed staging data to Data Warehouse with DBT and visualized online sales in Looker"
    ],
    githubUrl: "https://github.com/yourusername/ecommerce-data-pipeline"
  },
  {
    id: 3,
    title: "Building a Data Warehouse for Online Retail",
    description: "Developed a complete data warehouse solution for online retail data analysis with automated data processing and easy deployment.",
    technologies: ["Python", "Pandas", "DBT", "Airflow", "BigQuery", "Docker"],
    highlights: [
      "Loaded the Online Retail dataset from a CSV into BigQuery for efficient analysis",
      "Built a data warehouse with DBT using a star schema for reporting",
      "Automated the pipeline with Airflow for scheduled data processing",
      "Containerized the technologies with Docker for easy deployment"
    ],
    githubUrl: "https://github.com/yourusername/retail-data-warehouse"
  },
  {
    id: 4,
    title: "Chat with Your Document Using a RAG Engine",
    description: "Built a chatbot that answers questions based on user-imported documents, supporting various file formats and utilizing advanced language models.",
    technologies: ["Llama3", "Chroma", "Transformer", "FastAPI", "Streamlit"],
    highlights: [
      "Scan and extract text data from Word, PDF, and TXT files",
      "Built a pipeline combining vector databases and large language models to generate answers based on the provided data",
      "Built the back-end with FastAPI and the user interface with Streamlit"
    ],
    githubUrl: "https://github.com/yourusername/document-rag-chatbot"
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
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
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