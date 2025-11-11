import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SizeGuide() {
  const [activeCategory, setActiveCategory] = useState('rings');

  const sizeCategories = [
    { id: 'rings', name: 'Rings', icon: '💍' },
    { id: 'necklaces', name: 'Necklaces', icon: '📿' },
    { id: 'bangles', name: 'Bangles', icon: '🪔' },
    { id: 'earrings', name: 'Earrings', icon: '👂' }
  ];

  const ringSizes = [
    { us: '3', uk: 'F', eu: '44', mm: '14.1', circumference: '44.3' },
    { us: '3.5', uk: 'F.5', eu: '45', mm: '14.5', circumference: '45.5' },
    { us: '4', uk: 'G', eu: '46', mm: '14.9', circumference: '46.8' },
    { us: '4.5', uk: 'G.5', eu: '47', mm: '15.3', circumference: '48.0' },
    { us: '5', uk: 'H', eu: '48', mm: '15.7', circumference: '49.3' },
    { us: '5.5', uk: 'H.5', eu: '49', mm: '16.1', circumference: '50.6' },
    { us: '6', uk: 'I', eu: '50', mm: '16.5', circumference: '51.9' },
    { us: '6.5', uk: 'I.5', eu: '51', mm: '16.9', circumference: '53.1' },
    { us: '7', uk: 'J', eu: '52', mm: '17.3', circumference: '54.4' },
    { us: '7.5', uk: 'J.5', eu: '53', mm: '17.7', circumference: '55.7' },
    { us: '8', uk: 'K', eu: '54', mm: '18.1', circumference: '56.9' },
    { us: '8.5', uk: 'K.5', eu: '55', mm: '18.5', circumference: '58.2' },
    { us: '9', uk: 'L', eu: '56', mm: '18.9', circumference: '59.5' },
    { us: '9.5', uk: 'L.5', eu: '57', mm: '19.3', circumference: '60.7' },
    { us: '10', uk: 'M', eu: '58', mm: '19.7', circumference: '62.0' }
  ];

  const necklaceSizes = [
    { name: 'Choker', length: '14-16 inches', description: 'Sits at the base of the neck' },
    { name: 'Princess', length: '17-19 inches', description: 'Sits at the collarbone' },
    { name: 'Matinee', length: '20-24 inches', description: 'Sits at the top of the bust' },
    { name: 'Opera', length: '28-34 inches', description: 'Sits at the bust line' },
    { name: 'Rope', length: '45+ inches', description: 'Can be worn long or doubled' }
  ];

  const bangleSizes = [
    { size: 'Small', diameter: '2.25 inches', circumference: '7.1 inches', description: 'Fits wrist size 5.5-6 inches' },
    { size: 'Medium', diameter: '2.5 inches', circumference: '7.9 inches', description: 'Fits wrist size 6-6.5 inches' },
    { size: 'Large', diameter: '2.75 inches', circumference: '8.6 inches', description: 'Fits wrist size 6.5-7 inches' },
    { size: 'Extra Large', diameter: '3 inches', circumference: '9.4 inches', description: 'Fits wrist size 7+ inches' }
  ];

  const earringSizes = [
    { type: 'Studs', sizes: ['2mm', '3mm', '4mm', '5mm', '6mm'], description: 'Small to medium stud earrings' },
    { type: 'Hoop Earrings', sizes: ['10mm', '15mm', '20mm', '25mm', '30mm'], description: 'Circular hoop earrings' },
    { type: 'Drop Earrings', sizes: ['15mm', '20mm', '25mm', '30mm', '40mm'], description: 'Hanging drop earrings' }
  ];

  const measurementTips = [
    {
      title: 'Ring Size Measurement',
      steps: [
        'Wrap a string or paper strip around your finger',
        'Mark where the string overlaps',
        'Measure the length in millimeters',
        'Use our size chart to find your ring size',
        'Measure in the evening when fingers are largest'
      ]
    },
    {
      title: 'Necklace Length Guide',
      steps: [
        'Measure your neck circumference',
        'Add 2-4 inches for comfortable fit',
        'Consider your neckline and outfit',
        'Test different lengths with a string',
        'Account for pendant size if applicable'
      ]
    },
    {
      title: 'Bangle Size Measurement',
      steps: [
        'Measure your wrist circumference',
        'Add 0.5-1 inch for comfortable fit',
        'Consider bangle thickness',
        'Test with a flexible measuring tape',
        'Measure at the widest part of your hand'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Jewelry Size Guide</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Find your perfect fit with our comprehensive size guides. Learn how to measure 
              yourself and choose the right size for rings, necklaces, bangles, and earrings.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-indigo-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="bg-indigo-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Ring Sizes</div>
              </div>
              <div className="bg-indigo-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Size Kit</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Jewelry Type</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {sizeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Size Chart */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Size Chart
            </h3>

            {activeCategory === 'rings' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-indigo-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">US Size</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">UK Size</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EU Size</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Diameter (mm)</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Circumference (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ringSizes.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="border border-gray-300 px-4 py-3">{size.us}</td>
                        <td className="border border-gray-300 px-4 py-3">{size.uk}</td>
                        <td className="border border-gray-300 px-4 py-3">{size.eu}</td>
                        <td className="border border-gray-300 px-4 py-3">{size.mm}</td>
                        <td className="border border-gray-300 px-4 py-3">{size.circumference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeCategory === 'necklaces' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {necklaceSizes.map((size, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{size.name}</h4>
                    <p className="text-2xl font-bold text-indigo-600 mb-2">{size.length}</p>
                    <p className="text-gray-600">{size.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'bangles' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bangleSizes.map((size, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{size.size}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Diameter:</span>
                        <span className="font-semibold">{size.diameter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Circumference:</span>
                        <span className="font-semibold">{size.circumference}</span>
                      </div>
                      <div className="text-sm text-gray-600 mt-3">{size.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'earrings' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {earringSizes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{type.type}</h4>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.sizes.map((size, sizeIndex) => (
                        <div key={sizeIndex} className="bg-indigo-50 px-3 py-2 rounded text-indigo-700 font-medium">
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Measurement Instructions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How to Measure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {measurementTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tip.title}</h3>
                <div className="space-y-3">
                  {tip.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <span className="text-indigo-600 font-bold mr-3 mt-1">{stepIndex + 1}.</span>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Size Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Size Tips & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">General Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Measure in the evening when your body is at its largest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Consider temperature and humidity effects on size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Account for seasonal changes in body size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>When in doubt, choose the larger size</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Consider the jewelry style and fit preference</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Help</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Visit our showroom for professional sizing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Request a free size kit for accurate measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Schedule a consultation with our experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Get personalized size recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3 mt-1">•</span>
                  <span>Free resizing services for eligible items</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Free Size Kit */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 mb-16 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Size Kit</h2>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Not sure about your size? We'll send you a free size kit with measuring tools 
              and instructions to help you find your perfect fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors"
              >
                Request Size Kit
              </Link>
              <Link
                to="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Shop Jewelry
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Finding Your Size?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our jewelry experts are here to help you find the perfect fit. Visit our showroom 
            or contact us for personalized sizing assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-500 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/jewelry-care"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              Care Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizeGuide;