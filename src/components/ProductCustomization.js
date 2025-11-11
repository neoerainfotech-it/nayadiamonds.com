import React, { useState } from 'react';
import { 
  SparklesIcon,
  PencilIcon,
  EyeIcon,
  CheckIcon,
  XMarkIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const ProductCustomization = ({ product, onCustomizationChange }) => {
  const [activeSection, setActiveSection] = useState('material');
  const [customization, setCustomization] = useState({
    material: 'gold',
    stone: 'diamond',
    stoneColor: 'white',
    engraving: '',
    size: '',
    finish: 'polished'
  });
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState(product?.images[0]);

  const materials = [
    { id: 'gold', name: '14K Gold', price: 0, image: product?.images[0] },
    { id: 'white-gold', name: '14K White Gold', price: 200, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop' },
    { id: 'rose-gold', name: '14K Rose Gold', price: 150, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop' },
    { id: 'platinum', name: 'Platinum', price: 500, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop' }
  ];

  const stones = [
    { id: 'diamond', name: 'Diamond', price: 0, color: 'white' },
    { id: 'sapphire', name: 'Sapphire', price: -300, color: 'blue' },
    { id: 'ruby', name: 'Ruby', price: -200, color: 'red' },
    { id: 'emerald', name: 'Emerald', price: -250, color: 'green' },
    { id: 'none', name: 'No Stone', price: -800, color: 'none' }
  ];

  const stoneColors = [
    { id: 'white', name: 'White', color: '#ffffff' },
    { id: 'yellow', name: 'Yellow', color: '#fbbf24' },
    { id: 'pink', name: 'Pink', color: '#ec4899' },
    { id: 'blue', name: 'Blue', color: '#3b82f6' },
    { id: 'green', name: 'Green', color: '#10b981' }
  ];

  const finishes = [
    { id: 'polished', name: 'Polished', description: 'High shine finish' },
    { id: 'brushed', name: 'Brushed', description: 'Matte brushed finish' },
    { id: 'hammered', name: 'Hammered', description: 'Textured hammered finish' },
    { id: 'antique', name: 'Antique', description: 'Vintage antique finish' }
  ];

  const sizes = ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

  const handleCustomizationChange = (key, value) => {
    const newCustomization = { ...customization, [key]: value };
    setCustomization(newCustomization);
    
    // Update preview image based on material
    if (key === 'material') {
      const material = materials.find(m => m.id === value);
      if (material?.image) {
        setPreviewImage(material.image);
      }
    }
    
    onCustomizationChange?.(newCustomization);
  };

  const calculateTotalPrice = () => {
    const basePrice = product?.price || 0;
    const materialPrice = materials.find(m => m.id === customization.material)?.price || 0;
    const stonePrice = stones.find(s => s.id === customization.stone)?.price || 0;
    const engravingPrice = customization.engraving ? 50 : 0;
    
    return basePrice + materialPrice + stonePrice + engravingPrice;
  };

  const getCustomizationSummary = () => {
    const material = materials.find(m => m.id === customization.material);
    const stone = stones.find(s => s.id === customization.stone);
    const finish = finishes.find(f => f.id === customization.finish);
    
    return {
      material: material?.name,
      stone: stone?.name,
      finish: finish?.name,
      engraving: customization.engraving,
      size: customization.size
    };
  };

  const sections = [
    { id: 'material', label: 'Material', icon: SparklesIcon },
    { id: 'stone', label: 'Stone', icon: SparklesIcon },
    { id: 'engraving', label: 'Engraving', icon: PencilIcon },
    { id: 'size', label: 'Size', icon: EyeIcon },
    { id: 'finish', label: 'Finish', icon: SparklesIcon }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Customize Your Jewelry</h2>
        <p className="text-gold-100">Make it uniquely yours with our customization options</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {/* Customization Options */}
        <div className="space-y-6">
          {/* Section Tabs */}
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? 'bg-white text-gold-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Material Selection */}
          {activeSection === 'material' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Choose Material</h3>
              <div className="grid grid-cols-2 gap-4">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => handleCustomizationChange('material', material.id)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      customization.material === material.id
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                  >
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                      <img
                        src={material.image}
                        alt={material.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="font-medium text-gray-900">{material.name}</h4>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-gray-600">
                          {material.price > 0 ? `+$${material.price}` : 'Included'}
                        </span>
                        {customization.material === material.id && (
                          <CheckIcon className="w-5 h-5 text-gold-600" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stone Selection */}
          {activeSection === 'stone' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Choose Stone</h3>
              <div className="grid grid-cols-2 gap-4">
                {stones.map((stone) => (
                  <button
                    key={stone.id}
                    onClick={() => handleCustomizationChange('stone', stone.id)}
                    className={`p-4 border-2 rounded-lg transition-all ${
                      customization.stone === stone.id
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {stone.color !== 'none' && (
                        <div
                          className="w-8 h-8 rounded-full border-2 border-gray-300"
                          style={{ backgroundColor: stone.color }}
                        />
                      )}
                      <div className="text-left">
                        <h4 className="font-medium text-gray-900">{stone.name}</h4>
                        <span className="text-sm text-gray-600">
                          {stone.price > 0 ? `+$${stone.price}` : stone.price < 0 ? `-$${Math.abs(stone.price)}` : 'Included'}
                        </span>
                      </div>
                      {customization.stone === stone.id && (
                        <CheckIcon className="w-5 h-5 text-gold-600 ml-auto" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {customization.stone !== 'none' && (
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Stone Color</h4>
                  <div className="flex space-x-3">
                    {stoneColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => handleCustomizationChange('stoneColor', color.id)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          customization.stoneColor === color.id
                            ? 'border-gold-500 scale-110'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Engraving */}
          {activeSection === 'engraving' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Personal Engraving</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Engraving Text (max 20 characters)
                  </label>
                  <input
                    type="text"
                    value={customization.engraving}
                    onChange={(e) => handleCustomizationChange('engraving', e.target.value.slice(0, 20))}
                    placeholder="Enter your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-600">
                      {customization.engraving.length}/20 characters
                    </span>
                    <span className="text-sm text-gray-600">+$50</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Engraving Preview</h4>
                  <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded-lg">
                    {customization.engraving ? (
                      <span className="text-lg font-serif text-gray-700">{customization.engraving}</span>
                    ) : (
                      <span className="text-gray-500">Your engraving will appear here</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Size Selection */}
          {activeSection === 'size' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Select Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleCustomizationChange('size', size)}
                    className={`py-3 px-4 border-2 rounded-lg font-medium transition-all ${
                      customization.size === size
                        ? 'border-gold-600 bg-gold-50 text-gold-700'
                        : 'border-gray-200 hover:border-gold-400 text-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Need help with sizing?</h4>
                <p className="text-blue-700 text-sm mb-3">
                  We offer free size exchanges within 60 days of purchase.
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Size Guide →
                </button>
              </div>
            </div>
          )}

          {/* Finish Selection */}
          {activeSection === 'finish' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Choose Finish</h3>
              <div className="space-y-3">
                {finishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => handleCustomizationChange('finish', finish.id)}
                    className={`w-full p-4 border-2 rounded-lg transition-all text-left ${
                      customization.finish === finish.id
                        ? 'border-gold-500 bg-gold-50'
                        : 'border-gray-200 hover:border-gold-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{finish.name}</h4>
                        <p className="text-sm text-gray-600">{finish.description}</p>
                      </div>
                      {customization.finish === finish.id && (
                        <CheckIcon className="w-5 h-5 text-gold-600" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Preview and Summary */}
        <div className="space-y-6">
          {/* Product Preview */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Custom Design</h3>
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm mb-4">
              <img
                src={previewImage}
                alt="Customized product"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900">{product?.name}</h4>
              <div className="text-2xl font-bold text-gray-900">
                ${calculateTotalPrice().toLocaleString()}
              </div>
            </div>
          </div>

          {/* Customization Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customization Summary</h3>
            <div className="space-y-3">
              {Object.entries(getCustomizationSummary()).map(([key, value]) => (
                value && (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Breakdown</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Price</span>
                <span className="text-gray-900">${product?.price?.toLocaleString()}</span>
              </div>
              {materials.find(m => m.id === customization.material)?.price > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Material Upgrade</span>
                  <span className="text-gray-900">+${materials.find(m => m.id === customization.material)?.price}</span>
                </div>
              )}
              {stones.find(s => s.id === customization.stone)?.price !== 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Stone Change</span>
                  <span className="text-gray-900">
                    {stones.find(s => s.id === customization.stone)?.price > 0 ? '+' : ''}
                    ${stones.find(s => s.id === customization.stone)?.price}
                  </span>
                </div>
              )}
              {customization.engraving && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Engraving</span>
                  <span className="text-gray-900">+$50</span>
                </div>
              )}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${calculateTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gold-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold-700 transition-colors">
              Add Customized Item to Cart
            </button>
            <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 transition-colors">
              Save for Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomization; 