import { Container, Card, CardContent, CardHeader, Badge } from '../ui';
import { products } from '../../data';
import { Link } from 'react-router-dom';

export function Products() {
  const product = products[0];

  return (
    <section className="section-surface section-padding" aria-labelledby="products-heading">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="badge-secondary mb-4">
            Featured Product
          </Badge>
          <h2 id="products-heading" className="heading-2">
            {product.name} — {product.tagline}
          </h2>
          <p className="mt-4 body-lg text-slate-600">
            {product.description}
          </p>
        </div>

        <Card className="overflow-hidden border-slate-200 shadow-sm">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="heading-3">{product.name}</h3>
                <p className="text-slate-600">{product.tagline}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  View Live Demo
                </Link>
                <Link
                  to="/case-studies#ecodry"
                  className="btn btn-primary"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 border-r border-slate-200 lg:border-r-0">
                <h4 className="heading-4 mb-4">Capabilities</h4>
                <ul className="space-y-3" role="list">
                  {product.capabilities.map((cap) => (
                    <li key={cap.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-700">{cap.name}</span>
                      <Badge
                        className={cap.status === 'implemented'
                          ? 'badge-success'
                          : 'badge-warning'}
                      >
                        {cap.status === 'implemented' ? 'Implemented' : 'In Development'}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-slate-50">
                <h4 className="heading-4 mb-4">Status</h4>
                <p className="text-slate-600 body-base">
                  This product is actively developed. Features marked "In Development" are on the roadmap and not yet available in production.
                  We believe in transparency — no false claims about production readiness.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
}