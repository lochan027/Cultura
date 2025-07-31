import { Request, Response } from 'express';

interface ChatRequest {
  message: string;
  culturalProfile: {
    movies: string[];
    music: string[];
    fashion: string[];
    food: string[];
    travel: string[];
    culturalDNA: {
      tasteArchetype: string;
      primaryTraits: string[];
    };
  };
}

export async function handleChatRequest(req: Request, res: Response) {
  try {
    const { message, culturalProfile }: ChatRequest = req.body;

    if (!message || !culturalProfile) {
      return res.status(400).json({ error: 'Message and cultural profile are required' });
    }

    const perplexityApiKey = process.env.PERPLEXITY_API_KEY;
    if (!perplexityApiKey) {
      return res.status(500).json({ error: 'Perplexity API key not configured' });
    }

    // Build context from user's cultural profile
    const profileContext = `
User's Cultural Profile:
- Taste Archetype: ${culturalProfile.culturalDNA.tasteArchetype}
- Primary Traits: ${culturalProfile.culturalDNA.primaryTraits.join(', ')}
- Favorite Movies: ${culturalProfile.movies.join(', ')}
- Favorite Music: ${culturalProfile.music.join(', ')}
- Fashion Style: ${culturalProfile.fashion.join(', ')}
- Food Preferences: ${culturalProfile.food.join(', ')}
- Travel Destinations: ${culturalProfile.travel.join(', ')}
`;

    const systemPrompt = `You are Cultura, a friendly cultural AI assistant. You understand the user's unique taste profile and provide personalized recommendations based on their cultural DNA. 

${profileContext}

Based on this profile, provide personalized, enthusiastic recommendations that match their taste. Be conversational, friendly, and explain why your suggestions align with their preferences. If they ask about movies, music, fashion, food, or travel, draw connections to their existing preferences.`;

    // Call Perplexity API
    const response = await fetch('https://api.perplexity.ai/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${perplexityApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 400,
        temperature: 0.7,
        top_p: 0.9,
        return_images: false,
        return_related_questions: false,
        search_recency_filter: 'month',
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response from Perplexity API');
    }

    res.json({
      message: assistantMessage,
      citations: data.citations || []
    });

  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}