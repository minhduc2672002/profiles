'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = pathname.startsWith('/profiles') ? '/profiles' : '';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href={`${basePath}/`} className="text-xl font-bold text-primary">Tran Minh Duc</Link>
        
        {/* Mobile menu button */}
        <button
          className="block md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#experience" className="hover:text-primary">Experience</Link>
          <Link href="#skills" className="hover:text-primary">Skills</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#education" className="hover:text-primary">Education</Link>
          <Link href={`${basePath}/view-cv`} className="hover:text-primary">View CV</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">About</Link>
          <Link href="#experience" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Experience</Link>
          <Link href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Skills</Link>
          <Link href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Projects</Link>
          <Link href="#education" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Education</Link>
          <Link href={`${basePath}/view-cv`} onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">View CV</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary">Contact</Link>
        </nav>
      )}
    </header>
  );
};

export default Header; 