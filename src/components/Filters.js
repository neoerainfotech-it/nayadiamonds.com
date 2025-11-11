import React, { useState } from 'react';

function Filters({ onFilterChange, onSortChange }) {
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const categories = [
    { id: 'necklaces', name: 'Necklaces', count: 156 },
    { id: 'rings', name: 'Rings', count: 234 },
    { id: 'earrings', name: 'Earrings', count: 189 },
    { id: 'bracelets', name: 'Bracelets', count: 98 },
    { id: 'anklets', name: 'Anklets', count: 67 },
    { id: 'pendants', name: 'Pendants', count: 123 }
  ];

  const materials = [
    { id: 'gold', name: 'Gold', count: 345 },
    { id: 'diamond', name: 'Diamond', count: 234 },
    { id: 'silver', name: 'Silver', count: 189 },
    { id: 'platinum', name: 'Platinum', count: 67 },
    { id: 'pearl', name: 'Pearl', count: 89 },
    { id: 'ruby', name: 'Ruby', count: 45 },
    { id: 'emerald', name: 'Emerald', count: 56 },
    { id: 'sapphire', name: 'Sapphire', count: 34 }
  ];

  const occasions = [
    { id: 'wedding', name: 'Wedding', count: 234 },
    { id: 'engagement', name: 'Engagement', count: 156 },
    { id: 'birthday', name: 'Birthday', count: 189 },
    { id: 'anniversary', name: 'Anniversary', count: 123 },
    { id: 'festival', name: 'Festival', count: 267 },
    { id: 'casual', name: 'Casual', count: 345 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'discount', label: 'Best Discount' }
  ];

  const handleCategoryChange = (categoryId) => {
    const updated = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    setSelectedCategories(updated);
    onFilterChange({ categories: updated });
  };

  const handleMaterialChange = (materialId) => {
    const updated = selectedMaterials.includes(materialId)
      ? selectedMaterials.filter(id => id !== materialId)
      : [...selectedMaterials, materialId];
    setSelectedMaterials(updated);
    onFilterChange({ materials: updated });
  };

  const handleOccasionChange = (occasionId) => {
    const updated = selectedOccasions.includes(occasionId)
      ? selectedOccasions.filter(id => id !== occasionId)
      : [...selectedOccasions, occasionId];
    setSelectedOccasions(updated);
    onFilterChange({ occasions: updated });
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    onFilterChange({ priceRange: newRange });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedOccasions([]);
    setPriceRange([0, 200000]);
    onFilterChange({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-yellow-600 hover:text-yellow-700 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Sort Options */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Sort By
        </label>
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price Range
        </label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange([parseInt(e.target.value) || 0, priceRange[1]])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange([priceRange[0], parseInt(e.target.value) || 200000])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="text-xs text-gray-500">
            Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Categories
        </label>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{category.name}</span>
              </div>
              <span className="text-xs text-gray-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Materials
        </label>
        <div className="space-y-2">
          {materials.map((material) => (
            <label key={material.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(material.id)}
                  onChange={() => handleMaterialChange(material.id)}
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{material.name}</span>
              </div>
              <span className="text-xs text-gray-500">({material.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Occasions */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Occasions
        </label>
        <div className="space-y-2">
          {occasions.map((occasion) => (
            <label key={occasion.id} className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedOccasions.includes(occasion.id)}
                  onChange={() => handleOccasionChange(occasion.id)}
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{occasion.name}</span>
              </div>
              <span className="text-xs text-gray-500">({occasion.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {(selectedCategories.length > 0 || selectedMaterials.length > 0 || selectedOccasions.length > 0) && (
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((catId) => {
              const category = categories.find(c => c.id === catId);
              return (
                <span key={catId} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                  {category?.name}
                  <button
                    onClick={() => handleCategoryChange(catId)}
                    className="ml-1 text-yellow-600 hover:text-yellow-800"
                  >
                    ×
                  </button>
                </span>
              );
            })}
            {selectedMaterials.map((matId) => {
              const material = materials.find(m => m.id === matId);
              return (
                <span key={matId} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                  {material?.name}
                  <button
                    onClick={() => handleMaterialChange(matId)}
                    className="ml-1 text-blue-600 hover:text-blue-800"
                  >
                    ×
                  </button>
                </span>
              );
            })}
            {selectedOccasions.map((occId) => {
              const occasion = occasions.find(o => o.id === occId);
              return (
                <span key={occId} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  {occasion?.name}
                  <button
                    onClick={() => handleOccasionChange(occId)}
                    className="ml-1 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filters; 