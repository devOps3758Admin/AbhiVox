"use client";

import { Container, ScrollReveal } from '../ui';
import { deliveryProcess, engineeringPractices } from '../../data';

export function Process() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-[#080A09] text-[#F4F5F1] border-b border-white/10 overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              DELIVERY PROCESS // FOUR PHASES
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              id="process-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F1]"
            >
              How We Approach Engineering.
              <br />
              <span className="text-[#E9E65A]">A Repeatable Delivery Model.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl mx-auto">
              We eliminate technical ambiguity before writing code, maintain strict architectural standards during implementation, and guarantee operability in production.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop Horizontal Process Progression (4 columns) */}
        <div className="hidden lg:block relative mb-16">
          {/* Connecting Track Line */}
          <div
            className="absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-[#20B6A5]/40 via-[#E9E65A]/40 to-[#20B6A5]/40 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {deliveryProcess.map((step, idx) => (
              <div
                key={step.step}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-[#101211]/80 border border-white/10 hover:border-[#20B6A5]/40 transition-all duration-300"
              >
                {/* Step Marker Node */}
                <div className="w-12 h-12 rounded-xl bg-[#080A09] border border-white/20 group-hover:border-[#20B6A5] shadow-lg flex items-center justify-center font-mono text-sm font-bold text-[#20B6A5] mb-5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(32,182,165,0.3)]">
                  {step.step}
                </div>

                <div className="text-xs font-mono font-bold tracking-wider text-[#E9E65A] uppercase mb-1">
                  PHASE {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#F4F5F1] mb-1.5 group-hover:text-[#20B6A5] transition-colors">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-white/50 mb-3">
                  {step.tagline}
                </div>
                <p className="text-xs text-[#A9B0AC] leading-relaxed">
                  {step.description}
                </p>
                {idx < deliveryProcess.length - 1 && (
                  <div className="absolute -right-3 top-11 text-white/30 font-mono text-xs z-10 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Process Progression */}
        <div className="block lg:hidden relative pl-6 border-l-2 border-[#20B6A5]/30 space-y-8 my-8">
          {deliveryProcess.map((step) => (
            <div key={step.step} className="relative">
              {/* Node indicator */}
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-md bg-[#101211] border border-[#20B6A5] flex items-center justify-center text-[10px] font-mono font-bold text-[#20B6A5]">
                {step.step}
              </div>

              <div className="text-xs font-mono font-bold tracking-wider text-[#E9E65A] uppercase mb-1">
                PHASE {step.step} — {step.title}
              </div>
              <h3 className="text-lg font-bold text-[#F4F5F1] mb-1">
                {step.tagline}
              </h3>
              <p className="text-sm text-[#A9B0AC] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section: Trust Through Engineering Practices */}
        <div className="mt-16 pt-12 border-t border-[#252B28]">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#20B6A5]" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#20B6A5] font-semibold">
                TRUST THROUGH ENGINEERING PRACTICES // SIX PRODUCTION COMMITMENTS
              </span>
            </div>
            <span className="text-xs font-mono text-[#737D77]">
              VERIFIABLE STANDARDS // ZERO FABRICATED METRICS
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {engineeringPractices.map((practice) => (
              <div
                key={practice.id}
                className="p-6 rounded-xl bg-[#141816] border border-[#252B28] hover:border-[#20B6A5]/40 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 uppercase font-semibold">
                      {practice.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#F4F5F1] mb-2 group-hover:text-[#20B6A5] transition-colors">
                    {practice.title}
                  </h4>
                  <p className="text-xs text-[#A9B0AC] leading-relaxed">
                    {practice.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#252B28] text-[10px] font-mono text-[#737D77]">
                  DISCIPLINE: STANDARD PROTOCOL
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Operational Guarantee */}
        <div className="mt-12 p-6 rounded-xl bg-[#101211] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#20B6A5]/10 border border-[#20B6A5]/30 flex items-center justify-center text-[#20B6A5]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-[#F4F5F1]">The Production Standard</div>
              <div className="text-xs text-[#A9B0AC]">No code is shipped without automated validation and rollback capability.</div>
            </div>
          </div>
          <div className="font-mono text-xs text-[#E9E65A] tracking-wider uppercase font-semibold">
            YOUR VISION. OUR INNOVATION.
          </div>
        </div>
      </Container>
    </section>
  );
}