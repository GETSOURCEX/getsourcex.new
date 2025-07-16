import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({ title, description, path, noindex = false }) => {
  const baseUrl = 'https://www.getsourcex.com';
  const url = `${baseUrl}${path}`;
  const ogImage = 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Geographic Targeting */}
      <link rel="alternate" hreflang="en-us" href={`${baseUrl}/us${path}`} />
      <link rel="alternate" hreflang="en-ca" href={`${baseUrl}/ca${path}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="SourceX" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    </Helmet>
  );
};

export default SEO;