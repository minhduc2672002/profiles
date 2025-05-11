'use client';

const experiences = [
  {
    id: 1,
    title: "Senior Data Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: [
      "Led a team of 3 data engineers to design and implement data pipelines for processing 5TB+ of data daily",
      "Developed ETL workflows using Apache Airflow, reducing processing time by 40%",
      "Implemented data quality checks that improved data accuracy by 25%",
      "Collaborated with data scientists to build machine learning pipelines"
    ]
  },
  {
    id: 2,
    title: "Data Engineer",
    company: "DataWorks Analytics",
    period: "2020 - 2022",
    description: [
      "Designed and built data lakes on AWS for storing and processing large datasets",
      "Created real-time data processing pipelines using Apache Kafka and Spark Streaming",
      "Optimized SQL queries resulting in 30% improved performance",
      "Implemented CI/CD pipelines for automating data workflow deployments"
    ]
  },
  {
    id: 3,
    title: "Junior Data Engineer",
    company: "Global Data Solutions",
    period: "2018 - 2020",
    description: [
      "Developed and maintained ETL processes using Python and SQL",
      "Built data models for business intelligence dashboards",
      "Implemented data validation and transformation processes",
      "Assisted in database migration projects from on-premise to cloud environments"
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
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 