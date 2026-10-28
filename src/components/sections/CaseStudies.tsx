"use client";

import { Container, ScrollReveal } from '../ui';
import { products } from '../../data';
import { Link } from 'react-router-dom';

export function CaseStudies() {
  const product = products[0];
  const { caseStudy } = product;

  return (
    <section
      className="relative py-20 lg:py-28 bg-[#101211] text-[#F4F6F4] border-b border-[#252B28] overflow-hidden"
      aria-labelledby="selected-work-heading"
    >
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              PROJECT SHOWCASE // PRODUCTION &amp; ACTIVE PREVIEWS
            </span>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h2
              id="selected-work-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F6F4]"
            >
              Real Systems in Production.
              <br />
              <span className="text-[#E9E65A]">Solving Complex Operational Challenges.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-5 text-base sm:text-lg text-[#A6AEAA] leading-relaxed max-w-2xl mx-auto">
              Explore verified live deployments alongside active engineering prototypes. We build software platforms that replace manual spreadsheets with centralized digital control.
            </p>
          </ScrollReveal>
        </div>

        {/* 1. Flagship Live Project: EcoDry */}
        <div className="rounded-2xl bg-[#080A09] border border-[#252B28] overflow-hidden shadow-2xl mb-16">
          {/* Top Bar with Project Status */}
          <div className="p-6 sm:p-8 border-b border-[#252B28] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#141816]/60">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold text-[#F4F6F4]">{product.name}</span>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-[#20B6A5]/15 text-[#20B6A5] border border-[#20B6A5]/30">
                  LIVE PRODUCTION DEPLOYMENT
                </span>
              </div>
              <p className="text-sm text-[#A6AEAA] mt-1">{product.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://ecodry.abhivox.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-teal btn-sm group"
              >
                <span>Launch Live System</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#080A09]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <Link to="/case-studies" className="btn btn-secondary-dark btn-sm border-[#252B28]">
                <span>Technical Overview</span>
              </Link>
            </div>
          </div>

          {/* Before & After Operational Comparison */}
          <div className="p-6 sm:p-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* The Operational Challenge (Before) */}
            <div className="p-6 rounded-xl bg-[#141816] border border-[#252B28] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#EF4444] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span>PREVIOUS STATE // MANUAL FRAGMENTATION</span>
                </div>
                <ul className="space-y-3.5" role="list">
                  {caseStudy.before.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#A6AEAA]">
                      <span className="text-[#EF4444] mt-0.5 font-bold">✕</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#252B28] text-[11px] font-mono text-[#737D77]">
                CHALLENGE: Uncoordinated manual updates and scattered customer information.
              </div>
            </div>

            {/* The Engineered Solution (After) */}
            <div className="p-6 rounded-xl bg-[#141816] border border-[#20B6A5]/25 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#20B6A5] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse" />
                  <span>ENGINEERED OUTCOME // CENTRALIZED PLATFORM</span>
                </div>
                <ul className="space-y-3.5" role="list">
                  {caseStudy.after.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#F4F6F4]">
                      <span className="text-[#20B6A5] mt-0.5 font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#20B6A5]/25 text-[11px] font-mono text-[#E9E65A]">
                RESULT: End-to-end digital lifecycle with automated notification dispatches.
              </div>
            </div>
          </div>

          {/* EcoDry Engineering Scope & Real Architecture */}
          <div className="px-6 sm:px-10 pb-8 pt-2">
            <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div>
                  <span className="text-white/40 block text-[10px]">OBJECTIVE</span>
                  <span className="text-[#F4F6F4]">Centralized dry-cleaning order intake &amp; status automation</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">STACK</span>
                  <span className="text-[#20B6A5]">React / TypeScript / Node.js / PostgreSQL / WhatsApp API</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px]">VERIFIED URL</span>
                  <a
                    href="https://ecodry.abhivox.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E9E65A] hover:underline"
                  >
                    ecodry.abhivox.online ↗
                  </a>
                </div>
              </div>
              <div className="text-[10px] text-[#A6AEAA] flex-shrink-0">
                STATUS: VERIFIED PRODUCTION
              </div>
            </div>
          </div>
        </div>

        {/* 2. Active Engineering Previews & Prototypes */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E9E65A]" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#E9E65A] font-bold">
              ACTIVE ENGINEERING PROJECTS // IN-DEVELOPMENT PREVIEWS
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* PROJECT 1: Real-Time Order Tracking Portal */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/30 uppercase">
                    Concept Preview
                  </span>
                  <span className="text-[11px] font-mono text-[#737D77]">STAGE: ACTIVE DEV</span>
                </div>

                <h4 className="text-xl font-bold text-[#F4F6F4] group-hover:text-[#20B6A5] transition-colors mb-2">
                  Real-Time Order Tracking Portal
                </h4>
                <p className="text-sm text-[#A6AEAA] leading-relaxed mb-6">
                  Customer-facing logistics tracking interface providing milestone transparency from order intake to doorstep delivery.
                </p>

                {/* Logistics Timeline & Milestone Preview */}
                <div className="p-4 rounded-xl bg-[#141816] border border-[#252B28] mb-6 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#252B28] text-[10px] text-[#A6AEAA]">
                    <span>MANIFEST: #VS-8924</span>
                    <span className="text-[#20B6A5]">STAGE 3/4</span>
                  </div>

                  {/* Progress Milestone Indicators */}
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#20B6A5] flex items-center justify-center text-[9px] text-[#080A09] font-bold">✓</div>
                      <span className="text-[#F4F6F4] text-xs">Intake &amp; Inspection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#20B6A5] flex items-center justify-center text-[9px] text-[#080A09] font-bold">✓</div>
                      <span className="text-[#F4F6F4] text-xs">Processing &amp; Treatment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-[#E9E65A] bg-[#E9E65A]/20 flex items-center justify-center text-[8px] text-[#E9E65A] font-bold animate-pulse">●</div>
                      <span className="text-[#E9E65A] text-xs font-semibold">Quality Assurance [Current]</span>
                    </div>
                    <div className="flex items-center gap-3 opacity-40">
                      <div className="w-4 h-4 rounded-full border border-white/20" />
                      <span className="text-[#A6AEAA] text-xs">Out for Delivery</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#252B28] text-[10px] text-[#737D77]">
                    *Illustrative prototype timeline
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#252B28] flex items-center justify-between text-xs font-mono text-[#A6AEAA]">
                <span>TECH: REACT + WEBSOCKETS</span>
                <span className="text-[#20B6A5]">ROADMAP Q3</span>
              </div>
            </div>

            {/* PROJECT 2: Business Analytics Dashboard */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#E9E65A]/10 text-[#E9E65A] border border-[#E9E65A]/30 uppercase">
                    Prototype
                  </span>
                  <span className="text-[11px] font-mono text-[#737D77]">TELEMETRY UI</span>
                </div>

                <h4 className="text-xl font-bold text-[#F4F6F4] group-hover:text-[#20B6A5] transition-colors mb-2">
                  Business Analytics Dashboard
                </h4>
                <p className="text-sm text-[#A6AEAA] leading-relaxed mb-6">
                  Executive analytics console aggregating throughput metrics, operational turnaround SLAs, and inventory trends.
                </p>

                {/* Dashboard Chart & KPI Tiles Preview */}
                <div className="p-4 rounded-xl bg-[#141816] border border-[#252B28] mb-6 font-mono text-xs">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#080A09] border border-[#252B28]">
                      <div className="text-[10px] text-[#737D77]">DAILY INTAKE</div>
                      <div className="text-base font-bold text-[#F4F6F4] mt-0.5">1,480 pcs</div>
                      <div className="text-[10px] text-[#20B6A5] mt-1">↑ 14% efficiency</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#080A09] border border-[#252B28]">
                      <div className="text-[10px] text-[#737D77]">ON-TIME SLA</div>
                      <div className="text-base font-bold text-[#E9E65A] mt-0.5">99.2%</div>
                      <div className="text-[10px] text-[#A6AEAA] mt-1">TARGET: &gt;98%</div>
                    </div>
                  </div>

                  {/* SVG Trend Bar Chart Preview */}
                  <div className="pt-2">
                    <div className="text-[10px] text-[#737D77] mb-2 flex justify-between">
                      <span>THROUGHPUT TREND (WEEKLY)</span>
                      <span className="text-[#20B6A5]">AVG: 1.2K</span>
                    </div>
                    <div className="flex items-end justify-between h-14 gap-1.5 px-1 bg-[#080A09] rounded-lg p-2 border border-[#252B28]">
                      <div className="w-full bg-[#20B6A5]/40 hover:bg-[#20B6A5] h-[45%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/50 hover:bg-[#20B6A5] h-[65%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/60 hover:bg-[#20B6A5] h-[55%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/70 hover:bg-[#20B6A5] h-[80%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/80 hover:bg-[#20B6A5] h-[70%] rounded-sm transition-all" />
                      <div className="w-full bg-[#E9E65A] h-[95%] rounded-sm" />
                      <div className="w-full bg-[#20B6A5]/60 hover:bg-[#20B6A5] h-[60%] rounded-sm transition-all" />
                    </div>
                  </div>

                  <div className="mt-3 text-[10px] text-[#737D77]">
                    *Synthetic sample metrics preview
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#252B28] flex items-center justify-between text-xs font-mono text-[#A6AEAA]">
                <span>TECH: TIMESERIES + POSTGRES</span>
                <span className="text-[#E9E65A]">PROTOTYPE</span>
              </div>
            </div>

            {/* PROJECT 3: Automated Operations Workflows */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] hover:border-[#20B6A5]/40 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 shadow-xl group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/30 uppercase">
                    In Development
                  </span>
                  <span className="text-[11px] font-mono text-[#737D77]">ENGINEERING</span>
                </div>

                <h4 className="text-xl font-bold text-[#F4F6F4] group-hover:text-[#20B6A5] transition-colors mb-2">
                  Automated Operations Workflows
                </h4>
                <p className="text-sm text-[#A6AEAA] leading-relaxed mb-6">
                  Event-driven orchestration pipeline connecting inbound webhooks to conditional tasks and automated dispatch.
                </p>

                {/* Workflow Architecture Node Sequence */}
                <div className="p-4 rounded-xl bg-[#141816] border border-[#252B28] mb-6 font-mono text-xs">
                  <div className="space-y-2.5">
                    {/* Node 1 */}
                    <div className="p-2.5 rounded-lg bg-[#080A09] border border-[#252B28] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" />
                        <span className="text-[#F4F6F4] text-[11px]">TRIGGER: Webhook Event</span>
                      </div>
                      <span className="text-[10px] text-[#20B6A5]">POST /intake</span>
                    </div>

                    <div className="flex justify-center text-[10px] text-[#737D77] -my-1">↓</div>

                    {/* Node 2 */}
                    <div className="p-2.5 rounded-lg bg-[#080A09] border border-[#E9E65A]/30 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E9E65A] animate-pulse" />
                        <span className="text-[#E9E65A] text-[11px]">RULE: Routing Condition</span>
                      </div>
                      <span className="text-[10px] text-white/50">Priority &gt; Normal</span>
                    </div>

                    <div className="flex justify-center text-[10px] text-[#737D77] -my-1">↓</div>

                    {/* Node 3 */}
                    <div className="p-2.5 rounded-lg bg-[#080A09] border border-[#252B28] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" />
                        <span className="text-[#F4F6F4] text-[11px]">ACTION: Multi-Channel Alert</span>
                      </div>
                      <span className="text-[10px] text-[#20B6A5]">WhatsApp / SMS</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#252B28] text-[10px] text-[#737D77]">
                    *Process automation architecture
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#252B28] flex items-center justify-between text-xs font-mono text-[#A6AEAA]">
                <span>ORCHESTRATION: GITOPS</span>
                <span className="text-[#20B6A5]">IN PROGRESS</span>
              </div>
            </div>
          </div>
        </div>

        {/* View Details Link */}
        <div className="text-center pt-6">
          <Link to="/products" className="btn btn-secondary-dark btn-md group border-[#252B28] hover:border-[#20B6A5]">
            <span>Explore All Product Specifications</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
