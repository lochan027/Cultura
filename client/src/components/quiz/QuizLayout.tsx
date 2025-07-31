import { useLocation } from 'wouter';
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
  const [, setLocation] = useLocation();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (step === 1) {
      setLocation('/quiz');
    } else {
      // Navigate to previous step based on current step
      const steps = ['', 'movies', 'music', 'fashion', 'food', 'travel', 'results'];
      const currentStep = step - 1;
      if (currentStep > 0) {
        setLocation(`/quiz/${steps[currentStep - 1]}`);
      } else {
        setLocation('/quiz');
      }
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-cultura-purple-50 via-cultura-pink-50 to-cultura-orange-50 relative">
      {/* Enhanced floating background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cultura-purple-300/15 to-cultura-pink-300/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cultura-pink-300/15 to-cultura-orange-300/15 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-cultura-neutral-600 hover:text-cultura-purple-600 transition-colors glass-effect px-6 py-3 rounded-full border border-white/30 hover:scale-105 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          <div className="flex-1 mx-8">
            <div className="bg-cultura-neutral-200 rounded-full h-4 backdrop-blur-sm shadow-inner">
              <div 
                className="bg-gradient-to-r from-cultura-purple-500 via-cultura-pink-500 to-cultura-orange-500 h-4 rounded-full transition-all duration-1000 shadow-lg"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
            <p className="text-center text-sm text-cultura-neutral-600 mt-3 font-semibold">
              {step} of {totalSteps} • Almost there! 🎉
            </p>
          </div>
          
          <div className="w-20" />
        </div>

        {/* Enhanced Content Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-cultura-neutral-700 max-w-3xl mx-auto font-medium">
            {subtitle}
          </p>
        </div>

        {/* Enhanced Quiz Content */}
        <div className="glass-effect rounded-3xl shadow-2xl p-8 mb-8 border-2 border-white/30">
          {children}
        </div>

        {/* Enhanced Navigation */}
        <div className="flex justify-center">
          <button
            onClick={onNext}
            disabled={!canProceed}
            className={`group relative inline-flex items-center gap-4 px-12 py-6 rounded-full text-xl font-bold transition-all duration-500 overflow-hidden ${
              canProceed
                ? 'bg-gradient-to-r from-cultura-purple-600 via-cultura-pink-600 to-cultura-orange-500 text-white hover:shadow-2xl hover:shadow-cultura-purple-500/30 transform hover:scale-105'
                : 'bg-cultura-neutral-300 text-cultura-neutral-500 cursor-not-allowed opacity-60'
            }`}
          >
            {canProceed && (
              <div className="absolute inset-0 bg-gradient-to-r from-cultura-pink-600 via-cultura-orange-500 to-cultura-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
            <span className="relative z-10">{nextButtonText}</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizLayout;