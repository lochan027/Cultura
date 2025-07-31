import { useLocation } from 'wouter';
import { Play, ArrowLeft } from 'lucide-react';

const QuizStart: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center">
        <button
          onClick={() => setLocation('/')}
          className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Discover Your Cultural DNA
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            We'll ask you about your preferences across movies, music, fashion, food, and travel. 
            This helps us understand your unique cultural profile and provide personalized recommendations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {[
              { name: 'Movies', emoji: '🎬' },
              { name: 'Music', emoji: '🎵' },
              { name: 'Fashion', emoji: '👗' },
              { name: 'Food', emoji: '🍜' },
              { name: 'Travel', emoji: '✈️' }
            ].map((step, index) => (
              <div key={step.name} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <span className="text-2xl">{step.emoji}</span>
                </div>
                <span className="text-sm text-gray-700 font-medium">{step.name}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setLocation('/quiz/movies')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-purple-500/25"
          >
            <Play className="w-5 h-5" />
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;