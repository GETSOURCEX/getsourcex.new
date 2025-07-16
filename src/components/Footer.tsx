import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin, Globe } from 'lucide-react';
import PolicyModal from './PolicyModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="logo-text mb-6">
              SOURCE<span className="logo-x">X</span>
            </h3>
            <p className="text-[#d1d5db] mb-6">
              North America's leading AI business automation agency transforming businesses with intelligent automation solutions across 15+ countries.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/source-x-a9a57634a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d1d5db] hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@getsourcex.com"
                className="text-[#d1d5db] hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+15485772426"
                className="text-[#d1d5db] hover:text-white transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* AI Automation Solutions */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">AI Automation Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                  AI Lead Generation Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                  AI Customer Support Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                  AI Appointment Scheduling
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                  AI Phone Call Automation
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-[#d1d5db] hover:text-white transition-colors">
                  Business Process Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries We Serve */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Industries We Serve</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                  Healthcare AI Automation
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                  E-commerce AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                  Professional Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                  Retail Automation
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-[#d1d5db] hover:text-white transition-colors">
                  SaaS & Tech Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact & Company</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contact" className="text-[#d1d5db] hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/free-consultation" className="text-[#d1d5db] hover:text-white transition-colors">
                  Free AI Transformation Audit
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@getsourcex.com"
                  className="text-[#d1d5db] hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@getsourcex.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15485772426"
                  className="text-[#d1d5db] hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (548) 577-2426
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/source-x-a9a57634a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d1d5db] hover:text-white transition-colors flex items-center cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Enhanced Keywords */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <p className="text-[#d1d5db] text-sm leading-relaxed">
              <strong>Source X</strong> - Leading AI business automation agency serving healthcare, e-commerce, professional services, retail, and SaaS businesses across Canada and USA. Specializing in automated lead generation, AI customer support, intelligent appointment scheduling, and business process automation that scales your revenue.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#d1d5db] text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Source X AI Business Automation. All rights reserved. Serving 15+ countries worldwide.
            </p>
            <div className="flex space-x-6">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-[#d1d5db] hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-[#d1d5db] hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      <PolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
        content={<PrivacyContent />}
      />

      <PolicyModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms of Service"
        content={<TermsContent />}
      />
    </footer>
  );
};

const PrivacyContent = () => (
  <div className="space-y-6">
    <p>Last Updated: May 25, 2025</p>

    <h3>1. INTRODUCTION</h3>
    <p>Source X ("we," "our," or "us"), a Canada-based AI automation agency founded by Vatsal Raval, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://getsourcex.com/ or use our AI automation services.</p>

    <h3>2. INFORMATION WE COLLECT</h3>
    <h4>2.1 Personal Information</h4>
    <p>We may collect personal information that you voluntarily provide to us when you:</p>
    <ul className="list-disc pl-5">
      <li>Request a consultation</li>
      <li>Register for an account</li>
      <li>Subscribe to our newsletter</li>
      <li>Contact us through our website</li>
      <li>Use our AI automation services</li>
    </ul>

    <h4>2.2 Automatically Collected Information</h4>
    <p>When you visit our website or use our services, we may automatically collect certain information, including:</p>
    <ul className="list-disc pl-5">
      <li>IP address</li>
      <li>Browser type</li>
      <li>Device information</li>
      <li>Usage patterns</li>
      <li>Referring website</li>
      <li>Pages visited</li>
      <li>Time spent on pages</li>
    </ul>

    <h3>3. HOW WE USE YOUR INFORMATION</h3>
    <p>We use the information we collect for various business purposes, including to:</p>
    <ul className="list-disc pl-5">
      <li>Provide, operate, and maintain our services</li>
      <li>Improve, personalize, and expand our services</li>
      <li>Understand and analyze how you use our services</li>
      <li>Develop new products, services, features, and functionality</li>
    </ul>

    <h3>10. CONTACT US</h3>
    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
    <p>Source X<br />
    Email: info@getsourcex.com<br />
    Phone: +1 548-577-2426</p>
  </div>
);

const TermsContent = () => (
  <div className="space-y-6">
    <p>Last Updated: May 25, 2025</p>

    <h3>1. ACCEPTANCE OF TERMS</h3>
    <p>These Terms of Service ("Terms") constitute a legally binding agreement between you and Source X ("we," "our," or "us") regarding your use of our website https://getsourcex.com/ and AI automation services (collectively, the "Services").</p>

    <h3>2. DESCRIPTION OF SERVICES</h3>
    <p>Source X provides AI automation solutions for businesses, including but not limited to:</p>
    <ul className="list-disc pl-5">
      <li>Lead Generation AI</li>
      <li>Customer Support AI</li>
      <li>Appointment-Setting AI</li>
      <li>Phone Call AI</li>
      <li>Email Automation AI</li>
      <li>E-commerce Personalization</li>
    </ul>

    <h3>3. USER ACCOUNTS</h3>
    <h4>3.1 Account Creation</h4>
    <p>To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

    <h3>16. CONTACT INFORMATION</h3>
    <p>If you have questions about these Terms, please contact us at:</p>
    <p>Source X<br />
    Email: info@getsourcex.com<br />
    Phone: +1 548-577-2426</p>
  </div>
);

export default Footer;