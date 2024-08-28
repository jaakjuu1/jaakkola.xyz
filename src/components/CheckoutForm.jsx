import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js'; // Import loadStripe

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  async function handleCheckout(event) {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted with email:', email);
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('productId', 'prod_QjwbRopi1CfYWO');

      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error('Network response was not ok');
      }

      const { id } = await response.json();
      const stripe = await loadStripe(`${import.meta.env.PUBLIC_STRIPE_PUBLISHABLE_KEY}`); // Use loadStripe and VITE_ prefix
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  }

  async function fetchDownloadUrl(sessionId) {
    try {
      const response = await fetch(`/success?session_id=${sessionId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const { downloadUrl } = await response.json();
      setDownloadUrl(downloadUrl);
    } catch (error) {
      console.error('Error fetching download URL:', error);
    }
  }

  useEffect(() => {
    if (window.location.search.includes('session_id')) {
      const params = new URLSearchParams(window.location.search);
      fetchDownloadUrl(params.get('session_id'));
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Checkout</h2>
        <form onSubmit={handleCheckout} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300"
          />
          <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300" type="submit">Buy Now</button>
        </form>

        {downloadUrl && (
          <a className="block mt-4 text-center bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300" href={downloadUrl} download>
            Download your file
          </a>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;