// Mapping cultural preferences to metadata for Qloo API integration
export const tasteMap = {
  movies: {
    'blade-runner': {
      title: 'Blade Runner 2049',
      genres: ['sci-fi', 'neo-noir', 'cyberpunk'],
      mood: ['contemplative', 'atmospheric', 'futuristic'],
      themes: ['technology', 'identity', 'existential']
    },
    'parasite': {
      title: 'Parasite',
      genres: ['thriller', 'dark-comedy', 'social-commentary'],
      mood: ['tense', 'thought-provoking', 'subversive'],
      themes: ['class-struggle', 'family', 'society']
    },
    'la-la-land': {
      title: 'La La Land',
      genres: ['musical', 'romance', 'drama'],
      mood: ['dreamy', 'nostalgic', 'uplifting'],
      themes: ['dreams', 'love', 'ambition']
    },
    'interstellar': {
      title: 'Interstellar',
      genres: ['sci-fi', 'drama', 'adventure'],
      mood: ['epic', 'emotional', 'cerebral'],
      themes: ['space', 'time', 'sacrifice']
    },
    'moonlight': {
      title: 'Moonlight',
      genres: ['drama', 'coming-of-age', 'lgbtq'],
      mood: ['intimate', 'poetic', 'vulnerable'],
      themes: ['identity', 'sexuality', 'masculinity']
    },
    'dune': {
      title: 'Dune',
      genres: ['sci-fi', 'epic', 'adventure'],
      mood: ['grand', 'mystical', 'intense'],
      themes: ['power', 'ecology', 'destiny']
    },
    'nomadland': {
      title: 'Nomadland',
      genres: ['drama', 'road-movie', 'slice-of-life'],
      mood: ['contemplative', 'melancholic', 'authentic'],
      themes: ['community', 'solitude', 'resilience']
    },
    'everything-everywhere': {
      title: 'Everything Everywhere All at Once',
      genres: ['comedy', 'sci-fi', 'multiverse'],
      mood: ['chaotic', 'heartfelt', 'surreal'],
      themes: ['family', 'possibility', 'connection']
    }
  },
  music: {
    'billie-eilish': {
      artist: 'Billie Eilish',
      genres: ['alternative-pop', 'electropop', 'indie'],
      mood: ['dark', 'introspective', 'ethereal'],
      style: ['minimalistic', 'atmospheric', 'experimental']
    },
    'kendrick-lamar': {
      artist: 'Kendrick Lamar',
      genres: ['hip-hop', 'conscious-rap', 'jazz-rap'],
      mood: ['intense', 'political', 'artistic'],
      style: ['lyrical', 'innovative', 'complex']
    },
    'radiohead': {
      artist: 'Radiohead',
      genres: ['alternative-rock', 'electronic', 'art-rock'],
      mood: ['melancholic', 'experimental', 'atmospheric'],
      style: ['innovative', 'cerebral', 'emotional']
    },
    'taylor-swift': {
      artist: 'Taylor Swift',
      genres: ['pop', 'country', 'indie-folk'],
      mood: ['narrative', 'emotional', 'relatable'],
      style: ['storytelling', 'melodic', 'confessional']
    },
    'the-weeknd': {
      artist: 'The Weeknd',
      genres: ['r&b', 'pop', 'electronic'],
      mood: ['dark', 'sensual', 'cinematic'],
      style: ['polished', 'atmospheric', 'retro-futuristic']
    },
    'daft-punk': {
      artist: 'Daft Punk',
      genres: ['electronic', 'house', 'disco'],
      mood: ['energetic', 'nostalgic', 'euphoric'],
      style: ['robotic', 'groove-oriented', 'innovative']
    },
    'bon-iver': {
      artist: 'Bon Iver',
      genres: ['indie-folk', 'electronic', 'experimental'],
      mood: ['intimate', 'ethereal', 'contemplative'],
      style: ['layered', 'organic', 'emotional']
    },
    'bad-bunny': {
      artist: 'Bad Bunny',
      genres: ['reggaeton', 'latin-trap', 'pop'],
      mood: ['energetic', 'confident', 'playful'],
      style: ['rhythmic', 'colorful', 'genre-blending']
    }
  },
  fashion: {
    'minimalist': {
      style: 'Minimalist Chic',
      aesthetics: ['clean-lines', 'neutral-colors', 'functional'],
      mood: ['sophisticated', 'timeless', 'effortless'],
      influences: ['scandinavian', 'architectural', 'modern']
    },
    'streetwear': {
      style: 'Urban Streetwear',
      aesthetics: ['oversized', 'graphic', 'layered'],
      mood: ['edgy', 'casual', 'expressive'],
      influences: ['hip-hop', 'skateboarding', 'youth-culture']
    },
    'vintage': {
      style: 'Vintage Inspired',
      aesthetics: ['retro', 'nostalgic', 'curated'],
      mood: ['romantic', 'unique', 'timeless'],
      influences: ['decades-past', 'thrifting', 'sustainability']
    },
    'bohemian': {
      style: 'Bohemian Flow',
      aesthetics: ['flowing', 'natural', 'eclectic'],
      mood: ['free-spirited', 'artistic', 'relaxed'],
      influences: ['travel', 'nature', 'artisan-crafts']
    },
    'business': {
      style: 'Modern Professional',
      aesthetics: ['tailored', 'polished', 'structured'],
      mood: ['confident', 'powerful', 'sophisticated'],
      influences: ['corporate', 'leadership', 'success']
    },
    'athletic': {
      style: 'Athleisure',
      aesthetics: ['comfortable', 'functional', 'performance'],
      mood: ['active', 'healthy', 'versatile'],
      influences: ['sports', 'wellness', 'lifestyle']
    },
    'artistic': {
      style: 'Artistic Expression',
      aesthetics: ['unconventional', 'creative', 'bold'],
      mood: ['experimental', 'individualistic', 'inspiring'],
      influences: ['art', 'culture', 'innovation']
    },
    'classic': {
      style: 'Timeless Classic',
      aesthetics: ['traditional', 'refined', 'quality'],
      mood: ['elegant', 'reliable', 'sophisticated'],
      influences: ['heritage', 'craftsmanship', 'tradition']
    }
  },
  food: {
    'sushi': {
      cuisine: 'Japanese Sushi',
      flavors: ['umami', 'fresh', 'delicate'],
      style: ['artisanal', 'precise', 'minimalist'],
      experience: ['ceremonial', 'refined', 'authentic']
    },
    'tacos': {
      cuisine: 'Street Tacos',
      flavors: ['bold', 'spicy', 'complex'],
      style: ['casual', 'authentic', 'communal'],
      experience: ['vibrant', 'social', 'accessible']
    },
    'ramen': {
      cuisine: 'Artisan Ramen',
      flavors: ['rich', 'savory', 'comforting'],
      style: ['crafted', 'warming', 'immersive'],
      experience: ['meditative', 'satisfying', 'cultural']
    },
    'pasta': {
      cuisine: 'Fresh Pasta',
      flavors: ['simple', 'traditional', 'wholesome'],
      style: ['handmade', 'rustic', 'family-style'],
      experience: ['comforting', 'convivial', 'timeless']
    },
    'indian': {
      cuisine: 'Spicy Indian Curry',
      flavors: ['complex', 'aromatic', 'layered'],
      style: ['traditional', 'diverse', 'regional'],
      experience: ['warming', 'adventurous', 'cultural']
    },
    'mediterranean': {
      cuisine: 'Mediterranean Bowl',
      flavors: ['fresh', 'herbaceous', 'balanced'],
      style: ['healthy', 'colorful', 'ancient'],
      experience: ['nourishing', 'leisurely', 'wholesome']
    },
    'bbq': {
      cuisine: 'BBQ Brisket',
      flavors: ['smoky', 'rich', 'indulgent'],
      style: ['traditional', 'slow-cooked', 'hearty'],
      experience: ['social', 'satisfying', 'regional']
    },
    'vegan': {
      cuisine: 'Plant-Based Bowl',
      flavors: ['clean', 'vibrant', 'innovative'],
      style: ['conscious', 'creative', 'sustainable'],
      experience: ['mindful', 'energizing', 'ethical']
    }
  },
  travel: {
    'tokyo': {
      destination: 'Tokyo, Japan',
      vibe: ['futuristic', 'traditional', 'bustling'],
      experiences: ['technology', 'culture', 'culinary'],
      style: ['urban', 'immersive', 'contrasts']
    },
    'santorini': {
      destination: 'Santorini, Greece',
      vibe: ['romantic', 'scenic', 'luxurious'],
      experiences: ['relaxation', 'beauty', 'Mediterranean'],
      style: ['island', 'photogenic', 'peaceful']
    },
    'new-york': {
      destination: 'New York City',
      vibe: ['energetic', 'diverse', 'ambitious'],
      experiences: ['arts', 'business', 'culture'],
      style: ['metropolitan', 'fast-paced', 'iconic']
    },
    'bali': {
      destination: 'Bali, Indonesia',
      vibe: ['spiritual', 'tropical', 'artistic'],
      experiences: ['wellness', 'nature', 'creativity'],
      style: ['retreat', 'authentic', 'transformative']
    },
    'patagonia': {
      destination: 'Patagonia',
      vibe: ['wild', 'pristine', 'challenging'],
      experiences: ['adventure', 'nature', 'solitude'],
      style: ['expedition', 'raw', 'contemplative']
    },
    'paris': {
      destination: 'Paris, France',
      vibe: ['romantic', 'artistic', 'sophisticated'],
      experiences: ['culture', 'cuisine', 'history'],
      style: ['classic', 'elegant', 'inspirational']
    },
    'iceland': {
      destination: 'Reykjavik, Iceland',
      vibe: ['mystical', 'stark', 'unique'],
      experiences: ['nature', 'Nordic', 'otherworldly'],
      style: ['minimalist', 'dramatic', 'authentic']
    },
    'morocco': {
      destination: 'Marrakech, Morocco',
      vibe: ['exotic', 'sensory', 'historical'],
      experiences: ['markets', 'architecture', 'traditions'],
      style: ['immersive', 'colorful', 'ancient']
    }
  }
};

// Helper function to get enriched data for selections
export const getEnrichedPreferences = (domain: keyof typeof tasteMap, selections: string[]) => {
  return selections.map(id => tasteMap[domain][id]).filter(Boolean);
};