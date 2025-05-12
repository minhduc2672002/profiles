'use client';

const experiences = [
  {
    id: 1,
    title: "Data Engineer",
    company: "Viemind Technical Consulting",
    period: "Nov 2024 - Present 2025",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Designed and implemented ETL pipelines using Dagster to read PDF, DOCX, and image data from a MinIO data lake, extracting text from, chunking it, and loading into a Qdrant vector database to power AI Agent knowledge bases.",
      "Developed a FastAPI-based back-end knowledge service to enable AI Agent queries via dense, sparse, and hybrid search modes and integrating with Dagster pipelines for dynamic knowledge base updates.",
      "Optimized data processing pipelines, reducing processing time by 60% through efficient code refactoring, resource management, and text chunking strategies.",
      "Containerized all pipelines and services with Docker and deployed them on Azure Kubernetes Service (AKS). Set up GitHub Actions CI/CD pipelines to automate testing and deployment, which reduced deployment time by 40% and ensured consistent rollouts.",
      "Collaborated with the AI team to develop ReactAgent and Agentic RAG systems, contributing to improved AI response accuracy"
    ]
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "FPT Software",
    period: "Oct 2023 - Dec 2023",
    location: "Ho Chi Minh City, Vietnam",
    description: [
      "Received tasks from the mentor and reported daily progress following the Scrum/Agile process.",
      "Designed data models to optimize CRUD operations for users, courses, classes, and training programs in a MySQL database.",
      "Developed user login and authentication API using the Spring Boot framework and managed source code with GitLab.",
      "Packaged the application and MySQL database with Docker for streamlined cloud deployment."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-background">
      <div className="container-custom">
        <h2 className="heading-lg mb-10 text-center">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="card hover:border-l-4 hover:border-primary">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  {exp.company && <p className="text-primary font-medium">{exp.company}</p>}
                </div>
                <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                  <span className="mt-1 md:mt-0 md:ml-2 text-gray-600 text-sm">
                    {exp.location}
                  </span>
                </div>
              </div>
              
              {exp.description.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 