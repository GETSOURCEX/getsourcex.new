/* File: components/ChatbotOnboarding.tsx */

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Zap } from 'lucide-react';

const CHATBOT_ENDPOINT = 'https://sourcex-chatbot-proxy.onrender.com/chatbot';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\d{7,15}$/.test(phone);

const ChatbotOnboarding: React.FC<{ setMessages: Function; setShowSuggestions: Function }> = ({ setMessages, setShowSuggestions }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleStart = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !isValidEmail(email) || !isValidPhone(phone)) return;

    localStorage.setItem('sourcex-user-name', name);
    localStorage.setItem('sourcex-user-email', email);
    localStorage.setItem('sourcex-user-phone', phone);

    setLoading(true);
    const sessionId = uuidv4();

    try {
      await fetch(CHATBOT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, sessionId })
      });

      setMessages([{
        id: uuidv4(),
        sender: 'bot',
        text: `👋 Welcome, ${name}! I'm Maya, your AI assistant powered by SourceX. I'm here to help you discover how AI automation can transform your business. What would you like to know?`,
        timestamp: Date.now()
      }]);

      setShowSuggestions(true);
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleStart} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          required
        />
        {email && !isValidEmail(email) && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email.</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          required
        />
        {phone && !isValidPhone(phone) && (
          <p className="text-red-500 text-sm mt-1">Enter a valid phone number (7-15 digits).</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading || !name.trim() || !isValidEmail(email) || !isValidPhone(phone)}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <Zap className="w-4 h-4" />
        {loading ? 'Starting...' : 'Start Chatting with Maya'}
      </button>
    </form>
  );
};

export default ChatbotOnboarding;
