import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO 
        title="AI Automation Insights & Strategies | Source X Blog"
        description="Expert insights on AI automation strategies, implementation guides, and industry trends from Source X. Transform your business with intelligent solutions."
        path="/blog"
      />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest Insights
          </h1>
          <p className="text-[#cccccc] text-lg mb-12">
            Discover the latest trends, strategies, and insights in AI automation and business transformation.
          </p>

          {/* Elfsight Blog Widget */}
          <div className="elfsight-app-156101c6-7db7-4af0-aadb-fed261565d86"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;