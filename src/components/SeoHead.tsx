import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
}

export const SeoHead: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://dafe.name.ng/og-image.png',
  noIndex = false,
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper for meta tags
    const setMeta = (nameOrProp: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${nameOrProp}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameOrProp, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Standard Meta
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow');

    // 3. Open Graph
    const domain = 'https://dafe.name.ng';
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullUrl = `${domain}${cleanPath === '/' ? '' : cleanPath}`;

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);

    // 4. Twitter Card
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 5. Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // 6. JSON-LD structured data injection
    const existingScript = document.getElementById('json-ld-data');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'json-ld-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, ogType, ogImage, noIndex, jsonLd]);

  return null;
};
