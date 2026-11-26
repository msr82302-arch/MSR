import { ArrowUpRight, BookOpen, ExternalLink, Github, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  ADDITIONAL_PROJECTS,
  FLAGSHIP_PROJECTS,
  type ProjectItem,
} from '../data/portfolioData';
import ArchitectureDiagram from './ArchitectureDiagram';

type FilterOption = 'All' | 'Python & Django' | 'AI & Speech' | 'Web3 & Blockchain' | 'Databases';

const FILTER_OPTIONS: FilterOption[] = [
  'All',
  'Python & Django',
  'AI & Speech',
  'Web3 & Blockchain',
  'Databases',
];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? FLAGSHIP_PROJECTS
      : FLAGSHIP_PROJECTS.filter((project) => project.filterTags.includes(activeFilter));

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-white border-b border-neutral-200 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Technology Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#D90B2B] mb-2">Featured Engineering</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
              Flagship Projects &amp; Technical Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
              Open-source prototypes demonstrating backend architecture, speech processing
              pipelines, and Ethereum smart contract verification.
            </p>
          </div>

          {/* Interactive Technology Filter Bar */}
          <div
            role="group"
            aria-label="Filter projects by technology"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F5F5F7] border border-neutral-200 rounded-lg self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const active = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  aria-pressed={active}
                  className={`px-3 py-2 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D90B2B] ${
                    active
                      ? 'bg-[#171717] text-white'
                      : 'text-[#555555] hover:text-[#171717] hover:bg-white'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Flagship Project Cards */}
        {filteredProjects.length === 0 ? (
          <div className="bg-[#F5F5F7] border border-neutral-200 rounded-xl p-8 text-center">
            <p className="text-sm text-[#555555]">No flagship projects match this filter.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredProjects.map((project, index) => (
              <article
                key={project.id}
                className="bg-[#F5F5F7] border border-neutral-200 rounded-2xl p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Project Summary & Metadata */}
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <p className="text-xs font-medium text-[#777777] mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className="font-mono font-semibold text-[#D90B2B] tabular-nums">
                          Case Study 0{index + 1}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.statusLabel}</span>
                      </p>

                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] leading-snug mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-[#555555]">{project.subtitle}</p>
                    </div>

                    <p className="text-sm sm:text-[15px] text-[#333333] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div>
                      <h4 className="font-display text-xs font-bold text-[#171717] mb-2">
                        Key Implementation Highlights
                      </h4>
                      <ul className="space-y-1.5 text-sm text-[#333333]">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D90B2B] shrink-0"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clean unboxed technology line */}
                    <div className="pt-3 border-t border-neutral-200">
                      <p className="text-xs text-[#777777] mb-1">Technologies</p>
                      <p className="font-mono text-xs text-[#171717] leading-relaxed">
                        {project.technologies.join(' · ')}
                      </p>
                    </div>

                    {/* Functional Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
                      >
                        <BookOpen className="w-4 h-4" aria-hidden="true" />
                        <span>Read Full Case Study</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-300 hover:border-[#171717] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                          <span>GitHub Repository</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#777777]" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Architecture Preview */}
                  <div className="lg:col-span-6 space-y-3">
                    {project.architectureType && (
                      <ArchitectureDiagram type={project.architectureType} compact />
                    )}
                    <div className="bg-white border border-neutral-200 rounded-xl p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-[#171717]">
                          Architectural Documentation Ready
                        </p>
                        <p className="text-xs text-[#666666] mt-0.5">
                          Includes {project.caseStudySections.length} technical sections covering
                          workflow, challenges, and roadmap.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#D90B2B] hover:text-[#A90020] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
                      >
                        <span>Inspect Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Additional Prototypes & Client Systems (Sanitized Scope) */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-semibold text-[#D90B2B] mb-2">
              Additional Prototypes &amp; Client Systems
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#171717] text-balance">
              Prototype &amp; Sanitized Architecture Overviews
            </h3>
            <p className="text-sm text-[#555555] mt-2 leading-relaxed">
              Presented with strict distinction between completed prototype interfaces and planned
              production phases, excluding all confidential client data pending publication
              approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADDITIONAL_PROJECTS.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <p className="text-xs font-medium text-[#777777]">
                    {item.roleOrContext} · <span className="text-[#D90B2B]">{item.statusNote}</span>
                  </p>
                  <h4 className="font-display text-lg font-bold text-[#171717]">{item.title}</h4>
                  <p className="text-sm text-[#444444] leading-relaxed">{item.scopeSummary}</p>

                  <div className="pt-2">
                    <p className="text-xs font-semibold text-[#171717] mb-2">
                      Implemented Scope
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#444444]">
                      {item.implementedCapabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-[#171717] shrink-0"
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <p className="text-xs text-[#666666] leading-relaxed">
                    <strong className="font-semibold text-[#171717]">Scope Boundary: </strong>
                    {item.plannedOrRestrictedNote}
                  </p>
                  <p className="font-mono text-xs text-[#777777]">
                    {item.technologies.join(' · ')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-neutral-200 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-6 py-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-[#D90B2B] mb-0.5">
                  {selectedProject.statusLabel}
                </p>
                <h3
                  id="case-study-modal-title"
                  className="font-display text-lg sm:text-xl font-bold text-[#171717]"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study modal"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-[#171717] hover:bg-[#F5F5F7] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              <p className="text-base text-[#333333] leading-relaxed">
                {selectedProject.shortDescription}
              </p>

              {selectedProject.architectureType && (
                <ArchitectureDiagram type={selectedProject.architectureType} />
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedProject.caseStudySections.map((section) => (
                  <div
                    key={section.title}
                    className="bg-[#F5F5F7] border border-neutral-200 rounded-xl p-5"
                  >
                    <h4 className="font-display text-sm font-bold text-[#171717] mb-2">
                      {section.title}
                    </h4>
                    <p className="text-sm text-[#444444] leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
                <p className="font-mono text-xs text-[#666666]">
                  Stack: {selectedProject.technologies.join(' · ')}
                </p>

                <div className="flex items-center gap-3">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span>Open on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 text-sm font-semibold text-[#171717] bg-[#F5F5F7] hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
