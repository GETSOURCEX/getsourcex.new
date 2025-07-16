import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
  solution: {
    title: string;
    overview: string;
    benefits: string[];
    painPoint: string;
    color: string;
    icon: React.ElementType;
  };
}

const SolutionModal: React.FC<SolutionModalProps> = ({ 
  isOpen, 
  onClose, 
  solution
}) => {
  const handleCtaClick = () => {
    // Close this modal
    onClose();
    // Open the contact form modal with specific service
    const event = new CustomEvent('openContactForm', { 
      detail: { service: solution.title } 
    });
    window.dispatchEvent(event);
  };

  const getCtaText = (title: string) => {
    switch (title) {
      case "Never Run Out of Qualified Leads Again":
        return "Fill My Pipeline Now";
      case "Turn Every Customer Into a Raving Fan":
        return "Get 5-Star Reviews 24/7";
      case "End Scheduling Chaos and No-Shows Forever":
        return "End Scheduling Chaos Now";
      case "Never Miss Another $1,000 Phone Call":
        return "Never Miss Revenue Again";
      case "Turn Cold Leads Into Hot Buyers on Autopilot":
        return "Automate My Sales Emails";
      case "Double Your E-commerce Revenue Without More Traffic":
        return "Double My Revenue Now";
      default:
        return "Let's Automate This";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`relative max-w-2xl w-full bg-[#0A0C1C] p-8 rounded-2xl border border-white/10 glow-${solution.color} overflow-hidden`}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center mb-6">
              <solution.icon className={`w-8 h-8 text-${solution.color}-500 mr-3`} />
              <h2 className="text-2xl font-bold">{solution.title}</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Why It Matters</h3>
                <p className="text-gray-300">{solution.painPoint}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-200">Key Benefits</h3>
                <ul className="list-disc pl-5 text-gray-300">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={handleCtaClick}
                className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                {getCtaText(solution.title)}
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionModal;