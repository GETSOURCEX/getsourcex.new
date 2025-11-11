import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NewHomePage from './pages/NewHomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import NewServicesPage from './pages/NewServicesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import Logo from './assets/FINAL LOGO .png';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-3">
              <img
                src={Logo}
                alt="Source X Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="logo-text">
                SOURCE<span className="logo-x">X</span>
              </span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
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
                  to="/how-it-works"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  How It Works
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Services
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
          <Route path="/" element={<NewHomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/services" element={<NewServicesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
