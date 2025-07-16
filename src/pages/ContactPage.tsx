import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, Linkedin } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <SEO 
        title="Contact Source X | AI Automation Experts in Canada"
        description="Get in touch with Source X for custom AI automation solutions. Speak with founder Vatsal Raval about transforming your business operations."
        path="/contact"
      />
      
      <div className="container mx-auto px-6 py-20">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-[#cccccc] text-lg mb-12">
            Ready to transform your business with AI automation? Reach out to us through any of these channels or fill out the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <a
                  href="mailto:info@getsourcex.com"
                  className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
                >
                  <Mail className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                  <span>info@getsourcex.com</span>
                </a>

                <a
                  href="tel:+15485772426"
                  className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
                >
                  <Phone className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                  <span>+1 (548) 577-2426</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/source-x-a9a57634a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;