import { ExternalLink } from 'lucide-react';
import { FIVERR_SERVICES } from '../data/portfolioData';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F5F7] border-b border-neutral-200 py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-[#D90B2B] mb-2">Freelance &amp; Mentoring</p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
            Professional Services on Fiverr
          </h2>
          <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
            Available for backend engineering, foundational Ethereum smart contract development,
            and structured Web2/Web3 programming tutoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FIVERR_SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-[#777777] mb-3">
                  <span className="font-mono font-semibold text-[#D90B2B] tabular-nums">
                    {service.index}. {service.platform}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#171717] leading-snug mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-[#444444] leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 text-sm text-[#333333] pt-4 border-t border-neutral-200 mb-6">
                  {service.deliverables.map((item) => (
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

              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#171717] hover:bg-[#D90B2B] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
              >
                <span>{service.ctaLabel}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
