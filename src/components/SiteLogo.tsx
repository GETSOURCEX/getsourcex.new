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
      className={`inline-flex items-center transition-transform duration-200 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0D] rounded whitespace-nowrap ${className}`}
      aria-label="Source X Home"
    >
      <img
        src={LogoImage}
        alt="Source X logo"
        className="h-6 md:h-8 w-auto object-contain"
        width="144"
        height="32"
        decoding="async"
        fetchpriority="high"
      />
    </Link>
  );
}
