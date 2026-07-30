import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'profile' | 'article';
  schema?: Record<string, any>;
}

export function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  schema,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Vivek Pandit - Portfolio`;
    document.title = fullTitle;

    // Helper function to update meta tag content
    const updateMetaTag = (nameOrProperty: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('description', description);

    // OG Tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);

    const currentUrl = canonicalUrl || window.location.href;
    updateMetaTag('og:url', currentUrl, true);

    // Twitter Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Structured JSON-LD Data
    let schemaScript = document.getElementById('json-ld-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Optional cleanups if leaving the site, but usually we just overwrite on next mount.
    };
  }, [title, description, canonicalUrl, ogType, schema]);

  return null;
}
