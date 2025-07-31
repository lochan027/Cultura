import { useLocation } from 'wouter';
import { Sparkles, ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleStartQuiz = () => {
    setLocation('/quiz');
  };

  return (
    <div className="min-h-screen bg-cultura-neutral-50 flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cultura-primary-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-cultura-accent-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cultura-primary-300/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-cultura-gradient-from/20 via-cultura-gradient-via/20 to-cultura-gradient-to/20 backdrop-blur-lg rounded-full mb-8 border border-white/20 shadow-xl">
          <Sparkles className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cultura-gradient-from via-cultura-gradient-via to-cultura-gradient-to bg-clip-text text-transparent mb-6 drop-shadow-2xl leading-tight">
          Cultura
        </h1>
        <p className="text-xl md:text-2xl text-cultura-neutral-700 mb-8 font-light drop-shadow-lg">
          "The cultural AI that understands you through what you love."
        </p>
        <p className="text-lg md:text-xl text-cultura-neutral-600 leading-relaxed drop-shadow-sm mb-12">
          Cultura is your personal AI companion designed to understand and evolve with your unique tastes.
          By analyzing your preferences across diverse cultural domains like music, film, fashion, and food,
          Cultura crafts personalized recommendations and insights that truly resonate with your individual vibe.
          Powered by cutting-edge AI from Qloo and Perplexity, Cultura goes beyond simple suggestions.
          It delves into the nuances of your cultural DNA, helping you discover new experiences, broaden your horizons,
          and connect with content that enriches your life. Start your journey with Cultura and unlock a world tailored just for you.
        </p>
        <button
          onClick={handleStartQuiz}
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-cultura-gradient-from to-cultura-gradient-to text-white px-10 py-5 rounded-full text-xl font-bold hover:from-cultura-gradient-to hover:to-cultura-gradient-from transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-cultura-gradient-from/25 border border-cultura-gradient-from/30"
        >
          Power up your assistant
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
        </button>
      </div>
    </div>
  );
};

export default LandingPage;