import React, { useState, useEffect } from 'react';
import { XMarkIcon, FunnelIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFilterChange, 
  products = [],
  onApplyFilters 
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [priceRange, setPriceRange] = useState([0, 10000]);

  // Extract unique values from products
  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];
  const occasions = [...new Set(products.map(p => p.occasion).filter(Boolean))];
  const maxPrice = Math.max(...products.map(p => p.price), 10000);
  const minPrice = Math.min(...products.map(p => p.price), 0);

  useEffect(() => {
    setLocalFilters(filters);
    setPriceRange([filters.minPrice || minPrice, filters.maxPrice || maxPrice]);
  }, [filters, minPrice, maxPrice]);

  const handleFilterChange = (key, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePriceRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    setPriceRange(newRange);
    
    setLocalFilters(prev => ({
      ...prev,
      minPrice: newRange[0],
      maxPrice: newRange[1]
    }));
  };

  const handleApplyFilters = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleClearFilters = () => {
    const clearedFilters = {
      category: '',
      material: '',
      occasion: '',
      minPrice: minPrice,
      maxPrice: maxPrice,
      sortBy: 'relevance'
    };
    setLocalFilters(clearedFilters);
    setPriceRange([minPrice, maxPrice]);
    onApplyFilters(clearedFilters);
  };

  const getFilteredCount = () => {
    return products.filter(product => {
      if (localFilters.category && product.category !== localFilters.category) return false;
      if (localFilters.material && product.material !== localFilters.material) return false;
      if (localFilters.occasion && product.occasion !== localFilters.occasion) return false;
      if (product.price < localFilters.minPrice || product.price > localFilters.maxPrice) return false;
      return true;
    }).length;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <FunnelIcon className="w-5 h-5 text-gold-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Results Count */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {getFilteredCount()} products
              </span>
              <button
                onClick={handleClearFilters}
                className="text-sm text-gold-600 hover:text-gold-700 font-medium"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={localFilters.category === category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-4 h-4 text-gold-600 border-gray-300 focus:ring-gold-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label key={material} className="flex items-center">
                    <input
                      type="radio"
                      name="material"
                      value={material}
                      checked={localFilters.material === material}
                      onChange={(e) => handleFilterChange('material', e.target.value)}
                      className="w-4 h-4 text-gold-600 border-gray-300 focus:ring-gold-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{material}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Occasion Filter */}
            {occasions.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Occasion</h3>
                <div className="space-y-2">
                  {occasions.map((occasion) => (
                    <label key={occasion} className="flex items-center">
                      <input
                        type="radio"
                        name="occasion"
                        value={occasion}
                        checked={localFilters.occasion === occasion}
                        onChange={(e) => handleFilterChange('occasion', e.target.value)}
                        className="w-4 h-4 text-gold-600 border-gray-300 focus:ring-gold-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{occasion}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">Min</label>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="Min"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-600 mb-1">Max</label>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      placeholder="Max"
                    />
                  </div>
                </div>
                
                {/* Price Range Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(0, e.target.value)}
                    className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #D97706 0%, #D97706 ${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%, #E5E7EB ${((priceRange[0] - minPrice) / (maxPrice - minPrice)) * 100}%, #E5E7EB 100%)`
                    }}
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(1, e.target.value)}
                    className="absolute w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                
                <div className="flex justify-between text-xs text-gray-600">
                  <span>${minPrice.toLocaleString()}</span>
                  <span>${maxPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
              <select
                value={localFilters.sortBy || 'relevance'}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="font-medium text-gray-900 mb-3">Quick Filters</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleFilterChange('onSale', !localFilters.onSale)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    localFilters.onSale
                      ? 'bg-gold-100 text-gold-800 border border-gold-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  On Sale
                </button>
                <button
                  onClick={() => handleFilterChange('newArrival', !localFilters.newArrival)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    localFilters.newArrival
                      ? 'bg-gold-100 text-gold-800 border border-gold-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  New Arrivals
                </button>
                <button
                  onClick={() => handleFilterChange('bestSeller', !localFilters.bestSeller)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    localFilters.bestSeller
                      ? 'bg-gold-100 text-gold-800 border border-gold-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Best Sellers
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={handleApplyFilters}
              className="w-full bg-gold-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-gold-700 transition-colors"
            >
              Apply Filters ({getFilteredCount()} results)
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => onClose()}
        className="lg:hidden fixed bottom-4 right-4 z-30 bg-gold-600 text-white p-3 rounded-full shadow-lg hover:bg-gold-700 transition-colors"
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </button>
    </>
  );
};

export default FilterSidebar; 