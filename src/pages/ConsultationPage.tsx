import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const ConsultationPage = () => {
  const handleConsultationClick = () => {
    window.open('https://zeeg.me/vatsalsourcex/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO 
        title="Free AI Transformation Audit | Source X"
        description="Book your free 30-minute AI transformation audit with Source X. Discover custom solutions to streamline operations and boost revenue."
        path="/free-consultation"
      />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your Free AI Transformation Audit
          </h1>
          <p className="text-[#cccccc] text-lg mb-12">
            Schedule a 30-minute consultation to explore how Source X can transform your business operations with intelligent AI automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">What to Expect</h2>
              <ul className="space-y-4">
                {[
                  'Understand your business challenges',
                  'Explore AI automation opportunities',
                  'Get a customized solution roadmap',
                  'Learn about implementation timeline',
                  'Discuss ROI and success metrics'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-[#d1d5db]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1a1a2e] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <h2 className="text-2xl font-bold text-white mb-6">Schedule Now</h2>
              <p className="text-[#d1d5db] mb-8">
                Choose a time that works best for you. Our AI strategy expert will be ready to discuss your specific needs and opportunities.
              </p>
              <button
                onClick={handleConsultationClick}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Get Your Free AI Transformation Audit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;