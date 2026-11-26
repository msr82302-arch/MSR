import { ArrowRight, ExternalLink, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { HERO_METRICS, SITE_CONFIG } from '../data/portfolioData';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="bg-white border-b border-neutral-200 pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-sm font-medium text-[#777777] mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-[#D90B2B] font-semibold">Muhammad Sohaib Rasheed</span>
              <span aria-hidden="true">·</span>
              <span>BS Artificial Intelligence, NUTECH</span>
              <span aria-hidden="true">·</span>
              <span>{SITE_CONFIG.location}</span>
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-bold tracking-tight text-[#171717] leading-[1.12] text-balance mb-6">
              {SITE_CONFIG.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mb-8">
              {SITE_CONFIG.heroSupporting}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-sm font-semibold text-[#171717] bg-white border border-neutral-300 hover:border-[#171717] hover:bg-[#F5F5F7] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
              >
                Contact Me
              </a>
            </div>

            {/* Verified External Profile Links */}
            <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-neutral-200 text-sm font-medium text-[#171717]">
              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#D90B2B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D90B2B]"
              >
                <Linkedin className="w-4 h-4 text-[#D90B2B]" aria-hidden="true" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#777777]" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#D90B2B] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D90B2B]"
              >
                <Github className="w-4 h-4 text-[#171717]" aria-hidden="true" />
                <span>GitHub (@msr82302-arch)</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#777777]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Gauth AI Registration Booth Photograph */}
          <div className="lg:col-span-5 flex">
            <figure className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-neutral-200 bg-[#F5F5F7]">
              {!imgError ? (
                <img
                  src={SITE_CONFIG.heroPhotoPath}
                  alt={SITE_CONFIG.heroPhotoAlt}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-[50%_40%]"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#F5F5F7] to-neutral-200">
                  <span className="font-display text-3xl font-bold text-[#171717] mb-2">MSR</span>
                  <span className="text-sm text-[#777777]">{SITE_CONFIG.fullName}</span>
                </div>
              )}

              {/* Measured bottom contrast scrim for readable caption */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pt-14 pb-4 text-white">
                <p className="font-display text-sm font-semibold tracking-tight">
                  {SITE_CONFIG.fullName}
                </p>
                <p className="text-xs text-neutral-200 mt-0.5">
                  Gauth AI Registration Booth · Islamabad
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width 4-Column Factual Anchor Strip Below Split */}
        <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-xs font-medium text-[#777777]">{item.label}</p>
              <p className="font-display text-base font-bold text-[#171717]">{item.value}</p>
              <p className="text-xs text-[#555555] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
