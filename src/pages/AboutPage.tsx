"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { principles, whyAbhivox } from '../data';
import { Link } from 'react-router-dom';

const principleIcons: Record<string, React.ReactNode> = {
  'Security by Design': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Automation First': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'Infrastructure as Code': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M2 9h20" />
    </svg>
  ),
  'Cost Awareness': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  'Observability': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  'Reliable Delivery': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
};

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="About Us & Engineering Philosophy | AbhiVox Technologies"
        description="Learn about AbhiVox Technologies, our software engineering culture, six core architectural principles, and commitment to delivering reliable, scalable systems."
        canonical="https://tech.abhivox.online/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://tech.abhivox.online/about' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              COMPANY // ENGINEERING PHILOSOPHY
            </div>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              Your Vision. Our Innovation.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              ABHIVOX TECHNOLOGIES is a full-service technology engineering company. We engineer custom software, cloud infrastructure, DevOps, AI, and intelligent automation that turn modern enterprise vision into scalable technical reality.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Approach Section */}
      <section className="py-16 lg:py-24 border-b border-white/10" aria-labelledby="mission-heading">
        <Container size="xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold text-[#20B6A5] uppercase tracking-wider">
                CORE PURPOSE
              </span>
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-[#F4F5F1] mt-2 mb-6">
                Engineering Software that Withstands Production.
              </h2>
              <div className="space-y-4 text-base text-[#A9B0AC] leading-relaxed">
                <p>
                  Too many software projects fail not because of inadequate ideas, but because of poor architecture, rushed shortcuts, manual deployments, and brittle infrastructure.
                </p>
                <p>
                  At ABHIVOX TECHNOLOGIES, we combine software craftsmanship with cloud engineering discipline. We believe that if a system is worth building, it is worth architecting cleanly, automating completely, and supporting reliably throughout its production lifetime.
                </p>
                <p>
                  We don't sell bloated agency retainers or buzzword prototypes. We deliver working systems, clean repositories, and observable infrastructure that your team owns and controls.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#101211] border border-white/10 space-y-6">
              <div className="text-xs font-mono text-white/50 uppercase tracking-wider border-b border-white/10 pb-3">
                OPERATIONAL COMMITMENTS
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#20B6A5] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F5F1]">100% Client Ownership</h3>
                    <p className="text-xs text-[#A9B0AC] mt-0.5">All code, infrastructure templates, and data schemas belong entirely to you.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#E9E65A] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F5F1]">Zero Guesswork Communication</h3>
                    <p className="text-xs text-[#A9B0AC] mt-0.5">You communicate directly with engineers, not non-technical project buffers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#20B6A5] mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#F4F5F1]">Continuous Observability</h3>
                    <p className="text-xs text-[#A9B0AC] mt-0.5">We build monitoring, logging, and error tracking into systems before deployment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 lg:py-24 border-b border-white/10" aria-labelledby="principles-heading">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#E9E65A] uppercase tracking-wider">
              HOW WE THINK &amp; BUILD
            </span>
            <h2 id="principles-heading" className="text-2xl sm:text-3xl font-bold text-[#F4F5F1] mt-2 mb-4">
              Six Engineering Principles.
            </h2>
            <p className="text-base text-[#A9B0AC]">
              These aren't marketing slogans — they are the architectural criteria that guide every technical decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title} className="bg-[#101211] border border-white/10 hover:border-[#20B6A5]/40 transition-colors">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[#20B6A5] flex items-center justify-center mb-4">
                    {principleIcons[principle.title]}
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F5F1] mb-2">{principle.title}</h3>
                  <p className="text-sm text-[#A9B0AC] leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Abhivox Technologies */}
      <section className="py-16 lg:py-24" aria-labelledby="why-heading">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#20B6A5] uppercase tracking-wider">
              PARTNERSHIP ADVANTAGES
            </span>
            <h2 id="why-heading" className="text-2xl sm:text-3xl font-bold text-[#F4F5F1] mt-2 mb-4">
              Why Companies Engineer with Abhivox.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyAbhivox.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#101211] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#F4F5F1] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#A9B0AC] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="btn btn-primary-teal btn-lg group">
              <span>Start an Engineering Conversation</span>
              <svg className="w-4 h-4 text-[#080A09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
