'use client';

import Link from 'next/link';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const CVPreview = () => {
  return (
    <section id="cv" className="section bg-white">
      <div className="container-custom">
        <h2 className="heading-lg mb-6 text-center">My Curriculum Vitae</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Xem tóm tắt CV của tôi bên dưới hoặc tải xuống bản đầy đủ để biết thêm chi tiết về kinh nghiệm và kỹ năng của tôi.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center border-b border-gray-200 pb-6 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-primary">Tran Minh Duc</h1>
              <p className="text-xl text-gray-700">Senior Data Engineer</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="/[Data_Engineer] - Tran_Minh_Duc.pdf" 
                download 
                className="btn-primary inline-flex items-center"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
              <Link 
                href="/view-cv" 
                className="btn-secondary inline-flex items-center"
              >
                <FaExternalLinkAlt className="mr-2" /> View Full CV
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-gray-800">Contact Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li><span className="font-medium">Email:</span> minhductranit@gmail.com</li>
                <li><span className="font-medium">Location:</span> Ho Chi Minh City, Vietnam</li>
                <li><span className="font-medium">LinkedIn:</span> linkedin.com/in/tran-minh-duc</li>
              </ul>
              
              <h3 className="font-bold text-lg mt-8 mb-4 text-gray-800">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">SQL</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Apache Spark</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">ETL</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">Data Modeling</span>
                <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">AWS</span>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="font-bold text-lg mb-4 text-gray-800">Professional Summary</h3>
              <p className="text-gray-600 mb-6">
                Experienced Data Engineer with expertise in designing, building, and managing data pipelines, 
                ETL processes, and big data solutions. Skilled in SQL, Python, Apache Spark, AWS, 
                and other data technologies.
              </p>
              
              <h3 className="font-bold text-lg mb-4 text-gray-800">Experience Highlights</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Senior Data Engineer</p>
                    <p className="text-sm text-gray-500">2022 - Present</p>
                  </div>
                  <p className="text-gray-600">
                    Led a team of data engineers to design and implement data pipelines for processing 5TB+ of data daily.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Data Engineer</p>
                    <p className="text-sm text-gray-500">2020 - 2022</p>
                  </div>
                  <p className="text-gray-600">
                    Created real-time data processing pipelines using Apache Kafka and Spark Streaming.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-500 italic">
                  This is a summary of my CV. Please download the full version or view online for complete details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVPreview; 