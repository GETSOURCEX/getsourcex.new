import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ThankYouPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouPopup({ isOpen, onClose }: ThankYouPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111111] rounded-3xl p-12 max-w-lg w-full text-center border border-white/10">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-[#3B82F6]" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>

        <p className="text-lg text-gray-300 mb-3">
          Your ROI Snapshot request is confirmed.
        </p>

        <p className="text-gray-400 mb-6">
          Our team will contact you within 24 hours to schedule your 15-minute ROI call.
          <br />
          Keep an eye on your inbox for confirmation.
        </p>

        <button
          onClick={onClose}
          className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
