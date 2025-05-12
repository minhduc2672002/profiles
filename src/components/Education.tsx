'use client';

const educations = [
  {
    id: 1,
    degree: "Data Engineering",
    institution: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
    location: "Ho Chi Minh City, Vietnam",
    period: "Graduate Oct 2024",
    description: ""
  },
  {
    id: 2,
    degree: "Data Coaching - Big Data",
    institution: "UniGap Academy",
    location: "Ho Chi Minh City, Vietnam",
    period: "May - Nov 2024",
    description: ""
  }
];

const certifications = [
  {
    id: 1,
    name: "SQL (Advanced) Certificate",
    issuer: "HackerRank",
    year: "2024",
    url: "https://www.hackerrank.com/certificates/your-certificate"
  },
  {
    id: 2,
    name: "Python for Data Science, AI and Development",
    issuer: "Coursera",
    year: "2023",
    url: "https://www.coursera.org/your-certificate"
  },
  {
    id: 3,
    name: "Python Project for Data Engineering",
    issuer: "Coursera",
    year: "2023",
    url: "https://www.coursera.org/your-certificate"
  },
  {
    id: 4,
    name: "TOEIC Certificate",
    issuer: "IIG Vietnam",
    year: "2023",
    url: ""
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
                  {edu.description && <p className="text-gray-700 text-sm">{edu.description}</p>}
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
                        <div className="font-semibold">
                          {cert.url ? (
                            <a 
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-primary flex items-center"
                            >
                              {cert.name}
                              {cert.url && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </a>
                          ) : (
                            cert.name
                          )}
                        </div>
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
                      <div className="bg-primary h-2 rounded-full w-3/5"></div>
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