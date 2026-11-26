import { ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-neutral-300 border-t border-neutral-800 py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div>
            <p className="font-display text-lg font-bold text-white">
              {SITE_CONFIG.brandMark} · {SITE_CONFIG.fullName}
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              BS Artificial Intelligence Student at NUTECH · Python &amp; Django Developer ·{' '}
              {SITE_CONFIG.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#journey" className="hover:text-white transition-colors">
              Journey
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Built for technical verification and
            long-term portfolio ownership.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-white self-start sm:self-auto transition-colors focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
