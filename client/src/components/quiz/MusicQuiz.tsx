import { useState } from 'react';
import { useLocation } from 'wouter';
import { Check, ArrowRight } from 'lucide-react';
import { QuizOption } from '../../types/taste';
import QuizLayout from './QuizLayout';

const musicOptions: QuizOption[] = [
  { id: 'billie-eilish', title: 'Billie Eilish', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Alternative Pop' },
  { id: 'kendrick-lamar', title: 'Kendrick Lamar', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Hip Hop' },
  { id: 'radiohead', title: 'Radiohead', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Alternative Rock' },
  { id: 'taylor-swift', title: 'Taylor Swift', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Pop' },
  { id: 'the-weeknd', title: 'The Weeknd', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'R&B' },
  { id: 'daft-punk', title: 'Daft Punk', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Electronic' },
  { id: 'bon-iver', title: 'Bon Iver', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Indie Folk' },
  { id: 'bad-bunny', title: 'Bad Bunny', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Reggaeton' },
  { id: 'drake', title: 'Drake', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Hip Hop' },
  { id: 'adele', title: 'Adele', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Soul' },
  { id: 'arctic-monkeys', title: 'Arctic Monkeys', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Indie Rock' },
  { id: 'beyonce', title: 'Beyoncé', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'R&B' },
  { id: 'frank-ocean', title: 'Frank Ocean', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Alternative R&B' },
  { id: 'tame-impala', title: 'Tame Impala', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Psychedelic Pop' },
  { id: 'lorde', title: 'Lorde', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Electropop' },
  { id: 'childish-gambino', title: 'Childish Gambino', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Alternative Hip Hop' },
  { id: 'fleetwood-mac', title: 'Fleetwood Mac', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Classic Rock' },
  { id: 'sza', title: 'SZA', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Neo-Soul' },
  { id: 'post-malone', title: 'Post Malone', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?w=300&h=300&fit=crop', category: 'Pop Rap' }
];

interface MusicQuizProps {
  onNext: (selections: string[]) => void;
  currentSelections: string[];
}

const MusicQuiz: React.FC<MusicQuizProps> = ({ onNext, currentSelections }) => {
  const [selectedArtists, setSelectedArtists] = useState<string[]>(currentSelections);
  const [showAll, setShowAll] = useState(false);
  const [, setLocation] = useLocation();

  const displayedArtists = showAll ? musicOptions : musicOptions.slice(0, 8);

  const toggleArtist = (artistId: string) => {
    setSelectedArtists(prev => {
      if (prev.includes(artistId)) {
        return prev.filter(id => id !== artistId);
      } else {
        return [...prev, artistId];
      }
    });
  };

  const handleNext = () => {
    onNext(selectedArtists);
    setLocation('/quiz/fashion');
  };

  return (
    <QuizLayout
      title="What music moves you?"
      subtitle="Select artists that resonate with your vibe (minimum 2)"
      step={2}
      totalSteps={5}
      onNext={handleNext}
      canProceed={selectedArtists.length >= 2}
      nextButtonText="Continue to Fashion"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {displayedArtists.map((artist) => (
          <div
            key={artist.id}
            onClick={() => toggleArtist(artist.id)}
            className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 group ${
              selectedArtists.includes(artist.id)
                ? 'ring-4 ring-cultura-purple-500 shadow-xl shadow-cultura-purple-500/30 scale-105'
                : 'hover:shadow-lg hover:shadow-cultura-purple-200/20'
            }`}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden mb-3 shadow-lg">
              <img
                src={artist.image}
                alt={artist.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {selectedArtists.includes(artist.id) && (
                <div className="absolute inset-0 bg-gradient-to-br from-cultura-purple-600/90 to-cultura-pink-600/90 flex items-center justify-center rounded-full backdrop-blur-sm">
                  <div className="bg-white rounded-full p-3 shadow-lg animate-pulse">
                    <Check className="w-6 h-6 text-cultura-purple-600" />
                  </div>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold text-gray-800 text-center">
              {artist.title}
            </h3>
            <p className="text-sm text-cultura-purple-600 text-center font-medium">{artist.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && musicOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Artists
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedArtists.length} artists {selectedArtists.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default MusicQuiz;