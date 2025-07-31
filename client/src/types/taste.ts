export interface TasteProfile {
  movies: string[];
  music: string[];
  fashion: string[];
  food: string[];
  travel: string[];
}

export interface QuizOption {
  id: string;
  title: string;
  image: string;
  category?: string;
  tags?: string[];
}

export interface CrossDomainInsights {
  moviesToMusic: string[];
  musicToFashion: string[];
  fashionToFood: string[];
  foodToTravel: string[];
  travelToMovies: string[];
}

export interface EnrichedTasteProfile extends TasteProfile {
  crossDomain: CrossDomainInsights;
  culturalDNA: {
    primaryTraits: string[];
    secondaryTraits: string[];
    tasteArchetype: string;
  };
}