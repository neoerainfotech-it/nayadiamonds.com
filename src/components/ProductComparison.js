import React, { useState } from 'react';
import { XMarkIcon, StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const ProductComparison = ({ isOpen, onClose, products = [] }) => {
  const [wishlistedItems, setWishlistedItems] = useState(new Set());

  if (!isOpen) return null;

  const toggleWishlist = (productId) => {
    const newWishlisted = new Set(wishlistedItems);
    if (newWishlisted.has(productId)) {
      newWishlisted.delete(productId);
    } else {
      newWishlisted.add(productId);
    }
    setWishlistedItems(newWishlisted);
  };

  const getComparisonData = () => {
    const data = {
      price: [],
      category: [],
      material: [],
      weight: [],
      occasion: [],
      features: new Set(),
      ratings: []
    };

    products.forEach(product => {
      data.price.push(product.price);
      data.category.push(product.category);
      data.material.push(product.material);
      data.weight.push(product.weight || 'N/A');
      data.occasion.push(product.occasion || 'N/A');
      data.ratings.push(4.8); // Mock rating
      
      if (product.features) {
        product.features.forEach(feature => data.features.add(feature));
      }
    });

    return data;
  };

  const comparisonData = getComparisonData();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold text-gray-900">Product Comparison</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Products to Compare</h3>
              <p className="text-gray-600 mb-6">
                Add products to your comparison list to see them side by side.
              </p>
              <button
                onClick={onClose}
                className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-900">Features</th>
                    {products.map((product, index) => (
                      <th key={product.id} className="text-center p-4 font-semibold text-gray-900 min-w-[250px]">
                        <div className="relative">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="absolute top-0 right-0 p-1 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            {wishlistedItems.has(product.id) ? (
                              <HeartIconSolid className="w-5 h-5 text-red-500" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                          {product.badge && (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full mb-2 inline-block">
                              {product.badge}
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Price */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Price</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <div className="space-y-1">
                          <div className="text-lg font-bold text-gray-900">
                            ${product.price.toLocaleString()}
                          </div>
                          {product.originalPrice && (
                            <div className="text-sm text-gray-500 line-through">
                              ${product.originalPrice.toLocaleString()}
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Rating */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Rating</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon
                              key={i}
                              className={`w-4 h-4 ${
                                i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600 ml-1">4.8</span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Category */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Category</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center text-gray-700">
                        {product.category}
                      </td>
                    ))}
                  </tr>

                  {/* Material */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Material</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center text-gray-700">
                        {product.material}
                      </td>
                    ))}
                  </tr>

                  {/* Weight */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Weight</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center text-gray-700">
                        {product.weight || 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* Occasion */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Occasion</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center text-gray-700">
                        {product.occasion || 'N/A'}
                      </td>
                    ))}
                  </tr>

                  {/* Features */}
                  {Array.from(comparisonData.features).map((feature) => (
                    <tr key={feature} className="border-t border-gray-200">
                      <td className="p-4 font-medium text-gray-900">{feature}</td>
                      {products.map((product) => (
                        <td key={product.id} className="p-4 text-center">
                          {product.features && product.features.includes(feature) ? (
                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Action Buttons */}
                  <tr className="border-t border-gray-200">
                    <td className="p-4 font-medium text-gray-900">Actions</td>
                    {products.map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        <div className="space-y-2">
                          <button className="w-full bg-gold-600 text-white py-2 px-4 rounded-lg hover:bg-gold-700 transition-colors text-sm">
                            Add to Cart
                          </button>
                          <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm">
                            View Details
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductComparison; 