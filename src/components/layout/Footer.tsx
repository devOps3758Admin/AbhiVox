"use client";

import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { name: 'Software & Digital Products', href: '/services#fullstack' },
    { name: 'Cloud & Infrastructure', href: '/services#cloud' },
    { name: 'DevOps & Automation', href: '/services#devops' },
    { name: 'AI & Intelligent Automation', href: '/services#ai' },
    { name: 'Security Engineering', href: '/services#security' },
    { name: 'Cost Optimization', href: '/services#cost' },
  ],
  solutions: [
    { name: 'Business Automation', href: '/solutions#automation' },
    { name: 'Agentic AI Architecture', href: '/solutions#agentic-ai' },
  ],
  company: [
    { name: 'Selected Work', href: '/case-studies' },
    { name: 'Products', href: '/products' },
    { name: 'Engineering Approach', href: '/about' },
    { name: 'Start a Project', href: '/contact' },
  ],
};

const currentYear = 2026;

export function Footer() {
  return (
    <footer className="relative bg-[#080A09] text-[#F4F5F1] border-t border-white/10 overflow-hidden" role="contentinfo">
      {/* Background technical grid */}
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#20B6A5]/5 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-width py-14 lg:py-20 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 text-xl font-bold tracking-tight text-[#F4F5F1] hover:text-white transition-colors"
              aria-label="ABHIVOX TECHNOLOGIES home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-[#101211] border border-[#20B6A5]/40 shadow-[0_0_12px_rgba(32,182,165,0.25)]">
                <svg
                  className="w-5 h-5 text-[#20B6A5]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h11" />
                  <path d="M4 18h7" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-extrabold tracking-tight">ABHIVOX</span>
                <span className="text-[9px] font-mono font-medium tracking-widest text-[#20B6A5] uppercase -mt-0.5">
                  TECHNOLOGIES
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm text-[#A9B0AC] leading-relaxed">
              Your Vision. Our Innovation. We engineer bespoke software, cloud infrastructure, AI, and intelligent automation that give modern businesses decisive technical leverage.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#20B6A5]">
              <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse" />
              <span>SYSTEMS PRODUCTION READY</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F5F1] mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Work Column */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F5F1] mb-4">
              Solutions & Work
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F4F5F1] mb-4">
              Direct Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href="tel:+917379791375"
                  className="flex items-center gap-2.5 text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors group"
                >
                  <svg className="h-4 w-4 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 7379791375</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919565535583"
                  className="flex items-center gap-2.5 text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors group"
                >
                  <svg className="h-4 w-4 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>+91 95655 35583</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917379791375"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-[#A9B0AC] hover:text-[#20B6A5] transition-colors group"
                  aria-label="Direct WhatsApp Message with Abhivox Technologies"
                >
                  <svg className="h-4 w-4 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E9E65A] hover:underline"
                >
                  <span>Discuss an Engineering Need</span>
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A827E]">
          <p>© {currentYear} ABHIVOX TECHNOLOGIES. All rights reserved.</p>
          <p className="font-mono text-[11px] text-[#A9B0AC]">
            YOUR VISION. OUR INNOVATION.
          </p>
        </div>
      </div>
    </footer>
  );
}
