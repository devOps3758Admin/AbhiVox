import { Container, Card, CardContent, Badge } from '../ui';
import { principles } from '../../data';

const principleIcons: Record<string, React.ReactNode> = {
  'Security by Design': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  'Automation First': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
    </svg>
  ),
  'Infrastructure as Code': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M2 9h20" />
    </svg>
  ),
  'Cost Awareness': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  'Observability': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  'Reliable Delivery': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
};

const principleColors = [
  { bg: 'bg-primary/10', border: 'border-primary/20', icon: 'text-primary', glow: 'shadow-glow-blue' },
  { bg: 'bg-accent/10', border: 'border-accent/20', icon: 'text-accent', glow: 'shadow-glow-violet' },
  { bg: 'bg-secondary/10', border: 'border-secondary/20', icon: 'text-secondary', glow: 'shadow-glow-cyan' },
  { bg: 'bg-amber/10', border: 'border-amber/20', icon: 'text-amber-600', glow: 'shadow-[0_0_0_1px_rgba(245,158,11,0.4),0_8px_32px_-8px_rgba(245,158,11,0.3)]' },
  { bg: 'bg-emerald/10', border: 'border-emerald/20', icon: 'text-emerald-600', glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.4),0_8px_32px_-8px_rgba(16,185,129,0.3)]' },
  { bg: 'bg-violet/10', border: 'border-violet/20', icon: 'text-accent', glow: 'shadow-glow-violet' },
];

export function Principles() {
  return (
    <section className="section-gradient-dark section-padding relative overflow-hidden" aria-labelledby="principles-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 -translate-x-1/2 bg-primary" aria-hidden="true" />

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-outline-light mb-4 animate-fade-in">
            Engineering Principles
          </Badge>
          <h2 id="principles-heading" className="heading-2 animate-slide-up">
            How we build.
          </h2>
          <p className="mt-4 body-xl animate-slide-up" style={{ animationDelay: '100ms', color: 'rgba(248,250,252,0.7)' }}>
            These principles guide every technical decision we make — they're not aspirational, they're operational.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const colors = principleColors[index % principleColors.length];
            return (
              <Card key={principle.title} className="group h-full relative overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: colors.bg.replace('/10', '/30') }} aria-hidden="true" />

                  <div className="relative p-3.5 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <div className={`inline-flex items-center justify-center rounded-xl p-3 ${colors.bg} ${colors.border} ${colors.icon} ${colors.glow}`}>
                      {principleIcons[principle.title]}
                    </div>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ background: colors.bg.replace('/10', '/50') }} aria-hidden="true" />
                  </div>

                  <h3 className="relative heading-4 mb-2 group-hover:text-primary transition-colors">{principle.title}</h3>
                  <p className="relative body-base text-slate-600">{principle.description}</p>

                  <div className="relative mt-5 pt-4 border-t border-slate-200 group-hover:border-primary/30 transition-colors">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
                      Learn more
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </CardContent>

                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: colors.bg.replace('/10', '').replace('/20', '') }}
                  aria-hidden="true"
                />
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}