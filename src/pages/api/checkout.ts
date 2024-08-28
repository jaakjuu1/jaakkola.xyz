import type { APIRoute } from "astro";
import Stripe from 'stripe';

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get('email');
    const productId = data.get('productId');

    // Validate the data
    if (!email || !productId) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price: 'price_1PsSiJBI1O6hgrOjAlbcCBoC', // Replace with your price ID
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4321/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:4321/cancel',
    });

    return new Response(JSON.stringify({ id: session.id }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return new Response(JSON.stringify({ error: 'Failed to create session' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}