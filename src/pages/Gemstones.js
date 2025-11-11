import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Gemstones() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Gemstones', count: '200+' },
    { id: 'ruby', name: 'Ruby', count: '30+' },
    { id: 'emerald', name: 'Emerald', count: '25+' },
    { id: 'sapphire', name: 'Sapphire', count: '35+' },
    { id: 'diamond', name: 'Diamond', count: '50+' },
    { id: 'pearl', name: 'Pearl', count: '20+' },
    { id: 'navratna', name: 'Navratna', count: '15+' }
  ];

  const gemstoneTypes = [
    {
      name: 'Ruby',
      description: 'The king of gemstones, symbolizing passion, energy, and courage',
      color: 'Deep Red',
      hardness: '9/10',
      birthstone: 'July',
      properties: 'Enhances leadership, promotes vitality',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop'
    },
    {
      name: 'Emerald',
      description: 'The queen of gemstones, representing love, fertility, and rebirth',
      color: 'Rich Green',
      hardness: '7.5-8/10',
      birthstone: 'May',
      properties: 'Promotes harmony, enhances intuition',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    },
    {
      name: 'Sapphire',
      description: 'Symbol of wisdom, loyalty, and nobility in various colors',
      color: 'Blue, Pink, Yellow',
      hardness: '9/10',
      birthstone: 'September',
      properties: 'Brings peace, enhances communication',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop'
    },
    {
      name: 'Diamond',
      description: 'The hardest natural substance, symbolizing eternal love',
      color: 'Colorless, Various',
      hardness: '10/10',
      birthstone: 'April',
      properties: 'Enhances clarity, promotes strength',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop'
    },
    {
      name: 'Pearl',
      description: 'Organic gemstone formed in mollusks, symbolizing purity',
      color: 'White, Pink, Black',
      hardness: '2.5-4.5/10',
      birthstone: 'June',
      properties: 'Promotes emotional balance, enhances beauty',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    },
    {
      name: 'Navratna',
      description: 'Sacred combination of nine precious gemstones in Vedic astrology',
      color: 'Multi-colored',
      hardness: 'Varies',
      birthstone: 'N/A',
      properties: 'Complete planetary protection, holistic benefits',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Natural Ruby Ring',
      price: 45000,
      stone: 'Ruby',
      weight: '2.5 carats',
      setting: '18K Gold',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop',
      category: 'ruby',
      badge: 'Certified'
    },
    {
      id: 2,
      name: 'Emerald Pendant Set',
      price: 35000,
      stone: 'Emerald',
      weight: '3.2 carats',
      setting: '22K Gold',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop',
      category: 'emerald',
      badge: 'Natural'
    },
    {
      id: 3,
      name: 'Blue Sapphire Earrings',
      price: 28000,
      stone: 'Sapphire',
      weight: '4.1 carats',
      setting: '18K Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
      category: 'sapphire',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Navratna Bracelet',
      price: 65000,
      stone: 'Navratna',
      weight: 'Multi-stone',
      setting: '22K Gold',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop',
      category: 'navratna',
      badge: 'Sacred'
    }
  ];

  const careTips = [
    {
      title: 'Gentle Cleaning',
      description: 'Clean gemstones with mild soap and warm water using a soft brush',
      icon: '🧼'
    },
    {
      title: 'Proper Storage',
      description: 'Store each gemstone separately in soft pouches to prevent scratches',
      icon: '📦'
    },
    {
      title: 'Avoid Chemicals',
      description: 'Keep gemstones away from harsh chemicals, perfumes, and cosmetics',
      icon: '⚠️'
    },
    {
      title: 'Regular Inspection',
      description: 'Have your gemstone jewelry professionally inspected annually',
      icon: '🔍'
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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Gemstone Jewelry Collection</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Discover the mystical world of precious gemstones. Each stone carries unique properties, 
              colors, and energies that have fascinated humanity for centuries.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-purple-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm">Gemstone Pieces</div>
              </div>
              <div className="bg-purple-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">Natural</div>
                <div className="text-sm">Certified Stones</div>
              </div>
              <div className="bg-purple-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">Vedic</div>
                <div className="text-sm">Astrology</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Shop by Gemstone</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Gemstone Types Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Explore Precious Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gemstoneTypes.map((stone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200">
                  <img
                    src={stone.image}
                    alt={stone.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{stone.name}</h3>
                  <p className="text-gray-600 mb-4">{stone.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Color:</span>
                      <span className="font-semibold">{stone.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Hardness:</span>
                      <span className="font-semibold text-purple-600">{stone.hardness}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Birthstone:</span>
                      <span className="font-semibold">{stone.birthstone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Properties:</span>
                      <span className="font-semibold text-sm">{stone.properties}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Gemstone Jewelry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.badge && (
                    <div className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Stone:</span>
                      <span className="font-medium text-purple-600">{product.stone}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Weight:</span>
                      <span className="font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Setting:</span>
                      <span className="font-medium">{product.setting}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">{formatPrice(product.price)}</span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-500 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gemstone Care Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Gemstone Care Guide</h2>
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

        {/* Vedic Astrology Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Vedic Astrology & Gemstones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Planetary Gemstones</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                  <span className="text-2xl mr-4">☀️</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sun - Ruby</h4>
                    <p className="text-sm text-gray-600">Enhances leadership, confidence, and vitality</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <span className="text-2xl mr-4">🌙</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Moon - Pearl</h4>
                    <p className="text-sm text-gray-600">Promotes emotional balance and mental peace</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-2xl mr-4">🪐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mars - Red Coral</h4>
                    <p className="text-sm text-gray-600">Increases courage, energy, and physical strength</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="text-2xl mr-4">☿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mercury - Emerald</h4>
                    <p className="text-sm text-gray-600">Enhances communication and business success</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Navratna Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Protection</h4>
                    <p className="text-sm text-gray-600">Protects against all planetary malefic effects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Healing</h4>
                    <p className="text-sm text-gray-600">Balances all chakras and energy centers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Spiritual Growth</h4>
                    <p className="text-sm text-gray-600">Enhances spiritual awareness and meditation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1">•</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Life Harmony</h4>
                    <p className="text-sm text-gray-600">Brings balance to all aspects of life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Gemstones */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose VJS Gemstones?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Certified Quality</h3>
              <p className="text-gray-600">All gemstones come with GIA or IGI certification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧘</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vedic Consultation</h3>
              <p className="text-gray-600">Expert astrological guidance for gemstone selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Stones</h3>
              <p className="text-gray-600">100% natural, untreated gemstones for authentic properties</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Designs</h3>
              <p className="text-gray-600">Personalized jewelry designs with your chosen gemstones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600">Deep understanding of gemstone properties and astrology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Support</h3>
              <p className="text-gray-600">Ongoing care and consultation for your gemstone jewelry</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Discover Your Perfect Gemstone</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're seeking astrological benefits, birthstone jewelry, or simply the beauty of 
            natural gemstones, our collection offers something truly special for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?category=gemstones"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-colors shadow-lg"
            >
              View All Gemstones
            </Link>
            <Link
              to="/contact"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              Astrology Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gemstones; 