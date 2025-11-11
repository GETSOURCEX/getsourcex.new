import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { FormConfig } from '../config/formConfigs';
import { useForm } from '../context/FormContext';

interface DynamicFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: FormConfig | null;
}

const Confetti: React.FC = () => {
  const colors = ['#3B82F6', '#6366F1', '#8B5CF6', '#EC4899', '#F59E0B'];
  const pieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            top: '-10px',
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default function DynamicFormModal({ isOpen, onClose, config }: DynamicFormModalProps) {
  const { openForm } = useForm();
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen && config) {
      setFormData({});
      setConsent(false);
      setShowSuccess(false);
      setIsSubmitting(false);
      setShowConfetti(false);
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

  useEffect(() => {
    if (showSuccess && config?.autoCloseDelay && config.autoCloseDelay > 0) {
      const timer = setTimeout(() => {
        handleSuccessClose();
      }, config.autoCloseDelay);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, config]);

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

    if (config.showConfetti) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleSecondaryAction = () => {
    if (config?.successSecondaryAction) {
      setShowSuccess(false);
      onClose();
      setTimeout(() => openForm(config.successSecondaryAction!), 300);
    } else {
      handleSuccessClose();
    }
  };

  const handlePrimaryAction = () => {
    if (config?.successPrimaryLink) {
      if (typeof window !== 'undefined') {
        if ((window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'roi_meeting_booked',
            formId: config.id
          });
        }
        if ((window as any).fbq) {
          (window as any).fbq('trackCustom', 'roi_meeting_booked');
        }
      }
      window.open(config.successPrimaryLink, '_blank', 'noopener,noreferrer');
    } else {
      handleSuccessClose();
    }
  };

  if (!isOpen || !config) return null;

  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        {showConfetti && <Confetti />}

        <div
          className="relative bg-[#111111] rounded-3xl p-12 max-w-2xl w-full text-center border-2 border-transparent animate-fade-in-up"
          style={{
            backgroundImage: 'linear-gradient(#111111, #111111), linear-gradient(120deg, #3B82F6, #6366F1)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center animate-bounce-in">
              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full blur-2xl opacity-50" />
            </div>
          </div>

          <div className="space-y-6">
            <h2
              className="text-4xl font-bold text-white animate-fade-in-up-stagger"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              {config.successTitle} {config.successEmoji}
            </h2>

            <p
              className="text-xl text-gray-300 whitespace-pre-line animate-fade-in-up-stagger leading-relaxed"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              {config.successBody}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up-stagger"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              {config.successPrimaryButton && (
                <button
                  onClick={handlePrimaryAction}
                  className={`${config.successPrimaryLink ? 'animate-breathe' : ''} bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform duration-300 text-lg`}
                >
                  {config.successPrimaryButton}
                </button>
              )}

              {config.successSecondaryButton && (
                <button
                  onClick={handleSecondaryAction}
                  className="border-2 border-white/20 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-lg"
                >
                  {config.successSecondaryButton}
                </button>
              )}

              {!config.successSecondaryButton && (config.successPrimaryButton === 'Close' || config.successPrimaryButton === 'Got It' || config.successPrimaryButton === 'Return to Home' || config.successPrimaryButton === 'Awesome, Thanks') && (
                <button
                  onClick={handleSuccessClose}
                  className="border-2 border-white/20 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-lg mt-4 sm:mt-0"
                >
                  {config.successPrimaryButton === 'Return to Home' ? 'Return to Home' : 'Close'}
                </button>
              )}
            </div>

            {config.successFooter && (
              <p
                className="text-sm text-gray-400 mt-8 animate-fade-in-up-stagger"
                style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
              >
                {config.successFooter}
              </p>
            )}

            <p className="text-xs text-gray-500 mt-6 border-t border-white/10 pt-6">
              Your data is protected under PHIPA and PIPEDA compliance standards.
            </p>
          </div>
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
