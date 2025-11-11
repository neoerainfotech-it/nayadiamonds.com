import Carousel from '../components/Carousel';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SilverJewelry() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Silver Jewelry', count: '400+' },
    { id: 'necklaces', name: 'Silver Necklaces', count: '100+' },
    { id: 'rings', name: 'Silver Rings', count: '120+' },
    { id: 'earrings', name: 'Silver Earrings', count: '80+' },
    { id: 'bangles', name: 'Silver Bangles', count: '60+' },
    { id: 'anklets', name: 'Silver Anklets', count: '40+' }
  ];

  const silverTypes = [
    {
      name: '925 Sterling Silver',
      description: 'Premium silver jewelry with 92.5% silver content, the international standard for quality',
      purity: '92.5%',
      color: 'Bright Silver',
      bestFor: 'Fine jewelry, daily wear',
      image: ''
    },
    {
      name: '999 Fine Silver',
      description: 'Pure silver jewelry with 99.9% silver content, perfect for investment and traditional pieces',
      purity: '99.9%',
      color: 'Pure Silver',
      bestFor: 'Investment pieces, traditional jewelry',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop'
    },
    {
      name: 'Oxidized Silver',
      description: 'Artistically treated silver with a dark, antique finish for a vintage look',
      purity: '92.5%',
      color: 'Antique Black',
      bestFor: 'Vintage designs, statement pieces',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Traditional Silver Necklace Set',
      price: 8500,
      weight: '45 grams',
      purity: '925',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
      category: 'necklaces',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Modern Silver Ring',
      price: 2500,
      weight: '8 grams',
      purity: '925',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop',
      category: 'rings',
      badge: 'New'
    },
    {
      id: 3,
      name: 'Designer Silver Earrings',
      price: 1800,
      weight: '12 grams',
      purity: '925',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop',
      category: 'earrings',
      badge: 'Popular'
    },
    {
      id: 4,
      name: 'Antique Silver Bangles',
      price: 3200,
      weight: '25 grams',
      purity: '925',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
      category: 'bangles',
      badge: 'Limited'
    }
  ];

  const careTips = [
    {
      title: 'Regular Polishing',
      description: 'Use a silver polishing cloth to maintain the shine and remove tarnish',
      icon: '✨'
    },
    {
      title: 'Proper Storage',
      description: 'Store in anti-tarnish bags or airtight containers to prevent oxidation',
      icon: '📦'
    },
    {
      title: 'Avoid Moisture',
      description: 'Remove silver jewelry before swimming, showering, or exercising',
      icon: '💧'
    },
    {
      title: 'Gentle Cleaning',
      description: 'Clean with mild soap and warm water, then dry thoroughly',
      icon: '🧼'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="mb-8">
        <Carousel>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30">
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Silver Jewelry Collection</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Explore our stunning collection of sterling silver jewelry, from elegant everyday pieces to <br />
              statement designs. Each piece combines affordability with timeless beauty.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-gray-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">400+</div>
                <div className="text-sm">Silver Pieces</div>
              </div>
              <div className="bg-gray-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">925</div>
                <div className="text-sm">Sterling Silver</div>
              </div>
              <div className="bg-gray-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">BIS</div>
                <div className="text-sm">Hallmarked</div>
              </div>
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
                    ? 'bg-gray-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Silver Types Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Understanding Silver Purity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {silverTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Purity:</span>
                      <span className="font-semibold text-gray-600">{type.purity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Color:</span>
                      <span className="font-semibold">{type.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Best For:</span>
                      <span className="font-semibold text-sm">{type.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Silver Jewelry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((item) => (
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
                <div className="text-yellow-700 font-bold mb-2 text-center">₹{item.price}</div>
                <div className="text-sm text-gray-500 mb-2 text-center">Silver Jewelry</div>
                {/* Order Now Button below price */}
                <button
                  className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-center mt-1"
                  // onClick={...}
                >
                  Make Your Order
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Care Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Silver Jewelry Care Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Silver */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Vamana Silver Jewelry?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">925 Sterling Silver</h3>
              <p className="text-gray-600">All our silver jewelry is made from 92.5% pure sterling silver</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unique Designs</h3>
              <p className="text-gray-600">Handcrafted pieces with contemporary and traditional designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Luxury</h3>
              <p className="text-gray-600">Premium quality silver jewelry at accessible price points</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">1-year warranty on all silver jewelry pieces</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">Sustainable practices and recycled silver materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Gifts</h3>
              <p className="text-gray-600">Beautiful packaging and gift-ready presentation</p>
            </div>
          </div>
        </div>

        {/* Silver Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits of Silver Jewelry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Benefits</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Natural antimicrobial properties that help prevent infections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Helps regulate body temperature and improve blood circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Believed to have calming effects and reduce stress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Hypoallergenic properties suitable for sensitive skin</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Style Benefits</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Versatile metal that complements all skin tones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Perfect for both casual and formal occasions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Easy to layer and mix with other jewelry pieces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Timeless appeal that never goes out of style</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Our Silver Collection</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From delicate everyday pieces to bold statement jewelry, our silver collection offers 
            something for every style and occasion. Experience the perfect blend of elegance and affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?category=silver"
              className="bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-500 transition-colors shadow-lg"
            >
              View All Silver Jewelry
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-600 text-gray-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-600 hover:text-white transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SilverJewelry; 