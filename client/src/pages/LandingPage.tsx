import { useLocation } from 'wouter';
import { Sparkles, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleStartQuiz = () => {
    setLocation('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultura-purple-50 via-cultura-pink-50 to-cultura-orange-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cultura-purple-300/20 to-cultura-pink-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-cultura-pink-300/20 to-cultura-orange-300/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-cultura-blue-300/20 to-cultura-purple-300/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Enhanced logo */}
        <div className="inline-flex items-center justify-center w-32 h-32 glass-effect rounded-full mb-8 shadow-2xl group hover:scale-110 transition-all duration-500">
          <Sparkles className="w-16 h-16 text-cultura-purple-600 group-hover:text-cultura-pink-500 transition-colors duration-500" />
        </div>
        
        {/* Enhanced title with better typography */}
        <h1 className="text-6xl md:text-8xl font-black text-gradient mb-6 tracking-tight leading-none">
          Cultura
        </h1>
        
        {/* Friendly subtitle */}
        <p className="text-2xl md:text-3xl text-cultura-neutral-700 mb-6 font-medium">
          Discover your cultural DNA ✨
        </p>
        
        {/* Simplified, friendlier description */}
        <p className="text-lg md:text-xl text-cultura-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
          Take a fun journey through your taste preferences and let our AI create personalized recommendations 
          that truly match your vibe. It's like having a friend who really gets your style!
        </p>
        
        {/* Enhanced CTA button */}
        <button
          onClick={handleStartQuiz}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-cultura-purple-600 via-cultura-pink-600 to-cultura-orange-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cultura-purple-500/30 transform hover:scale-105 transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cultura-pink-600 via-cultura-orange-500 to-cultura-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10">Start Your Cultural Journey</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
        </button>
        
        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-8 text-cultura-neutral-500 text-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>5 min journey</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>AI-powered insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Share your profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;