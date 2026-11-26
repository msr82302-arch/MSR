import { Check, Copy, ExternalLink, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { SITE_CONFIG } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Backend / Django Opportunity');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [dispatchChannel, setDispatchChannel] = useState<'email' | 'whatsapp'>('email');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleComposeSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormError('Please fill in your name, email address, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setFormError(null);

    const formattedBody = `Name: ${trimmedName}\nEmail: ${trimmedEmail}\nTopic: ${subject}\n\n${trimmedMessage}`;

    if (dispatchChannel === 'whatsapp') {
      const waUrl = `${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent(formattedBody)}`;
      window.location.href = waUrl;
    } else {
      const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject} — ${trimmedName}`
      )}&body=${encodeURIComponent(formattedBody)}`;
      window.location.href = mailtoUrl;
    }
  };

  const optionalSocialEntries = Object.entries(SITE_CONFIG.optionalSocials).filter(
    ([, url]) => typeof url === 'string' && url.length > 0
  );

  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#D90B2B] mb-2">Contact &amp; Connect</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] text-balance">
                Get in Touch Directly
              </h2>
              <p className="text-sm sm:text-base text-[#555555] mt-2 leading-relaxed">
                Open to backend engineering internships, software-house roles, freelance Web2/Web3
                projects, and technical collaboration.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email + Copy Control */}
              <div className="bg-[#F5F5F7] border border-neutral-200 rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#777777]">Direct Email</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-mono text-sm font-semibold text-[#171717] hover:text-[#D90B2B] truncate block transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-2 text-xs font-semibold text-[#171717] bg-white border border-neutral-200 hover:border-[#171717] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D90B2B]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5F5F7] border border-neutral-200 hover:border-[#171717] rounded-xl p-4 flex items-center justify-between gap-3 transition-colors focus-visible:outline-2 focus-visible:outline-[#D90B2B]"
              >
                <div>
                  <p className="text-xs font-medium text-[#777777]">Phone &amp; WhatsApp</p>
                  <p className="font-mono text-sm font-semibold text-[#171717] tabular-nums">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D90B2B] whitespace-nowrap shrink-0">
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Open WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </span>
              </a>

              {/* LinkedIn & GitHub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  href={SITE_CONFIG.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-200 hover:border-[#171717] rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  <Linkedin className="w-4 h-4 text-[#D90B2B]" aria-hidden="true" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#777777]" aria-hidden="true" />
                </a>

                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#171717] bg-white border border-neutral-200 hover:border-[#171717] rounded-xl transition-colors whitespace-nowrap shrink-0"
                >
                  <Github className="w-4 h-4 text-[#171717]" aria-hidden="true" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#777777]" aria-hidden="true" />
                </a>
              </div>

              {optionalSocialEntries.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 pt-2 text-sm text-[#555555]">
                  {optionalSocialEntries.map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="capitalize hover:text-[#D90B2B] transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              )}

              <p className="text-xs text-[#777777] pt-2">
                Location: {SITE_CONFIG.location} · Available for on-site (Islamabad) and remote
                engineering roles.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Composer (Dispatches via Email Client or WhatsApp) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleComposeSubmit}
              noValidate
              className="bg-[#F5F5F7] border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-[#171717]">
                  Prepare a Direct Inquiry
                </h3>
                <p className="text-xs text-[#666666] mt-1">
                  Validates your message and opens your chosen Email client or WhatsApp conversation
                  with pre-filled details.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#171717] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hiring Manager / Client Name"
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-neutral-300 rounded-lg text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-[#D90B2B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#171717] mb-1.5"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-neutral-300 rounded-lg text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-[#D90B2B]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-[#171717] mb-1.5"
                >
                  Inquiry Topic
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-neutral-300 rounded-lg text-[#171717] focus:outline-none focus:border-[#D90B2B]"
                >
                  <option value="Backend / Django Opportunity">Backend / Django Opportunity</option>
                  <option value="Internship / Junior Developer Role">
                    Internship / Junior Developer Role
                  </option>
                  <option value="Web3 / Smart Contract Development">
                    Web3 / Smart Contract Development
                  </option>
                  <option value="AI / Speech Processing Collaboration">
                    AI / Speech Processing Collaboration
                  </option>
                  <option value="Programming Tutoring">Programming Tutoring</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#171717] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share role details, project requirements, or timeline..."
                  className="w-full px-3.5 py-2.5 text-sm bg-white border border-neutral-300 rounded-lg text-[#171717] placeholder:text-neutral-400 focus:outline-none focus:border-[#D90B2B]"
                />
              </div>

              {formError && (
                <p role="alert" className="text-xs font-medium text-[#A90020]">
                  {formError}
                </p>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div
                  role="group"
                  aria-label="Choose message delivery app"
                  className="inline-flex items-center gap-1 p-1 bg-white border border-neutral-200 rounded-lg self-start"
                >
                  <button
                    type="button"
                    onClick={() => setDispatchChannel('email')}
                    aria-pressed={dispatchChannel === 'email'}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      dispatchChannel === 'email'
                        ? 'bg-[#171717] text-white'
                        : 'text-[#555555] hover:text-[#171717]'
                    }`}
                  >
                    Via Email App
                  </button>
                  <button
                    type="button"
                    onClick={() => setDispatchChannel('whatsapp')}
                    aria-pressed={dispatchChannel === 'whatsapp'}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      dispatchChannel === 'whatsapp'
                        ? 'bg-[#171717] text-white'
                        : 'text-[#555555] hover:text-[#171717]'
                    }`}
                  >
                    Via WhatsApp
                  </button>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-2.5 text-sm font-semibold text-white bg-[#D90B2B] hover:bg-[#A90020] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D90B2B]"
                >
                  {dispatchChannel === 'email' ? (
                    <>
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Open Email Draft</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
