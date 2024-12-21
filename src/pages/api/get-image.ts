import type { APIRoute } from 'astro';
import { checkImageExists, getImageUrl } from '../../utils/storage';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const hintId = url.searchParams.get('hintId');

    if (!hintId) {
      return new Response(JSON.stringify({ error: 'Missing hintId' }), {
        status: 400,
      });
    }

    const imageKey = `hints/${hintId}.png`;
    const exists = await checkImageExists(imageKey);

    if (exists) {
      const imageUrl = await getImageUrl(imageKey);
      return new Response(JSON.stringify({ 
        imageUrl,
        imageKey
      }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ exists: false }), {
      status: 404,
    });

  } catch (error) {
    console.error('Error getting image:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to get image',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
    });
  }
}; 