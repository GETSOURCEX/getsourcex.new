import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ArsenalFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

const ArsenalFormModal: React.FC<ArsenalFormModalProps> = ({ isOpen, onClose, serviceType }) => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getFormConfig = () => {
    switch (serviceType) {
      case "Never Run Out of Qualified Leads Again":
        return {
          title: 'Fill My Pipeline Now',
          endpoint: 'https://formspree.io/f/meoknqkp',
          successMessage: "🎉 Your lead generation analysis is queued - we'll call you within 24 hours with your custom pipeline strategy!",
          buttonText: 'Fill My Pipeline Now'
        };
      case "Never Miss Another $1,000 Phone Call":
        return {
          title: 'Never Miss Revenue Again',
          endpoint: 'https://formspree.io/f/xovwrqwy',
          successMessage: "💰 Your missed revenue audit is starting - we'll call you within 4 hours with your call capture strategy!",
          buttonText: 'Never Miss Revenue Again'
        };
      case "Turn Cold Leads Into Hot Buyers on Autopilot":
        return {
          title: 'Automate My Sales Emails',
          endpoint: 'https://formspree.io/f/mgvydeyd',
          successMessage: "📧 Your email automation blueprint is being created - expect your strategy within 12 hours!",
          buttonText: 'Automate My Sales Emails'
        };
      case "Turn Every Customer Into a Raving Fan":
        return {
          title: 'Get 5-Star Reviews 24/7',
          endpoint: 'https://formspree.io/f/mvgrlory',
          successMessage: "⭐ Your customer experience audit is underway - we'll call you within 6 hours with your 5-star strategy!",
          buttonText: 'Get 5-Star Reviews 24/7'
        };
      case "End Scheduling Chaos and No-Shows Forever":
        return {
          title: 'End Scheduling Chaos Now',
          endpoint: 'https://formspree.io/f/mrbkjgkw',
          successMessage: "📅 Your scheduling optimization plan is ready soon - we'll call you within 3 hours!",
          buttonText: 'End Scheduling Chaos Now'
        };
      case "Double Your E-commerce Revenue Without More Traffic":
        return {
          title: 'Double My Revenue Now',
          endpoint: 'https://formspree.io/f/xblywjyn',
          successMessage: "🚀 Your revenue growth analysis is processing - we'll call you within 8 hours with your doubling strategy!",
          buttonText: 'Double My Revenue Now'
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
    switch (serviceType) {
      case "Never Run Out of Qualified Leads Again":
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
              <label className="block text-white mb-2">How many leads do you get monthly?</label>
              <select
                name="monthly_leads"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select lead volume</option>
                <option value="0-10">0-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
                <option value="Don't track">Don't track</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Biggest lead generation challenge?</label>
              <select
                name="lead_challenge"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select your biggest challenge</option>
                <option value="Not enough leads">Not enough leads</option>
                <option value="Poor quality leads">Poor quality leads</option>
                <option value="No follow-up system">No follow-up system</option>
                <option value="High cost per lead">High cost per lead</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "Never Miss Another $1,000 Phone Call":
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
              <label className="block text-white mb-2">Estimated missed calls per week</label>
              <select
                name="missed_calls"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select missed calls</option>
                <option value="1-5">1-5</option>
                <option value="6-15">6-15</option>
                <option value="16-30">16-30</option>
                <option value="30+">30+</option>
                <option value="Don't know">Don't know</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Estimated missed follow ups per week</label>
              <select
                name="missed_followups"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select missed follow ups</option>
                <option value="1-5">1-5</option>
                <option value="6-15">6-15</option>
                <option value="16-30">16-30</option>
                <option value="30+">30+</option>
                <option value="Don't know">Don't know</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">What type of business?</label>
              <select
                name="business_type"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select business type</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Retail">Retail</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "Turn Cold Leads Into Hot Buyers on Autopilot":
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
              <label className="block text-white mb-2">Current email marketing tool</label>
              <select
                name="email_tool"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select email tool</option>
                <option value="None">None</option>
                <option value="Mailchimp">Mailchimp</option>
                <option value="Constant Contact">Constant Contact</option>
                <option value="HubSpot">HubSpot</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Email list size</label>
              <select
                name="list_size"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select list size</option>
                <option value="Under 100">Under 100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000+">5000+</option>
              </select>
            </div>
          </>
        );

      case "Turn Every Customer Into a Raving Fan":
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
              <label className="block text-white mb-2">Daily customer inquiries</label>
              <select
                name="daily_inquiries"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select inquiry volume</option>
                <option value="1-10">1-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="50+">50+</option>
                <option value="Varies">Varies</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">What industry?</label>
              <select
                name="industry"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select industry</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Healthcare">Healthcare</option>
                <option value="SaaS">SaaS</option>
                <option value="Retail">Retail</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "End Scheduling Chaos and No-Shows Forever":
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
              <label className="block text-white mb-2">Type of appointments you book</label>
              <select
                name="appointment_type"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select appointment type</option>
                <option value="Medical">Medical</option>
                <option value="Consultations">Consultations</option>
                <option value="Services">Services</option>
                <option value="Sales calls">Sales calls</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">How do you schedule now?</label>
              <select
                name="current_scheduling"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select current method</option>
                <option value="Phone calls">Phone calls</option>
                <option value="Email">Email</option>
                <option value="Online calendar">Online calendar</option>
                <option value="Manual booking">Manual booking</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        );

      case "Double Your E-commerce Revenue Without More Traffic":
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
              <label className="block text-white mb-2">Current monthly revenue</label>
              <select
                name="monthly_revenue"
                required
                className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
              >
                <option value="">Select revenue range</option>
                <option value="Under $5K">Under $5K</option>
                <option value="$5K-$25K">$5K-$25K</option>
                <option value="$25K-$100K">$25K-$100K</option>
                <option value="$100K+">$100K+</option>
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
      
      // Add service type to form data
      formData.append('serviceType', serviceType);
      
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

export default ArsenalFormModal;