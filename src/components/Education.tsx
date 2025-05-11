'use client';

const educations = [
  {
    id: 1,
    degree: "Master of Science in Data Science",
    institution: "Vietnam National University",
    location: "Ho Chi Minh City, Vietnam",
    period: "2017 - 2019",
    description: "Focused on advanced data processing techniques, machine learning algorithms, and statistical analysis. Graduated with honors."
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Hanoi University of Science and Technology",
    location: "Hanoi, Vietnam",
    period: "2013 - 2017",
    description: "Studied computer science fundamentals, algorithm design, database systems, and software engineering principles."
  }
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Data Analytics - Specialty",
    issuer: "Amazon Web Services",
    year: "2022"
  },
  {
    id: 2,
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    year: "2021"
  },
  {
    id: 3,
    name: "Databricks Certified Developer - Apache Spark",
    issuer: "Databricks",
    year: "2020"
  },
  {
    id: 4,
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    year: "2020"
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg mb-10 text-center">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="heading-md mb-6 text-primary">Academic Education</h3>
            <div className="space-y-8">
              {educations.map((edu) => (
                <div key={edu.id} className="card">
                  <div className="flex justify-between mb-2">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mb-3">
                    <div className="text-primary font-medium">{edu.institution}</div>
                    <div className="text-gray-600 text-sm">{edu.location}</div>
                  </div>
                  <p className="text-gray-700 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6 text-primary">Professional Certifications</h3>
            <div className="card">
              <ul className="divide-y divide-gray-200">
                {certifications.map((cert) => (
                  <li key={cert.id} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-semibold">{cert.name}</div>
                        <div className="text-gray-600 text-sm">{cert.issuer}</div>
                      </div>
                      <div className="text-primary font-medium">{cert.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="heading-md mb-6 text-primary">Languages</h3>
              <div className="card">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">English</span>
                      <span>Professional</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Vietnamese</span>
                      <span>Native</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 