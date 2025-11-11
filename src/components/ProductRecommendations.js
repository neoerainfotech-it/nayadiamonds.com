import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { StarIcon, HeartIcon, EyeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const ProductRecommendations = ({ currentProduct, userPreferences = {} }) => {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [activeTab, setActiveTab] = useState('personalized');
  const [isLoading, setIsLoading] = useState(true);

  // Sample recommendation categories
  const recommendationTypes = [
    { id: 'personalized', label: 'For You', icon: '🎯' },
    { id: 'similar', label: 'Similar Items', icon: '🔍' },
    { id: 'trending', label: 'Trending', icon: '🔥' },
    { id: 'new', label: 'New Arrivals', icon: '✨' }
  ];

  // Sample products for recommendations
  const sampleProducts = [
    {
      id: 101,
      name: 'Diamond Tennis Bracelet',
      price: 2499,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
      category: 'Bracelets',
      rating: 4.8,
      reviews: 127,
      badge: 'Best Seller',
      isNew: false,
      isTrending: true
    },
    {
      id: 102,
      name: 'Rose Gold Pendant Necklace',
      price: 899,
      originalPrice: 1099,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
      category: 'Necklaces',
      rating: 4.9,
      reviews: 89,
      badge: 'Limited',
      isNew: true,
      isTrending: false
    },
    {
      id: 103,
      name: 'Sapphire Engagement Ring',
      price: 3499,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
      category: 'Rings',
      rating: 4.7,
      reviews: 203,
      badge: 'Popular',
      isNew: false,
      isTrending: true
    },
    {
      id: 104,
      name: 'Pearl Drop Earrings',
      price: 599,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop',
      category: 'Earrings',
      rating: 4.6,
      reviews: 156,
      badge: null,
      isNew: true,
      isTrending: false
    },
    {
      id: 105,
      name: 'Gold Chain Necklace',
      price: 1299,
      originalPrice: 1499,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop',
      category: 'Necklaces',
      rating: 4.5,
      reviews: 98,
      badge: 'Sale',
      isNew: false,
      isTrending: true
    },
    {
      id: 106,
      name: 'Emerald Cut Diamond Ring',
      price: 5499,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop',
      category: 'Rings',
      rating: 4.9,
      reviews: 67,
      badge: 'Premium',
      isNew: true,
      isTrending: false
    }
  ];

  useEffect(() => {
    // Simulate loading recommendations
    const timer = setTimeout(() => {
      setRecommendations(sampleProducts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentProduct]);

  const getFilteredRecommendations = () => {
    switch (activeTab) {
      case 'personalized':
        return recommendations.filter(p => p.rating >= 4.5);
      case 'similar':
        return recommendations.filter(p => p.category === currentProduct?.category);
      case 'trending':
        return recommendations.filter(p => p.isTrending);
      case 'new':
        return recommendations.filter(p => p.isNew);
      default:
        return recommendations;
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleQuickView = (product) => {
    // Implement quick view functionality
    console.log('Quick view:', product);
  };

  const handleAddToWishlist = (productId) => {
    // Implement wishlist functionality
    console.log('Add to wishlist:', productId);
  };

  const handleAddToCart = (product) => {
    // Implement add to cart functionality
    console.log('Add to cart:', product);
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <EyeIcon className="w-4 h-4" />
            <span>Based on your preferences</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {recommendationTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === type.id
                  ? 'bg-white text-gold-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>{type.icon}</span>
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredRecommendations().map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {product.badge && (
                    <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleQuickView(product)}
                    className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                  >
                    <EyeIcon className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product.id)}
                    className="w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
                  >
                    <HeartIcon className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-gold-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-gold-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 
                  className="font-semibold text-gray-900 mb-2 line-clamp-2 cursor-pointer hover:text-gold-600 transition-colors"
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {getFilteredRecommendations().length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <EyeIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recommendations found</h3>
            <p className="text-gray-600">Try adjusting your preferences or browse our full collection.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Recommendations are personalized based on your browsing history and preferences
          </p>
          <button
            onClick={() => navigate('/products')}
            className="text-gold-600 hover:text-gold-700 font-medium text-sm"
          >
            View All Products →
          </button>
        </div>
      </div>
    </div>
  );
};

// Alternative recommendations component for different contexts
export const CategoryRecommendations = ({ category, products, limit = 4 }) => {
  const navigate = useNavigate();

  const categoryProducts = products
    .filter(p => p.category === category)
    .slice(0, limit);

  if (categoryProducts.length === 0) return null;

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            More {category}
          </h2>
          <button
            onClick={() => navigate(`/search?category=${category}`)}
            className="text-gold-600 hover:text-gold-700 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Recently viewed products component
export const RecentlyViewed = ({ recentlyViewedProducts }) => {
  const navigate = useNavigate();

  if (!recentlyViewedProducts || recentlyViewedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentlyViewedProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRecommendations; 