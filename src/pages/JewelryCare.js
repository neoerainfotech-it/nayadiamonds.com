import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function JewelryCare() {
  const [activeTab, setActiveTab] = useState('gold');

  const careGuides = {
    gold: {
      title: 'Gold Jewelry Care',
      icon: '✨',
      color: 'yellow',
      tips: [
        {
          title: 'Regular Cleaning',
          description: 'Clean gold jewelry with warm soapy water and a soft brush',
          steps: [
            'Mix mild dish soap with warm water',
            'Soak jewelry for 15-20 minutes',
            'Gently scrub with a soft toothbrush',
            'Rinse thoroughly with clean water',
            'Dry with a soft, lint-free cloth'
          ]
        },
        {
          title: 'Proper Storage',
          description: 'Store gold jewelry in a cool, dry place to prevent tarnishing',
          steps: [
            'Use individual pouches or boxes',
            'Keep away from direct sunlight',
            'Store in a dry environment',
            'Separate pieces to prevent scratching',
            'Use anti-tarnish strips if needed'
          ]
        },
        {
          title: 'Avoid Chemicals',
          description: 'Keep gold jewelry away from harsh chemicals and substances',
          steps: [
            'Remove before swimming or showering',
            'Avoid contact with perfumes and cosmetics',
            'Keep away from household cleaners',
            'Remove before exercising',
            'Store separately from other metals'
          ]
        },
        {
          title: 'Professional Maintenance',
          description: 'Schedule regular professional cleaning and inspection',
          steps: [
            'Visit us annually for inspection',
            'Get professional cleaning every 6 months',
            'Check for loose stones or damage',
            'Update appraisals as needed',
            'Consider re-polishing for older pieces'
          ]
        }
      ]
    },
    silver: {
      title: 'Silver Jewelry Care',
      icon: '🥈',
      color: 'gray',
      tips: [
        {
          title: 'Prevent Tarnishing',
          description: 'Silver tarnishes when exposed to air and moisture',
          steps: [
            'Store in airtight containers',
            'Use anti-tarnish bags or strips',
            'Keep away from humidity',
            'Store with silica gel packets',
            'Avoid exposure to sulfur compounds'
          ]
        },
        {
          title: 'Gentle Cleaning',
          description: 'Clean silver jewelry with specialized silver cleaners',
          steps: [
            'Use silver polishing cloth',
            'Apply silver cleaner with soft cloth',
            'Rinse thoroughly with water',
            'Dry completely before storing',
            'Polish gently to restore shine'
          ]
        },
        {
          title: 'Handle with Care',
          description: 'Silver is softer than other precious metals',
          steps: [
            'Avoid rough handling',
            'Remove before physical activities',
            'Store separately from harder metals',
            'Clean fingerprints immediately',
            'Use soft cloth for handling'
          ]
        },
        {
          title: 'Regular Polishing',
          description: 'Maintain silver shine with regular polishing',
          steps: [
            'Polish monthly with silver cloth',
            'Use professional silver polish',
            'Avoid abrasive materials',
            'Polish in circular motions',
            'Clean after each wear'
          ]
        }
      ]
    },
    diamond: {
      title: 'Diamond Jewelry Care',
      icon: '💎',
      color: 'blue',
      tips: [
        {
          title: 'Maintain Brilliance',
          description: 'Keep diamonds sparkling with regular cleaning',
          steps: [
            'Clean with warm soapy water',
            'Use soft brush for settings',
            'Rinse thoroughly',
            'Dry with lint-free cloth',
            'Clean monthly for best results'
          ]
        },
        {
          title: 'Check Settings',
          description: 'Regularly inspect diamond settings for security',
          steps: [
            'Check for loose stones monthly',
            'Inspect prongs for damage',
            'Look for bent or broken settings',
            'Test stone security gently',
            'Visit jeweler if issues found'
          ]
        },
        {
          title: 'Safe Storage',
          description: 'Store diamonds separately to prevent damage',
          steps: [
            'Store in individual pouches',
            'Keep away from other jewelry',
            'Use soft fabric lining',
            'Store in cool, dry place',
            'Avoid direct sunlight'
          ]
        },
        {
          title: 'Professional Care',
          description: 'Schedule professional diamond maintenance',
          steps: [
            'Annual professional cleaning',
            'Regular setting inspection',
            'Professional re-polishing',
            'Update insurance appraisals',
            'Expert stone tightening'
          ]
        }
      ]
    },
    gemstone: {
      title: 'Gemstone Jewelry Care',
      icon: '🔮',
      color: 'purple',
      tips: [
        {
          title: 'Know Your Gemstone',
          description: 'Different gemstones require different care methods',
          steps: [
            'Research your specific gemstone',
            'Check hardness and durability',
            'Understand cleaning requirements',
            'Know sensitivity to light',
            'Learn about chemical sensitivity'
          ]
        },
        {
          title: 'Gentle Cleaning',
          description: 'Clean gemstones with appropriate methods',
          steps: [
            'Use mild soap and warm water',
            'Avoid ultrasonic cleaners',
            'Clean with soft brush only',
            'Rinse thoroughly',
            'Dry with soft cloth'
          ]
        },
        {
          title: 'Protect from Damage',
          description: 'Protect gemstones from physical and chemical damage',
          steps: [
            'Remove before activities',
            'Avoid extreme temperatures',
            'Protect from direct sunlight',
            'Store in padded containers',
            'Handle with clean hands'
          ]
        },
        {
          title: 'Regular Inspection',
          description: 'Monitor gemstone condition regularly',
          steps: [
            'Check for chips or cracks',
            'Inspect setting security',
            'Look for color changes',
            'Monitor for loose stones',
            'Schedule professional checks'
          ]
        }
      ]
    }
  };

  const seasonalCare = [
    {
      season: 'Summer',
      icon: '☀️',
      tips: [
        'Remove jewelry before swimming',
        'Avoid sunscreen and lotion contact',
        'Store in cool, dry place',
        'Clean more frequently',
        'Protect from UV damage'
      ]
    },
    {
      season: 'Monsoon',
      icon: '🌧️',
      tips: [
        'Store in airtight containers',
        'Use silica gel packets',
        'Clean after exposure to rain',
        'Avoid wearing in heavy rain',
        'Check for moisture damage'
      ]
    },
    {
      season: 'Winter',
      icon: '❄️',
      tips: [
        'Protect from cold damage',
        'Avoid extreme temperature changes',
        'Clean after wearing gloves',
        'Store in warm, dry place',
        'Inspect for cold-related damage'
      ]
    },
    {
      season: 'Spring',
      icon: '🌸',
      tips: [
        'Deep clean after winter storage',
        'Inspect for any damage',
        'Update appraisals if needed',
        'Prepare for summer wear',
        'Schedule professional cleaning'
      ]
    }
  ];

  const emergencyCare = [
    {
      situation: 'Jewelry Gets Wet',
      action: 'Dry immediately with soft cloth and store in dry place',
      icon: '💧'
    },
    {
      situation: 'Stone Becomes Loose',
      action: 'Stop wearing immediately and visit jeweler for repair',
      icon: '⚠️'
    },
    {
      situation: 'Jewelry Tarnishes',
      action: 'Use appropriate cleaner or visit professional for restoration',
      icon: '🔄'
    },
    {
      situation: 'Chain Breaks',
      action: 'Collect all pieces and bring to jeweler for repair',
      icon: '🔗'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      yellow: 'bg-yellow-500 text-yellow-600 border-yellow-200',
      gray: 'bg-gray-500 text-gray-600 border-gray-200',
      blue: 'bg-blue-500 text-blue-600 border-blue-200',
      purple: 'bg-purple-500 text-purple-600 border-purple-200'
    };
    return colorMap[color] || colorMap.yellow;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Jewelry Care Guide</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Learn how to maintain the beauty and value of your precious jewelry. 
              Our comprehensive care guides will help your jewelry last a lifetime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm">Care Categories</div>
              </div>
              <div className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Care Tips</div>
              </div>
              <div className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Care Categories Tabs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Choose Your Jewelry Type</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(careGuides).map(([key, guide]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeTab === key
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{guide.icon}</span>
                {guide.title}
              </button>
            ))}
          </div>
        </div>

        {/* Care Guide Content */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(careGuides[activeTab].color)} mb-4`}>
                <span className="text-2xl">{careGuides[activeTab].icon}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{careGuides[activeTab].title}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {careGuides[activeTab].tips.map((tip, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{tip.title}</h4>
                  <p className="text-gray-600 mb-4">{tip.description}</p>
                  <div className="space-y-2">
                    {tip.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <span className="text-green-600 font-bold mr-3 mt-1">{stepIndex + 1}.</span>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal Care */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Seasonal Care Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCare.map((season, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">{season.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{season.season}</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {season.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-green-600 mr-2 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Care */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Emergency Care</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 text-center mb-8">What to Do in Emergencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyCare.map((emergency, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-red-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{emergency.icon}</span>
                    <h4 className="text-lg font-semibold text-red-800">{emergency.situation}</h4>
                  </div>
                  <p className="text-gray-700">{emergency.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Services */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Professional Care Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧽</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Cleaning</h3>
              <p className="text-gray-600 mb-4">Deep cleaning and restoration services</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ultrasonic cleaning</li>
                <li>• Steam cleaning</li>
                <li>• Hand polishing</li>
                <li>• Stone tightening</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Repair Services</h3>
              <p className="text-gray-600 mb-4">Expert repair and restoration</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chain repair</li>
                <li>• Stone replacement</li>
                <li>• Setting repair</li>
                <li>• Size adjustment</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Appraisal Services</h3>
              <p className="text-gray-600 mb-4">Professional valuation and certification</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Insurance appraisals</li>
                <li>• Market value assessment</li>
                <li>• Quality certification</li>
                <li>• Documentation services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Professional Care?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert jewelers are here to help maintain and restore your precious jewelry. 
            Schedule a consultation or visit our showroom for professional care services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-500 transition-colors shadow-lg"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/products"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 hover:text-white transition-colors"
            >
              Shop Care Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JewelryCare; 