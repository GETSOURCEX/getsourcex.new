import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string | null;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, selectedService }) => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getSuccessMessage = (service?: string | null) => {
    if (!service) {
      return "✅ Your message is received - we'll respond within 4 hours with solutions tailored to your business needs!";
    }

    switch (service) {
      // Hero Section CTAs
      case "See Your Transformation Plan":
        return "🎯 Your transformation plan is being created - we'll call you within 2 hours with your custom business automation strategy!";
      case "Get Your Free AI Transformation Audit":
        return "🔍 Your AI transformation audit is queued - we'll call you within 24 hours with your complete automation roadmap!";
      
      // Revenue Intelligence Hub
      case "Never Run Out of Qualified Leads Again":
        return "🎉 Your lead generation analysis is queued - we'll call you within 24 hours with your custom pipeline strategy!";
      case "Never Miss Another $1,000 Phone Call":
        return "💰 Your missed revenue audit is starting - we'll call you within 4 hours with your call capture strategy!";
      case "Turn Cold Leads Into Hot Buyers on Autopilot":
        return "📧 Your email automation blueprint is being created - expect your strategy within 12 hours!";
      
      // Customer Experience Engine
      case "Turn Every Customer Into a Raving Fan":
        return "⭐ Your customer experience audit is underway - we'll call you within 6 hours with your 5-star strategy!";
      case "End Scheduling Chaos and No-Shows Forever":
        return "📅 Your scheduling optimization plan is ready soon - we'll call you within 3 hours!";
      
      // E-commerce Growth Accelerator
      case "Double Your E-commerce Revenue Without More Traffic":
        return "🚀 Your revenue growth analysis is processing - we'll call you within 8 hours with your doubling strategy!";
      
      // Industries
      case "Healthcare":
        return "🏥 Your clinic transformation analysis is starting - we'll call you within 6 hours with your patient magnet strategy!";
      case "E-commerce":
        return "💻 Your e-commerce revenue analysis is processing - we'll call you within 8 hours with your traffic conversion plan!";
      case "Professional Services":
        return "💼 Your scaling strategy is being crafted - we'll call you within 4 hours with your growth automation plan!";
      case "Retail":
        return "🛍️ Your retail automation blueprint is ready soon - we'll call you within 6 hours with your customer loyalty strategy!";
      case "SaaS & Tech":
        return "💻 Your tech scaling analysis is processing - we'll call you within 8 hours with your automation growth plan!";
      case "Corporate Enterprises":
        return "🏢 Your enterprise efficiency audit is starting - we'll call you within 6 hours with your transformation strategy!";
      
      // Default consultation
      case "Request a Free Consultation":
        return "📞 Your free consultation is scheduled - we'll call you within 12 hours to discuss your automation opportunities!";
      
      default:
        return "✅ Your message is received - we'll respond within 4 hours with solutions tailored to your business needs!";
    }
  };

  const getFormEndpoint = (service?: string | null) => {
    switch (service) {
      case "See Your Transformation Plan":
        return "https://formspree.io/f/mqabnkbb";
      case "Get Your Free AI Transformation Audit":
        return "https://formspree.io/f/mzzgobgj";
      case "Never Run Out of Qualified Leads Again":
        return "https://formspree.io/f/meoknqkp";
      case "Never Miss Another $1,000 Phone Call":
        return "https://formspree.io/f/xovwrqwy";
      case "Turn Cold Leads Into Hot Buyers on Autopilot":
        return "https://formspree.io/f/mgvydeyd";
      case "Turn Every Customer Into a Raving Fan":
        return "https://formspree.io/f/mvgrlory";
      case "End Scheduling Chaos and No-Shows Forever":
        return "https://formspree.io/f/mrbkjgkw";
      case "Double Your E-commerce Revenue Without More Traffic":
        return "https://formspree.io/f/xblywjyn";
      case "Healthcare":
        return "https://formspree.io/f/mnnvwqza";
      case "E-commerce":
        return "https://formspree.io/f/mdkzbodk";
      case "Professional Services":
        return "https://formspree.io/f/mdkzbodk";
      case "Retail":
        return "https://formspree.io/f/xqabnklp";
      default:
        return "https://formspree.io/f/xjkwqkla";
    }
  };

  const getButtonText = (service?: string | null) => {
    switch (service) {
      case "See Your Transformation Plan":
        return "Get My Transformation Plan";
      case "Get Your Free AI Transformation Audit":
        return "Get My Free Audit";
      case "Never Run Out of Qualified Leads Again":
        return "Fill My Pipeline Now";
      case "Never Miss Another $1,000 Phone Call":
        return "Never Miss Revenue Again";
      case "Turn Cold Leads Into Hot Buyers on Autopilot":
        return "Automate My Sales Emails";
      case "Turn Every Customer Into a Raving Fan":
        return "Get 5-Star Reviews 24/7";
      case "End Scheduling Chaos and No-Shows Forever":
        return "End Scheduling Chaos Now";
      case "Double Your E-commerce Revenue Without More Traffic":
        return "Double My Revenue Now";
      case "Healthcare":
        return "Transform My Clinic";
      case "E-commerce":
        return "Double My Online Revenue";
      case "Professional Services":
        return "Scale Without More Staff";
      case "Retail":
        return "Automate My Customer Experience";
      default:
        return "Submit Inquiry →";
    }
  };

  const renderFormFields = (service?: string | null) => {
    // Only render specific forms for hero section CTAs and other defined services
    switch (service) {
      case "See Your Transformation Plan":
        return (
          <>
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Your company name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">What's your biggest business challenge right now?</label>
              <select
                name="challenge"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select your biggest challenge</option>
                <option value="Lead Generation">Lead Generation</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Scheduling">Scheduling</option>
                <option value="Revenue Growth">Revenue Growth</option>
                <option value="Team Efficiency">Team Efficiency</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "Get Your Free AI Transformation Audit":
        return (
          <>
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Your company name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">What industry are you in?</label>
              <select
                name="industry"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select your industry</option>
                <option value="Healthcare">Healthcare</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Retail">Retail</option>
                <option value="SaaS">SaaS</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Current monthly revenue</label>
              <select
                name="revenue"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select revenue range</option>
                <option value="Under $10K">Under $10K</option>
                <option value="$10K-$50K">$10K-$50K</option>
                <option value="$50K-$100K">$50K-$100K</option>
                <option value="$100K-$500K">$100K-$500K</option>
                <option value="$500K+">$500K+</option>
              </select>
            </div>
          </>
        );

      // For non-hero section services, use basic professional form without message field
      default:
        return (
          <>
            <div>
              <label className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Your phone number"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                required
                placeholder="Your company"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>
          </>
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Add selected service to form data
      if (selectedService) {
        formData.append('selectedService', selectedService);
      }
      
      const response = await fetch(getFormEndpoint(selectedService), {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="w-full max-w-lg bg-[#0A0C1C] p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="text-center py-6">
                <p className="text-green-400 text-lg leading-relaxed">
                  {getSuccessMessage(selectedService)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {renderFormFields(selectedService)}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#3b82f6] text-white rounded-lg px-6 py-4 font-semibold hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Submitting...' : getButtonText(selectedService)}
                </button>

                {status === 'error' && (
                  <p className="text-red-500 text-center mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;