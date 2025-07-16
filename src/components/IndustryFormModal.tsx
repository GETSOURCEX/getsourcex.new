import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface IndustryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  industryName: string;
}

const IndustryFormModal: React.FC<IndustryFormModalProps> = ({ isOpen, onClose, industryName }) => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getFormConfig = () => {
    switch (industryName) {
      case "Healthcare AI Automation":
        return {
          title: 'Transform My Clinic',
          endpoint: 'https://formspree.io/f/mnnvwqza',
          successMessage: "🏥 Your clinic transformation analysis is starting - we'll call you within 6 hours with your patient magnet strategy!",
          buttonText: 'Transform My Clinic'
        };
      case "E-commerce AI Automation":
        return {
          title: 'Double My Online Revenue',
          endpoint: 'https://formspree.io/f/mdkzbodk',
          successMessage: "💻 Your e-commerce revenue analysis is processing - we'll call you within 8 hours with your traffic conversion plan!",
          buttonText: 'Double My Online Revenue'
        };
      case "Professional Services AI Automation":
        return {
          title: 'Scale Without More Staff',
          endpoint: 'https://formspree.io/f/mdkzbodk',
          successMessage: "💼 Your scaling strategy is being crafted - we'll call you within 4 hours with your growth automation plan!",
          buttonText: 'Scale Without More Staff'
        };
      case "Retail AI Automation":
        return {
          title: 'Automate My Customer Experience',
          endpoint: 'https://formspree.io/f/xqabnklp',
          successMessage: "🛍️ Your retail automation blueprint is ready soon - we'll call you within 6 hours with your customer loyalty strategy!",
          buttonText: 'Automate My Customer Experience'
        };
      case "SaaS & Tech AI Automation":
        return {
          title: 'Streamline My Operations',
          endpoint: 'https://formspree.io/f/xkgbynlp',
          successMessage: "💻 Your tech scaling analysis is processing - we'll call you within 8 hours with your automation growth plan!",
          buttonText: 'Streamline My Operations'
        };
      case "Corporate Enterprise AI Automation":
        return {
          title: 'Scale My Enterprise',
          endpoint: 'https://formspree.io/f/xvgrlojd',
          successMessage: "🏢 Your enterprise efficiency audit is starting - we'll call you within 6 hours with your transformation strategy!",
          buttonText: 'Scale My Enterprise'
        };
      default:
        return {
          title: 'Get Started',
          endpoint: 'https://formspree.io/f/xjkwqkla',
          successMessage: "✅ Your message is received - we'll respond within 4 hours!",
          buttonText: 'Submit'
        };
    }
  };

  const config = getFormConfig();

  const renderFormFields = () => {
    switch (industryName) {
      case "Healthcare AI Automation":
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
              <label className="block text-white mb-2">Clinic Name</label>
              <input
                type="text"
                name="clinic_name"
                required
                placeholder="Your clinic name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Patients seen per day</label>
              <select
                name="patients_per_day"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select patient volume</option>
                <option value="1-10">1-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="50+">50+</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Current scheduling method</label>
              <select
                name="scheduling_method"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select scheduling method</option>
                <option value="Phone only">Phone only</option>
                <option value="Basic software">Basic software</option>
                <option value="Advanced EMR">Advanced EMR</option>
                <option value="Paper-based">Paper-based</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "E-commerce AI Automation":
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
              <label className="block text-white mb-2">Website URL</label>
              <input
                type="url"
                name="website"
                required
                placeholder="https://yourwebsite.com"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Current monthly online revenue</label>
              <select
                name="monthly_revenue"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select revenue range</option>
                <option value="Under $10K">Under $10K</option>
                <option value="$10K-$50K">$10K-$50K</option>
                <option value="$50K-$100K">$50K-$100K</option>
                <option value="$100K+">$100K+</option>
              </select>
            </div>
          </>
        );

      case "Professional Services AI Automation":
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
              <label className="block text-white mb-2">Type of services you provide</label>
              <select
                name="service_type"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select service type</option>
                <option value="Consulting">Consulting</option>
                <option value="Legal">Legal</option>
                <option value="Accounting">Accounting</option>
                <option value="Marketing">Marketing</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Current team size</label>
              <select
                name="team_size"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select team size</option>
                <option value="Just me">Just me</option>
                <option value="2-5 people">2-5 people</option>
                <option value="6-15 people">6-15 people</option>
                <option value="15+ people">15+ people</option>
              </select>
            </div>
          </>
        );

      case "Retail AI Automation":
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
              <label className="block text-white mb-2">Business Name</label>
              <input
                type="text"
                name="business_name"
                required
                placeholder="Your business name"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Number of locations</label>
              <select
                name="locations"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select number of locations</option>
                <option value="1">1</option>
                <option value="2-3">2-3</option>
                <option value="4-10">4-10</option>
                <option value="10+">10+</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Current POS system</label>
              <select
                name="pos_system"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select POS system</option>
                <option value="Square">Square</option>
                <option value="Shopify POS">Shopify POS</option>
                <option value="Clover">Clover</option>
                <option value="Traditional register">Traditional register</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "SaaS & Tech AI Automation":
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
              <label className="block text-white mb-2">Type of SaaS/Tech business</label>
              <select
                name="business_type"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select business type</option>
                <option value="Software Development">Software Development</option>
                <option value="SaaS Platform">SaaS Platform</option>
                <option value="Tech Services">Tech Services</option>
                <option value="Mobile Apps">Mobile Apps</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Current user base size</label>
              <select
                name="user_base"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select user base size</option>
                <option value="Under 100">Under 100</option>
                <option value="100-1K">100-1K</option>
                <option value="1K-10K">1K-10K</option>
                <option value="10K+">10K+</option>
                <option value="Enterprise">Enterprise</option>
              </select>
            </div>
          </>
        );

      case "Corporate Enterprise AI Automation":
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
              <label className="block text-white mb-2">Company size</label>
              <select
                name="company_size"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select company size</option>
                <option value="50-200 employees">50-200 employees</option>
                <option value="200-1000 employees">200-1000 employees</option>
                <option value="1000+ employees">1000+ employees</option>
                <option value="Fortune 500">Fortune 500</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Primary automation need</label>
              <select
                name="automation_need"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select automation need</option>
                <option value="Process Automation">Process Automation</option>
                <option value="Customer Support">Customer Support</option>
                <option value="Data Management">Data Management</option>
                <option value="Workflow Optimization">Workflow Optimization</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

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
              <label className="block text-white mb-2">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Your company"
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
              />
            </div>

            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell us about your needs..."
                rows={4}
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
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
      
      // Add industry name to form data
      formData.append('industry', industryName);
      
      const response = await fetch(config.endpoint, {
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
            className="w-full max-w-lg bg-[#0A0C1C] p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">{config.title}</h2>
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
                  {config.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {renderFormFields()}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#3b82f6] text-white rounded-lg px-6 py-4 font-semibold hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Submitting...' : config.buttonText}
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

export default IndustryFormModal;