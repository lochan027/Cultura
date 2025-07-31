import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Share2, Heart, MessageCircle, Loader } from 'lucide-react';
import ShareProfileCard from '../components/ShareProfileCard';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  citations?: string[];
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 🌟 I'm Cultura, and I've just analyzed your cultural DNA. I can now give you super personalized recommendations based on your unique taste profile. What are you in the mood to discover today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Get cultural profile from session storage
  const getCulturalProfile = () => {
    const enrichedProfile = sessionStorage.getItem('enrichedProfile');
    if (enrichedProfile) {
      return JSON.parse(enrichedProfile);
    }
    // Fallback profile for demo
    return {
      movies: ['Inception', 'Parasite'],
      music: ['Radiohead', 'Billie Eilish'],
      fashion: ['Minimalist', 'Streetwear'],
      food: ['Japanese', 'Italian'],
      travel: ['Tokyo', 'Paris'],
      culturalDNA: {
        tasteArchetype: 'Creative Explorer',
        primaryTraits: ['Artistic', 'Innovative', 'Cosmopolitan']
      }
    };
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const culturalProfile = getCulturalProfile();
      
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          culturalProfile
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.message,
        sender: 'bot',
        timestamp: new Date(),
        citations: data.citations
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please make sure your API keys are configured! In the meantime, I'd love to help you explore recommendations based on your taste profile.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What movies should I watch this weekend?",
    "Recommend some music similar to my taste",
    "Where should I travel next based on my preferences?",
    "What fashion brands match my style?",
    "Suggest restaurants I'd love"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultura-purple-50 via-cultura-pink-50 to-cultura-orange-50 flex flex-col">
      {/* Enhanced Header */}
      <div className="p-6 border-b border-cultura-neutral-200 glass-effect">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-gradient">Cultura Chat</h1>
              <p className="text-cultura-neutral-600 font-medium">Your personalized cultural companion</p>
            </div>
          </div>
          
          <button
            onClick={() => setShowShareModal(true)}
            className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full text-cultura-purple-600 hover:text-cultura-pink-600 transition-all duration-300 hover:scale-105 border border-white/30"
          >
            <Share2 className="w-4 h-4" />
            <span className="font-semibold">Share Profile</span>
          </button>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="w-12 h-12 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
              )}
              <div
                className={`max-w-2xl p-5 rounded-2xl shadow-lg ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 text-white'
                    : 'glass-effect text-cultura-neutral-800 border border-white/30'
                }`}
              >
                <p className="leading-relaxed font-medium">{message.text}</p>
                {message.citations && message.citations.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <p className="text-xs opacity-80 mb-2">Sources:</p>
                    <div className="flex flex-wrap gap-1">
                      {message.citations.slice(0, 3).map((citation, index) => (
                        <a
                          key={index}
                          href={citation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2 py-1 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          Source {index + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-3 text-xs opacity-70 flex items-center gap-2">
                  {message.timestamp.toLocaleTimeString()}
                  {message.sender === 'bot' && (
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <MessageCircle className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
              {message.sender === 'user' && (
                <div className="w-12 h-12 bg-gradient-to-r from-cultura-blue-600 to-cultura-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-4 justify-start">
              <div className="w-12 h-12 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Loader className="w-6 h-6 text-white animate-spin" />
              </div>
              <div className="glass-effect p-5 rounded-2xl border border-white/30">
                <p className="text-cultura-neutral-600">Cultura is thinking...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-cultura-neutral-600 text-sm font-semibold mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(question)}
                  className="text-sm px-4 py-2 glass-effect rounded-full text-cultura-purple-600 hover:text-cultura-pink-600 border border-white/30 hover:scale-105 transition-all duration-300"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Input */}
      <div className="p-6 border-t border-cultura-neutral-200 glass-effect">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl border-2 border-white/30 shadow-xl">
            <div className="flex items-center gap-4 p-4">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about movies, music, fashion, food, or travel..."
                className="flex-1 bg-transparent text-cultura-neutral-800 placeholder-cultura-neutral-500 focus:outline-none font-medium"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="p-3 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <ShareProfileCard
          enrichedProfile={getCulturalProfile()}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
};

export default ChatInterface;