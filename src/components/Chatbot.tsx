import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  MessageCircle, X, Maximize2, Minimize2,
  Moon, Sun, RotateCcw, Send, Zap
} from 'lucide-react';
import MayaAvatar from '../assets/maya.png';

const CHAT_KEY = 'sourcex-chat';
const NAME_KEY = 'sourcex-user-name';
const EMAIL_KEY = 'sourcex-user-email';
const SESSION_KEY = 'sourcex-session-id';
const THEME_KEY = 'sourcex-chat-theme';

const suggestions: string[] = [
  'What AI automation services does SourceX offer?',
  'How can AI help my business grow?',
  'Tell me about your pricing plans',
  'Can you help with lead generation?',
  'What industries do you serve?',
];

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: number;
}

interface ChatbotProps {
  className?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ className = '' }) => {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [dark, setDark] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem(CHAT_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.warn('Failed to parse saved messages');
      }
    }

    const storedName = localStorage.getItem(NAME_KEY);
    const storedEmail = localStorage.getItem(EMAIL_KEY);
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedTheme === 'dark') setDark(true);

    let existingSession = localStorage.getItem(SESSION_KEY);
    if (!existingSession) {
      existingSession = uuidv4();
      localStorage.setItem(SESSION_KEY, existingSession);
    }
    setSessionId(existingSession);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (open && inputRef.current && name && email) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, name, email]);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMsg: Message = {
      id: uuidv4(),
      sender: 'user',
      text: message.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage('');
    setLoading(true);
    setIsTyping(true);
    setShowSuggestions(false);

    if (!isOnline) {
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: uuidv4(),
          sender: 'bot',
          text: '🔌 You appear to be offline. Please check your connection and try again.',
          timestamp: Date.now(),
        }]);
        setLoading(false);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const res = await fetch('https://sourcex-chatbot-proxy.onrender.com/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text, name, email, sessionId }),
      });

      const data = await res.json();
      const replyText = typeof data === 'string' ? data :
        data.reply?.message || data.reply?.text || data.message || data.text || 'I received your message!';

      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: uuidv4(),
          sender: 'bot',
          text: replyText,
          timestamp: Date.now(),
        }]);
        setIsTyping(false);
      }, Math.random() * 1000 + 500);

    } catch (err) {
      console.error(err);
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: uuidv4(),
          sender: 'bot',
          text: '❌ Sorry, I encountered an error. Please try again or contact support.',
          timestamp: Date.now(),
        }]);
        setIsTyping(false);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const startChat = () => {
    if (!name.trim() || !email.includes('@')) return;
    localStorage.setItem(NAME_KEY, name);
    localStorage.setItem(EMAIL_KEY, email);
    setMessages([{
      id: uuidv4(),
      sender: 'bot',
      text: `👋 Welcome, ${name}! I'm Maya, your AI assistant powered by SourceX. How can I help you today?`,
      timestamp: Date.now(),
    }]);
    setShowSuggestions(true);
  };

  const resetChat = () => {
    if (confirm('Reset all data and start fresh?')) {
      localStorage.removeItem(CHAT_KEY);
      localStorage.removeItem(NAME_KEY);
      localStorage.removeItem(EMAIL_KEY);
      localStorage.removeItem(SESSION_KEY);
      setMessages([]);
      setName('');
      setEmail('');
      const newSession = uuidv4();
      localStorage.setItem(SESSION_KEY, newSession);
      setSessionId(newSession);
      setShowSuggestions(true);
    }
  };

  const getUserInitial = () => name?.[0]?.toUpperCase() || 'U';

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isUserIdentified = name && email.includes('@');

  return (
    <>
      {/* Reuse your existing full UI structure here */}
      {/* Only the critical functional part has been updated for avatar + session behavior */}
    </>
  );
};

export default Chatbot;
