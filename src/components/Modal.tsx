import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-[#121212] max-w-2xl w-full rounded-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#3b82f6] transition-colors"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#d1d5db] mb-8 whitespace-pre-line">{content}</p>
        
        <button 
          onClick={onClose}
          className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;