import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  schema,
}: SEOProps) {
  const { pathname } = useLocation();
  const currentOrigin = 'https://tech.abhivox.online';
  const canonicalUrl = canonical || `${currentOrigin}${pathname === '/' ? '/' : pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to safely set meta attributes
    const setMetaTag = (selector: string, attribute: string, content: string, createSelector: { name?: string; property?: string }) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (createSelector.name) meta.setAttribute('name', createSelector.name);
        if (createSelector.property) meta.setAttribute('property', createSelector.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute(attribute, content);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'content', description, { name: 'description' });

    // 3. Canonical Tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Open Graph Meta Tags
    setMetaTag('meta[property="og:title"]', 'content', title, { property: 'og:title' });
    setMetaTag('meta[property="og:description"]', 'content', description, { property: 'og:description' });
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl, { property: 'og:url' });
    setMetaTag('meta[property="og:type"]', 'content', ogType, { property: 'og:type' });

    // 5. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:title"]', 'content', title, { name: 'twitter:title' });
    setMetaTag('meta[name="twitter:description"]', 'content', description, { name: 'twitter:description' });
    setMetaTag('meta[name="twitter:url"]', 'content', canonicalUrl, { name: 'twitter:url' });

    // 6. Optional Per-Page JSON-LD Structured Data
    const scriptId = 'page-json-ld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Cleanup page-specific JSON-LD script if needed
      const tag = document.getElementById(scriptId);
      if (tag) tag.remove();
    };
  }, [title, description, canonicalUrl, ogType, schema]);

  return null;
}
