import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SITE_CONFIG } from '../data/portfolioData';

interface NavbarProps {
  scrollProgress: number;
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Journey', href: '#journey', id: 'journey' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Services', href: '#services', id: 'services' },
];

export default function Navbar({ scrollProgress, activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      {/* Scroll progress indicator */}
      <div
        aria-hidden="true"
        className="h-[2px] bg-[#D90B2B] transition-[width] duration-150 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          aria-label={`${SITE_CONFIG.fullName} — Home`}
          className="font-display text-xl font-extrabold tracking-tight text-[#171717] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D90B2B]"
        >
          MSR
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D90B2B] ${
                  isActive ? 'text-[#171717] font-semibold' : 'hover:text-[#171717]'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#D90B2B] transition-transform duration-150 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#171717] hover:bg-[#F5F5F7] transition-colors focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center justify-between min-h-[44px] px-3 py-2 text-base font-medium text-[#171717] hover:bg-[#F5F5F7] rounded-lg transition-colors"
            >
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-200">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
