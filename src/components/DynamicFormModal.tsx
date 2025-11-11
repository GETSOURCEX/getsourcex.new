import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { FormConfig } from '../config/formConfigs';

interface DynamicFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: FormConfig | null;
}

export default function DynamicFormModal({ isOpen, onClose, config }: DynamicFormModalProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isOpen && config) {
      setFormData({});
      setConsent(false);
      setShowSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen, config]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert("Please agree to be contacted under Canada's anti-spam law (CASL)");
      return;
    }

    if (!config) return;

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: config.trackingEvent,
            formId: config.id,
            formData: formData
          });
        }

        if ((window as any).fbq) {
          (window as any).fbq('trackCustom', config.trackingEvent, {
            formId: config.id
          });
        }
      }

      console.log('Form submitted:', { config: config.id, data: formData });
    } catch (error) {
      console.error('Tracking error:', error);
    }

    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen || !config) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-[#111111] rounded-3xl p-12 max-w-lg w-full text-center border border-white/10 animate-fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">{config.successTitle}</h2>

          <p className="text-lg text-gray-300 mb-8">
            {config.successBody}
          </p>

          <button
            onClick={handleSuccessClose}
            className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111111] rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-white/10 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{config.title}</h2>
        <p className="text-gray-400 mb-6">{config.subtitle}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {config.fields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-2">
                {field.label}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0B0B0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder={field.placeholder}
                />
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0B0B0D] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#3B82F6] transition-colors"
                >
                  <option value="">Select an option</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0B0B0D] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-white/10 bg-[#0B0B0D] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-0"
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
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                {config.submitLabel}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
