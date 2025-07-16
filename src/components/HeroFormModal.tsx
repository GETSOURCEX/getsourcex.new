import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'transformation' | 'audit';
}

const HeroFormModal: React.FC<HeroFormModalProps> = ({ isOpen, onClose, formType }) => {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const getFormConfig = () => {
    if (formType === 'transformation') {
      return {
        title: 'Get My Transformation Plan',
        endpoint: 'https://formspree.io/f/mqabnkbb',
        successMessage: "🎯 Your transformation plan is being created - we'll call you within 2 hours with your custom business automation strategy!",
        buttonText: 'Get My Transformation Plan'
      };
    } else {
      return {
        title: 'Get My Free Audit',
        endpoint: 'https://formspree.io/f/mzzgobgj',
        successMessage: "🔍 Your AI transformation audit is queued - we'll call you within 24 hours with your complete automation roadmap!",
        buttonText: 'Get My Free Audit'
      };
    }
  };

  const config = getFormConfig();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
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
            className="w-full max-w-lg bg-[#0A0C1C] p-8 rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)]"
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

                {formType === 'transformation' ? (
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
                ) : (
                  <>
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
                )}

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

export default HeroFormModal;