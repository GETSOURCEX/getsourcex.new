import React from 'react';
import { Link } from 'react-router-dom';
import Industries from '../components/Industries';
import SEO from '../components/SEO';

const IndustriesPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO 
        title="Industry-Specific AI Business Automation | Healthcare, Retail & More"
        description="Tailored AI business automation solutions for healthcare, professional services, retail, SaaS, corporate enterprises, and e-commerce. Custom intelligent automation workflows for your industry."
        path="/industries"
      />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          AI Business Automation Solutions by Industry
        </h1>
        <p className="text-[#cccccc] text-lg mb-12 max-w-3xl">
          Discover how Source X's <strong>AI business automation</strong> solutions are transforming businesses across different sectors. From <strong>healthcare automation AI</strong> to <strong>e-commerce AI personalization</strong>, we deliver tailored <strong>intelligent automation systems</strong> that drive growth and efficiency.
        </p>
        
        <Industries />
      </div>
    </div>
  );
};

export default IndustriesPage;