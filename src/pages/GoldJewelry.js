import Carousel from '../components/Carousel';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function GoldJewelry() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [goldRate, setGoldRate] = useState(null); // per gram
  const [rateError, setRateError] = useState(null);
  const navigate = useNavigate();

// Categories for Vamana Gold Collections
  const categories = [
    { id: 'all', name: 'All Gold Jewelry', count: '500+' },
    { id: 'men', name: 'Men', count: '80+' },
    { id: 'women', name: 'Women', count: '300+' },
    { id: 'kids', name: 'Kids', count: '50+' },
    { id: 'necklaces', name: 'Necklaces', count: '120+' },
    { id: 'rings', name: 'Rings', count: '150+' },
    { id: 'earrings', name: 'Earrings', count: '100+' },
    { id: 'bangles', name: 'Bangles', count: '80+' },
    { id: 'pendants', name: 'Pendants', count: '50+' },
    { id: 'coins', name: 'Gold Coins', count: '20+' },
  ];

  // Gold Coins Section
  // Use local images for gold coins
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

// Sample Vamana Gold Collections (by category)
// Use local images for gold jewelry (ensure these exist in public/images)
const vamanaGoldCollections = [
  // MEN
  {
    id: 'm1',
    name: 'Men’s Gold Bracelet',
    category: 'men',
    weight: 15,
    image: '/images/bracelet_040.jpg',
  },
  {
    id: 'm2',
    name: 'Men’s Gold Chain',
    category: 'men',
    weight: 20,
    image: '/images/chain_men.jpg',
  },
  {
    id: 'm3',
    name: 'Men’s Gold Ring',
    category: 'men',
    weight: 8,
    image: '/images/ring_042.jpg',
  },
  // WOMEN
  {
    id: 'w1',
    name: 'Women’s Gold Necklace',
    category: 'women',
    weight: 25,
    image: '/images/design14.jpg',
  },
  {
    id: 'w2',
    name: 'Women’s Gold Ring',
    category: 'women',
    weight: 7,
    image: '/images/ring_041.jpg',
  },
  {
    id: 'w3',
    name: 'Women’s Gold Earrings',
    category: 'women',
    weight: 6,
    image: '/images/earring_1.jpg',
  },
  {
    id: 'w4',
    name: 'Women’s Gold Bangle',
    category: 'women',
    weight: 12,
    image: '/images/bangle_women.jpg',
  },
  // KIDS
  {
    id: 'k1',
    name: 'Kids Gold Pendant',
    category: 'kids',
    weight: 5,
    image: '/images/pendant_kids.jpg',
  },
  {
    id: 'k2',
    name: 'Kids Gold Bangle',
    category: 'kids',
    weight: 3,
    image: '/images/bangle_kids.jpg',
  },
  {
    id: 'k3',
    name: 'Kids Gold Earrings',
    category: 'kids',
    weight: 2,
    image: '/images/earring_kids.jpg',
  },
  // NECKLACES
  {
    id: 'n1',
    name: 'Classic Gold Necklace',
    category: 'necklaces',
    weight: 22,
    image: '/images/necklace_100.jpg',
  },
  {
    id: 'n2',
    name: 'Designer Gold Necklace',
    category: 'necklaces',
    weight: 28,
    image: '/images/necklace_101.jpg',
  },
  {
    id: 'n3',
    name: 'Temple Gold Necklace',
    category: 'necklaces',
    weight: 32,
    image: '/images/necklace_102.jpg',
  },
  // RINGS
  {
    id: 'r1',
    name: 'Gold Solitaire Ring',
    category: 'rings',
    weight: 5,
    image: '/images/ring_043.jpg',
  },
  {
    id: 'r2',
    name: 'Gold Band Ring',
    category: 'rings',
    weight: 4,
    image: '/images/ring_044.jpg',
  },
  {
    id: 'r3',
    name: 'Floral Gold Ring',
    category: 'rings',
    weight: 6,
    image: '/images/ring_045.jpg',
  },
  // EARRINGS
  {
    id: 'e1',
    name: 'Gold Stud Earrings',
    category: 'earrings',
    weight: 3,
    image: '/images/earring_2.jpg',
  },
  {
    id: 'e2',
    name: 'Gold Drop Earrings',
    category: 'earrings',
    weight: 4,
    image: '/images/earring_3.jpg',
  },
  {
    id: 'e3',
    name: 'Gold Hoop Earrings',
    category: 'earrings',
    weight: 5,
    image: '/images/earring_4.jpg',
  },
  // BANGLES
  {
    id: 'b1',
    name: 'Classic Gold Bangle',
    category: 'bangles',
    weight: 10,
    image: '/images/bangle_1.jpg',
  },
  {
    id: 'b2',
    name: 'Designer Gold Bangle',
    category: 'bangles',
    weight: 14,
    image: '/images/bangle_2.jpg',
  },
  {
    id: 'b3',
    name: 'Antique Gold Bangle',
    category: 'bangles',
    weight: 13,
    image: '/images/bangle_3.jpg',
  },
  // PENDANTS
  {
    id: 'p1',
    name: 'Gold Heart Pendant',
    category: 'pendants',
    weight: 2,
    image: '/images/pendant_1.jpg',
  },
  {
    id: 'p2',
    name: 'Gold Om Pendant',
    category: 'pendants',
    weight: 3,
    image: '/images/pendant_2.jpg',
  },
  {
    id: 'p3',
    name: 'Gold Star Pendant',
    category: 'pendants',
    weight: 2,
    image: '/images/pendant_3.jpg',
  },
  // GOLD COINS
  {
    id: 'c1',
    name: 'Lakshmi Gold Coin',
    category: 'coins',
    weight: 10,
    image: '/images/coin_lakshmi.jpg',
  },
  {
    id: 'c2',
    name: 'Gubera Gold Coin',
    category: 'coins',
    weight: 5,
    image: '/images/coin_gubera.jpg',
  },
  {
    id: 'c3',
    name: 'Om Gold Coin',
    category: 'coins',
    weight: 2,
    image: '/images/coin_om.jpg',
  },
  {
    id: 'c4',
    name: 'Custom Engraved Coin',
    category: 'coins',
    weight: 1,
    image: '/images/coin_custom.jpg',
  },
];

  // Gold Rate API Integration (replace 'YOUR_API_KEY' with your actual key)
  useEffect(() => {
    async function fetchGoldRate() {
      try {
        // Example API: https://www.goldapi.io/api/XAU/INR
        // Using provided API key
        const res = await fetch('https://www.goldapi.io/api/XAU/INR', {
          headers: {
            'x-access-token': 'goldapi-45f3dsmctdttsh-io',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) throw new Error('Failed to fetch gold rate');
        const data = await res.json();
        // goldapi returns price per troy ounce, 1 troy ounce = 31.1035 grams
        const perGram = data.price / 31.1035;
        setGoldRate(perGram);
        setRateError(null);
      } catch (err) {
        setRateError('Unable to fetch live gold rate. Showing sample rate.');
        setGoldRate(6500); // fallback sample rate per gram
      }
    }
    fetchGoldRate();
  }, []);

  // Calculate net price (with taxes, making charges, etc.)
  function calculateNetPrice(weight, baseRate) {
    const makingCharges = 500; // flat making charge per item (for demo)
    const gst = 0.03; // 3% GST
    const subtotal = weight * baseRate + makingCharges;
    const total = subtotal + subtotal * gst;
    return Math.round(total);
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price)
  };

  // Handle Buy Now (pass price to checkout)
  function handleBuyNow(item) {
    // For gold jewelry, pass all required details for checkout
    const goldRateToUse = goldRate || 6500;
    const makingCharges = 500; // match calculateNetPrice
    const gst = 0.03;
    const subtotal = item.weight * goldRateToUse + makingCharges;
    const total = Math.round(subtotal + subtotal * gst);
    const buyNowProduct = {
      ...item,
      price: total,
      goldRate: goldRateToUse,
      makingCharges,
      material: 'Gold',
      quantity: 1,
    };
    navigate('/checkout', { state: { buyNowProduct } });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mb-8">
        <Carousel>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Gold Jewelry Collection</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Discover our exquisite collection of pure gold jewelry, from traditional designs to contemporary masterpieces. <br />
              Each piece is crafted with precision and hallmarked for authenticity.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Gold Pieces</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">22K</div>
                <div className="text-sm">Pure Gold</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">BIS</div>
                <div className="text-sm">Hallmarked</div>
              </div>
            </div>
            <div className="mt-6">
              <span className="inline-block bg-yellow-700 bg-opacity-80 px-4 py-2 rounded text-lg font-semibold shadow">
                {goldRate ? (
                  <>Current Gold Rate: <span className="text-yellow-300">{formatPrice(goldRate)}/g</span></>
                ) : (
                  <span>Loading gold rate...</span>
                )}
              </span>
              {rateError && <div className="text-red-200 mt-2 text-sm">{rateError}</div>}
            </div>
          </div>
        </Carousel>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Shop by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Vamana Gold Collections by Category */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Vamana Gold Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vamanaGoldCollections
              .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
              .map((item) => (
                <div key={item.id} className="group bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
                  <div className="relative w-40 h-40 mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-40 h-40 object-cover rounded-lg border border-gray-100 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Icon Overlay */}
                    <div className="shop-action flex flex-col gap-2 absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {/* Wishlist/Like */}
                      <button className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center" aria-label="Add to wishlist" onClick={e => { e.stopPropagation(); }}>
                        <svg width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"></path></svg>
                      </button>
                      {/* Add to Bag */}
                      <button className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center" aria-label="Add to Bag" onClick={e => { e.stopPropagation(); }}>
                        <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"></path><rect x="3" y="7" width="18" height="14" rx="2"></rect><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
                      </button>
                      {/* Quick View */}
                      <button className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center" aria-label="Quick View" onClick={e => { e.stopPropagation(); }}>
                        <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"></path></svg>
                      </button>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-yellow-900 text-center">{item.name}</h3>
                  <div className="text-yellow-700 font-bold mb-2 text-center">{goldRate ? formatPrice(calculateNetPrice(item.weight, goldRate)) : '...'}</div>
                  <div className="text-sm text-gray-500 mb-2 text-center">Gold Jewelry</div>
                  {/* Order Now Button below price */}
                  <button
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-center mt-1"
                    onClick={() => handleBuyNow({ ...item, price: goldRate ? calculateNetPrice(item.weight, goldRate) : 0 })}
                    disabled={!goldRate}
                  >
                    Make Your Order
                  </button>
                </div>
              ))}
          </div>
        </div>

        {/* Gold Coins Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gold Coins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goldCoins.map((coin) => (
              <div key={coin.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={coin.image} alt={coin.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{coin.name}</h3>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Design:</span>
                    <span className="font-medium">{coin.design}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Weight:</span>
                    <span className="font-medium">{coin.weight}g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-600">
                      {goldRate ? formatPrice(calculateNetPrice(coin.weight, goldRate)) : '...'}
                    </span>
                    <button
                      className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                      onClick={() => handleBuyNow({ ...coin, price: goldRate ? calculateNetPrice(coin.weight, goldRate) : 0 })}
                      disabled={!goldRate}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Types Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Understanding Gold Purity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🏅</div>
              <h3 className="text-xl font-bold mb-2">24K Gold</h3>
              <p className="text-gray-700">99.9% pure gold. Brightest yellow, softest, used for coins and investment.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🥇</div>
              <h3 className="text-xl font-bold mb-2">22K Gold</h3>
              <p className="text-gray-700">91.6% pure gold. Most popular for jewelry in India. Durable and beautiful.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg shadow p-6 text-center">
              <div className="text-4xl mb-3">🎖️</div>
              <h3 className="text-xl font-bold mb-2">18K Gold</h3>
              <p className="text-gray-700">75% pure gold. Used for diamond jewelry and modern designs. Strong and stylish.</p>
            </div>
          </div>
        </div>

        {/* Gold Care Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gold Jewelry Care Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🧼</div>
              <h3 className="text-lg font-semibold mb-2">Gentle Cleaning</h3>
              <p className="text-gray-600 text-sm">Clean gold jewelry with mild soap and warm water. Avoid harsh chemicals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold mb-2">Proper Storage</h3>
              <p className="text-gray-600 text-sm">Store pieces separately in soft pouches to prevent scratches.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">💧</div>
              <h3 className="text-lg font-semibold mb-2">Avoid Moisture</h3>
              <p className="text-gray-600 text-sm">Remove jewelry before swimming, bathing, or exercising.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold mb-2">Regular Inspection</h3>
              <p className="text-gray-600 text-sm">Check clasps and settings regularly to avoid loss of stones.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Our Gold */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Vamana Gold Jewelry?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">BIS Hallmarked</h3>
              <p className="text-gray-600">Every piece is BIS hallmarked for purity and authenticity.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unique Designs</h3>
              <p className="text-gray-600">Traditional and contemporary designs crafted by master artisans.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
              <p className="text-gray-600">Safe, insured delivery and easy returns for peace of mind.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Explore Our Gold Collection?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of gold jewelry, from traditional bridal sets to modern everyday pieces. 
            Each piece tells a story of craftsmanship and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?category=gold"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              View All Gold Jewelry
            </Link>
            <Link
              to="/contact"
              className="border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-black transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldJewelry;