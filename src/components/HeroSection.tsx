import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handlePrimaryCTA = () => {
    navigate('/clinic-fix');
  };

  const handleSecondaryCTA = () => {
    navigate('/how-it-works');
  };

  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-20">
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-[800px] text-left">
            <h1 className="hero-heading text-left">
              Your Clinic Is Leaking $10,000+ Every Month.<br />
              <span className="gradient-blue">We Show You Exactly Where, And Fix It Fast.</span>
            </h1>
            <p className="enhanced-subheading text-white text-xl leading-relaxed mt-6 max-w-[650px] text-left">
              Stop losing revenue to missed calls, no-shows, and slow follow-ups.
              Our AI-driven operations recover hidden profit without hiring new staff.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handlePrimaryCTA}
                className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                aria-label="Claim My Free $10K Clinic Fix"
              >
                Claim My Free $10K Clinic Fix
              </button>
              <button
                onClick={handleSecondaryCTA}
                className="px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] font-semibold rounded-xl hover:bg-[#3B82F6] hover:text-white transition-all duration-300 cursor-pointer w-full sm:w-auto"
                aria-label="See How It Works"
              >
                See How It Works
              </button>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Built for Med-Spas in the GTA</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ROI Snapshot Delivered in 48 Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fast, Secure, PHIPA-Compliant Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;