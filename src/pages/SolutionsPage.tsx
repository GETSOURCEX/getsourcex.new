import React from 'react';
import { Link } from 'react-router-dom';
import Solutions from '../components/Solutions';
import SEO from '../components/SEO';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO 
        title="AI Business Automation Solutions | Lead Generation, Customer Support & More"
        description="Discover Source X's comprehensive AI business automation solutions: automated lead generation, AI customer support, appointment setting, phone automation, email campaigns, and e-commerce personalization."
        path="/solutions"
      />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          AI Business Automation Solutions for Modern Business
        </h1>
        <p className="text-[#cccccc] text-lg mb-12 max-w-3xl">
          Transform your operations with our cutting-edge <strong>AI business automation</strong> solutions. From <strong>automated lead generation</strong> to <strong>AI customer support</strong>, we help businesses across Canada work smarter and grow faster with <strong>intelligent automation systems</strong>.
        </p>
        
        <Solutions />
      </div>
    </div>
  );
};

export default SolutionsPage;