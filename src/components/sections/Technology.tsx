"use client";

import { Container, ScrollReveal } from '../ui';
import { technologyGroups } from '../../data';

const groupIcons: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cloud: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  terminal: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M3 14a9 9 0 0 1 18 0" />
    </svg>
  ),
};

export function Technology() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-[#080A09] text-[#F4F5F1] border-b border-white/10 overflow-hidden"
      aria-labelledby="technology-heading"
    >
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              TECHNOLOGY STACK // PRODUCTION TOOLS
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              id="technology-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F1]"
            >
              Technology Chosen for Resilience.
              <br />
              <span className="text-[#E9E65A]">Grouped by Function.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl mx-auto">
              We select established, battle-tested tools with active ecosystems, clear LTS trajectories, and proven performance under load.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Functional Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {technologyGroups.map((group, index) => (
            <div
              key={group.category}
              className="p-7 sm:p-8 rounded-2xl bg-[#101211] border border-white/10 hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#20B6A5]/10 border border-[#20B6A5]/30 text-[#20B6A5] flex items-center justify-center">
                      {groupIcons[group.icon]}
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-white/40 uppercase">
                        FUNCTION 0{index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-[#F4F5F1] group-hover:text-[#20B6A5] transition-colors">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#A9B0AC] mb-6 leading-relaxed">
                  {group.tagline}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-[#F4F5F1] group-hover:border-white/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-white/40">
                <span>ECOSYSTEM: ACTIVELY MAINTAINED</span>
                <span className="text-[#20B6A5]">TYPE-SAFE &amp; RESILIENT</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
