export const services = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    description: 'End-to-end application development from architecture to deployment. We build scalable web applications using modern frameworks and best practices.',
    capabilities: [
      'React, Next.js, TypeScript',
      'Node.js, REST APIs, GraphQL',
      'PostgreSQL, MongoDB, Redis',
      'Testing, CI/CD integration',
      'Performance optimization',
      'Code review & mentoring',
    ],
    icon: 'code',
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description: 'Design, deploy, and manage cloud infrastructure on Azure and AWS. Infrastructure as Code, scalable architectures, and cloud-native patterns.',
    capabilities: [
      'Azure, AWS, GCP',
      'Terraform, Bicep, CloudFormation',
      'Kubernetes, Container Apps',
      'Serverless architectures',
      'Multi-cloud strategies',
      'Disaster recovery planning',
    ],
    icon: 'cloud',
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    description: 'Automate delivery pipelines, implement observability, and establish reliable release processes. GitOps, automated testing, and deployment strategies.',
    capabilities: [
      'GitHub Actions, Azure DevOps',
      'GitLab CI, Jenkins',
      'ArgoCD, Flux (GitOps)',
      'Automated testing pipelines',
      'Blue-green, canary deployments',
      'Infrastructure validation',
    ],
    icon: 'terminal',
  },
  {
    id: 'ai',
    title: 'AI & Agentic Automation',
    description: 'Practical AI integration into business workflows. LLM-powered agents, document processing, intelligent automation, and custom model fine-tuning.',
    capabilities: [
      'LLM integration (OpenAI, Anthropic)',
      'Agentic workflows (LangGraph, AutoGen)',
      'RAG implementations',
      'Document intelligence',
      'Custom model fine-tuning',
      'AI safety & guardrails',
    ],
    icon: 'brain',
  },
  {
    id: 'security',
    title: 'Security Engineering',
    description: 'Security built into every layer. Threat modeling, secure code practices, compliance, and continuous security validation.',
    capabilities: [
      'Threat modeling (STRIDE)',
      'SAST/DAST/SCA integration',
      'Secrets management',
      'Zero-trust architecture',
      'Compliance (SOC2, ISO27001)',
      'Incident response planning',
    ],
    icon: 'shield',
  },
  {
    id: 'cost',
    title: 'Cloud Cost Optimization',
    description: 'Reduce cloud spend without sacrificing performance. Rightsizing, reserved instances, FinOps practices, and continuous cost monitoring.',
    capabilities: [
      'Cost analysis & reporting',
      'Rightsizing recommendations',
      'Reserved instance management',
      'FinOps implementation',
      'Anomaly detection',
      'Chargeback/showback models',
    ],
    icon: 'dollar',
  },
];

export const solutions = [
  {
    id: 'automation',
    title: 'Business Process Automation',
    description: 'Turn repetitive operations into automated workflows. Connect applications, data, CRM, cloud infrastructure, and AI agents.',
    flow: [
      'Customer',
      'Application',
      'Database',
      'CRM',
      'Automation',
      'AI Agent',
      'Action',
    ],
    examples: [
      'Lead capture & qualification',
      'Customer follow-ups',
      'Order status updates',
      'Payment reminders',
      'CRM record synchronization',
      'Document processing & extraction',
      'Multi-channel notifications',
      'Automated reporting',
    ],
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI',
    description: 'AI that works inside your business workflows. Practical agents that handle specific tasks with human oversight.',
    agents: [
      {
        name: 'Customer Support Agent',
        description: 'Handles tier-1 inquiries, routes complex cases, drafts responses for human review.',
        capabilities: ['Knowledge base lookup', 'Ticket classification', 'Response drafting', 'Escalation routing'],
      },
      {
        name: 'Operations Agent',
        description: 'Monitors systems, executes runbooks, coordinates incident response.',
        capabilities: ['Log analysis', 'Runbook execution', 'Status communication', 'Postmortem drafting'],
      },
      {
        name: 'Follow-Up Agent',
        description: 'Manages customer lifecycle communications, renewals, and engagement.',
        capabilities: ['Scheduled outreach', 'Personalization', 'Response tracking', 'CRM updates'],
      },
    ],
  },
];

