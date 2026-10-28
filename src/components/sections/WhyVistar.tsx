import { Container, Card, CardContent, Badge } from '../ui';
import { whyAbhivox } from '../../data';

const whyIcons: Record<string, React.ReactNode> = {
  'Built Around Your Workflow': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Production-Minded': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  'Security-Conscious': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Cost-Aware': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  'Automation-First': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
    </svg>
  ),
  'Long-Term Support': (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

const whyColors = [
  { bg: 'bg-primary/10', border: 'border-primary/20', icon: 'text-primary', glow: 'shadow-glow-blue' },
  { bg: 'bg-secondary/10', border: 'border-secondary/20', icon: 'text-secondary', glow: 'shadow-glow-cyan' },
  { bg: 'bg-accent/10', border: 'border-accent/20', icon: 'text-accent', glow: 'shadow-glow-violet' },
  { bg: 'bg-emerald/10', border: 'border-emerald/20', icon: 'text-emerald-600', glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_8px_32px_-8px_rgba(16,185,129,0.3)]' },
  { bg: 'bg-violet/10', border: 'border-violet/20', icon: 'text-accent', glow: 'shadow-glow-violet' },
  { bg: 'bg-amber/10', border: 'border-amber/20', icon: 'text-amber-600', glow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.4),0_8px_32px_-8px_rgba(245,158,11,0.3)]' },
];

export function WhyAbhivox() {
  return (
    <section className="section-surface section-padding relative overflow-hidden" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-accent" aria-hidden="true" />

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-primary mb-4 animate-fade-in">
            Why ABHIVOX TECHNOLOGIES
          </Badge>
          <h2 id="why-heading" className="heading-2 animate-slide-up">
            Engineering decisions that make business sense.
          </h2>
          <p className="mt-4 body-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            We don't just write code — we build systems that serve your business goals and scale with your growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyAbhivox.map((item, index) => {
            const colors = whyColors[index % whyColors.length];
            return (
              <Card key={item.title} className="group h-full animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6">

                  <div className="relative p-3.5 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center rounded-xl p-3 ${colors.bg} ${colors.border} ${colors.icon}`}>
                      {whyIcons[item.title]}
                    </div>
                  </div>

                  <h3 className="heading-4 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-600 body-base">{item.description}</p>

                  <div className="mt-5 pt-4 border-t border-slate-100 group-hover:border-primary/30 transition-colors">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export const WhyVistar = WhyAbhivox;