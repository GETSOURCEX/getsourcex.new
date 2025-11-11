import React from 'react';
import { Link } from 'react-router-dom';

interface SiteLogoProps {
  className?: string;
}

export default function SiteLogo({ className = '' }: SiteLogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 md:gap-4 group transition-transform duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D] rounded ${className}`}
      aria-label="Source X Home"
    >
      <div className="relative h-6 md:h-8 w-6 md:w-8 flex-shrink-0" role="img" aria-label="Source X icon">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M8 8L20 32L32 8H8Z"
            fill="white"
            opacity="0.9"
          />
          <path
            d="M15 8L27 32"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="flex items-center whitespace-nowrap"
        style={{
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
          letterSpacing: '0.02em',
          color: '#FFFFFF',
          textTransform: 'uppercase',
          lineHeight: 1
        }}
        role="img"
        aria-label="Source X"
      >
        SOURCE X
      </div>
    </Link>
  );
}
