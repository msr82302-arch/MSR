import { ABOUT_CONTENT, EDUCATION_RECORDS, SITE_CONFIG } from '../data/portfolioData';

export default function AboutEducation() {
  return (
    <section id="about" className="bg-[#F5F5F7] border-b border-neutral-200 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left: Professional Biography */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#D90B2B] mb-2">About Me</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
                {ABOUT_CONTENT.heading}
              </h2>
            </div>

            <div className="space-y-4 text-[15px] sm:text-base text-[#333333] leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl p-5 sm:p-6">
              <h3 className="font-display text-base font-bold text-[#171717] mb-2">
                {ABOUT_CONTENT.careerDirection.title}
              </h3>
              <p className="text-sm text-[#555555] leading-relaxed">
                {ABOUT_CONTENT.careerDirection.statement}
              </p>
              <p className="text-xs text-[#777777] mt-3">
                {SITE_CONFIG.fullName} · {SITE_CONFIG.location}
              </p>
            </div>
          </div>

          {/* Right: Education & Structured Learning */}
          <div id="education" className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#D90B2B] mb-2">Education &amp; Learning</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
                Academic Degree, Mentorship &amp; Fellowship
              </h2>
            </div>

            <div className="space-y-4">
              {EDUCATION_RECORDS.map((edu, idx) => (
                <article
                  key={edu.id}
                  className="bg-white border border-neutral-200 rounded-xl p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#171717]">
                      0{idx + 1}. {edu.institution}
                    </h3>
                    <span className="font-mono text-xs font-medium text-[#D90B2B] tabular-nums">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#333333] mb-1">{edu.program}</p>
                  <p className="text-xs text-[#777777] mb-4">
                    {edu.location} · {edu.statusNote}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#444444]">
                    {edu.focusAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span
                          aria-hidden="true"
                          className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D90B2B] shrink-0"
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
