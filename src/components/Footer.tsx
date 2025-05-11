'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const basePath = pathname.startsWith('/profiles') ? '/profiles' : '';
  
  return (
    <footer className="bg-secondary text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Tran Minh Duc
            </Link>
            <p className="mt-2 text-gray-300">
              Data Engineer
            </p>
            <p className="mt-4 text-gray-300 max-w-md">
              Professional data engineer with a passion for designing and implementing data infrastructure that transforms raw data into valuable insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href={`${basePath}/view-cv`} className="text-gray-300 hover:text-white transition-colors">
                  View CV
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 mt-6 md:mt-0">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ductrandata/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/minhduc2672002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="mailto:minhductranit@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-2xl" />
              </a>
              <a
                href={`${basePath}/[Data_Engineer] - Tran_Minh_Duc.pdf`}
                download
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFilePdf className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Tran Minh Duc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 