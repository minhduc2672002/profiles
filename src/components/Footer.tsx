'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === 'production' ? '/profiles' : '';
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">Tran Minh Duc</Link>
            <p className="mt-2 max-w-md">
              Data Engineer chuyên phát triển và tối ưu hóa các giải pháp dữ liệu
            </p>
            
            <div className="mt-4 flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ductrandata/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/minhduc2672002" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary text-xl"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:minhductranit@gmail.com" 
                className="text-gray-400 hover:text-primary text-xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          {/* Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Liên kết nhanh</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-primary">Trang chủ</Link></li>
                <li><Link href="#about" className="text-gray-400 hover:text-primary">Giới thiệu</Link></li>
                <li><Link href="#experience" className="text-gray-400 hover:text-primary">Kinh nghiệm</Link></li>
                <li><Link href="#skills" className="text-gray-400 hover:text-primary">Kỹ năng</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Thêm</h3>
              <ul className="space-y-2">
                <li><Link href="#projects" className="text-gray-400 hover:text-primary">Dự án</Link></li>
                <li><Link href="#education" className="text-gray-400 hover:text-primary">Học vấn</Link></li>
                <li><Link href="/view-cv" className="text-gray-400 hover:text-primary">Xem CV</Link></li>
                <li><Link href="#contact" className="text-gray-400 hover:text-primary">Liên hệ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Liên hệ</h3>
              <address className="not-italic text-gray-400">
                <p>Ho Chi Minh City, Vietnam</p>
                <p className="mt-2">minhductranit@gmail.com</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Tran Minh Duc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 