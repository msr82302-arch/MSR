import { ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolioData';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717] flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full border border-neutral-200 rounded-2xl p-8 sm:p-10 bg-[#F5F5F7]">
        <p className="font-mono text-sm font-semibold text-[#D90B2B] mb-2">404 · Page Not Found</p>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#171717] mb-3">
          This route does not exist.
        </h1>
        <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-6">
          The page you requested could not be located on {SITE_CONFIG.fullName}&apos;s portfolio.
          Return to the main page to browse verified projects, timeline milestones, and services.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Portfolio Home</span>
        </a>
      </div>
    </main>
  );
}
