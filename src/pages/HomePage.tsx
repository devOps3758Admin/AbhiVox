import { SEO } from '../components/common';
import {
  Hero,
  Capabilities,
  Process,
  CaseStudies,
  Technology,
  CTA,
} from '../components/sections';

export function HomePage() {
  return (
    <>
      <SEO
        title="AbhiVox Technologies | Software, Cloud, DevOps & AI Solutions"
        description="AbhiVox Technologies builds software products, cloud infrastructure, DevOps automation, and AI-powered solutions to help businesses improve efficiency, reliability, and growth."
        canonical="https://tech.abhivox.online/"
      />

      {/* Section A: Hero */}
      <Hero />

      {/* Section B: Core Capabilities */}
      <Capabilities />

      {/* Section C: Engineering Approach (Discover -> Architect -> Build -> Automate -> Operate) */}
      <Process />

      {/* Section D: Selected Work (EcoDry) */}
      <CaseStudies />

      {/* Section E: Technology and Delivery */}
      <Technology />

      {/* Section F: Closing CTA */}
      <CTA />
    </>
  );
}
