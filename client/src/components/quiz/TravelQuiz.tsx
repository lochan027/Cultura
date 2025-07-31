import { useState } from 'react';
import { useLocation } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';
import { QuizOption } from '../../types/taste';
import QuizLayout from './QuizLayout';

const travelOptions: QuizOption[] = [
  { id: 'tokyo', title: 'Tokyo, Japan', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Urban Tech' },
  { id: 'santorini', title: 'Santorini, Greece', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Island Paradise' },
  { id: 'new-york', title: 'New York City', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Metropolitan' },
  { id: 'bali', title: 'Bali, Indonesia', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Tropical Zen' },
  { id: 'patagonia', title: 'Patagonia', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Adventure' },
  { id: 'paris', title: 'Paris, France', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Romance & Art' },
  { id: 'iceland', title: 'Reykjavik, Iceland', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Nordic Beauty' },
  { id: 'morocco', title: 'Marrakech, Morocco', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Cultural Immersion' },
  { id: 'london', title: 'London, UK', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Historic Charm' },
  { id: 'dubai', title: 'Dubai, UAE', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Luxury Modern' },
  { id: 'amsterdam', title: 'Amsterdam, Netherlands', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Canal Culture' },
  { id: 'rio', title: 'Rio de Janeiro, Brazil', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Beach Vibes' },
  { id: 'singapore', title: 'Singapore', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Garden City' },
  { id: 'cape-town', title: 'Cape Town, South Africa', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Natural Beauty' },
  { id: 'seoul', title: 'Seoul, South Korea', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'K-Culture Hub' },
  { id: 'maldives', title: 'Maldives', image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?w=400&h=300&fit=crop', category: 'Tropical Paradise' }
];

interface TravelQuizProps {
  onNext: (selections: string[]) => void;
  currentSelections: string[];
}

const TravelQuiz: React.FC<TravelQuizProps> = ({ onNext, currentSelections }) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(currentSelections);
  const [showAll, setShowAll] = useState(false);
  const [, setLocation] = useLocation();

  const displayedDestinations = showAll ? travelOptions : travelOptions.slice(0, 8);

  const toggleDestination = (destinationId: string) => {
    setSelectedDestinations(prev => {
      if (prev.includes(destinationId)) {
        return prev.filter(id => id !== destinationId);
      } else {
        return [...prev, destinationId];
      }
    });
  };

  const handleNext = () => {
    onNext(selectedDestinations);
    setLocation('/quiz/results');
  };

  return (
    <QuizLayout
      title="Where does your soul want to wander?"
      subtitle="Select dream destinations that inspire your wanderlust (minimum 2)"
      step={5}
      totalSteps={5}
      onNext={handleNext}
      canProceed={selectedDestinations.length >= 2}
      nextButtonText="See My Cultural DNA"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedDestinations.map((destination) => (
          <div
            key={destination.id}
            onClick={() => toggleDestination(destination.id)}
            className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 group ${
              selectedDestinations.includes(destination.id)
                ? 'scale-105'
                : 'hover:shadow-lg hover:shadow-cultura-purple-200/20'
            }`}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg relative">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {selectedDestinations.includes(destination.id) && (
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
            <h3 className="mt-3 text-lg font-bold text-gray-800 text-center">
              {destination.title}
            </h3>
            <p className="text-sm text-cultura-purple-600 text-center font-medium">{destination.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && travelOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Destinations
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedDestinations.length} destinations {selectedDestinations.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default TravelQuiz;