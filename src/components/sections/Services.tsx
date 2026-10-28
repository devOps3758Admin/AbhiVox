import { Container, Card, CardContent, Badge } from '../ui';
import { services } from '../../data';
import { Link } from 'react-router-dom';

const serviceIcons: Record<string, React.ReactNode> = {
  code: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  cloud: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  terminal: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  brain: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M9 17h6" />
      <path d="M12 14v3" />
      <path d="M5 10a7 7 0 0 1 14 0" />
      <path d="M3 14a9 9 0 0 1 18 0" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  dollar: (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

const iconStyles: Record<string, {
  bg: string;
  border: string;
  icon: string;
  gradient: string;
  techTags: string[];
}> = {
  code: {
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    icon: 'text-primary',
    gradient: 'from-primary/20 to-primary/5',
    techTags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
  cloud: {
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    icon: 'text-secondary',
    gradient: 'from-secondary/20 to-secondary/5',
    techTags: ['Azure', 'AWS', 'Terraform', 'Kubernetes'],
  },
  terminal: {
    bg: 'bg-violet/10',
    border: 'border-violet/20',
    icon: 'text-accent',
    gradient: 'from-accent/20 to-accent/5',
    techTags: ['GitHub Actions', 'GitOps', 'Docker', 'ArgoCD'],
  },
  brain: {
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    icon: 'text-accent',
    gradient: 'from-accent/20 to-violet/10',
    techTags: ['LLM APIs', 'LangGraph', 'RAG', 'Fine-tuning'],
  },
  shield: {
    bg: 'bg-emerald/10',
    border: 'border-emerald/20',
    icon: 'text-emerald-600',
    gradient: 'from-emerald/20 to-emerald/5',
    techTags: ['STRIDE', 'SAST/DAST', 'Zero-Trust', 'SOC2'],
  },
  dollar: {
    bg: 'bg-amber/10',
    border: 'border-amber/20',
    icon: 'text-amber-600',
    gradient: 'from-amber/20 to-amber/5',
    techTags: ['FinOps', 'Rightsizing', 'Reserved Instances', 'Anomaly Detection'],
  },
};

interface ServicesProps {
  variant?: 'full' | 'compact';
}

export function Services({ variant = 'full' }: ServicesProps) {
  const displayServices = variant === 'compact' ? services.slice(0, 3) : services;

  return (
    <section className="section-surface section-padding relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 bg-primary" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10 bg-secondary" aria-hidden="true" />

      <Container size="lg">
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-primary mb-4 animate-fade-in">
            Our Services
          </Badge>
          <h2 id="services-heading" className="heading-2 animate-slide-up">
            Engineering for the entire software lifecycle.
          </h2>
          <p className="mt-4 body-xl animate-slide-up" style={{ animationDelay: '100ms' }}>
            From initial architecture to ongoing operations, we handle every layer of your technology stack with production-grade practices.
          </p>
        </div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, index) => {
            const style = iconStyles[service.icon];
            const Icon = serviceIcons[service.icon];

            return (
              <Card
                key={service.id}
                className={`
                  group relative overflow-hidden h-full
                  transition-all duration-300
                  animate-slide-up
                `}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="p-6 relative">

                  <div className="relative flex items-start gap-4 mb-5">
                    <div
                      className={`
                        relative flex-shrink-0 icon-container icon-container-lg
                        ${style.bg} ${style.border} ${style.icon}
                        group-hover:scale-105 transition-all duration-300
                      `}
                    >
                      {Icon}
                    </div>
                    <h3 className="heading-4 mt-1 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="relative body-base text-slate-600 mb-5 line-clamp-3">{service.description}</p>

                  <div className="relative flex flex-wrap gap-2 mb-5" role="list" aria-label={`${service.title} technologies`}>
                    {style.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 border border-slate-200 text-slate-600 backdrop-blur-sm group-hover:border-primary/30 group-hover:text-primary transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="relative space-y-3" role="list">
                    {service.capabilities.slice(0, 4).map((capability) => (
                      <li key={capability} className="flex items-start gap-3 text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>{capability}</span>
                      </li>
                    ))}
                    {service.capabilities.length > 4 && (
                      <li className="flex items-start gap-3 text-sm">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 8v4M12 16h.01" />
                        </svg>
                        <span className="text-muted-foreground">+{service.capabilities.length - 4} more capabilities</span>
                      </li>
                    )}
                  </ul>

                  <div className="relative mt-6 pt-4 border-t border-slate-100 group-hover:border-primary/30 transition-colors">
                    <Link
                      to={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-200"
                    >
                      Learn more
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {variant === 'compact' && (
          <div className="relative mt-12 text-center animate-fade-in">
            <Link to="/services" className="btn btn-outline btn-lg">
              View All Services
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}