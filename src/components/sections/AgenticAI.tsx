import { Container, Card, CardContent, Badge } from '../ui';
import { solutions } from '../../data';

const agentIcons: Record<string, React.ReactNode> = {
  'Customer Support Agent': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  'Operations Agent': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M2 9h20" />
    </svg>
  ),
  'Follow-Up Agent': (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export function AgenticAI() {
  const agentic = solutions[1];

  return (
    <section className="section-tinted-blue section-padding relative overflow-hidden" aria-labelledby="agentic-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-accent" aria-hidden="true" />

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-primary mb-4 animate-fade-in">
            Solution
          </Badge>
          <h2 id="agentic-heading" className="heading-2 animate-slide-up">
            AI that works inside your business workflows.
          </h2>
          <p className="mt-4 body-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            Practical agents that handle specific tasks with human oversight — no exaggerated claims, just measurable automation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {agentic.agents?.map((agent, index) => (
            <Card key={agent.name} className="group h-full animate-slide-up" style={{ animationDelay: `${index * 80}ms` }}>
              <CardContent className="p-6">

                <div className="relative flex items-center gap-4 mb-4">
                  <div className="relative p-3.5 rounded-2xl bg-white border border-secondary/30 text-secondary shadow-sm group-hover:scale-105 transition-all duration-300">
                    {agentIcons[agent.name as keyof typeof agentIcons]}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-secondary/20 ring-2 ring-white" aria-hidden="true" />
                  </div>
                  <h3 className="heading-4 mb-0 group-hover:text-primary transition-colors">{agent.name}</h3>
                </div>

                <p className="text-slate-600 body-base mb-5">{agent.description}</p>

                <ul className="space-y-3" role="list">
                  {agent.capabilities?.map((capability) => (
                    <li key={capability} className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                      <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {capability}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-slate-100 group-hover:border-secondary/30 transition-colors">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-2.5 transition-all duration-200">
                    View capabilities
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}