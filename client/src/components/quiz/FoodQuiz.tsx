import { useState } from 'react';
import { useLocation } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';
import { QuizOption } from '../../types/taste';
import QuizLayout from './QuizLayout';

const foodOptions: QuizOption[] = [
  { id: 'sushi', title: 'Japanese Sushi', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Japanese' },
  { id: 'tacos', title: 'Street Tacos', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Mexican' },
  { id: 'ramen', title: 'Artisan Ramen', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Japanese' },
  { id: 'pasta', title: 'Fresh Pasta', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Italian' },
  { id: 'indian', title: 'Spicy Indian Curry', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Indian' },
  { id: 'mediterranean', title: 'Mediterranean Bowl', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Mediterranean' },
  { id: 'bbq', title: 'BBQ Brisket', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'American' },
  { id: 'vegan', title: 'Plant-Based Bowl', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Healthy' },
  { id: 'thai', title: 'Thai Pad Thai', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Thai' },
  { id: 'korean', title: 'Korean BBQ', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Korean' },
  { id: 'french', title: 'French Cuisine', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'French' },
  { id: 'pizza', title: 'Neapolitan Pizza', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Italian' },
  { id: 'chinese', title: 'Chinese Dim Sum', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Chinese' },
  { id: 'ethiopian', title: 'Ethiopian Injera', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Ethiopian' },
  { id: 'lebanese', title: 'Lebanese Mezze', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Lebanese' },
  { id: 'peruvian', title: 'Peruvian Ceviche', image: 'https://images.pexels.com/photos/357573/pexels-photo-357573.jpeg?w=300&h=300&fit=crop', category: 'Peruvian' }
];

interface FoodQuizProps {
  onNext: (selections: string[]) => void;
  currentSelections: string[];
}

const FoodQuiz: React.FC<FoodQuizProps> = ({ onNext, currentSelections }) => {
  const [selectedFoods, setSelectedFoods] = useState<string[]>(currentSelections);
  const [showAll, setShowAll] = useState(false);
  const [, setLocation] = useLocation();

  const displayedFoods = showAll ? foodOptions : foodOptions.slice(0, 8);

  const toggleFood = (foodId: string) => {
    setSelectedFoods(prev => {
      if (prev.includes(foodId)) {
        return prev.filter(id => id !== foodId);
      } else {
        return [...prev, foodId];
      }
    });
  };

  const handleNext = () => {
    onNext(selectedFoods);
    setLocation('/quiz/travel');
  };

  return (
    <QuizLayout
      title="What flavors call to you?"
      subtitle="Select cuisines that make your taste buds dance (minimum 2)"
      step={4}
      totalSteps={5}
      onNext={handleNext}
      canProceed={selectedFoods.length >= 2}
      nextButtonText="Continue to Travel"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayedFoods.map((food) => (
          <div
            key={food.id}
            onClick={() => toggleFood(food.id)}
            className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 group ${
              selectedFoods.includes(food.id)
                ? 'ring-4 ring-cultura-purple-500 shadow-xl shadow-cultura-purple-500/30 scale-105'
                : 'hover:shadow-lg hover:shadow-cultura-purple-200/20'
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mb-3 shadow-lg">
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {selectedFoods.includes(food.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-cultura-purple-600/90 to-cultura-pink-600/90 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white rounded-full p-3 shadow-lg animate-pulse">
                    <Check className="w-6 h-6 text-cultura-purple-600" />
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center">
              {food.title}
            </h3>
            <p className="text-sm text-cultura-purple-600 text-center font-medium">{food.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && foodOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Cuisines
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedFoods.length} cuisines {selectedFoods.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default FoodQuiz;