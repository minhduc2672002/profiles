'use client';

const skillCategories = [
  {
    id: 1,
    name: "Programming Languages",
    skills: ["Python", "SQL", "Java", "R", "Scala"]
  },
  {
    id: 2,
    name: "Big Data Technologies",
    skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "Databricks"]
  },
  {
    id: 3, 
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"]
  },
  {
    id: 4,
    name: "Cloud Platforms",
    skills: ["Azure", "Google Cloud"]
  },
  {
    id: 5,
    name: "Data Visualization",
    skills: ["Power BI", "Looker"]
  },
  {
    id: 6,
    name: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg mb-10 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="card">
              <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-secondary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="heading-md mb-8 text-center">Core Competencies</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-primary text-lg font-bold mb-2">ETL/ELT</div>
              <p className="text-gray-700">Data extraction, transformation, and loading workflows</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-primary text-lg font-bold mb-2">Data Modeling</div>
              <p className="text-gray-700">Designing efficient data schemas and warehouses</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-primary text-lg font-bold mb-2">Data Pipeline</div>
              <p className="text-gray-700">Building robust, scalable data processing pipelines</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-primary text-lg font-bold mb-2">Data Quality</div>
              <p className="text-gray-700">Implementing validation and monitoring for data integrity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 