import React from 'react';
import { X, Mail, Phone, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactInfoModal: React.FC<ContactInfoModalProps> = ({ isOpen, onClose }) => {
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
            className="w-full max-w-md bg-[#1a1a2e] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>

            <div className="space-y-6">
              <a
                href="mailto:info@getsourcex.com"
                className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
              >
                <Mail className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <span>info@getsourcex.com</span>
              </a>

              <a
                href="tel:+15485772426"
                className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
              >
                <Phone className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <span>+1 (548) 577-2426</span>
              </a>

              <a
                href="https://www.linkedin.com/in/source-x-a9a57634a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-[#d1d5db] hover:text-white transition-colors group"
              >
                <Linkedin className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                <span>Visit our LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactInfoModal;