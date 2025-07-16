import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

interface IndustryModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: {
    name: string;
    description: string;
    painPoints: string;
    solution: string;
    recommendedServices: string[];
    cta: string;
    icon: React.ElementType;
  };
}

const IndustryModal: React.FC<IndustryModalProps> = ({ 
  isOpen, 
  onClose, 
  industry
}) => {
  const [showContactModal, setShowContactModal] = React.useState(false);

  const handleCtaClick = () => {
    setShowContactModal(true);
  };

  const getCtaText = (name: string) => {
    switch (name) {
      case "Healthcare AI Automation":
        return "Transform My Clinic";
      case "E-commerce AI Automation":
        return "Double My Online Revenue";
      case "Professional Services AI Automation":
        return "Scale Without More Staff";
      case "Retail AI Automation":
        return "Automate My Customer Experience";
      default:
        return industry.cta;
    }
  };

  return (
    <>
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
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full bg-[#0A0C1C] p-8 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="flex items-center mb-6">
                <industry.icon className="w-8 h-8 text-blue-500 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Industry Challenges</h4>
                  <p className="text-gray-300">{industry.painPoints}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Source X's Solution</h4>
                  <p className="text-gray-300">{industry.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-200">Recommended AI Services</h4>
                  <ul className="list-disc pl-5 text-gray-300">
                    {industry.recommendedServices.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <button 
                onClick={handleCtaClick}
                className="mt-8 w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                {getCtaText(industry.name)}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        selectedService={industry.name.replace(" AI Automation", "")}
      />
    </>
  );
};

export default IndustryModal;