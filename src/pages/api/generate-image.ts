import type { APIRoute } from 'astro';
import Replicate from 'replicate';
import { saveToStorage } from '../../utils/storage';

const replicate = new Replicate({
  auth: import.meta.env.REPLICATE_API_TOKEN,
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { prompt, hintId } = await request.json();
    console.log('Generating image for hint:', hintId, 'with prompt:', prompt);

    if (!prompt || !hintId) {
      console.error('Missing prompt or hintId');
      return new Response(JSON.stringify({ error: 'Missing prompt or hintId' }), {
        status: 400,
      });
    }

    // Generate image using Stable Diffusion
    console.log('Calling Replicate API...');
    const output = await replicate.run(
      "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
      {
        input: {
          prompt: prompt,
          width: 768,
          height: 768,
        }
      }
    );

    console.log('Replicate response:', output);

    // Handle different output formats
    let generatedImageUrl: string | null = null;

    if (Array.isArray(output)) {
      generatedImageUrl = output[0];
    } else if (typeof output === 'object' && output !== null) {
      const possibleUrls = Object.values(output).filter(value => 
        typeof value === 'string' && value.startsWith('http')
      );
      generatedImageUrl = possibleUrls[0] || null;
    } else if (typeof output === 'string' && (output as string).startsWith('http')) {
      generatedImageUrl = output;
    }

    if (!generatedImageUrl) {
      console.error('Invalid output format from Replicate:', output);
      throw new Error('Invalid output format from Replicate');
    }

    console.log('Generated image URL:', generatedImageUrl);

    // Save the image to S3
    const { url: savedImageUrl, key: imageKey } = await saveToStorage(generatedImageUrl, hintId);

    return new Response(JSON.stringify({ 
      imageUrl: savedImageUrl,
      imageKey: imageKey
    }), {
      status: 200,
    });

  } catch (error) {
    console.error('Error generating image:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to generate image',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
    });
  }
}; 