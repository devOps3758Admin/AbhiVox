"use client";

import { Container, Card, CardContent } from '../components/ui';
import { SEO } from '../components/common';
import { products } from '../data';
import { Link } from 'react-router-dom';

export function ProductsPage() {
  const product = products[0];

  return (
    <div className="min-h-screen bg-[#080A09] text-[#F4F5F1]">
      <SEO
        title="Software Platforms & Operational Prototypes | AbhiVox Technologies"
        description="Production software and business platforms built by AbhiVox Technologies, including EcoDry laundry management system and industry workflow accelerators."
        canonical="https://tech.abhivox.online/products"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tech.abhivox.online/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://tech.abhivox.online/products' },
          ],
        }}
      />

      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#080A09] to-[#101211] border-b border-white/10 overflow-hidden" aria-labelledby="products-hero-heading">
        <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-5">
              PROPRIETARY PRODUCTS // PRODUCTION &amp; ACTIVE PREVIEWS
            </div>
            <h1 id="products-hero-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#F4F5F1] leading-tight">
              Production Software &amp; <br />
              <span className="text-[#E9E65A]">Engineering Prototypes.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl">
              Software platforms and operational prototypes engineered by ABHIVOX TECHNOLOGIES to solve high-friction industry workflows. All modules are labeled with authentic operational readiness.
            </p>
          </div>
        </Container>
      </section>

      {/* 1. Flagship Live Product: EcoDry */}
      <section className="py-16 lg:py-24 border-b border-white/10" aria-labelledby="ecodry-heading">
        <Container size="xl">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#20B6A5] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#20B6A5]">
                FLAGSHIP PRODUCTION PLATFORM
              </span>
            </div>
            <span className="text-xs font-mono text-[#E9E65A]">
              STATUS: LIVE IN PRODUCTION
            </span>
          </div>

          <Card className="bg-[#101211] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Product Header */}
            <div className="p-7 sm:p-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white/[0.01]">
              <div>
                <div className="flex items-center gap-3">
                  <h2 id="ecodry-heading" className="text-2xl sm:text-3xl font-bold text-[#F4F5F1]">
                    {product.name}
                  </h2>
                  <span className="px-3 py-1 rounded text-xs font-mono font-semibold bg-[#20B6A5]/15 text-[#20B6A5] border border-[#20B6A5]/30">
                    LIVE PRODUCTION DEPLOYMENT
                  </span>
                </div>
                <p className="text-base text-[#E9E65A] mt-1.5 font-medium">
                  {product.tagline}
                </p>
                <p className="text-sm text-[#A9B0AC] mt-3 max-w-2xl leading-relaxed">
                  {product.description} Built for commercial dry cleaning operations, replacing paper slips and phone status calls with a cloud-hosted digital operational center.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://ecodry.abhivox.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary-teal btn-md group"
                >
                  <span>Launch Live System</span>
                  <svg className="w-4 h-4 text-[#080A09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <Link to="/case-studies#ecodry" className="btn btn-secondary-dark btn-md">
                  <span>Read Case Study</span>
                </Link>
              </div>
            </div>

            {/* Architecture & Capability Matrix */}
            <CardContent className="p-7 sm:p-10">
              <div className="grid lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
                <div className="p-5 rounded-xl bg-[#080A09] border border-white/10">
                  <div className="text-xs font-mono text-[#20B6A5] uppercase font-bold mb-2">Core Workflow</div>
                  <p className="text-xs text-[#A9B0AC] leading-relaxed">
                    Customer check-in with garment piece count, item tagging, scheduled turnaround dates, and automated WhatsApp order confirmation.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#080A09] border border-white/10">
                  <div className="text-xs font-mono text-[#20B6A5] uppercase font-bold mb-2">Processing States</div>
                  <p className="text-xs text-[#A9B0AC] leading-relaxed">
                    Clear stage transitions from Tagged → In Wash → Pressed → Quality Checked → Ready for Dispatch with complete audit trails.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#080A09] border border-white/10">
                  <div className="text-xs font-mono text-[#E9E65A] uppercase font-bold mb-2">Ledger &amp; Financials</div>
                  <p className="text-xs text-[#A9B0AC] leading-relaxed">
                    Split billing, partial deposits, payment status reconciliation, and automated notification dispatches upon completion.
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-white/50 uppercase tracking-wider mb-6">
                MODULE CAPABILITY MATRIX // LIVE VS IN-DEVELOPMENT
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.capabilities.map((cap) => {
                  const isImplemented = cap.status === 'implemented';
                  return (
                    <div
                      key={cap.name}
                      className={`p-4 rounded-xl border flex items-center justify-between ${
                        isImplemented
                          ? 'bg-[#080A09] border-[#20B6A5]/30'
                          : 'bg-white/[0.02] border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isImplemented ? 'bg-[#20B6A5]' : 'bg-[#E9E65A]'
                          }`}
                        />
                        <span className="text-sm font-medium text-[#F4F5F1]">{cap.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold uppercase ${
                          isImplemented
                            ? 'bg-[#20B6A5]/15 text-[#20B6A5]'
                            : 'bg-[#E9E65A]/15 text-[#E9E65A]'
                        }`}
                      >
                        {isImplemented ? 'Active Production' : 'In Dev'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* 2. Active Engineering Previews & Prototypes */}
      <section className="py-16 lg:py-24 border-b border-white/10 bg-[#101211]" aria-labelledby="prototypes-heading">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#E9E65A] tracking-wider uppercase mb-2 block">
              RESEARCH &amp; PROTOTYPES // ACTIVE INTERNAL DEVELOPMENT
            </span>
            <h2 id="prototypes-heading" className="text-3xl font-extrabold text-[#F4F5F1]">
              Engineered Product Prototypes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A9B0AC]">
              These modules represent active research and engineering prototypes designed for modular integration into client platforms.
            </p>
          </div>

          <div className="space-y-12">
            {/* PROTOTYPE 1: Real-Time Order Tracking Portal */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] p-7 sm:p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#252B28] mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#20B6A5]/15 text-[#20B6A5] border border-[#20B6A5]/30 uppercase">
                      Concept Preview
                    </span>
                    <span className="text-xs font-mono text-[#737D77]">STAGE: ACTIVE DEV // ROADMAP Q3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F5F1]">Real-Time Order Tracking Portal</h3>
                  <p className="text-sm text-[#A9B0AC] mt-1.5 max-w-2xl">
                    A dedicated customer-facing tracking experience that provides live operational milestone progress without requiring password logins.
                  </p>
                </div>
                <div className="flex-shrink-0 text-left lg:text-right font-mono text-xs text-[#A9B0AC]">
                  <div>TECH: React + WebSockets + PostGIS</div>
                  <div className="text-[#20B6A5] mt-1">STATUS: UI &amp; EVENT PROTO</div>
                </div>
              </div>

              {/* Realistic Mockup UI */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 p-6 rounded-xl bg-[#141816] border border-[#252B28] font-mono text-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-[#252B28] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#20B6A5]" />
                      <span className="text-[#F4F5F1] font-semibold">SHIPMENT #VS-8924</span>
                    </div>
                    <span className="text-[#20B6A5]">STAGE 3 OF 4 (75%)</span>
                  </div>

                  {/* Progress Milestone Line */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#20B6A5] text-[#080A09] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                      <div>
                        <div className="text-[#F4F5F1] font-semibold">Item Intake &amp; Barcode Tagging</div>
                        <div className="text-[11px] text-[#737D77]">Timestamp: 10:14 AM — Completed by Hub Agent A</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#20B6A5] text-[#080A09] flex items-center justify-center font-bold text-xs flex-shrink-0">✓</div>
                      <div>
                        <div className="text-[#F4F5F1] font-semibold">Deep Clean &amp; Fabric Treatment</div>
                        <div className="text-[11px] text-[#737D77]">Timestamp: 02:40 PM — Completed at Facility Main</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full border-2 border-[#E9E65A] bg-[#E9E65A]/20 text-[#E9E65A] flex items-center justify-center font-bold text-xs flex-shrink-0 animate-pulse">●</div>
                      <div>
                        <div className="text-[#E9E65A] font-semibold">Quality Inspection [In Progress]</div>
                        <div className="text-[11px] text-[#E9E65A]/80">Passed stain verification; final hand press in queue</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 opacity-40">
                      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs flex-shrink-0" />
                      <div>
                        <div className="text-[#A9B0AC]">Dispatched for Doorstep Delivery</div>
                        <div className="text-[11px] text-[#737D77]">Estimated Window: Tomorrow 09:00 AM – 12:00 PM</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#252B28] text-[10px] text-[#737D77]">
                    *Interactive prototype schematic representation. Data is synthetic.
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#20B6A5] uppercase mb-2">Architectural Highlights</div>
                    <ul className="space-y-2 text-xs text-[#A9B0AC]">
                      <li>• Zero-authentication magic links securely signed via HMAC tokens.</li>
                      <li>• Real-time updates push via WebSocket channels without page refresh.</li>
                      <li>• Direct carrier and technician dispatch integration.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#E9E65A] uppercase mb-2">Integration Readiness</div>
                    <p className="text-xs text-[#A9B0AC] leading-relaxed">
                      Designed as an embeddable React module or headless REST API, easily adapted to logistics, laundry, automotive, and repair business operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROTOTYPE 2: Business Analytics Dashboard */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] p-7 sm:p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#252B28] mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#E9E65A]/15 text-[#E9E65A] border border-[#E9E65A]/30 uppercase">
                      Prototype
                    </span>
                    <span className="text-xs font-mono text-[#737D77]">TELEMETRY UI &amp; REPORTING</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F5F1]">Business Analytics &amp; Telemetry Dashboard</h3>
                  <p className="text-sm text-[#A9B0AC] mt-1.5 max-w-2xl">
                    Operational telemetry console aggregating throughput rates, technician efficiency, and SLA compliance metrics across multi-unit facilities.
                  </p>
                </div>
                <div className="flex-shrink-0 text-left lg:text-right font-mono text-xs text-[#A9B0AC]">
                  <div>TECH: TimescaleDB + Supabase + Charts</div>
                  <div className="text-[#E9E65A] mt-1">STATUS: TELEMETRY PROTOTYPE</div>
                </div>
              </div>

              {/* Realistic Mockup UI */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 p-6 rounded-xl bg-[#141816] border border-[#252B28] font-mono text-xs">
                  {/* KPI Tiles */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28]">
                      <div className="text-[10px] text-[#737D77]">TOTAL INTAKE</div>
                      <div className="text-lg font-bold text-[#F4F5F1] mt-1">1,480 pcs</div>
                      <div className="text-[10px] text-[#20B6A5] mt-0.5">↑ 14% vs avg</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28]">
                      <div className="text-[10px] text-[#737D77]">ON-TIME SLA</div>
                      <div className="text-lg font-bold text-[#E9E65A] mt-1">99.2%</div>
                      <div className="text-[10px] text-[#A9B0AC] mt-0.5">Target &gt;98%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28]">
                      <div className="text-[10px] text-[#737D77]">ACTIVE FLOWS</div>
                      <div className="text-lg font-bold text-[#20B6A5] mt-1">42</div>
                      <div className="text-[10px] text-[#737D77] mt-0.5">0 bottlenecks</div>
                    </div>
                  </div>

                  {/* SVG Bar Chart Visualization */}
                  <div className="pt-2">
                    <div className="text-[10px] text-[#737D77] mb-2 flex justify-between">
                      <span>DAILY PROCESSED VOLUME (LAST 7 DAYS)</span>
                      <span className="text-[#20B6A5]">PEAK: 1,840</span>
                    </div>
                    <div className="flex items-end justify-between h-20 gap-2 px-2 bg-[#080A09] rounded-lg p-3 border border-[#252B28]">
                      <div className="w-full bg-[#20B6A5]/40 hover:bg-[#20B6A5] h-[45%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/50 hover:bg-[#20B6A5] h-[65%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/60 hover:bg-[#20B6A5] h-[55%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/70 hover:bg-[#20B6A5] h-[80%] rounded-sm transition-all" />
                      <div className="w-full bg-[#20B6A5]/80 hover:bg-[#20B6A5] h-[70%] rounded-sm transition-all" />
                      <div className="w-full bg-[#E9E65A] h-[95%] rounded-sm" />
                      <div className="w-full bg-[#20B6A5]/60 hover:bg-[#20B6A5] h-[60%] rounded-sm transition-all" />
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#252B28] text-[10px] text-[#737D77]">
                    *Simulated telemetry demonstration. Metric aggregations generated for evaluation.
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#20B6A5] uppercase mb-2">Telemetry Architecture</div>
                    <ul className="space-y-2 text-xs text-[#A9B0AC]">
                      <li>• Time-bucketed materialized views for instantaneous query responses.</li>
                      <li>• Anomaly detection for turnaround delays and equipment bottlenecks.</li>
                      <li>• Role-based dashboards for shop managers and executive oversight.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#E9E65A] uppercase mb-2">Customization Scope</div>
                    <p className="text-xs text-[#A9B0AC] leading-relaxed">
                      Connectable to existing SQL databases, cloud warehouses, or third-party POS systems with automated daily digests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PROTOTYPE 3: Automated Operations Workflows */}
            <div className="rounded-2xl bg-[#080A09] border border-[#252B28] p-7 sm:p-10 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#252B28] mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-[#20B6A5]/15 text-[#20B6A5] border border-[#20B6A5]/30 uppercase">
                      In Development
                    </span>
                    <span className="text-xs font-mono text-[#737D77]">EVENT-DRIVEN ARCHITECTURE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#F4F5F1]">Automated Operations &amp; Dispatch Workflows</h3>
                  <p className="text-sm text-[#A9B0AC] mt-1.5 max-w-2xl">
                    Event-driven orchestration pipeline connecting inbound webhooks to conditional tasks, automated notifications, and dispatch triggers.
                  </p>
                </div>
                <div className="flex-shrink-0 text-left lg:text-right font-mono text-xs text-[#A9B0AC]">
                  <div>TECH: Node.js + BullMQ + Webhooks</div>
                  <div className="text-[#20B6A5] mt-1">STATUS: PIPELINE ENGINE</div>
                </div>
              </div>

              {/* Realistic Mockup UI */}
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 p-6 rounded-xl bg-[#141816] border border-[#252B28] font-mono text-xs">
                  <div className="space-y-3">
                    {/* Pipeline Node 1 */}
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#20B6A5]" />
                        <span className="text-[#F4F5F1] font-semibold">1. Webhook Ingestion</span>
                      </div>
                      <span className="text-[10px] text-[#20B6A5] bg-[#20B6A5]/10 px-2 py-0.5 rounded">POST /v1/intake</span>
                    </div>

                    <div className="flex justify-center text-[#737D77] -my-1 text-xs">↓</div>

                    {/* Pipeline Node 2 */}
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#E9E65A]/30 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#E9E65A] animate-pulse" />
                        <span className="text-[#E9E65A] font-semibold">2. Rule Evaluation Engine</span>
                      </div>
                      <span className="text-[10px] text-[#E9E65A] bg-[#E9E65A]/10 px-2 py-0.5 rounded">Priority &gt; Standard</span>
                    </div>

                    <div className="flex justify-center text-[#737D77] -my-1 text-xs">↓</div>

                    {/* Pipeline Node 3 */}
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#20B6A5]" />
                        <span className="text-[#F4F5F1] font-semibold">3. Multi-Channel Notification</span>
                      </div>
                      <span className="text-[10px] text-[#20B6A5] bg-[#20B6A5]/10 px-2 py-0.5 rounded">WhatsApp API + SMS</span>
                    </div>

                    <div className="flex justify-center text-[#737D77] -my-1 text-xs">↓</div>

                    {/* Pipeline Node 4 */}
                    <div className="p-3 rounded-lg bg-[#080A09] border border-[#252B28] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#20B6A5]" />
                        <span className="text-[#F4F5F1] font-semibold">4. Ledger &amp; ERP Sync</span>
                      </div>
                      <span className="text-[10px] text-[#737D77] bg-white/5 px-2 py-0.5 rounded">ACID Transaction OK</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#252B28] text-[10px] text-[#737D77]">
                    *Declarative workflow definition with automatic retry exponential backoff.
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#20B6A5] uppercase mb-2">Reliability Guarantees</div>
                    <ul className="space-y-2 text-xs text-[#A9B0AC]">
                      <li>• Idempotent execution preventing double-dispatch or duplicate billing.</li>
                      <li>• Dead-letter queue (DLQ) with automated alert triage upon failure.</li>
                      <li>• Audit log preserving state change history for compliance.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#141816] border border-[#252B28]">
                    <div className="text-xs font-mono font-bold text-[#E9E65A] uppercase mb-2">Production Application</div>
                    <p className="text-xs text-[#A9B0AC] leading-relaxed">
                      Replaces manual email and messaging chains with automated, self-healing state transitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Building Custom Products Callout */}
      <section className="py-20 bg-[#080A09]" aria-labelledby="custom-platform-heading">
        <Container size="xl" className="text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#20B6A5] uppercase tracking-wider mb-3 block">
              BESPOKE SOFTWARE ENGINEERING
            </span>
            <h2 id="custom-platform-heading" className="text-3xl sm:text-4xl font-extrabold text-[#F4F5F1] mb-4">
              Need a bespoke platform for your business operations?
            </h2>
            <p className="text-sm sm:text-base text-[#A9B0AC] leading-relaxed mb-8">
              We partner with businesses to build custom SaaS portals, internal tools, and operational hubs tailored specifically to their domain.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn btn-primary-teal btn-lg group">
                <span>Discuss Custom Platform Development</span>
                <svg className="w-4 h-4 text-[#080A09]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+917379791375"
                className="btn btn-secondary-dark btn-lg font-mono text-xs text-[#A9B0AC] hover:text-[#F4F5F1]"
              >
                Direct: +91 7379791375
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}