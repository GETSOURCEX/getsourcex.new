import React, { useState } from 'react';
import { X } from 'lucide-react';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function FormModal({ isOpen, onClose, onSuccess }: FormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinicName: '',
    phone: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please agree to be contacted under Canada\'s anti-spam law (CASL)');
      return;
    }
    onSuccess();
    onClose();
    setFormData({
      name: '',
      email: '',
      clinicName: '',
      phone: '',
      consent: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111111] rounded-3xl p-8 max-w-md w-full relative border border-white/10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Get Your Free ROI Snapshot</h2>
        <p className="text-gray-400 mb-6">We'll contact you within 24 hours to schedule your 15-minute ROI call.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="clinicName" className="block text-sm font-medium text-gray-300 mb-2">
              Clinic Name *
            </label>
            <input
              type="text"
              id="clinicName"
              name="clinicName"
              required
              value={formData.clinicName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
              placeholder="Your clinic name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
              placeholder="(437) 123-4567"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-white/10 bg-[#1a1a1a] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-0"
            />
            <label htmlFor="consent" className="text-sm text-gray-400">
              I agree to be contacted under Canada's anti-spam law (CASL) *
            </label>
          </div>

          <div className="text-xs text-gray-500 pt-2 border-t border-white/10">
            Your information is protected under PHIPA and PIPEDA compliance standards.
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Submit Securely
          </button>
        </form>
      </div>
    </div>
  );
}
