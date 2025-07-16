import React from 'react';
import { Lightbulb, HandshakeIcon, Settings } from 'lucide-react';

interface FinalCTAProps {
  onContactClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onContactClick }) => {
  const handleCtaClick = () => {
    // Pass specific service identifier for custom message
    const event = new CustomEvent('openContactForm', { 
      detail: { service: 'Get Your Free AI Transformation Audit' } 
    });
    window.dispatchEvent(event);
    onContactClick();
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="text-white">Let's Build the</span>{' '}
            <span className="gradient-blue">Future of Business</span>{' '}
            <span className="text-white">Together</span>
          </h2>
          <p className="section-subheading">
            Whether you're a startup, clinic, restaurant, or enterprise, Source X is here to help you scale faster, serve smarter, and operate seamlessly. Let's turn your ideas into intelligent automation that works 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <Lightbulb className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Real Results with AI</h3>
            <p className="text-gray-400">Custom solutions built to reduce costs and grow faster</p>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <HandshakeIcon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Partner-Centric Model</h3>
            <p className="text-gray-400">Collaborative workflows, transparent execution</p>
          </div>

          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <Settings className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">End-to-End Automation</h3>
            <p className="text-gray-400">From lead gen to customer support, fully handled</p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleCtaClick}
            className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center mx-auto cursor-pointer"
          >
            Get Your Free AI Transformation Audit
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;