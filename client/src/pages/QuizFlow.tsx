import { useState } from 'react';
import { Router, Route, useLocation } from 'wouter';
import QuizStart from '../components/quiz/QuizStart';
import MoviesQuiz from '../components/quiz/MoviesQuiz';
import MusicQuiz from '../components/quiz/MusicQuiz';
import FashionQuiz from '../components/quiz/FashionQuiz';
import FoodQuiz from '../components/quiz/FoodQuiz';
import TravelQuiz from '../components/quiz/TravelQuiz';
import QuizResults from '../components/quiz/QuizResults';
import { TasteProfile } from '../types/taste';

const QuizFlow: React.FC = () => {
  const [tasteProfile, setTasteProfile] = useState<TasteProfile>({
    movies: [],
    music: [],
    fashion: [],
    food: [],
    travel: []
  });

  const updateTasteProfile = (domain: keyof TasteProfile, selections: string[]) => {
    setTasteProfile(prev => ({
      ...prev,
      [domain]: selections
    }));
  };

  const [location] = useLocation();
  
  // Parse the nested route
  const getQuizComponent = () => {
    if (location === '/quiz' || location === '/quiz/') {
      return <QuizStart />;
    } else if (location === '/quiz/movies') {
      return (
        <MoviesQuiz 
          onNext={(selections) => updateTasteProfile('movies', selections)}
          currentSelections={tasteProfile.movies}
        />
      );
    } else if (location === '/quiz/music') {
      return (
        <MusicQuiz 
          onNext={(selections) => updateTasteProfile('music', selections)}
          currentSelections={tasteProfile.music}
        />
      );
    } else if (location === '/quiz/fashion') {
      return (
        <FashionQuiz 
          onNext={(selections) => updateTasteProfile('fashion', selections)}
          currentSelections={tasteProfile.fashion}
        />
      );
    } else if (location === '/quiz/food') {
      return (
        <FoodQuiz 
          onNext={(selections) => updateTasteProfile('food', selections)}
          currentSelections={tasteProfile.food}
        />
      );
    } else if (location === '/quiz/travel') {
      return (
        <TravelQuiz 
          onNext={(selections) => updateTasteProfile('travel', selections)}
          currentSelections={tasteProfile.travel}
        />
      );
    } else if (location === '/quiz/results') {
      return <QuizResults tasteProfile={tasteProfile} />;
    } else {
      return <QuizStart />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {getQuizComponent()}
    </div>
  );
};

export default QuizFlow;