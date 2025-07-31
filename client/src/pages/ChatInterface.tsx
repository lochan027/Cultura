import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Bot, User } from 'lucide-react';
import { EnrichedTasteProfile } from '../types/taste';
import CulturalDNACard from '../components/CulturalDNACard';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'cultura';
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const enrichedProfile = location.state?.enrichedProfile as EnrichedTasteProfile;

  useEffect(() => {
    if (!enrichedProfile) {
      navigate('/quiz');
      return;
    }

    // Welcome message
    const welcomeMessage: Message = {
      id: '1',
      text: `Hey there, ${enrichedProfile.culturalDNA.tasteArchetype}! 👋 I'm Cultura, your cultural AI assistant. I've analyzed your taste profile and I'm excited to help you discover new experiences that match your unique vibe. Ask me anything about recommendations, cultural connections, or explore how your preferences connect across different domains!`,
      sender: 'cultura',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [enrichedProfile, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate API call to Perplexity/backend
    setTimeout(() => {
      const culturaResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `Based on your cultural DNA as ${enrichedProfile.culturalDNA.tasteArchetype}, I can see some fascinating connections in your question. Your preferences suggest you'd enjoy exploring the intersection of ${enrichedProfile.culturalDNA.primaryTraits.join(' and ')}. Would you like me to dive deeper into specific recommendations or explore cross-domain connections?`,
        sender: 'cultura',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, culturaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!enrichedProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex flex-col">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-lg shadow-lg p-4 flex items-center justify-between border-b border-white/20">
        <button
          onClick={() => navigate('/quiz/results')}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Results
        </button>
        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Chat with Cultura</h1>
        <div className="w-20" />
      </div>

      {/* Cultural DNA Card - Compact Version */}
      <div className="p-4 bg-white/95 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  {enrichedProfile.culturalDNA.tasteArchetype}
                </h3>
                <div className="flex gap-2 mt-1">
                  {enrichedProfile.culturalDNA.primaryTraits.slice(0, 2).map((trait, index) => (
                    <span key={index} className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 font-medium">Cultural Domains</p>
                <p className="text-sm font-bold text-gray-800">
                  {Object.keys(enrichedProfile).filter(k => !['crossDomain', 'culturalDNA'].includes(k)).length} connected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-2xl ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'bg-white/90 text-gray-600 shadow-lg backdrop-blur-sm'
                }`}>
                  {message.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/95 backdrop-blur-lg shadow-lg text-gray-800 border border-white/20'
                }`}>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-2 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-2xl">
                <div className="w-8 h-8 rounded-full bg-white/90 text-gray-600 flex items-center justify-center shadow-lg backdrop-blur-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white/95 backdrop-blur-lg shadow-lg rounded-2xl px-4 py-3 border border-white/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white/95 backdrop-blur-lg border-t border-white/20 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about recommendations, cultural connections, or explore your taste profile..."
              className="flex-1 resize-none border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-md"
              rows={1}
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
            <button
              onClick={sendMessage}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:from-purple-700 hover:to-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;