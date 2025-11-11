import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Shield } from 'lucide-react';
import Logo from '../assets/FINAL LOGO .png';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={Logo}
                alt="Source X Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="logo-text">
                SOURCE<span className="logo-x">X</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              AI That Books, Reminds and Delivers While You Focus on Patients.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@getsourcex.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@getsourcex.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14375240276"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  (437) 524-0276
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Compliance</h3>
            <p className="text-gray-400 mb-4">
              Proudly Serving Ontario Clinics
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield size={16} className="text-[#3B82F6]" />
                <span className="text-sm">PHIPA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield size={16} className="text-[#3B82F6]" />
                <span className="text-sm">PIPEDA Compliant</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Source X | All Rights Reserved | Toronto, Ontario
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
