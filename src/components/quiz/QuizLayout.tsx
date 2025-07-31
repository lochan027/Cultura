import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizLayoutProps {
  title: string;
  subtitle: string;
  step: number;
  totalSteps: number;
  children: React.ReactNode;
  onNext: () => void;
  onBack?: () => void;
  canProceed: boolean;
  nextButtonText?: string;
}

const QuizLayout: React.FC<QuizLayoutProps> = ({
  title,
  subtitle,
  step,
  totalSteps,
  children,
  onNext,
  onBack,
  canProceed,
  nextButtonText = 'Continue'
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (step === 1) {
      navigate('/quiz');
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex-1 mx-8">
            <div className="bg-white/20 rounded-full h-3 backdrop-blur-sm">
              <div 
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <p className="text-center text-sm text-white/80 mt-2 font-medium">
              Step {step} of {totalSteps}
            </p>
          </div>
          
          <div className="w-16" /> {/* Spacer for symmetry */}
        </div>

        {/* Content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-sm">
            {subtitle}
          </p>
        </div>

        {/* Quiz Content */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
          {children}
        </div>

        {/* Navigation */}
        <div className="flex justify-center">
          <button
            onClick={onNext}
            disabled={!canProceed}
            className={`inline-flex items-center gap-3 px-10 py-5 rounded-full text-xl font-bold transition-all duration-500 ${
              canProceed
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 shadow-xl hover:shadow-purple-500/25'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            {nextButtonText}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;