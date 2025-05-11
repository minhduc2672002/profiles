'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaEye } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const About = () => {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/profiles' : '';

  return (
    <section id="about" className="section bg-gradient-to-br from-background to-blue-50 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Phần ảnh đại diện */}
          <div className="lg:w-1/3">
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image 
                src={`${basePath}/images/chandung.png`}
                alt="Tran Minh Duc" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a 
                href="https://www.linkedin.com/in/ductrandata/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/minhduc2672002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:minhductranit@gmail.com" 
                className="text-gray-600 hover:text-primary text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          {/* Phần thông tin cá nhân */}
          <div className="lg:w-2/3">
            <h1 className="heading-xl mb-4">
              <span className="text-primary block">Tran Minh Duc</span>
              <span className="text-secondary">Data Engineer</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Experienced Data Engineer with expertise in designing, building, and managing data pipelines, 
              ETL processes, and big data solutions.
            </p>
            
            <p className="text-lg mb-4">
              My experience spans across various technologies such as SQL, Python, Apache Spark, 
              Hadoop ecosystem, and cloud platforms including AWS and Azure. I am skilled at designing 
              data warehousing solutions, implementing data quality checks, and automating workflow processes.
            </p>
            
            <p className="text-lg mb-6">
              I am passionate about solving complex data challenges and continuously expanding my technical knowledge. 
              I believe in creating data solutions that are not only efficient but also maintainable and future-proof.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a 
                href={`${basePath}/[Data_Engineer] - Tran_Minh_Duc.pdf`}
                download 
                className="btn-primary inline-flex items-center mr-4"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
              <Link 
                href="/view-cv"
                className="btn-secondary inline-flex items-center mr-4"
              >
                <FaEye className="mr-2" /> View CV
              </Link>
              <Link href="#contact" className="btn-primary mr-4">
                Contact Me
              </Link>
              <Link href="#projects" className="btn-secondary">
                View My Work
              </Link>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                <div>
                  <span className="font-medium">Name:</span> Tran Minh Duc
                </div>
                <div>
                  <span className="font-medium">Email:</span> minhductranit@gmail.com
                </div>
                <div>
                  <span className="font-medium">Location:</span> Ho Chi Minh City, Vietnam
                </div>
                <div>
                  <span className="font-medium">Languages:</span> English, Vietnamese
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 