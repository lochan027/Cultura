import { useState } from 'react';
import { useLocation } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { QuizOption } from '../../types/taste';
import QuizLayout from './QuizLayout';

// Mock movie data - replace with real movie posters/data
const movieOptions: QuizOption[] = [
  { id: 'blade-runner', title: 'Blade Runner 2049', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Sci-Fi' },
  { id: 'parasite', title: 'Parasite', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Thriller' },
  { id: 'la-la-land', title: 'La La Land', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Musical' },
  { id: 'interstellar', title: 'Interstellar', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Sci-Fi' },
  { id: 'moonlight', title: 'Moonlight', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Drama' },
  { id: 'dune', title: 'Dune', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Sci-Fi' },
  { id: 'nomadland', title: 'Nomadland', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Drama' },
  { id: 'everything-everywhere', title: 'Everything Everywhere All at Once', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Comedy' },
  { id: 'avengers', title: 'Avengers: Endgame', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Action' },
  { id: 'joker', title: 'Joker', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Drama' },
  { id: 'inception', title: 'Inception', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Sci-Fi' },
  { id: 'black-panther', title: 'Black Panther', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Action' },
  { id: 'get-out', title: 'Get Out', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Horror' },
  { id: 'mad-max', title: 'Mad Max: Fury Road', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Action' },
  { id: 'her', title: 'Her', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Romance' },
  { id: 'grand-budapest', title: 'The Grand Budapest Hotel', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Comedy' },
  { id: 'spirited-away', title: 'Spirited Away', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Animation' },
  { id: 'pulp-fiction', title: 'Pulp Fiction', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Crime' },
  { id: 'the-matrix', title: 'The Matrix', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Sci-Fi' },
  { id: 'whiplash', title: 'Whiplash', image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?w=300&h=450&fit=crop', category: 'Drama' }
];

interface MoviesQuizProps {
  onNext: (selections: string[]) => void;
  currentSelections: string[];
}

const MoviesQuiz: React.FC<MoviesQuizProps> = ({ onNext, currentSelections }) => {
  const [selectedMovies, setSelectedMovies] = useState<string[]>(currentSelections);
  const [showAll, setShowAll] = useState(false);
  const [, setLocation] = useLocation();

  const displayedMovies = showAll ? movieOptions : movieOptions.slice(0, 8);

  const toggleMovie = (movieId: string) => {
    setSelectedMovies(prev => {
      if (prev.includes(movieId)) {
        return prev.filter(id => id !== movieId);
      } else {
        return [...prev, movieId];
      }
    });
  };

  const handleNext = () => {
    onNext(selectedMovies);
    setLocation('/quiz/music');
  };

  return (
    <QuizLayout
      title="What movies speak to you?"
      subtitle="Select movies that resonate with you (minimum 2)"
      step={1}
      totalSteps={5}
      onNext={handleNext}
      canProceed={selectedMovies.length >= 2}
      nextButtonText="Continue to Music"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayedMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => toggleMovie(movie.id)}
            className={`relative cursor-pointer transform transition-all duration-300 hover:scale-105 group ${
              selectedMovies.includes(movie.id)
                ? 'ring-4 ring-cultura-gradient-from shadow-xl shadow-cultura-gradient-from/30 scale-105'
                : 'hover:shadow-lg hover:shadow-cultura-primary-200/20'
            }">

            <div className="aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">

              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-800 text-center leading-tight">
              {movie.title}
            </h3>
            <p className="text-xs text-cultura-primary-600 text-center font-medium">{movie.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && movieOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Movies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedMovies.length} movies {selectedMovies.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default MoviesQuiz;

                : 'hover:shadow-lg hover:shadow-cultura-primary-200/20'
            }`}
          >
            <div className="aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden shadow-lg">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-800 text-center leading-tight">
              {movie.title}
            </h3>
            <p className="text-xs text-cultura-primary-600 text-center font-medium">{movie.category}</p>
          </div>
        ))}
      </div>
      
      {!showAll && movieOptions.length > 8 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full font-semibold hover:from-purple-200 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Show More Movies
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 font-medium">
          Selected: {selectedMovies.length} movies {selectedMovies.length < 2 && '(minimum 2 required)'}
        </p>
      </div>
    </QuizLayout>
  );
};

export default MoviesQuiz;