"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { solutions } from '../data';
import { Link } from 'react-router-dom';

const flowSteps = [
  { name: 'Customer Event', detail: 'Inquiry / Order', color: '#20B6A5' },
  { name: 'Application', detail: 'Web / Mobile / API', color: '#20B6A5' },
  { name: 'Database', detail: 'State Persisted', color: '#20B6A5' },
  { name: 'CRM & Pipeline', detail: 'Record Updated', color: '#E9E65A' },
  { name: 'Automation Engine', detail: 'Trigger Workflow', color: '#20B6A5' },
  { name: 'AI Agent', detail: 'Extract / Reason', color: '#E9E65A' },
  { name: 'Downstream Action', detail: 'Dispatch / Notify', color: '#20B6A5' },
];

export function SolutionsPage() {
  const automation = solutions[0];
  const agentic = solutions[1];

  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="Business Solutions & Digital Transformation | AbhiVox Technologies"
        description="Engineered solutions for complex business challenges: legacy modernization, operational workflow automation, cloud cost optimization, and secure API infrastructure."
        canonical="https://tech.abhivox.online/solutions"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://tech.abhivox.online/solutions' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="solutions-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              ENGINEERED SOLUTIONS // ARCHITECTURES
            </div>
            <h1 id="solutions-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              Business Problems, <br />
              <span className="text-[#E9E65A]">Engineered Approaches.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              We eliminate manual bottlenecks and fragmented systems by engineering automated workflows and specialized AI agents that integrate directly with your core operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Solution 1: Business Process Automation */}
      <section id="automation" className="py-16 lg:py-24 border-b border-white/10" aria-labelledby="automation-heading">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#20B6A5] uppercase tracking-wider">
              SOLUTION 01 // WORKFLOW AUTOMATION
            </span>
            <h2 id="automation-heading" className="text-2xl sm:text-3xl font-bold text-[#F4F5F1] mt-2 mb-4">
              {automation.title}
            </h2>
            <p className="text-base text-[#A9B0AC] leading-relaxed">
              {automation.description}
            </p>
          </div>

          {/* Connected Flow Diagram */}
          <div className="rounded-2xl bg-[#101211] border border-white/10 p-6 sm:p-8 lg:p-10 mb-10 shadow-xl">
            <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-6">
              ARCHITECTURE TOPOLOGY // END-TO-END FLOW
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {flowSteps.map((step, idx) => (
                <div
                  key={step.name}
                  className="p-3.5 rounded-xl bg-[#080A09] border border-white/10 flex flex-col justify-between text-center relative group hover:border-[#20B6A5]/50 transition-colors"
                >
                  <div className="text-[10px] font-mono text-white/40 mb-1">
                    STEP 0{idx + 1}
                  </div>
                  <div className="font-bold text-xs sm:text-sm text-[#F4F5F1] my-1">
                    {step.name}
                  </div>
                  <div className="text-[10px] text-[#20B6A5] font-mono">
                    {step.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Automation Scenarios */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(automation.examples || []).map((example, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex items-center gap-3 text-sm text-[#F4F5F1]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E9E65A]" />
                <span>{example}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution 2: Agentic AI */}
      <section id="agentic-ai" className="py-16 lg:py-24" aria-labelledby="agentic-heading">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#E9E65A] uppercase tracking-wider">
              SOLUTION 02 // APPLIED MACHINE INTELLIGENCE
            </span>
            <h2 id="agentic-heading" className="text-2xl sm:text-3xl font-bold text-[#F4F5F1] mt-2 mb-4">
              {agentic.title}
            </h2>
            <p className="text-base text-[#A9B0AC] leading-relaxed">
              {agentic.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {(agentic.agents || []).map((agent, index) => (
              <Card
                key={agent.name}
                className="bg-[#101211] border border-white/10 hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <CardContent className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[#20B6A5] flex items-center justify-center font-mono font-bold text-sm">
                        0{index + 1}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/40">
                        SUPERVISED
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F4F5F1] mb-2">{agent.name}</h3>
                    <p className="text-sm text-[#A9B0AC] leading-relaxed mb-6">
                      {agent.description}
                    </p>

                    <div className="border-t border-white/5 pt-4">
                      <div className="text-[11px] font-mono text-white/50 uppercase mb-2">
                        Operational Tasks:
                      </div>
                      <div className="space-y-1.5">
                        {agent.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2 text-xs text-[#F4F5F1]/80">
                            <span className="text-[#20B6A5]">›</span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#E9E65A]">
                    HUMAN OVERSIGHT BUILT-IN
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/contact" className="btn btn-primary-teal btn-lg group">
              <span>Discuss a Custom Solution</span>
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
