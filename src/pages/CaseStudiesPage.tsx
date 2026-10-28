"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { products } from '../data';
import { Link } from 'react-router-dom';

export function CaseStudiesPage() {
  const product = products[0];
  const { caseStudy } = product;

  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="Case Studies & Engineering Deliveries | AbhiVox Technologies"
        description="Real-world engineering case studies: discover how AbhiVox Technologies replaced paper ledgers with EcoDry, automating transactions, tracking, and messaging at scale."
        canonical="https://tech.abhivox.online/case-studies"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://tech.abhivox.online/case-studies' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="casestudies-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              TECHNICAL CASE STUDY // VERIFIED OUTCOMES
            </div>
            <h1 id="casestudies-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              From Manual Paper Ledgers to <br />
              <span className="text-[#E9E65A]">Centralized Digital Operations.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              An in-depth look at how we engineered and deployed {product.name}, replacing fragmented spreadsheets and phone inquiries with a reliable digital platform.
            </p>
          </div>
        </Container>
      </section>

      {/* Case Study Body */}
      <section id="ecodry" className="py-16 lg:py-24" aria-labelledby="ecodry-heading">
        <Container size="xl">
          {/* Project Header Bar */}
          <div className="p-7 sm:p-10 rounded-2xl bg-[#101211] border border-white/10 mb-12 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-[#F4F5F1]">{product.name}</span>
                <span className="px-3 py-1 rounded text-xs font-mono font-semibold bg-[#20B6A5]/15 text-[#20B6A5] border border-[#20B6A5]/30">
                  LIVE AT ECODRY.ABHIVOX.ONLINE
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#A9B0AC] mt-2 max-w-2xl">
                Commercial dry cleaners needed to modernize order intake, customer tracking, automated customer notifications, and payment logging into a single cloud-hosted interface.
              </p>
            </div>

            <a
              href="https://ecodry.abhivox.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary-teal btn-lg group flex-shrink-0"
            >
              <span>Explore Live Platform</span>
              <svg className="w-4 h-4 text-[#080A09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          {/* Before & After Operational Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-[#101211] border border-white/10">
              <CardContent className="p-7 sm:p-8">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#EF4444] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span>PREVIOUS STATE // OPERATIONAL VULNERABILITIES</span>
                </div>
                <ul className="space-y-4" role="list">
                  {caseStudy.before.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#A9B0AC]">
                      <span className="text-[#EF4444] mt-0.5 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#101211] border border-[#20B6A5]/30">
              <CardContent className="p-7 sm:p-8">
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#20B6A5] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse" />
                  <span>ENGINEERED ARCHITECTURE // MEASURABLE OUTCOMES</span>
                </div>
                <ul className="space-y-4" role="list">
                  {caseStudy.after.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#F4F5F1]">
                      <span className="text-[#20B6A5] mt-0.5 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Architecture Stack Breakdown */}
          <div className="p-8 rounded-2xl bg-[#101211] border border-white/10 mb-16">
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-6">
              SYSTEM ARCHITECTURE SPECIFICATION
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 rounded-xl bg-[#080A09] border border-white/5">
                <div className="text-[10px] font-mono text-[#20B6A5] uppercase mb-1">FRONTEND ARCHITECTURE</div>
                <div className="font-bold text-sm text-[#F4F5F1] mb-1">React + TypeScript</div>
                <div className="text-xs text-[#A9B0AC]">Optimized client bundle, responsive touch-friendly UI for operational staff.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#080A09] border border-white/5">
                <div className="text-[10px] font-mono text-[#20B6A5] uppercase mb-1">DATABASE &amp; AUTH</div>
                <div className="font-bold text-sm text-[#F4F5F1] mb-1">PostgreSQL &amp; RLS</div>
                <div className="text-xs text-[#A9B0AC]">Row Level Security, relational customer order tracking, and ACID ledger consistency.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#080A09] border border-white/5">
                <div className="text-[10px] font-mono text-[#E9E65A] uppercase mb-1">NOTIFICATION DISPATCH</div>
                <div className="font-bold text-sm text-[#F4F5F1] mb-1">Automated Messaging</div>
                <div className="text-xs text-[#A9B0AC]">Order pickup and ready-for-dispatch customer alerts sent automatically upon state update.</div>
              </div>
              <div className="p-4 rounded-xl bg-[#080A09] border border-white/5">
                <div className="text-[10px] font-mono text-[#20B6A5] uppercase mb-1">CLOUD INFRASTRUCTURE</div>
                <div className="font-bold text-sm text-[#F4F5F1] mb-1">Continuous Cloud CI/CD</div>
                <div className="text-xs text-[#A9B0AC]">High-availability hosting, automated build gates, and automated database backups.</div>
              </div>
            </div>
          </div>

          {/* Active Prototypes & Engineering Modules Banner */}
          <div className="p-8 rounded-2xl bg-[#141816] border border-[#252B28] mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E9E65A]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E9E65A]">
                  ACTIVE RESEARCH &amp; PROTOTYPES
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#F4F5F1]">
                Order Tracking, Business Analytics &amp; Workflow Automation
              </h3>
              <p className="text-sm text-[#A9B0AC] mt-1.5 max-w-2xl leading-relaxed">
                In addition to live production platforms like EcoDry, explore our 3 active engineering prototypes with interactive architectural schematics on the Products showcase.
              </p>
            </div>
            <Link to="/products" className="btn btn-secondary-dark btn-md flex-shrink-0 border-[#252B28] hover:border-[#20B6A5]">
              <span>View Product Prototypes</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Bottom Project CTA */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#101211] to-[#080A09] border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-[#F4F5F1] mb-3">
              Ready to modernize your business operations?
            </h2>
            <p className="text-sm text-[#A9B0AC] max-w-lg mx-auto mb-6">
              Let's evaluate your manual workflows, determine the best architecture, and build a bespoke operational tool for your team.
            </p>
            <Link to="/contact" className="btn btn-primary-teal btn-lg group">
              <span>Discuss Your Operational Platform</span>
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
