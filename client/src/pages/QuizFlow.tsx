import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <Routes>
        <Route path="/" element={<QuizStart />} />
        <Route 
          path="/movies" 
          element={
            <MoviesQuiz 
              onNext={(selections) => updateTasteProfile('movies', selections)}
              currentSelections={tasteProfile.movies}
            />
          } 
        />
        <Route 
          path="/music" 
          element={
            <MusicQuiz 
              onNext={(selections) => updateTasteProfile('music', selections)}
              currentSelections={tasteProfile.music}
            />
          } 
        />
        <Route 
          path="/fashion" 
          element={
            <FashionQuiz 
              onNext={(selections) => updateTasteProfile('fashion', selections)}
              currentSelections={tasteProfile.fashion}
            />
          } 
        />
        <Route 
          path="/food" 
          element={
            <FoodQuiz 
              onNext={(selections) => updateTasteProfile('food', selections)}
              currentSelections={tasteProfile.food}
            />
          } 
        />
        <Route 
          path="/travel" 
          element={
            <TravelQuiz 
              onNext={(selections) => updateTasteProfile('travel', selections)}
              currentSelections={tasteProfile.travel}
            />
          } 
        />
        <Route 
          path="/results" 
          element={<QuizResults tasteProfile={tasteProfile} />} 
        />
      </Routes>
    </div>
  );
};

export default QuizFlow;