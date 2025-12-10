import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SiteLogo from './components/SiteLogo';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ClinicFix from './pages/ClinicFix';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0D]/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <SiteLogo />

            <nav className="hidden md:flex space-x-8">
              <Link to="/clinic-fix" className="text-gray-300 hover:text-white transition-colors">
                $10K Clinic Fix
              </Link>
              <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                Resources
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </nav>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-white/10 mt-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/clinic-fix"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  $10K Clinic Fix
                </Link>
                <Link
                  to="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  How It Works
                </Link>
                <Link
                  to="/resources"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Resources
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  About
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clinic-fix" element={<ClinicFix />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
