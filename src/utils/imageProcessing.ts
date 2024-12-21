import type { Hint } from '../config/hints';

export const processHintImage = async (hint: Hint): Promise<Hint> => {
  try {
    const hintId = hint.riddle.split('').reduce((hash, char) => 
      ((hash << 5) - hash) + char.charCodeAt(0), 0).toString(36);

    // If there's no image to generate, return as is
    if (!hint.imagePrompt) {
      console.log('No image prompt for hint:', hint.id);
      return hint;
    }

    const checkResponse = await fetch(`/api/get-image?hintId=${hintId}`);
    
    if (checkResponse.ok) {
      const data = await checkResponse.json();
      return {
        ...hint,
        imageUrl: data.imageUrl,
        imageKey: data.imageKey
      };
    }

    const generateResponse = await fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: hint.imagePrompt,
        hintId: hintId,
      }),
    });

    const data = await generateResponse.json();
    
    if (data.imageUrl && data.imageKey) {
      return {
        ...hint,
        imageUrl: data.imageUrl,
        imageKey: data.imageKey
      };
    }
    
    return hint;
  } catch (error) {
    console.error('Error processing image:', error);
    return hint;
  }
}; 