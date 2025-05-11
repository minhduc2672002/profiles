'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaEye } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-background to-blue-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="heading-xl mb-4">
            <span className="text-primary block">Tran Minh Duc</span>
            <span className="text-secondary">Data Engineer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Experienced Data Engineer with expertise in designing, building, and managing data pipelines, 
            ETL processes, and big data solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="#contact" className="btn-primary">
              Contact Me
            </Link>
            <Link href="#projects" className="btn-secondary">
              View My Work
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="/[Data_Engineer] - Tran_Minh_Duc.pdf" 
              download 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              <FaDownload className="mr-2" /> Download CV
            </a>
            <Link 
              href="/view-cv" 
              className="inline-flex items-center text-primary hover:text-blue-700 font-medium"
            >
              <FaEye className="mr-2" /> View Full CV
            </Link>
          </div>
          
          <div className="flex space-x-4">
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
      </div>

      {/* Decorative element */}
      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-3/4 bg-blue-100 opacity-20 rounded-l-full"></div>
    </section>
  );
};

export default Hero; 