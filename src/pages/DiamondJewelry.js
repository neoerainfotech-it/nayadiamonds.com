import Carousel from '../components/Carousel';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DiamondJewelry() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Diamond Jewelry', count: '300+' },
    { id: 'rings', name: 'Diamond Rings', count: '80+' },
    { id: 'necklaces', name: 'Diamond Necklaces', count: '60+' },
    { id: 'earrings', name: 'Diamond Earrings', count: '70+' },
    { id: 'pendants', name: 'Diamond Pendants', count: '50+' },
    { id: 'sets', name: 'Diamond Sets', count: '40+' }
  ];

  const diamondTypes = [
    {
      name: 'Natural Diamonds',
      description: 'Mined from the earth, each with unique characteristics and natural beauty',
      color: 'Colorless to Fancy',
      clarity: 'FL to I3',
      cut: 'Excellent to Fair',
      bestFor: 'Investment pieces, engagement rings',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop'
    },
    {
      name: 'Lab-Grown Diamonds',
      description: 'Scientifically created diamonds with identical properties to natural diamonds',
      color: 'Colorless to Fancy',
      clarity: 'FL to I3',
      cut: 'Excellent to Fair',
      bestFor: 'Ethical choice, budget-friendly',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop'
    },
    {
      name: 'Fancy Colored Diamonds',
      description: 'Rare diamonds in colors like yellow, pink, blue, and green',
      color: 'Yellow, Pink, Blue, Green',
      clarity: 'VS to I3',
      cut: 'Excellent to Good',
      bestFor: 'Unique statement pieces',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop'
    }
  ];

  const diamondGrades = [
    {
      grade: 'D-F',
      description: 'Colorless diamonds',
      quality: 'Exceptional',
      price: 'Premium',
      bestFor: 'Investment, special occasions'
    },
    {
      grade: 'G-J',
      description: 'Near colorless diamonds',
      quality: 'Excellent',
      price: 'High',
      bestFor: 'Engagement rings, everyday luxury'
    },
    {
      grade: 'K-M',
      description: 'Faint yellow diamonds',
      quality: 'Good',
      price: 'Moderate',
      bestFor: 'Budget-friendly options'
    },
    {
      grade: 'N-Z',
      description: 'Light yellow diamonds',
      quality: 'Fair',
      price: 'Affordable',
      bestFor: 'Fashion jewelry'
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Solitaire Diamond Ring',
      price: 85000,
      carat: '1.5 carats',
      color: 'G',
      clarity: 'VS1',
      setting: '18K White Gold',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop',
      category: 'rings',
      badge: 'GIA Certified'
    },
    {
      id: 2,
      name: 'Diamond Pendant Set',
      price: 45000,
      carat: '2.2 carats',
      color: 'H',
      clarity: 'VS2',
      setting: '18K Yellow Gold',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop',
      category: 'pendants',
      badge: 'Natural'
    },
    {
      id: 3,
      name: 'Diamond Stud Earrings',
      price: 65000,
      carat: '3.0 carats',
      color: 'F',
      clarity: 'VVS1',
      setting: '18K White Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
      category: 'earrings',
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Diamond Necklace Set',
      price: 120000,
      carat: '5.5 carats',
      color: 'G',
      clarity: 'VS1',
      setting: '18K Rose Gold',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=300&fit=crop',
      category: 'sets',
      badge: 'Limited'
    }
  ];

  const careTips = [
    {
      title: 'Regular Cleaning',
      description: 'Clean diamonds with warm soapy water and a soft brush',
      icon: '💎'
    },
    {
      title: 'Professional Inspection',
      description: 'Have your diamond jewelry inspected annually by a gemologist',
      icon: '🔍'
    },
    {
      title: 'Safe Storage',
      description: 'Store diamonds separately to prevent scratching other jewelry',
      icon: '📦'
    },
    {
      title: 'Avoid Harsh Chemicals',
      description: 'Remove diamond jewelry before cleaning or swimming',
      icon: '⚠️'
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
            <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Diamond Jewelry Collection</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Discover our exquisite collection of certified diamonds, from classic solitaires to <br />
              contemporary designs. Each diamond is carefully selected for its brilliance and beauty.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-blue-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm">Diamond Pieces</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">GIA</div>
                <div className="text-sm">Certified</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">4C's</div>
                <div className="text-sm">Graded</div>
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* 4C's of Diamonds */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Understanding the 4C's</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cut</h3>
              <p className="text-gray-600 mb-4">The way a diamond is cut determines its brilliance and sparkle</p>
              <div className="text-sm text-blue-600 font-semibold">
                Excellent • Very Good • Good • Fair • Poor
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Color</h3>
              <p className="text-gray-600 mb-4">Diamond color ranges from colorless to light yellow</p>
              <div className="text-sm text-blue-600 font-semibold">
                D (Colorless) • E • F • G • H • I • J • K-Z
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity</h3>
              <p className="text-gray-600 mb-4">Measures the purity and rarity of the diamond</p>
              <div className="text-sm text-blue-600 font-semibold">
                FL • IF • VVS1 • VVS2 • VS1 • VS2 • SI1 • SI2
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Carat</h3>
              <p className="text-gray-600 mb-4">The weight of the diamond measured in carats</p>
              <div className="text-sm text-blue-600 font-semibold">
                0.01ct • 0.25ct • 0.5ct • 1ct • 2ct • 3ct+
              </div>
            </div>
          </div>
        </div>

        {/* Diamond Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Types of Diamonds</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diamondTypes.map((type, index) => (
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
                      <span className="text-sm text-gray-500">Color Range:</span>
                      <span className="font-semibold">{type.color}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Clarity Range:</span>
                      <span className="font-semibold text-blue-600">{type.clarity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Cut Quality:</span>
                      <span className="font-semibold">{type.cut}</span>
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

        {/* Color Grade Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Diamond Color Grades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {diamondGrades.map((grade, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{grade.grade}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{grade.description}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Quality:</span>
                    <span className="font-semibold">{grade.quality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-semibold text-blue-600">{grade.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best For:</span>
                    <span className="font-semibold text-xs">{grade.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Diamond Jewelry</h2>
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
                <div className="text-sm text-gray-500 mb-2 text-center">Diamond Jewelry</div>
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

        {/* Diamond Care Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Diamond Care Guide</h2>
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

        {/* Why Choose Our Diamonds */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose VJS Diamonds?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GIA Certified</h3>
              <p className="text-gray-600">All diamonds come with GIA certification for authenticity</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">4C's Graded</h3>
              <p className="text-gray-600">Every diamond is graded for cut, color, clarity, and carat</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Selection</h3>
              <p className="text-gray-600">Handpicked by certified gemologists for quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Designs</h3>
              <p className="text-gray-600">Personalized diamond jewelry designs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifetime Warranty</h3>
              <p className="text-gray-600">Comprehensive warranty on all diamond jewelry</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Value</h3>
              <p className="text-gray-600">Diamonds retain and appreciate in value over time</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Your Perfect Diamond</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            From engagement rings to everyday luxury, our diamond collection offers the perfect 
            combination of beauty, quality, and value. Let us help you find the diamond of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products?category=diamond"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg"
            >
              View All Diamond Jewelry
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiamondJewelry; 