export const products = [
  {
    id: 'ecodry',
    name: 'EcoDry',
    tagline: 'Digital Operations Platform for Dry Cleaners',
    website: 'https://ecodry.abhivox.online/',
    description: 'A comprehensive operational platform to manage customers, orders, tracking, CRM, payments, and workflow automation for commercial dry cleaning operations.',
    capabilities: [
      { name: 'Customer Management', status: 'implemented' },
      { name: 'Order Lifecycle Tracking', status: 'implemented' },
      { name: 'SMS & WhatsApp Notifications', status: 'implemented' },
      { name: 'Customer CRM & History', status: 'implemented' },
      { name: 'Payment Status Tracking', status: 'implemented' },
      { name: 'Customer Data Management', status: 'implemented' },
      { name: 'Real-Time Order Tracking Portal', status: 'in-development' },
      { name: 'Business Analytics Dashboard', status: 'in-development' },
      { name: 'Automated Operations Workflows', status: 'in-development' },
      { name: 'Production Cloud Deployment', status: 'implemented' },
    ],
    caseStudy: {
      before: [
        'Manual customer records on physical receipts and paper ledgers',
        'Staff spent 2+ hours daily answering order status phone calls',
        'Scattered customer information with no historical communication records',
        'Untracked payments, delayed invoicing, and manual reconciliation',
        'Zero automated customer updates or pickup reminders',
      ],
      after: [
        'Centralized digital database of customer accounts and garment profiles',
        'End-to-end digital order processing from intake to delivery',
        'Automated dispatch notifications via messaging channels',
        'Built-in CRM providing complete service and payment history',
        'Transparent payment recording with clear operational status indicators',
        'Cloud-hosted infrastructure with high availability and data backups',
      ],
    },
  },
];

export const deliveryProcess = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Goals, Constraints & Requirements',
    description: 'Understand business goals, constraints, and requirements through direct technical assessment and data flow mapping.',
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'Architecture & Delivery Plan',
    description: 'Define the technical architecture, implementation approach, and delivery plan with typed API contracts and schema models.',
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Software, Cloud & Automation',
    description: 'Develop the software, cloud infrastructure, or automation with strict typing, modular code, and automated test coverage.',
  },
  {
    step: '04',
    title: 'Operate & Improve',
    tagline: 'Deployment, Monitoring & Support',
    description: 'Support deployment, monitoring, and iterative improvements where included in the engagement, ensuring long-term operability.',
  },
];

// Preserved alias for backwards compatibility
export const engineeringApproach = deliveryProcess;

export const engineeringPractices = [
  {
    id: 'vcs',
    title: 'Version-Controlled Development',
    description: 'Trunk-based workflow, atomic commits, mandatory peer review, and pull-request validation gates.',
    tag: 'CODE HYGIENE',
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    description: 'Declarative Terraform or Bicep scripts ensuring all environments are reproducible and version-tracked.',
    tag: 'CLOUD TOPO',
  },
  {
    id: 'tests',
    title: 'Automated Testing',
    description: 'Unit, integration, and end-to-end test suites run on every commit to prevent production regressions.',
    tag: 'QUALITY GATES',
  },
  {
    id: 'cicd',
    title: 'CI/CD Workflows',
    description: 'Automated build, test, and containerized deployment pipelines with fast automated rollback capability.',
    tag: 'CONTINUOUS DELIVERY',
  },
  {
    id: 'security',
    title: 'Security Scanning',
    description: 'Static application security testing (SAST), dependency auditing, and secret scanning baked into delivery.',
    tag: 'DEVSECOPS',
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability',
    description: 'Centralized structured logging, health probe telemetry, and active anomaly alerts configured before launch.',
    tag: 'TELEMETRY',
  },
];

export const engineeringPrinciples = [
  {
    number: '01',
    title: 'Security by Design',
    description: 'Zero-trust architecture, encrypted data at rest and in transit, and least-privilege access patterns by default.',
  },
  {
    number: '02',
    title: 'Automation First',
    description: 'Infrastructure as code, automated testing pipelines, and declarative deployment workflows to eliminate manual error.',
  },
  {
    number: '03',
    title: 'Maintainable Architecture',
    description: 'Modular services and typed APIs engineered for longevity, code clarity, and autonomous operational ownership.',
  },
  {
    number: '04',
    title: 'Measurable Reliability',
    description: 'Observability built into every layer with health probes, distributed tracing, and automated failover capabilities.',
  },
];

export const processSteps = [
  { number: '01', title: 'Discover', description: 'Understand your business, challenges, and goals through deep discovery sessions.' },
  { number: '02', title: 'Architect', description: 'Design system architecture, data models, and technical approach.' },
  { number: '03', title: 'Build', description: 'Develop with clean code, tests, and documentation using modern practices.' },
  { number: '04', title: 'Automate', description: 'Implement CI/CD, infrastructure automation, and business workflow automation.' },
  { number: '05', title: 'Secure', description: 'Apply security controls, compliance checks, and vulnerability scanning.' },
  { number: '06', title: 'Deploy', description: 'Production deployment with rollback strategies and health verification.' },
  { number: '07', title: 'Operate', description: 'Ongoing maintenance, monitoring, optimization, and feature evolution.' },
];

export const principles = [
  {
    title: 'Security by Design',
    description: 'Threat modeling, secure defaults, and continuous validation at every layer.',
  },
  {
    title: 'Automation First',
    description: 'If it runs more than once, automate it. CI/CD, IaC, and workflow automation.',
  },
  {
    title: 'Infrastructure as Code',
    description: 'All infrastructure version-controlled, reviewable, and reproducible.',
  },
  {
    title: 'Cost Awareness',
    description: 'Right-size resources, leverage reserved capacity, implement FinOps practices.',
  },
  {
    title: 'Observability',
    description: 'Logs, metrics, traces, and alerts built-in — not bolted on.',
  },
  {
    title: 'Reliable Delivery',
    description: 'Trunk-based development, feature flags, automated testing, progressive delivery.',
  },
];

