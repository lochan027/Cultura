import { useState } from 'react';
import { X, Share2, Download, Copy, Check, Sparkles, Film, Music, Shirt, UtensilsCrossed, MapPin, User } from 'lucide-react';
import { EnrichedTasteProfile } from '../types/taste';

interface ShareProfileCardProps {
  enrichedProfile: EnrichedTasteProfile;
  onClose: () => void;
}

const ShareProfileCard: React.FC<ShareProfileCardProps> = ({ enrichedProfile, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [userName, setUserName] = useState('');

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'movies': return <Film className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      case 'fashion': return <Shirt className="w-4 h-4" />;
      case 'food': return <UtensilsCrossed className="w-4 h-4" />;
      case 'travel': return <MapPin className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const generateShareableCard = () => {
    const cardData = {
      archetype: enrichedProfile.culturalDNA.tasteArchetype,
      traits: enrichedProfile.culturalDNA.primaryTraits.slice(0, 3),
      topPicks: {
        movies: enrichedProfile.movies.slice(0, 2),
        music: enrichedProfile.music.slice(0, 2),
        fashion: enrichedProfile.fashion.slice(0, 2),
        food: enrichedProfile.food.slice(0, 2),
        travel: enrichedProfile.travel.slice(0, 2)
      }
    };
    const namePrefix = userName ? `🌟 ${userName}'s Cultural DNA by Cultura` : `🌟 My Cultural DNA by Cultura`;
    return `${namePrefix}

🎭 Taste Archetype: ${cardData.archetype}

✨ Primary Traits:
${cardData.traits.map(trait => `• ${trait}`).join('\n')}

🎬 Movies: ${cardData.topPicks.movies.join(', ')}
🎵 Music: ${cardData.topPicks.music.join(', ')}
👗 Fashion: ${cardData.topPicks.fashion.join(', ')}
🍜 Food: ${cardData.topPicks.food.join(', ')}
✈️ Travel: ${cardData.topPicks.travel.join(', ')}

Discover your cultural DNA at cultura-app.com`;
  };

  const handleShare = async () => {
    const shareText = generateShareableCard();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Cultural DNA by Cultura',
          text: shareText,
        });
      } catch (error) {
        console.log('Share canceled');
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyLink = () => {
    const shareText = generateShareableCard();
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 text-center border-b border-cultura-neutral-200 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-cultura-neutral-400 hover:text-cultura-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-black text-gradient mb-2">Share Your Cultural DNA</h2>
          <p className="text-cultura-neutral-600">Show off your unique taste profile!</p>
        </div>

        {/* Preview Card */}
        <div className="p-6">
          <div className="bg-gradient-to-br from-cultura-purple-500 via-cultura-pink-500 to-cultura-orange-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                <span className="font-bold text-lg">Cultura</span>
              </div>
              <div className="text-xs opacity-80">Cultural DNA</div>
            </div>

            <h3 className="text-2xl font-black mb-2">{enrichedProfile.culturalDNA.tasteArchetype}</h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {enrichedProfile.culturalDNA.primaryTraits.slice(0, 3).map((trait, index) => (
                <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                  {trait}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {Object.entries(enrichedProfile).map(([domain, preferences]) => {
                if (domain === 'crossDomain' || domain === 'culturalDNA' || !Array.isArray(preferences)) return null;
                
                return (
                  <div key={domain} className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center gap-2 mb-1">
                      {getDomainIcon(domain)}
                      <span className="font-semibold capitalize">{domain}</span>
                    </div>
                    <div className="text-xs opacity-90">
                      {preferences.slice(0, 2).join(', ')}
                      {preferences.length > 2 && '...'}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/20 text-center text-xs opacity-80">
              Discover your cultural DNA at cultura-app.com
            </div>
          </div>
        </div>

        {/* Optional Name Input */}
        <div className="px-6 pb-4">
          <label className="block text-sm font-semibold text-cultura-neutral-700 mb-2">
            Add your name (optional):
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cultura-neutral-400" />
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Your name"
              className="w-full pl-10 pr-4 py-3 glass-effect rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-cultura-purple-500 text-cultura-neutral-800 placeholder-cultura-neutral-400"
            />
          </div>
        </div>

        {/* Share Options */}
        <div className="p-6 border-t border-cultura-neutral-200">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-cultura-purple-600 to-cultura-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              Share
            </button>
            
            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 border-2 border-cultura-purple-600 text-cultura-purple-600 px-4 py-3 rounded-xl font-semibold hover:bg-cultura-purple-50 transition-all duration-300"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Text'}
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-3 text-cultura-neutral-500 hover:text-cultura-neutral-700 py-2 font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareProfileCard;