import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/FINAL LOGO  copy.png';

interface SiteLogoProps {
  className?: string;
}

export default function SiteLogo({ className = '' }: SiteLogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D] rounded whitespace-nowrap ${className}`}
      aria-label="Source X Home"
    >
      <img
        src={LogoImage}
        alt="Source X logo mark"
        className="h-6 md:h-8 w-auto object-contain"
        width="32"
        height="32"
        decoding="async"
        fetchpriority="high"
      />
      <span
        className="text-white font-black tracking-wider uppercase"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          letterSpacing: '0.1em',
          lineHeight: 1
        }}
      >
        SOURCE X
      </span>
    </Link>
  );
}
