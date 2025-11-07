import React, { useState, useEffect } from 'react';
import { Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import { Link, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import ContactModal from './components/ContactModal';
import ContactInfoModal from './components/ContactInfoModal';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import ContactPage from './pages/ContactPage';
import ConsultationPage from './pages/ConsultationPage';
import HomePage from './pages/HomePage';
import Chatbot from './components/Chatbot';
import Logo from './assets/FINAL LOGO .png';

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isContactInfoModalOpen, setIsContactInfoModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleContactInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactInfoModalOpen(true);
  };

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="hover:opacity-90 transition-opacity cursor-pointer">
              <img
                src={Logo}
                alt="Source X - AI Business Automation"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                Solutions
              </Link>
              <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                Industries
              </Link>
              <Link to="/contact" className="text-[#d1d5db] hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/free-consultation" className="text-[#d1d5db] hover:text-white transition-colors">
                Free Consultation
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/solutions"
                  className="text-[#d1d5db] hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Solutions
                </Link>
                <Link
                  to="/industries"
                  className="text-[#d1d5db] hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Industries
                </Link>
                <Link
                  to="/contact"
                  className="text-[#d1d5db] hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Contact
                </Link>
                <Link
                  to="/free-consultation"
                  className="text-[#d1d5db] hover:text-white transition-colors"
                  onClick={handleMobileNavClick}
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-consultation" element={<ConsultationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </div>

      {/* Contact Modals */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <ContactInfoModal
        isOpen={isContactInfoModalOpen}
        onClose={() => setIsContactInfoModalOpen(false)}
      />

      {/* Footer */}
      <Footer />

      {/* Maya Chatbot Widget */}
      <Chatbot />
    </div>
  );
};

export default App;