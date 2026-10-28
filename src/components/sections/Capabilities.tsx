"use client";

import { Container, ScrollReveal } from '../ui';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    id: 'software',
    number: '01',
    category: 'PRODUCT ENGINEERING',
    title: 'Software & Digital Product Engineering',
    tagline: 'High-performance web applications, reliable APIs, and business-critical digital portals.',
    description:
      'We architect and build full-stack digital products engineered for long-term maintainability. Every system is built with strict TypeScript typing, modular architecture, and automated test coverage.',
    deliverables: [
      'Full-stack web applications (React, Next.js, Node.js)',
      'High-throughput REST & GraphQL API services',
      'Custom business management portals & CRM systems',
      'Relational database architecture (PostgreSQL, Supabase)',
      'Front-end performance optimization & accessibility',
    ],
    accent: '#20B6A5',
    accentClass: 'text-[#20B6A5]',
    bgBadge: 'bg-[#20B6A5]/10 border-[#20B6A5]/30 text-[#20B6A5]',
    href: '/services#fullstack',
    graphic: (
      <div className="relative w-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#0D100E]/95 border border-white/10 shadow-2xl backdrop-blur-sm flex flex-col justify-between font-mono text-xs">
        {/* Schematic Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#20B6A5]/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

        {/* Panel Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-[#20B6A5] font-semibold tracking-wide truncate">
              // ARCHITECTURE: THREE-TIER PRODUCT STACK
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A6AEAA] text-[10px] tracking-wider uppercase font-semibold flex-shrink-0">
            TYPED CONTRACTS
          </span>
        </div>

        {/* Three Architecture Layers */}
        <div className="space-y-2.5 my-3.5">
          {/* Layer 1: Client Layer */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-[#20B6A5]/30 hover:border-[#20B6A5]/60 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#20B6A5] font-bold text-[11px] tracking-wider uppercase">CLIENT LAYER</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[#A6AEAA] text-[10px] font-mono">SSR + SPA</span>
            </div>
            <div className="text-[#F4F5F1] text-xs sm:text-sm font-semibold mt-1">React / Next.js / TypeScript</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Responsive UI, client caching, accessible design tokens
            </div>
          </div>

          {/* Flow Connector 1 -> 2 */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-[#20B6A5] text-[10px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[10px] font-mono whitespace-nowrap">
              <svg className="w-2.5 h-2.5 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Typed REST &amp; GraphQL Endpoints
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
          </div>

          {/* Layer 2: Service Layer */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-[#E9E65A]/30 hover:border-[#E9E65A]/60 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#E9E65A] font-bold text-[11px] tracking-wider uppercase">SERVICE LAYER</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[#A6AEAA] text-[10px] font-mono">MICROSERVICES</span>
            </div>
            <div className="text-[#F4F5F1] text-xs sm:text-sm font-semibold mt-1">Node.js / Express / REST APIs</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Stateless business logic, JWT/HMAC auth, rate limiting
            </div>
          </div>

          {/* Flow Connector 2 -> 3 */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-[#E9E65A] text-[10px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9E65A]/30 to-transparent" />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E9E65A]/10 border border-[#E9E65A]/25 text-[10px] font-mono whitespace-nowrap">
              <svg className="w-2.5 h-2.5 text-[#E9E65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Connection Pooling &amp; Migrations
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9E65A]/30 to-transparent" />
          </div>

          {/* Layer 3: Persistence Layer */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-[#20B6A5]/30 hover:border-[#20B6A5]/60 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#20B6A5] font-bold text-[11px] tracking-wider uppercase">PERSISTENCE LAYER</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[#A6AEAA] text-[10px] font-mono">ACID LEDGER</span>
            </div>
            <div className="text-[#F4F5F1] text-xs sm:text-sm font-semibold mt-1">PostgreSQL / Supabase / Redis</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Row Level Security, relational models, automated point-in-time recovery
            </div>
          </div>
        </div>

        {/* Panel Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[10px] text-[#A6AEAA]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#20B6A5]">▪</span>
            STANDARD: ZERO ANY TYPES
          </span>
          <span className="text-[#20B6A5] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" aria-hidden="true" />
            STATUS: TYPE-SAFE CONTRACT
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'cloud',
    number: '02',
    category: 'INFRASTRUCTURE & OPS',
    title: 'Cloud, DevOps & Security Engineering',
    tagline: 'Resilient multi-cloud topology, Infrastructure as Code, automated CI/CD, and cost optimization.',
    description:
      'We replace fragile manual operations with reproducible Infrastructure as Code and automated delivery pipelines. Security scanning, observability, and FinOps cost controls are embedded from day one.',
    deliverables: [
      'Cloud architecture on Microsoft Azure and AWS',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Automated CI/CD pipelines (GitHub Actions, Azure DevOps)',
      'Container orchestration with Docker & Kubernetes',
      'Zero-trust security controls, secrets management & FinOps',
    ],
    accent: '#E9E65A',
    accentClass: 'text-[#E9E65A]',
    bgBadge: 'bg-[#E9E65A]/10 border-[#E9E65A]/30 text-[#E9E65A]',
    href: '/services#cloud',
    graphic: (
      <div className="relative w-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#0D100E]/95 border border-white/10 shadow-2xl backdrop-blur-sm flex flex-col justify-between font-mono text-xs">
        {/* Schematic Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E9E65A]/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

        {/* Panel Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#E9E65A] animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-[#E9E65A] font-semibold tracking-wide truncate">
              // PIPELINE: AUTOMATED DELIVERY
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A6AEAA] text-[10px] tracking-wider uppercase font-semibold flex-shrink-0">
            CONTINUOUS GITOPS
          </span>
        </div>

        <div className="space-y-2.5 my-3.5">
          {/* Pipeline Step 1: Source */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-[#20B6A5]/10 border border-[#20B6A5]/30 text-[#20B6A5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              1
            </span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
              <div className="min-w-0">
                <span className="text-[#F4F5F1] font-semibold text-xs sm:text-sm block">Source Code Repository</span>
                <span className="text-[10px] sm:text-[11px] text-[#A6AEAA] block truncate">Trunk branch PR &amp; semantic release</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20B6A5]/10 text-[#20B6A5] font-semibold flex-shrink-0">
                GitHub / GitLab
              </span>
            </div>
          </div>

          {/* Pipeline Step 2: CI/CD */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-[#20B6A5]/10 border border-[#20B6A5]/30 text-[#20B6A5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              2
            </span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
              <div className="min-w-0">
                <span className="text-[#F4F5F1] font-semibold text-xs sm:text-sm block">CI / CD Automation Gates</span>
                <span className="text-[10px] sm:text-[11px] text-[#A6AEAA] block truncate">Automated builds, linting &amp; test suite</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E9E65A]/10 text-[#E9E65A] font-semibold flex-shrink-0">
                Actions / Pipelines
              </span>
            </div>
          </div>

          {/* Pipeline Step 3: Security Validation */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-[#E9E65A]/30 hover:border-[#E9E65A]/60 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-[#E9E65A]/10 border border-[#E9E65A]/30 text-[#E9E65A] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              3
            </span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
              <div className="min-w-0">
                <span className="text-[#E9E65A] font-semibold text-xs sm:text-sm block">Security Validation</span>
                <span className="text-[10px] sm:text-[11px] text-[#A6AEAA] block truncate">SAST scan, secrets &amp; SBOM audit</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E9E65A]/10 text-[#E9E65A] font-semibold flex-shrink-0">
                Gate Passed
              </span>
            </div>
          </div>

          {/* Pipeline Step 4: Deployment */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-[#20B6A5]/10 border border-[#20B6A5]/30 text-[#20B6A5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              4
            </span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
              <div className="min-w-0">
                <span className="text-[#F4F5F1] font-semibold text-xs sm:text-sm block">Multi-Cloud Release</span>
                <span className="text-[10px] sm:text-[11px] text-[#A6AEAA] block truncate">Container release to Azure / AWS / K8s</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20B6A5]/10 text-[#20B6A5] font-semibold flex-shrink-0">
                Zero-Downtime
              </span>
            </div>
          </div>

          {/* Pipeline Step 5: Monitoring */}
          <div className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <span className="w-6 h-6 rounded-lg bg-[#20B6A5]/10 border border-[#20B6A5]/30 text-[#20B6A5] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
              5
            </span>
            <div className="flex-1 flex flex-wrap justify-between items-center gap-1 min-w-0">
              <div className="min-w-0">
                <span className="text-[#F4F5F1] font-semibold text-xs sm:text-sm block">Telemetry &amp; Observability</span>
                <span className="text-[10px] sm:text-[11px] text-[#A6AEAA] block truncate">Health telemetry, metrics &amp; alerts</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20B6A5]/10 text-[#20B6A5] font-semibold flex-shrink-0">
                Continuous
              </span>
            </div>
          </div>
        </div>

        {/* Panel Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[10px] text-[#A6AEAA]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#E9E65A]">▪</span>
            GITOPS: DECLARATIVE INFRASTRUCTURE
          </span>
          <span className="text-[#E9E65A] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E9E65A]" aria-hidden="true" />
            STATUS: REPRODUCIBLE DEPLOYS
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'ai',
    number: '03',
    category: 'APPLIED INTELLIGENCE',
    title: 'AI & Intelligent Automation',
    tagline: 'Practical LLM integrations, document intelligence, and autonomous business workflows.',
    description:
      'We integrate AI directly into your business processes rather than building novelty chatbots. We deploy autonomous agents, document data extraction, and automated notification systems that reduce manual workload.',
    deliverables: [
      'LLM integration with OpenAI, Anthropic, and open-source models',
      'Domain knowledge assistants with Retrieval-Augmented Generation (RAG)',
      'Automated document extraction (invoices, receipts, orders)',
      'Multi-channel messaging automation (Email, SMS, WhatsApp)',
      'Enterprise guardrails, rate-limiting, and audit logging',
    ],
    accent: '#20B6A5',
    accentClass: 'text-[#20B6A5]',
    bgBadge: 'bg-[#20B6A5]/10 border-[#20B6A5]/30 text-[#20B6A5]',
    href: '/services#ai',
    graphic: (
      <div className="relative w-full p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#0D100E]/95 border border-white/10 shadow-2xl backdrop-blur-sm flex flex-col justify-between font-mono text-xs">
        {/* Schematic Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#20B6A5]/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />

        {/* Panel Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#20B6A5] animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="text-[#20B6A5] font-semibold tracking-wide truncate">
              // WORKFLOW: APPLIED AI PIPELINE
            </span>
          </div>
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A6AEAA] text-[10px] tracking-wider uppercase font-semibold flex-shrink-0">
            EVENT-DRIVEN
          </span>
        </div>

        <div className="space-y-2.5 my-3.5">
          {/* Step 1: Business Input */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#A6AEAA] text-[10px] font-bold">01 // INTAKE</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-[#20B6A5] font-semibold">WEBHOOK / EVENT</span>
            </div>
            <div className="text-[#F4F5F1] font-semibold text-xs sm:text-sm mt-1">Business Input &amp; Trigger</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Order forms, inbound PDFs, raw invoices, or messaging triggers
            </div>
          </div>

          {/* Connector 1 -> 2 */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-[#20B6A5] text-[10px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[10px] font-mono whitespace-nowrap">
              <svg className="w-2.5 h-2.5 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Async Queue (BullMQ / RabbitMQ)
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
          </div>

          {/* Step 2: AI Processing */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#20B6A5]/5 border border-[#20B6A5]/30 hover:border-[#20B6A5]/60 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#20B6A5] text-[10px] font-bold">02 // PROCESSING</span>
              <span className="px-1.5 py-0.5 rounded bg-[#20B6A5]/10 text-[10px] text-[#E9E65A] font-semibold animate-pulse">LLM PARSER</span>
            </div>
            <div className="text-[#F4F5F1] font-semibold text-xs sm:text-sm mt-1">AI Processing &amp; Parsing</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Structured entity extraction, vector retrieval (RAG) &amp; classification
            </div>
          </div>

          {/* Connector 2 -> 3 */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-[#E9E65A] text-[10px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9E65A]/30 to-transparent" />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E9E65A]/10 border border-[#E9E65A]/25 text-[10px] font-mono whitespace-nowrap">
              <svg className="w-2.5 h-2.5 text-[#E9E65A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Strict Schema Gating &amp; Guardrails
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E9E65A]/30 to-transparent" />
          </div>

          {/* Step 3: Validation */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#E9E65A]/5 border border-[#E9E65A]/30 hover:border-[#E9E65A]/60 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#E9E65A] text-[10px] font-bold">03 // VALIDATION</span>
              <span className="px-1.5 py-0.5 rounded bg-[#E9E65A]/10 text-[10px] text-[#E9E65A] font-semibold">GUARDRAILS</span>
            </div>
            <div className="text-[#F4F5F1] font-semibold text-xs sm:text-sm mt-1">Validation &amp; Quality Gate</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              Schema validation, confidence thresholding, optional human review
            </div>
          </div>

          {/* Connector 3 -> 4 */}
          <div className="flex items-center justify-center gap-2 py-0.5 text-[#20B6A5] text-[10px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#20B6A5]/10 border border-[#20B6A5]/25 text-[10px] font-mono whitespace-nowrap">
              <svg className="w-2.5 h-2.5 text-[#20B6A5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
              Validated State Execution
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#20B6A5]/30 to-transparent" />
          </div>

          {/* Step 4: Workflow Action */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#20B6A5]/40 transition-colors">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[#A6AEAA] text-[10px] font-bold">04 // OUTCOME</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-[#20B6A5] font-semibold">TRANSACTION</span>
            </div>
            <div className="text-[#F4F5F1] font-semibold text-xs sm:text-sm mt-1">Workflow Action</div>
            <div className="text-[11px] sm:text-xs text-[#A6AEAA] mt-0.5 leading-relaxed">
              ERP/CRM database update, automated SMS/WhatsApp dispatch alerts
            </div>
          </div>
        </div>

        {/* Panel Footer */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-[10px] text-[#A6AEAA]">
          <span className="flex items-center gap-1.5">
            <span className="text-[#20B6A5]">▪</span>
            HUMAN-IN-THE-LOOP: OPTIONAL
          </span>
          <span className="text-[#20B6A5] font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20B6A5]" aria-hidden="true" />
            AUDIT LOGGED: YES
          </span>
        </div>
      </div>
    ),
  },
];

export function Capabilities() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-[#101211] text-[#F4F5F1] border-b border-white/10 overflow-hidden"
      aria-labelledby="capabilities-heading"
    >
      <div className="absolute inset-0 bg-grid-technical opacity-20 pointer-events-none" aria-hidden="true" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20">
          <ScrollReveal delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#20B6A5]/10 text-[#20B6A5] border border-[#20B6A5]/25 mb-4">
              CAPABILITIES &amp; SPECIALIZATIONS
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2
              id="capabilities-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F5F1]"
            >
              Three Engineering Disciplines.
              <br />
              <span className="text-[#E9E65A]">One Production Standard.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#A9B0AC] leading-relaxed max-w-2xl mx-auto">
              We operate across the complete technology stack — architecting custom software, automating multi-cloud infrastructure, and embedding applied intelligence into business operations.
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Capabilities List */}
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          {capabilities.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={item.id}
                className="relative rounded-2xl bg-[#080A09] border border-white/10 p-6 sm:p-8 md:p-10 lg:p-12 hover:border-[#20B6A5]/40 transition-all duration-300 shadow-xl overflow-hidden"
                aria-labelledby={`cap-${item.id}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
                  {/* Text Details (7 cols on desktop) */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#A6AEAA]">
                        {item.number} //
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase ${item.bgBadge}`}>
                        {item.category}
                      </span>
                    </div>

                    <h3
                      id={`cap-${item.id}`}
                      className="text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#F4F5F1] mb-2.5 sm:mb-3 leading-tight"
                    >
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#E9E65A] font-medium mb-3 sm:mb-4 leading-relaxed">
                      {item.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#A9B0AC] leading-relaxed mb-5 sm:mb-6">
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2.5 mb-6 sm:mb-8">
                      {item.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-[#F4F5F1]/90">
                          <svg
                            className={`h-4 w-4 mt-0.5 flex-shrink-0 ${item.accentClass}`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#20B6A5] hover:text-[#3DD5C3] transition-colors group p-1 -m-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20B6A5]"
                    >
                      <span>Explore {item.category}</span>
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* Graphic Architecture Display (5 cols on desktop) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'} w-full flex justify-center`}>
                    {item.graphic}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA to all services */}
        <div className="mt-14 text-center">
          <Link to="/services" className="btn btn-secondary-dark btn-md group">
            <span>View Complete Engineering Catalog</span>
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
