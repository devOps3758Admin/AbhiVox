import { Container, Card, CardContent, Badge } from '../ui';
import { solutions } from '../../data';

const flowSteps = [
  { name: 'Customer', icon: 'user', color: 'primary' },
  { name: 'Application', icon: 'app', color: 'primary' },
  { name: 'Database', icon: 'database', color: 'secondary' },
  { name: 'CRM', icon: 'crm', color: 'secondary' },
  { name: 'Automation', icon: 'automation', color: 'accent', highlight: true },
  { name: 'AI Agent', icon: 'ai', color: 'secondary', highlight: true },
  { name: 'Action', icon: 'action', color: 'accent', highlight: true },
];

const stepIcons: Record<string, React.ReactNode> = {
  user: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  app: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  database: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 5.33 3 12 3s12-1.34 12-3V5" />
      <path d="M3 12c0 1.66 5.33 3 12 3s12-1.34 12-3" />
    </svg>
  ),
  crm: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  automation: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  ai: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M3 14a9 9 0 0 1 18 0" />
    </svg>
  ),
  action: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
};

const colorStyles = {
  primary: { bg: 'bg-primary/10', border: 'border-primary/20', icon: 'text-primary', glow: 'shadow-glow-blue' },
  secondary: { bg: 'bg-secondary/10', border: 'border-secondary/20', icon: 'text-secondary', glow: 'shadow-glow-cyan' },
  accent: { bg: 'bg-accent/10', border: 'border-accent/20', icon: 'text-accent', glow: 'shadow-glow-violet' },
};

export function BusinessAutomation() {
  const automation = solutions[0];

  return (
    <section className="section-muted section-padding relative overflow-hidden" aria-labelledby="automation-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-secondary" aria-hidden="true" />

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-primary mb-4 animate-fade-in">
            Solution
          </Badge>
          <h2 id="automation-heading" className="heading-2 animate-slide-up">
            Turn repetitive operations into automated workflows.
          </h2>
          <p className="mt-4 body-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            ABHIVOX TECHNOLOGIES connects your applications, data, CRM, cloud infrastructure, and AI agents into cohesive automated workflows.
          </p>
        </div>

        <div className="relative mb-16">
          <h3 className="heading-4 text-center mb-10 animate-fade-in">Automation Flow</h3>
          <div className="relative max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              {flowSteps.map((step, index) => {
                const style = colorStyles[step.color as keyof typeof colorStyles];
                return (
                  <div
                    key={step.name}
                    className={`
                      relative flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300
                      glass-card ${style.bg} ${style.border} ${style.glow}
                      ${step.highlight ? 'ring-2 ring-primary/30' : ''}
                      animate-slide-up
                    `}
                    style={{
                      animationDelay: `${index * 80}ms`,
                      width: index === flowSteps.length - 1 ? '100%' : 'auto',
                      maxWidth: '100%',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          flex-shrink-0 p-3 rounded-xl transition-all duration-300
                          ${style.icon} ${style.bg} ${style.border}
                        `}
                      >
                        {stepIcons[step.icon]}
                      </div>
                      <span className={`font-mono font-semibold text-base whitespace-nowrap ${step.highlight ? 'text-primary' : 'text-dark-950'}`}>
                        {step.name}
                      </span>
                    </div>
                    {index < flowSteps.length - 1 && (
                      <svg className={`h-8 w-8 flex-shrink-0 ${step.highlight ? 'text-primary/50' : 'text-slate-300'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M12 5v14" strokeDasharray="8 4" className="animate-shimmer" />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {automation.examples?.map((example, index) => (
            <Card key={example} className="group h-full animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
              <CardContent className="p-5">
                <p className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">{example}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}