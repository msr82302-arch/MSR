import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { TIMELINE_STAGES } from '../data/portfolioData';

export default function ProfessionalJourney() {
  const publishedStages = TIMELINE_STAGES.filter((stage) => stage.published);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentStage = publishedStages[selectedIndex] ?? publishedStages[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < publishedStages.length - 1 ? prev + 1 : prev));
  };

  return (
    <section id="journey" className="bg-white border-b border-neutral-200 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D90B2B] mb-2">Chronological Progression</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
              Professional &amp; Technical Journey
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
              Ordered chronologically from foundational Python mentorship through BS Artificial
              Intelligence coursework, applied speech AI, Ethereum fellowship, and hybrid Web3
              architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={selectedIndex === 0}
              aria-label="Previous timeline stage"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-[#171717] hover:bg-[#F5F5F7] disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline ml-1">Previous</span>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={selectedIndex === publishedStages.length - 1}
              aria-label="Next timeline stage"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-3 py-2 border border-neutral-200 rounded-lg text-sm font-medium text-[#171717] hover:bg-[#F5F5F7] disabled:opacity-40 disabled:pointer-events-none transition-colors focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
            >
              <span className="hidden sm:inline mr-1">Next</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Stage Selector List */}
          <div
            role="tablist"
            aria-label="Professional journey stages"
            className="lg:col-span-5 space-y-2"
          >
            {publishedStages.map((stage, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[#D90B2B] ${
                    isSelected
                      ? 'bg-[#171717] text-white border-[#171717]'
                      : 'bg-white text-[#171717] border-neutral-200 hover:bg-[#F5F5F7]'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <span
                      className={`font-mono text-xs font-semibold tabular-nums ${
                        isSelected ? 'text-[#FF6B7F]' : 'text-[#D90B2B]'
                      }`}
                    >
                      Stage {stage.stageNumber} · {stage.category}
                    </span>
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        isSelected ? 'text-neutral-300' : 'text-[#777777]'
                      }`}
                    >
                      {stage.period}
                    </span>
                  </div>
                  <p className="font-display text-sm sm:text-base font-bold leading-snug">
                    {stage.title}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      isSelected ? 'text-neutral-300' : 'text-[#666666]'
                    }`}
                  >
                    {stage.organization}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Stage Detail Pane */}
          <div
            role="tabpanel"
            aria-label={`Stage ${currentStage.stageNumber}: ${currentStage.title}`}
            className="lg:col-span-7 bg-[#F5F5F7] border border-neutral-200 rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#777777] mb-3">
              <span className="font-mono font-semibold text-[#D90B2B] tabular-nums">
                Stage {currentStage.stageNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span>{currentStage.category}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{currentStage.period}</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] mb-1">
              {currentStage.title}
            </h3>

            <p className="text-sm font-semibold text-[#333333] mb-1">
              {currentStage.programOrRole} — {currentStage.organization}
              {currentStage.location ? `, ${currentStage.location}` : ''}
            </p>

            {currentStage.verificationNote && (
              <p className="text-xs text-[#777777] mb-5">{currentStage.verificationNote}</p>
            )}

            <div className="space-y-4 text-sm sm:text-[15px] text-[#333333] leading-relaxed mb-6">
              <p>{currentStage.summary}</p>
              <p className="text-[#555555]">{currentStage.progressionNote}</p>
            </div>

            {currentStage.topics.length > 0 && (
              <div className="pt-5 border-t border-neutral-200">
                <h4 className="font-display text-sm font-bold text-[#171717] mb-3">
                  Key Technical Focus &amp; Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-[#333333]">
                  {currentStage.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D90B2B] shrink-0"
                      />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {currentStage.link && (
              <div className="mt-6 pt-5 border-t border-neutral-200">
                <a
                  href={currentStage.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
                >
                  <span>{currentStage.link.label}</span>
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
