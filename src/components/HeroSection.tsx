import React, { useState } from 'react';
import HeroFormModal from './HeroFormModal';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [isTransformationModalOpen, setIsTransformationModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://zeeg.me/vatsalsourcex/30min', '_blank');
  };

  const handleTransformationPlanClick = () => {
    setIsTransformationModalOpen(true);
  };

  const handleAuditClick = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-20">
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-[800px] text-left">
            <h1 className="hero-heading text-left">
              The AI Transformation Partner<br />
              <span className="gradient-blue">Your Competition Fears</span>
            </h1>
            <p className="enhanced-subheading text-white text-xl leading-relaxed mt-6 max-w-[650px] text-left">
              We don't just automate tasks—we transform entire businesses into intelligent, self-running operations that scale while you sleep. Trusted across 15+ countries worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handleTransformationPlanClick}
                className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer w-full sm:w-auto"
                aria-label="See Your AI Business Transformation Plan"
              >
                See Your Transformation Plan
              </button>
              <button
                onClick={handleAuditClick}
                className="px-8 py-4 border-2 border-[#3B82F6] text-[#3B82F6] font-semibold rounded-xl hover:bg-[#3B82F6] hover:text-white transition-all duration-300 cursor-pointer w-full sm:w-auto"
                aria-label="Get Your Free AI Business Transformation Audit"
              >
                Get Your Free AI Transformation Audit
              </button>
            </div>
            <p className="enhanced-subheading-small text-white/70 mt-4 text-left">
              ⚡ Limited to 10 transformations per month - Only 3 spots remaining
            </p>
          </div>
        </div>
      </section>

      <HeroFormModal
        isOpen={isTransformationModalOpen}
        onClose={() => setIsTransformationModalOpen(false)}
        formType="transformation"
      />

      <HeroFormModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        formType="audit"
      />
    </>
  );
};

export default HeroSection;