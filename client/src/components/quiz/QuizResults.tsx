import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Sparkles, MessageCircle, Loader } from 'lucide-react';
import { TasteProfile, EnrichedTasteProfile } from '../../types/taste';
import CulturalDNACard from '../CulturalDNACard';

interface QuizResultsProps {
  tasteProfile: TasteProfile;
}

const QuizResults: React.FC<QuizResultsProps> = ({ tasteProfile }) => {
  const [enrichedProfile, setEnrichedProfile] = useState<EnrichedTasteProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Simulate API call to enrich taste profile with Qloo data
    const enrichProfile = async () => {
      // This would normally call your backend API which integrates with Qloo
      setTimeout(() => {
        const mockEnrichedProfile: EnrichedTasteProfile = {
          ...tasteProfile,
          crossDomain: {
            moviesToMusic: ['Ambient Electronic', 'Post-Rock', 'Cinematic Soundtracks'],
            musicToFashion: ['Minimalist Streetwear', 'Vintage Band Tees', 'Architectural Silhouettes'],
            fashionToFood: ['Artisanal Coffee', 'Small Plate Dining', 'Farm-to-Table'],
            foodToTravel: ['Food Markets', 'Culinary Tours', 'Local Street Food'],
            travelToMovies: ['Foreign Cinema', 'Documentary Films', 'Travel Narratives']
          },
          culturalDNA: {
            primaryTraits: ['Creative Explorer', 'Aesthetic Curator', 'Cultural Synthesizer'],
            secondaryTraits: ['Experiential Seeker', 'Authentic Connector', 'Trend Anticipator'],
            tasteArchetype: 'The Cultural Curator'
          }
        };
        setEnrichedProfile(mockEnrichedProfile);
        setLoading(false);
      }, 2000);
    };

    enrichProfile();
  }, [tasteProfile]);

  const handleStartChat = () => {
    // Store enriched profile in sessionStorage since wouter doesn't support state
    sessionStorage.setItem('enrichedProfile', JSON.stringify(enrichedProfile));
    setLocation('/chat');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center">
          <Loader className="w-16 h-16 text-white animate-spin mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">
            Analyzing Your Cultural DNA
          </h2>
          <p className="text-white/80 text-lg drop-shadow-sm">
            Processing your preferences through Qloo's Taste AI™...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-full mb-6 border border-white/20">
            <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Your Cultural DNA
          </h1>
          <p className="text-xl text-white/90 drop-shadow-sm">
            Here's what makes your taste unique
          </p>
        </div>

        {enrichedProfile && (
          <>
            <CulturalDNACard enrichedProfile={enrichedProfile} />
            
            <div className="text-center mt-12">
              <button
                onClick={handleStartChat}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-purple-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with Cultura
              </button>
              <p className="text-sm text-white/70 mt-4 drop-shadow-sm">
                Ask questions, get recommendations, or explore your taste connections
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizResults;