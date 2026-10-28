"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { services } from '../data';
import { Link } from 'react-router-dom';

const serviceIcons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cloud: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  terminal: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  brain: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M3 14a9 9 0 0 1 18 0" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  dollar: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="Software Engineering, Cloud Infrastructure & AI Services | AbhiVox Technologies"
        description="Explore enterprise engineering services from AbhiVox Technologies: full-stack web applications, cloud architecture, CI/CD automation, AI agent integration, and database systems."
        canonical="https://tech.abhivox.online/services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://tech.abhivox.online/services' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              ENGINEERING SERVICES // CATALOG
            </div>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              Engineering for the Entire <br />
              <span className="text-[#E9E65A]">Software Lifecycle.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              From initial architecture to continuous operations, we handle every layer of your technology stack with production rigor, modern tooling, and proven patterns.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24" aria-labelledby="services-list-heading">
        <Container size="xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Card
                key={service.id}
                id={service.id}
                className="bg-[#101211] border border-white/10 hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <CardContent className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[#20B6A5] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {serviceIcons[service.icon]}
                      </div>
                      <span className="text-xs font-mono text-white/30">
                        SERVICE 0{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#F4F5F1] group-hover:text-[#20B6A5] transition-colors mb-3">
                      {service.title}
                    </h2>

                    <p className="text-sm text-[#A9B0AC] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="border-t border-white/5 pt-5">
                      <div className="text-xs font-mono text-white/50 uppercase mb-3 tracking-wider">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-2" role="list">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2.5 text-xs text-[#F4F5F1]/80">
                            <span className="w-1 h-1 rounded-full bg-[#20B6A5]" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <Link
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#20B6A5] hover:text-[#3DD5C3] transition-colors"
                    >
                      <span>Discuss {service.title}</span>
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-[#101211] border-t border-white/10">
        <Container size="xl" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F5F1] mb-4">
            Need a custom engineering combination?
          </h2>
          <p className="text-sm sm:text-base text-[#A9B0AC] max-w-xl mx-auto mb-8">
            Most projects involve cross-functional engineering — application development combined with cloud architecture and automated pipelines.
          </p>
          <Link to="/contact" className="btn btn-primary-teal btn-lg group">
            <span>Schedule Technical Discovery</span>
            <svg className="w-4 h-4 text-[#080A09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </Container>
      </section>
    </div>
  );
}
