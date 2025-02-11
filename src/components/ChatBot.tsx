import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftIcon, 
  XMarkIcon, 
  PaperAirplaneIcon, 
  SparklesIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline';

interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Welcome to Panchastra! I\'m your AI assistant, ready to help you explore our virtual architectural world. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);

  const suggestions = [
    "Tell me about your products",
    "Book a demo",
    "Contact support",
    "Meet the team"
  ];

  useEffect(() => {
    if (!isMinimized) {
      scrollToBottom();
    }
  }, [messages, isMinimized]);

  useEffect(() => {
    if (isMinimized && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.type === 'bot') {
        setUnreadCount(prev => prev + 1);
      }
    }
  }, [messages, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent | string) => {
    e.preventDefault();
    const messageText = typeof e === 'string' ? e : inputMessage;
    if (!messageText.trim()) return;

    setShowSuggestions(false);
    const userMessage: Message = {
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(messageText);
      const botMessage: Message = {
        type: 'bot',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      setShowSuggestions(true);
    }, Math.random() * 1000 + 500);
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      setUnreadCount(0);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setUnreadCount(0);
  };

  const generateResponse = (input: string): string => {
    const normalizedInput = input.toLowerCase();
    
    if (normalizedInput.includes('product') || normalizedInput.includes('solution')) {
      return `We offer four innovative solutions:

1. 🎯 AR Visualization Suite
   - Real-time architectural visualization
   - Interactive modifications
   - Multi-user support

2. 🌟 VR Design Studio
   - Immersive virtual environments
   - Real-time design tools
   - Physics simulation

3. 🤖 AI Design Assistant
   - Smart design suggestions
   - Space optimization
   - Cost estimation

4. 🤝 Collaboration Hub
   - Real-time team collaboration
   - Version control
   - Project management

Would you like to know more about any specific product?`;
    }
    
    if (normalizedInput.includes('demo')) {
      return 'I can help you schedule a personalized demo of our products! Our demos include:\n\n• Live product walkthrough\n• Q&A session with experts\n• Customized solutions discussion\n\nWould you like me to help you book a demo now?';
    }
    
    if (normalizedInput.includes('contact') || normalizedInput.includes('support')) {
      return 'You can reach us through multiple channels:\n\n📧 Email: panchastra@gmail.com\n⏰ Hours: Mon-Fri, 9AM - 6PM IST\n📍 Location: Bangalore, India\n\nOur support team typically responds within 2 hours during business hours.';
    }
    
    if (normalizedInput.includes('team')) {
      return 'Our leadership team brings together expertise in technology, design, and business:\n\n👨‍💼 KD (CEO) - AR/VR Vision\n👨‍💻 UG (CTO) - AI/ML Expert\n👨‍🔧 BR (COO) - Operations Master\n🎨 KS (Creative Director) - Design Guru\n\nWould you like to know more about any team member?';
    }
    
    if (normalizedInput.includes('technology') || normalizedInput.includes('tech')) {
      return 'We leverage cutting-edge technologies:\n\n🔮 AR/VR - Immersive Experiences\n🤖 AI/ML - Smart Design\n☁️ Cloud - Seamless Sync\n🎨 3D - Real-time Rendering\n\nOur tech stack is constantly evolving to provide the best solutions.';
    }

    return 'I understand you\'re interested in learning more. Could you please specify which aspect of Panchastra you\'d like to explore?\n\n• Our Products\n• Technology Stack\n• Team & Vision\n• Support & Contact';
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/50 transition-shadow flex items-center justify-center z-50"
          >
            <ChatBubbleLeftIcon className="w-8 h-8" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <SparklesIcon className="w-3 h-3 text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? '80px' : '600px',
              width: isMinimized ? '300px' : '400px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 glass-card overflow-hidden z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                    <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%232563eb'/%3E%3Ctext x='50' y='70' font-family='Arial' font-size='70' font-weight='bold' text-anchor='middle' fill='white'%3EP%3C/text%3E%3C/svg%3E"
                        alt="Panchastra"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold title-font">Panchastra AI</h3>
                    <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      <p className="text-xs text-gray-400">Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleMinimize}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {isMinimized ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Minimized State */}
            {isMinimized && (
              <div className="p-4 flex items-center justify-between">
                <p className="text-sm text-gray-400 truncate">
                  {messages[messages.length - 1]?.content}
                </p>
                {unreadCount > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </div>
            )}

            {/* Chat Content */}
            {!isMinimized && (
              <div className="flex flex-col h-[calc(100%-80px)]">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 mr-2 flex-shrink-0">
                          <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                            <img
                              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%232563eb'/%3E%3Ctext x='50' y='70' font-family='Arial' font-size='70' font-weight='bold' text-anchor='middle' fill='white'%3EP%3C/text%3E%3C/svg%3E"
                              alt="Panchastra"
                              className="w-4 h-4"
                            />
                          </div>
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-primary to-secondary text-white'
                            : 'bg-white/10'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                        <p className="text-[10px] text-gray-400 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5">
                        <div className="w-full h-full rounded-full bg-black/50 flex items-center justify-center">
                          <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%232563eb'/%3E%3Ctext x='50' y='70' font-family='Arial' font-size='70' font-weight='bold' text-anchor='middle' fill='white'%3EP%3C/text%3E%3C/svg%3E"
                            alt="Panchastra"
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <motion.div
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                        <motion.div
                          animate={{ scale: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Suggestions */}
                {showSuggestions && messages.length < 3 && (
                  <div className="p-4 border-t border-white/10">
                    <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSendMessage(suggestion)}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 rounded-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg hover:shadow-primary/20 transition-shadow"
                    >
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;