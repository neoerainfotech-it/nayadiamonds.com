import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const goldCoins = [
  {
    id: 'coin1',
    name: 'Lakshmi Gold Coin',
    design: 'Lakshmi',
    weight: 10,
    image: '/images/coin_lakshmi.jpg',
  },
  {
    id: 'coin2',
    name: 'Gubera Gold Coin',
    design: 'Gubera',
    weight: 5,
    image: '/images/coin_gubera.jpg',
  },
  {
    id: 'coin3',
    name: 'Om Gold Coin',
    design: 'Om',
    weight: 2,
    image: '/images/coin_om.jpg',
  },
  {
    id: 'coin4',
    name: 'Custom Engraved Coin',
    design: 'Custom',
    weight: 1,
    image: '/images/coin_custom.jpg',
  },
];

function GoldCoins() {
  const [goldRate, setGoldRate] = useState(null);
  const [rateError, setRateError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGoldRate() {
      try {
        const res = await fetch('https://www.goldapi.io/api/XAU/INR', {
          headers: {
            'x-access-token': 'goldapi-45f3dsmctdttsh-io',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) throw new Error('Failed to fetch gold rate');
        const data = await res.json();
        const perGram = data.price / 31.1035;
        setGoldRate(perGram);
        setRateError(null);
      } catch (err) {
        setRateError('Unable to fetch live gold rate. Showing sample rate.');
        setGoldRate(6500);
      }
    }
    fetchGoldRate();
  }, []);

  function calculateNetPrice(weight, baseRate) {
    const makingCharges = 200; // lower for coins
    const gst = 0.03;
    const subtotal = weight * baseRate + makingCharges;
    const total = subtotal + subtotal * gst;
    return Math.round(total);
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  function handleBuyNow(coin) {
    const goldRateToUse = goldRate || 6500;
    const makingCharges = 200;
    const gst = 0.03;
    const subtotal = coin.weight * goldRateToUse + makingCharges;
    const total = Math.round(subtotal + subtotal * gst);
    const buyNowProduct = {
      ...coin,
      price: total,
      goldRate: goldRateToUse,
      makingCharges,
      material: 'Gold',
      quantity: 1,
    };
    navigate('/checkout', { state: { buyNowProduct } });
  }

  return (
    <div className="min-h-screen bg-yellow-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-900 mb-4">Gold Coins Collection</h1>
          <p className="text-lg text-yellow-800 mb-2">Shop pure gold coins for investment, gifting, and auspicious occasions. All coins are BIS hallmarked and crafted with precision.</p>
          <span className="inline-block bg-yellow-200 px-4 py-2 rounded text-lg font-semibold shadow">
            {goldRate ? (
              <>Current Gold Rate: <span className="text-yellow-700">{formatPrice(goldRate)}/g</span></>
            ) : (
              <span>Loading gold rate...</span>
            )}
          </span>
          {rateError && <div className="text-red-600 mt-2 text-sm">{rateError}</div>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goldCoins.map((coin) => (
            <div key={coin.id} className="group bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
              <div className="relative w-40 h-40 mb-3">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-40 h-40 object-cover rounded-lg border border-yellow-200 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
                <div className="shop-action flex flex-col gap-2 absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center" aria-label="Add to wishlist" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"></path></svg>
                  </button>
                  <button className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center" aria-label="Add to Bag" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"></path><rect x="3" y="7" width="18" height="14" rx="2"></rect><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
                  </button>
                  <button className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center" aria-label="Quick View" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"></path></svg>
                  </button>
                </div>
              </div>
              <h3 className="text-base font-semibold mb-1 text-yellow-900 text-center">{coin.name}</h3>
              <div className="text-yellow-700 font-bold mb-2 text-center">{goldRate ? formatPrice(calculateNetPrice(coin.weight, goldRate)) : '...'}</div>
              <div className="text-sm text-gray-500 mb-2 text-center">{coin.design} Design • {coin.weight}g</div>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-center mt-1"
                onClick={() => handleBuyNow({ ...coin, price: goldRate ? calculateNetPrice(coin.weight, goldRate) : 0 })}
                disabled={!goldRate}
              >
                Make Your Order
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-yellow-900 mb-4">Why Buy Gold Coins from Vamana?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-yellow-100 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">✅</div>
              <h4 className="font-semibold mb-2">BIS Hallmarked</h4>
              <p className="text-yellow-800 text-sm">All coins are BIS hallmarked for purity and authenticity.</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold mb-2">Perfect for Gifting</h4>
              <p className="text-yellow-800 text-sm">Ideal for weddings, festivals, and auspicious occasions.</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-semibold mb-2">Secure Delivery</h4>
              <p className="text-yellow-800 text-sm">Insured, fast shipping and easy returns for peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldCoins;
