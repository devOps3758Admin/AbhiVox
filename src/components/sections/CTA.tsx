"use client";

import { Container, ScrollReveal } from '../ui';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-[#080A09] text-[#F4F5F1] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #20B6A5 0%, #E9E65A 50%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#101211] border border-white/10 p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#20B6A5] to-transparent" aria-hidden="true" />

          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-6">
              LET'S TALK ENGINEERING
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight"
            >
              Have a complex technology challenge?
              <br />
              <span className="text-[#E9E65A] block mt-2">Let's engineer a practical solution.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl mx-auto">
              No sales pitches or boilerplate decks. We begin with a direct, technical conversation about your system requirements, architecture goals, and operational timeline.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn btn-primary-teal btn-lg group shadow-[0_0_24px_rgba(32,182,165,0.3)] w-full sm:w-auto justify-center"
              >
                <span>Discuss Your Project</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1 text-[#080A09]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/case-studies"
                className="btn btn-secondary-dark btn-lg w-full sm:w-auto justify-center"
              >
                <span>Review Production Case Studies</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Direct Communication Guarantees */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#A9B0AC]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E9E65A]" />
              <span>Direct Engineer-Led Discovery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" />
              <span>Zero Vendor Lock-In</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
