import Header from '@/components/Header';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import ChatbotWidget from '@/components/ChatbotWidget';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ChatbotWidget />
      <Footer />
    </main>
  );
} 