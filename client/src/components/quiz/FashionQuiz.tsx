import { useState } from 'react';
import { useLocation } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';
import { QuizOption } from '../../types/taste';
import QuizLayout from './QuizLayout';

const fashionOptions: QuizOption[] = [
  { id: 'minimalist', title: 'Minimalist Chic', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Clean Lines' },
  { id: 'streetwear', title: 'Urban Streetwear', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Edgy' },
  { id: 'vintage', title: 'Vintage Inspired', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Retro' },
  { id: 'bohemian', title: 'Bohemian Flow', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Free Spirit' },
  { id: 'business', title: 'Modern Professional', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Sophisticated' },
  { id: 'athletic', title: 'Athleisure', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Active' },
  { id: 'artistic', title: 'Artistic Expression', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Creative' },
  { id: 'classic', title: 'Timeless Classic', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Traditional' },
  { id: 'gothic', title: 'Dark Gothic', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Alternative' },
  { id: 'preppy', title: 'Preppy Chic', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Classic' },
  { id: 'grunge', title: 'Grunge Revival', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Alternative' },
  { id: 'romantic', title: 'Romantic Feminine', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Feminine' },
  { id: 'punk', title: 'Punk Rock', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Rebellious' },
  { id: 'cottagecore', title: 'Cottagecore', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Rustic' },
  { id: 'y2k', title: 'Y2K Revival', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Nostalgic' },
  { id: 'techwear', title: 'Techwear', image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=300&h=400&fit=crop', category: 'Futuristic' }
];

interface FashionQuizProps {
  onNext: (selections: string[]) => void;
  currentSelections: string[];
}

const FashionQuiz: React.FC<FashionQuizProps> = ({ onNext, currentSelections }) => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>(currentSelections);
  const [showAll, setShowAll] = useState(false);
  const [, setLocation] = useLocation();

  const displayedStyles = showAll ? fashionOptions : fashionOptions.slice(0, 8);

  const toggleStyle = (styleId: string) => {
    setSelectedStyles(prev => {
      if (prev.includes(styleId)) {
        return prev.filter(id => id !== styleId);
      } else {
        return [...prev, styleId];
      }
    });
  };

  const handleNext = () => {
    onNext(selectedStyles);
    setLocation('/quiz/food');
  };

  return (
    <QuizLayout
      title="What's your style vibe?"
      subtitle="Select fashion styles that represent your aesthetic (minimum 2)"
      step={3}
      totalSteps={5}
      onNext={handleNext}
      canProceed={selectedStyles.length >= 2}
      nextButtonText="Continue to Food"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayedStyles.map((style) => (
          <div
            key={style.id}
            onClick={() => toggleStyle(style.id)}
            className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 group ${
              selectedStyles.includes(style.id)
                ? 'scale-105'
                : 'hover:shadow-lg hover:shadow-cultura-purple-200/20'
            }`}
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg relative">
              <img
                src={style.image}
                alt={style.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {selectedStyles.includes(style.id) && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cultura-purple-600/80 to-cultura-pink-600/80 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 shadow-lg transform scale-110 animate-pulse">
                      <Check className="w-8 h-8 text-cultura-purple-600" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 rounded-full p-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </>
              )}
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-800 text-center leading-tight">
              {style.title}
            </h3>
            <p className="text-xs text-cultura-purple-600 text-center font-medium">{style.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && fashionOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Styles
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedStyles.length} styles {selectedStyles.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default FashionQuiz;