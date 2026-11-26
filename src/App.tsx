/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import AboutEducation from './components/AboutEducation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import NotFoundPage from './components/NotFoundPage';
import ProfessionalJourney from './components/ProfessionalJourney';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import TechnicalSkills from './components/TechnicalSkills';

const SECTION_IDS = ['home', 'about', 'journey', 'skills', 'projects', 'services', 'contact'];

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
  const isKnownRoute = pathname === '/' || pathname === '/index.html';

  useEffect(() => {
    if (!isKnownRoute) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setShowBackToTop(scrollTop > 480);

      let current = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isKnownRoute]);

  if (!isKnownRoute) {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#171717] overflow-x-hidden">
      <Navbar scrollProgress={scrollProgress} activeSection={activeSection} />

      <main className="flex-1">
        <Hero />
        <AboutEducation />
        <ProfessionalJourney />
        <TechnicalSkills />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-30 inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#171717] text-white border border-neutral-700 hover:bg-[#D90B2B] hover:border-[#D90B2B] shadow-lg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
        >
          <ArrowUp className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
