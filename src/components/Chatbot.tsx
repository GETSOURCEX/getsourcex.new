import React, { useEffect, useRef, useState, KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  MessageCircle,
  X,
  Maximize2,
  Minimize2,
  Moon,
  Sun,
  RotateCcw,
  Send,
  Zap,
} from "lucide-react";
import MayaAvatar from "../assets/maya.png";

const CHAT_KEY = "sourcex-chat";
const NAME_KEY = "sourcex-user-name";
const EMAIL_KEY = "sourcex-user-email";
const SESSION_KEY = "sourcex-session-id";
const THEME_KEY = "sourcex-chat-theme";

const suggestions: string[] = [
  "What AI automation services does SourceX offer?",
  "How can AI help my business grow?",
  "Tell me about your pricing plans",
  "Can you help with lead generation?",
  "What industries do you serve?",
];

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: number;
}

interface ChatbotProps {
  className?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [dark, setDark] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [hasStartedChat, setHasStartedChat] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Initialize component
  useEffect(() => {
    const savedMessages = localStorage.getItem(CHAT_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (e) {
        console.warn("Failed to parse saved messages");
      }
    }

    const storedName = localStorage.getItem(NAME_KEY);
    const storedEmail = localStorage.getItem(EMAIL_KEY);
    const storedTheme = localStorage.getItem(THEME_KEY);

    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedTheme === "dark") setDark(true);

    let existingSession = localStorage.getItem(SESSION_KEY);
    if (!existingSession) {
      existingSession = uuidv4();
      localStorage.setItem(SESSION_KEY, existingSession);
    }
    setSessionId(existingSession);

    // Online/offline detection
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isTyping]);

  // Save messages to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(CHAT_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  }, [dark]);

  // Focus input when chat opens
  useEffect(() => {
    if (open && inputRef.current && name && email) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, name, email]);

  const simulateTyping = (text: string, callback: (char: string) => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        callback(text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
    return interval;
  };

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMsg: Message = {
      id: uuidv4(),
      sender: "user",
      text: message.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);
    setIsTyping(true);
    setShowSuggestions(false);

    if (!isOnline) {
      setTimeout(() => {
        const offlineMsg: Message = {
          id: uuidv4(),
          sender: "bot",
          text: "🔌 You appear to be offline. Please check your connection and try again.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, offlineMsg]);
        setLoading(false);
        setIsTyping(false);
      }, 1000);
      return;
    }

    const payload = {
      message: userMsg.text,
      name,
      email,
      sessionId,
    };

    try {
      const res = await fetch(
        "https://sourcex-chatbot-proxy.onrender.com/chatbot",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      let replyText: string;
      if (typeof data === "string") {
        replyText = data;
      } else if (data.reply) {
        replyText =
          typeof data.reply === "string"
            ? data.reply
            : data.reply.message ||
              data.reply.text ||
              "I received your message!";
      } else {
        replyText = data.message || data.text || "I received your message!";
      }

      // Simulate typing delay
      setTimeout(() => {
        const botMsg: Message = {
          id: uuidv4(),
          sender: "bot",
          text: replyText,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, Math.random() * 1000 + 500);
    } catch (error) {
      console.error("Chat API error:", error);
      setTimeout(() => {
        const errorMsg: Message = {
          id: uuidv4(),
          sender: "bot",
          text: "❌ Sorry, I encountered an error. Please try again or contact support if the issue persists.",
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
        setIsTyping(false);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // const startChat = () => {
  //   if (!name.trim() || !email.includes("@")) return;

  //   localStorage.setItem(NAME_KEY, name);
  //   localStorage.setItem(EMAIL_KEY, email);

  //   const welcomeMsg: Message = {
  //     id: uuidv4(),
  //     sender: "bot",
  //     text: `👋 Welcome, ${name}! I'm Maya, your AI assistant powered by SourceX. I'm here to help you discover how AI automation can transform your business. What would you like to know?`,
  //     timestamp: Date.now(),
  //   };

  //   setMessages([welcomeMsg]);
  //   setShowSuggestions(true);
  // };

  const startChat = () => {
    if (!isValidEmail(email) || !name.trim()) return;

    localStorage.setItem(NAME_KEY, name);
    localStorage.setItem(EMAIL_KEY, email);

    const welcomeMsg: Message = {
      id: uuidv4(),
      sender: "bot",
      text: `👋 Welcome, ${name}! I'm Maya...`,
      timestamp: Date.now(),
    };

    setMessages([welcomeMsg]);
    setShowSuggestions(true);
    setHasStartedChat(true); // ✅ this triggers chat UI
  };

  const resetChat = () => {
    if (
      confirm(
        "Are you sure you want to reset the conversation? This will clear all messages and user data."
      )
    ) {
      localStorage.removeItem(CHAT_KEY);
      localStorage.removeItem(NAME_KEY);
      localStorage.removeItem(EMAIL_KEY);
      localStorage.removeItem(SESSION_KEY);

      setMessages([]);
      setName("");
      setEmail("");
      setSessionId(uuidv4());
      setShowSuggestions(true);
      setHasStartedChat(false); // 👈🏽 Go back to onboarding

      // Generate new session
      const newSession = uuidv4();
      localStorage.setItem(SESSION_KEY, newSession);
      setSessionId(newSession);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getUserInitial = () => {
    return name.charAt(0).toUpperCase() || "U";
  };

  const isUserIdentified =
    name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div
      className={`fixed ${
        fullscreen ? "inset-0" : "bottom-6 right-6"
      } z-50 ${className}`}
    >
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group relative w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Open Maya Chat Assistant"
        >
          <img
            src={MayaAvatar}
            alt="Chat with Maya"
            className="w-full h-full object-cover"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with Maya
          </div>
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className={`${
            fullscreen ? "w-full h-full" : "w-[380px] h-[600px] max-h-[80vh]"
          } bg-white/95 dark:bg-[#0A0C1C]/95 backdrop-blur-xl rounded-xl shadow-2xl flex flex-col animate-in slide-in-from-bottom-4 duration-300 border border-gray-200/50 dark:border-white/10 ${
            dark ? "dark" : ""
          }`}
          style={{
            fontFamily:
              "'Inter', 'Plus Jakarta Sans', 'Manrope', system-ui, sans-serif",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200/50 dark:border-white/10 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={MayaAvatar}
                  alt="Maya AI Assistant"
                  className="w-10 h-10 rounded-full border-2 border-white/20 shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h2 className="text-lg font-bold">Maya</h2>
                <p className="text-xs text-white/80">Powered by SourceX 🚀</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {dark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setFullscreen(!fullscreen)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle fullscreen"
              >
                {fullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Onboarding Form */}
          {!hasStartedChat ? (
            <div className="flex-1 flex flex-col justify-center p-6 space-y-4 overflow-y-auto">
              <div className="text-center mb-6">
                <img
                  src={MayaAvatar}
                  alt="Maya"
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-blue-100 dark:border-blue-900 shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Hi! I'm Maya 👋
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Your AI assistant powered by SourceX. Let's get started with a
                  quick introduction.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  startChat();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm"
                    autoFocus
                    onKeyDown={handleInputKeyDown}
                    autoComplete="name"
                    name="name"
                  />
                  {!name.trim() && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your name.
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onKeyDown={handleInputKeyDown}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 backdrop-blur-sm"
                  />
                  {email && !isValidEmail(email) && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={!name.trim() || !isValidEmail(email)}
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white py-3 rounded-lg font-semibold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Start Chatting with Maya
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Chat Messages */}
              <div
                ref={chatRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#CBD5E0 transparent",
                }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } items-start gap-3 animate-in slide-in-from-bottom-2 duration-300`}
                  >
                    {msg.sender === "bot" && (
                      <img
                        src={MayaAvatar}
                        alt="Maya"
                        className="w-10 h-10 rounded-full flex-shrink-0 mt-1 border-2 border-blue-100 dark:border-blue-900 shadow-md"
                      />
                    )}

                    <div
                      className={`max-w-[75%] text-sm p-4 rounded-2xl shadow-lg backdrop-blur-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white rounded-br-md"
                          : "bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 border border-gray-200/50 dark:border-gray-700/50 rounded-bl-md"
                      }`}
                    >
                      <div className="whitespace-pre-wrap break-words">
                        {msg.text}
                      </div>
                      <div
                        className={`text-xs mt-2 opacity-70 ${
                          msg.sender === "user"
                            ? "text-white/70"
                            : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {new Date(msg.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-10 h-10 rounded-full flex-shrink-0 mt-1 bg-gray-500 flex items-center justify-center text-white font-semibold text-sm shadow-md">
                        {getUserInitial()}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start items-start gap-3 animate-in slide-in-from-bottom-2 duration-300">
                    <img
                      src={MayaAvatar}
                      alt="Maya"
                      className="w-10 h-10 rounded-full flex-shrink-0 mt-1 border-2 border-blue-100 dark:border-blue-900 shadow-md"
                    />
                    <div className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-gray-100 border border-gray-200/50 dark:border-gray-700/50 p-4 rounded-2xl rounded-bl-md backdrop-blur-sm shadow-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Suggestions */}
              {showSuggestions && messages.length > 0 && (
                <div className="px-4 py-2 border-t border-gray-200/50 dark:border-gray-700/50 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    Suggested questions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.slice(0, 3).map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 text-gray-700 dark:text-gray-300 text-xs px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-600/50 transition-all duration-200 backdrop-blur-sm hover:shadow-md"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-[#0A0C1C]/80 backdrop-blur-sm rounded-b-xl">
                <div className="flex gap-2 items-end">
                  <div className="flex-1">
                    <textarea
                      ref={inputRef}
                      placeholder={
                        isOnline
                          ? "Type your message..."
                          : "You're offline. Check your connection."
                      }
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      disabled={!isOnline || loading}
                      className="w-full border border-gray-300/50 dark:border-gray-600/50 bg-gray-50/80 dark:bg-gray-800/80 text-gray-900 dark:text-white p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all duration-200 backdrop-blur-sm"
                      rows={1}
                      style={{ minHeight: "44px", maxHeight: "120px" }}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            isOnline ? "bg-green-400" : "bg-red-400"
                          }`}
                        ></div>
                        {isOnline ? "Online" : "Offline"}
                      </div>
                      <button
                        onClick={resetChat}
                        className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1 transition-colors"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={handleSend}
                    disabled={!message.trim() || loading || !isOnline}
                    className="bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] text-white p-3 rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center">
                  Press Enter to send • Shift+Enter for new line
                </p>
              </div>
            </>
          )}
        </div>
      )}

      <style jsx>{`
        .animate-in {
          animation: slideInUp 0.3s ease-out;
        }

        .slide-in-from-bottom-4 {
          animation: slideInFromBottom 0.3s ease-out;
        }

        .slide-in-from-bottom-2 {
          animation: slideInFromBottom 0.2s ease-out;
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }

        .dark ::-webkit-scrollbar-thumb {
          background: #4a5568;
        }

        .dark ::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;
