import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      const response = await fetch('https://formspree.io/f/xjkwqkla', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
      console.error('Form submission error:', error);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-6">
        <p className="text-green-400 text-lg leading-relaxed">
          ✅ Your message is received - we'll respond within 4 hours with solutions tailored to your business needs!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-white mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-white mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-white mb-2">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your company"
          className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your needs..."
          rows={4}
          className="w-full bg-[#1a1a2e] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#3b82f6] text-white rounded-lg px-6 py-4 font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry →'}
      </button>

      {status === 'error' && (
        <p className="text-red-500 text-center mt-2">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;