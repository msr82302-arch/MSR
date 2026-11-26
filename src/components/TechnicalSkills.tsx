import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="bg-[#F5F5F7] border-b border-neutral-200 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#D90B2B] mb-2">Technical Capabilities</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
            Core Engineering &amp; Applied Technology Stack
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
            Organized by engineering domain and backed by university coursework, mentorship
            programs, fellowship training, and implemented prototype repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => (
            <article
              key={category.id}
              className="bg-white border border-neutral-200 rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-lg font-bold text-[#171717]">
                    {category.title}
                  </h3>
                  <span className="font-mono text-xs text-[#777777] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <p className="text-xs text-[#666666] leading-relaxed mb-4 pb-4 border-b border-neutral-200">
                  {category.contextNote}
                </p>

                <ul className="space-y-2 text-sm font-medium text-[#171717]">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rounded-full bg-[#D90B2B] shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
