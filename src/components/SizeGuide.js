import React, { useState } from 'react';
import { RulerIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const SizeGuide = ({ isOpen, onClose, category = 'rings' }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [selectedSize, setSelectedSize] = useState('');

  const sizeGuides = {
    rings: {
      title: 'Ring Size Guide',
      description: 'Find your perfect ring size with our easy measurement guide.',
      measurement: 'Measure the circumference of your finger',
      sizes: [
        { size: '5', diameter: '15.7mm', circumference: '49.3mm' },
        { size: '6', diameter: '16.5mm', circumference: '51.9mm' },
        { size: '7', diameter: '17.3mm', circumference: '54.4mm' },
        { size: '8', diameter: '18.2mm', circumference: '57.0mm' },
        { size: '9', diameter: '19.0mm', circumference: '59.5mm' },
        { size: '10', diameter: '19.8mm', circumference: '62.1mm' },
        { size: '11', diameter: '20.6mm', circumference: '64.6mm' },
        { size: '12', diameter: '21.4mm', circumference: '67.2mm' }
      ],
      instructions: [
        'Wrap a piece of string or paper around your finger',
        'Mark where the string overlaps',
        'Measure the length in millimeters',
        'Use the chart below to find your size'
      ]
    },
    bracelets: {
      title: 'Bracelet Size Guide',
      description: 'Measure your wrist to find the perfect bracelet size.',
      measurement: 'Measure the circumference of your wrist',
      sizes: [
        { size: '6"', diameter: '19mm', circumference: '152mm' },
        { size: '6.5"', diameter: '21mm', circumference: '165mm' },
        { size: '7"', diameter: '22mm', circumference: '178mm' },
        { size: '7.5"', diameter: '24mm', circumference: '191mm' },
        { size: '8"', diameter: '25mm', circumference: '203mm' },
        { size: '8.5"', diameter: '27mm', circumference: '216mm' }
      ],
      instructions: [
        'Wrap a flexible measuring tape around your wrist',
        'Measure just above the wrist bone',
        'Keep the tape snug but not tight',
        'Use the chart below to find your size'
      ]
    },
    necklaces: {
      title: 'Necklace Length Guide',
      description: 'Choose the perfect necklace length for your style.',
      measurement: 'Measure from the base of your neck',
      sizes: [
        { size: '16"', description: 'Choker length, sits at the base of the neck' },
        { size: '18"', description: 'Princess length, sits at the collarbone' },
        { size: '20"', description: 'Matinee length, sits at the top of the bust' },
        { size: '22"', description: 'Opera length, sits at the bust line' },
        { size: '24"', description: 'Rope length, can be worn long or doubled' }
      ],
      instructions: [
        'Measure from the base of your neck',
        'Consider your neckline and outfit',
        'Longer necklaces are more versatile',
        'Shorter necklaces are more formal'
      ]
    }
  };

  const currentGuide = sizeGuides[selectedCategory];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center space-x-3">
            <RulerIcon className="w-6 h-6 text-gold-600" />
            <h2 className="text-xl font-semibold text-gray-900">Size Guide</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Category Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
            {Object.keys(sizeGuides).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-white text-gold-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Guide Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentGuide.title}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">{currentGuide.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Instructions */}
              <div className="space-y-6">
                <div className="bg-gold-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <InformationCircleIcon className="w-5 h-5 text-gold-600 mr-2" />
                    How to Measure
                  </h4>
                  <p className="text-gray-700 mb-4">{currentGuide.measurement}</p>
                  <ol className="space-y-2">
                    {currentGuide.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-gold-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Interactive Measurement Tool */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Measurement Tool</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Measurement (mm)
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your measurement"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                    <button className="w-full bg-gold-600 text-white py-2 px-4 rounded-lg hover:bg-gold-700 transition-colors">
                      Find My Size
                    </button>
                  </div>
                </div>
              </div>

              {/* Size Chart */}
              <div className="space-y-6">
                <h4 className="font-semibold text-gray-900">Size Chart</h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                        {selectedCategory === 'necklaces' ? (
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        ) : (
                          <>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Diameter</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Circumference</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentGuide.sizes.map((sizeData, index) => (
                        <tr
                          key={index}
                          className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                            selectedSize === sizeData.size ? 'bg-gold-50' : ''
                          }`}
                          onClick={() => setSelectedSize(sizeData.size)}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {sizeData.size}
                          </td>
                          {selectedCategory === 'necklaces' ? (
                            <td className="px-4 py-3 text-sm text-gray-700">{sizeData.description}</td>
                          ) : (
                            <>
                              <td className="px-4 py-3 text-sm text-gray-700">{sizeData.diameter}</td>
                              <td className="px-4 py-3 text-sm text-gray-700">{sizeData.circumference}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {selectedSize && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-green-800">Recommended Size</p>
                        <p className="text-sm text-green-700">Size {selectedSize} should fit you perfectly!</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Pro Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">💡</span>
                  <div>
                    <p className="font-medium text-gray-900">Measure at the right time</p>
                    <p className="text-sm text-gray-600">Measure in the evening when your fingers are at their largest</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">🌡️</span>
                  <div>
                    <p className="font-medium text-gray-900">Consider temperature</p>
                    <p className="text-sm text-gray-600">Fingers can swell in warm weather and shrink in cold</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">📏</span>
                  <div>
                    <p className="font-medium text-gray-900">Use a professional</p>
                    <p className="text-sm text-gray-600">Visit our store for a professional sizing service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">🔄</span>
                  <div>
                    <p className="font-medium text-gray-900">Easy exchanges</p>
                    <p className="text-sm text-gray-600">We offer free size exchanges within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide; 