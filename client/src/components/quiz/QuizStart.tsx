import { useLocation } from 'wouter';
import { Play, ArrowLeft } from 'lucide-react';

const QuizStart: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cultura-purple-50 via-cultura-pink-50 to-cultura-orange-50 flex items-center justify-center p-4 relative">
      {/* Enhanced floating background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-br from-cultura-purple-300/20 to-cultura-pink-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-cultura-pink-300/20 to-cultura-orange-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <button
          onClick={() => setLocation('/')}
          className="absolute -top-16 left-0 flex items-center gap-2 text-cultura-neutral-600 hover:text-cultura-purple-600 transition-colors glass-effect px-6 py-3 rounded-full hover:scale-105 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="glass-effect rounded-3xl shadow-2xl p-12 border-2 border-white/30">
          <h1 className="text-5xl font-black text-gradient mb-6 leading-tight">
            Let's explore your vibe! 🌟
          </h1>
          
          <p className="text-xl text-cultura-neutral-700 mb-10 leading-relaxed font-medium">
            We'll take you on a quick journey through the things you love. 
            No right or wrong answers - just pick what speaks to you!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
            {[
              { name: 'Movies', emoji: '🎬', color: 'from-cultura-purple-400 to-cultura-purple-500' },
              { name: 'Music', emoji: '🎵', color: 'from-cultura-pink-400 to-cultura-pink-500' },
              { name: 'Fashion', emoji: '👗', color: 'from-cultura-orange-400 to-cultura-orange-500' },
              { name: 'Food', emoji: '🍜', color: 'from-cultura-blue-400 to-cultura-blue-500' },
              { name: 'Travel', emoji: '✈️', color: 'from-cultura-purple-500 to-cultura-pink-500' }
            ].map((step, index) => (
              <div key={step.name} className="text-center group hover:scale-110 transition-all duration-300">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-3xl">{step.emoji}</span>
                </div>
                <span className="text-sm text-cultura-neutral-700 font-bold">{step.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setLocation('/quiz/movies')}
            className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-cultura-purple-600 via-cultura-pink-600 to-cultura-orange-500 text-white px-12 py-6 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-cultura-purple-500/30 transform hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cultura-pink-600 via-cultura-orange-500 to-cultura-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Play className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Let's Go!</span>
          </button>
          
          <p className="text-sm text-cultura-neutral-500 mt-6">
            Takes about 5 minutes • No personal info needed
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;