export const technologies = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'REST APIs', 'GraphQL'],
  database: ['PostgreSQL', 'Supabase', 'Redis'],
  cloud: ['Microsoft Azure', 'AWS', 'GCP'],
  devops: ['GitHub Actions', 'Azure DevOps', 'Docker', 'Terraform'],
  ai: ['LLM APIs', 'AI Agents', 'Workflow Automation', 'RAG'],
};

export const technologyGroups = [
  {
    category: 'Application Engineering',
    tagline: 'Bespoke web applications, APIs, and scalable portals',
    stack: ['TypeScript', 'React / Next.js', 'Node.js', 'PostgreSQL', 'REST & GraphQL APIs', 'Tailwind CSS'],
    icon: 'code',
  },
  {
    category: 'Cloud & Infrastructure',
    tagline: 'Resilient cloud topology and secure infrastructure as code',
    stack: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Terraform (IaC)', 'Docker & Containers', 'Cloud Security Architecture'],
    icon: 'cloud',
  },
  {
    category: 'Delivery & Automation',
    tagline: 'Reliable release pipelines, GitOps, and system observability',
    stack: ['GitHub Actions', 'Azure DevOps Pipelines', 'Automated Test Suites', 'CI/CD Deployments', 'Structured Logging & Monitoring'],
    icon: 'terminal',
  },
  {
    category: 'AI & Data',
    tagline: 'Intelligent business assistants, document AI, and automations',
    stack: ['LLM Integration (OpenAI/Anthropic)', 'Autonomous Agents', 'Retrieval-Augmented Generation', 'Supabase Database', 'Workflow Automation'],
    icon: 'brain',
  },
];

export const whyAbhivox = [
  {
    title: 'Built Around Your Workflow',
    description: 'We adapt our process to your team, not the other way around.',
  },
  {
    title: 'Production-Minded',
    description: 'Every decision considers operability, scalability, and maintenance.',
  },
  {
    title: 'Security-Conscious',
    description: 'Security is not a phase — it is embedded in every layer.',
  },
  {
    title: 'Cost-Aware',
    description: 'We optimize for value, not just features. Cloud costs are engineered.',
  },
  {
    title: 'Automation-First',
    description: 'Manual processes are technical debt. We eliminate them systematically.',
  },
  {
    title: 'Long-Term Support',
    description: 'We stay after launch. Maintenance, upgrades, and evolution included.',
  },
];

// Preserved alias for backwards compatibility
export const whyVistar = whyAbhivox;

export const contactInfo = {
  phones: ['+91 7379791375', '+91 95655 35583'],
  services: [
    'Full-Stack Development',
    'Cloud Engineering',
    'DevOps & CI/CD',
    'AI & Agentic Automation',
    'Business Automation',
    'CRM Development',
    'Cloud Cost Optimization',
    'Application Maintenance',
    'Other',
  ],
};

export const budgetOptions = [
  { value: '', label: 'Select expected budget range (optional)' },
  { value: 'Under ₹10,000 (Consultation / Small Fixes)', label: 'Under ₹10,000 (Consultation / Small Fixes)' },
  { value: '₹10,000 – ₹25,000 (Business Website / MVP)', label: '₹10,000 – ₹25,000 (Business Website / MVP)' },
  { value: '₹25,000 – ₹75,000 (E-commerce / Business Application)', label: '₹25,000 – ₹75,000 (E-commerce / Business Application)' },
  { value: '₹75,000 – ₹2,00,000 (Full-Stack Platform / Cloud Engineering)', label: '₹75,000 – ₹2,00,000 (Full-Stack Platform / Cloud Engineering)' },
  { value: '₹2,00,000+ (Enterprise / Custom Infrastructure)', label: '₹2,00,000+ (Enterprise / Custom Infrastructure)' },
  { value: 'Flexible / Need a Quote', label: 'Flexible / Need a Quote' },
];

export const seo = {
  defaultTitle: 'ABHIVOX TECHNOLOGIES — Your Vision. Our Innovation.',
  defaultDescription: 'Production-ready software, cloud infrastructure, DevOps, AI, and intelligent automation for modern businesses. Your Vision. Our Innovation.',
  siteUrl: 'https://tech.abhivox.online',
  organization: {
    name: 'ABHIVOX TECHNOLOGIES',
    url: 'https://tech.abhivox.online',
    logo: 'https://tech.abhivox.online/favicon.svg',
    sameAs: [
      'https://github.com/abhivox',
      'https://linkedin.com/company/abhivox',
      'https://twitter.com/abhivox',
    ],
    contactPoint: [
      { telephone: '+91-7379791375', contactType: 'customer service' },
      { telephone: '+91-95655-35583', contactType: 'customer service' },
    ],
  },
};