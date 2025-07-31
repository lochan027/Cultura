import React from 'react';
import { EnrichedTasteProfile } from '../types/taste';
import { Film, Music, Shirt, UtensilsCrossed, MapPin, Sparkles } from 'lucide-react';

interface CulturalDNACardProps {
  enrichedProfile: EnrichedTasteProfile;
}

const CulturalDNACard: React.FC<CulturalDNACardProps> = ({ enrichedProfile }) => {
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'movies': return <Film className="w-5 h-5" />;
      case 'music': return <Music className="w-5 h-5" />;
      case 'fashion': return <Shirt className="w-5 h-5" />;
      case 'food': return <UtensilsCrossed className="w-5 h-5" />;
      case 'travel': return <MapPin className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border border-white/20">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Your Taste Archetype: {enrichedProfile.culturalDNA.tasteArchetype}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {enrichedProfile.culturalDNA.primaryTraits.map((trait, index) => (
            <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold shadow-md">
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Domain Preferences */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        {Object.entries(enrichedProfile).map(([domain, preferences]) => {
          if (domain === 'crossDomain' || domain === 'culturalDNA' || !Array.isArray(preferences)) return null;
          
          return (
            <div key={domain} className="text-center">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-3 shadow-lg">
                {getDomainIcon(domain)}
              </div>
              <h3 className="font-bold text-gray-800 capitalize mb-2 text-lg">{domain}</h3>
              <div className="space-y-1">
                {preferences.slice(0, 2).map((pref, index) => (
                  <p key={index} className="text-sm text-gray-700 font-medium">{pref}</p>
                ))}
                {preferences.length > 2 && (
                  <p className="text-sm text-purple-600 font-medium">+{preferences.length - 2} more</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cross-Domain Insights */}
      <div className="border-t pt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Cross-Domain Connections
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(enrichedProfile.crossDomain).map(([connection, insights]) => {
            const [from, to] = connection.replace(/([A-Z])/g, ' $1').split(' to ');
            return (
              <div key={connection} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-4 shadow-md">
                <h4 className="font-semibold text-gray-800 mb-3 capitalize">
                  {from} → {to}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {insights.slice(0, 3).map((insight, index) => (
                    <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {insight}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Secondary Traits */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-700 mb-3 font-semibold">Secondary Traits:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {enrichedProfile.culturalDNA.secondaryTraits.map((trait, index) => (
            <span key={index} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulturalDNACard;