"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { ContactForm } from '../components/sections/ContactForm';
import { contactInfo } from '../data';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="Contact Engineering Team | AbhiVox Technologies"
        description="Connect directly with AbhiVox Technologies engineering leads. Discuss software development, cloud infrastructure, DevOps automation, or AI projects."
        canonical="https://tech.abhivox.online/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://tech.abhivox.online/contact' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              DIRECT ENGAGEMENT // PROJECT DISCOVERY
            </div>
            <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              Start an Engineering <br />
              <span className="text-[#E9E65A]">Conversation.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              Have a project or technical architecture challenge in mind? Contact our engineering leads directly. No sales pressure — just a practical technical evaluation.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Form & Contact Info */}
      <section className="py-16 lg:py-24" aria-labelledby="contact-form-heading">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-[#F4F5F1] mb-6">
                Transmit Project Scope
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Phone Access */}
              <Card className="bg-[#101211] border border-white/10">
                <CardContent className="p-6">
                  <div className="text-xs font-mono text-[#20B6A5] uppercase tracking-wider mb-3">
                    DIRECT PHONE LINES
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F5F1] mb-4">
                    Speak Directly With Engineers
                  </h3>
                  <div className="space-y-3">
                    {contactInfo.phones.map((phone, index) => (
                      <a
                        key={index}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#20B6A5]/40 text-[#F4F5F1] transition-all group"
                      >
                        <div className="p-2 rounded-lg bg-[#20B6A5]/10 text-[#20B6A5] group-hover:scale-110 transition-transform">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <span className="font-mono text-sm font-semibold">{phone}</span>
                      </a>
                    ))}

                    <a
                      href="https://wa.me/917379791375"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#20B6A5]/10 border border-[#20B6A5]/30 hover:border-[#20B6A5] text-[#F4F5F1] transition-all group"
                      aria-label="Direct WhatsApp Message to Abhivox Technologies at +91 7379791375"
                    >
                      <div className="p-2 rounded-lg bg-[#20B6A5] text-[#080A09] group-hover:scale-110 transition-transform">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-sm font-semibold text-[#20B6A5]">Direct WhatsApp Channel</span>
                        <span className="text-[11px] text-[#A9B0AC]">+91 7379791375 (Instant Response)</span>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="bg-[#101211] border border-white/10">
                <CardContent className="p-6">
                  <div className="text-xs font-mono text-[#E9E65A] uppercase tracking-wider mb-3">
                    NEXT STEPS
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F5F1] mb-4">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-3.5 text-xs text-[#A9B0AC]" role="list">
                    <li className="flex items-start gap-3">
                      <span className="font-mono font-bold text-[#20B6A5]">01</span>
                      <span>An engineering lead reviews your requirements within 24 hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono font-bold text-[#20B6A5]">02</span>
                      <span>We schedule a 30-minute technical discovery call to clarify architecture.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-mono font-bold text-[#20B6A5]">03</span>
                      <span>We provide a transparent scope of work with milestone deliverables.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* Core Disciplines List */}
              <Card className="bg-[#101211] border border-white/10">
                <CardContent className="p-6">
                  <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-3">
                    PRIMARY DISCIPLINES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {contactInfo.services.map((service) => (
                      <span
                        key={service}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.03] border border-white/10 text-[#F4F5F1]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
