import React from 'react';
import { useNavigate } from 'react-router-dom';

interface FinalCTAProps {
  onContactClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick }) => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/clinic-fix');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="section-heading mb-6">
            <span className="text-white">Ready to Stop the</span>{' '}
            <span className="gradient-blue">Revenue Leaks?</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] max-w-3xl mx-auto mb-12">
            Get your free ROI snapshot and transformation plan today.
          </p>

          <button
            onClick={handleCtaClick}
            className="px-12 py-5 bg-[#3b82f6] text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 flex items-center mx-auto cursor-pointer text-lg"
          >
            Claim My Free $10K Clinic Fix
            <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;