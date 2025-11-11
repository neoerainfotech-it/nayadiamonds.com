import React, { useState } from 'react';
import { EnvelopeIcon, CheckIcon } from '@heroicons/react/24/outline';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Thank You for Subscribing!</h2>
          <p className="text-xl text-green-100 mb-8">
            You'll now receive exclusive offers, new collection updates, and jewelry care tips.
          </p>
          <button
            onClick={() => setIsSubscribed(false)}
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Subscribe Another Email
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-gold-600 to-gold-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <EnvelopeIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gold-100 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new collection launches, 
            and expert jewelry care tips delivered to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                disabled={isLoading}
              />
              {error && (
                <p className="text-red-200 text-sm mt-2">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading || !email}
              className="bg-white text-gold-600 px-8 py-3 rounded-lg font-semibold hover:bg-gold-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gold-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gold-100 text-sm">
            By subscribing, you agree to our{' '}
            <a href="#" className="underline hover:text-white">Privacy Policy</a>
            {' '}and{' '}
            <a href="#" className="underline hover:text-white">Terms of Service</a>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="font-semibold mb-2">Exclusive Offers</h3>
            <p className="text-gold-100 text-sm">Get early access to sales and special discounts</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="font-semibold mb-2">New Collections</h3>
            <p className="text-gold-100 text-sm">Be the first to see our latest jewelry designs</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-semibold mb-2">Care Tips</h3>
            <p className="text-gold-100 text-sm">Expert advice on jewelry maintenance and care</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter; 