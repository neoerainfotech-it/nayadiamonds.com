import React, { useState } from 'react';
import { 
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const ProductWarranty = ({ product }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    purchaseDate: '',
    serialNumber: '',
    agreeToTerms: false
  });

  const warrantyInfo = {
    type: 'Lifetime Warranty',
    duration: 'Lifetime',
    coverage: [
      'Manufacturing defects',
      'Structural integrity',
      'Setting security',
      'Metal quality issues',
      'Workmanship problems'
    ],
    exclusions: [
      'Normal wear and tear',
      'Damage from accidents',
      'Improper care or cleaning',
      'Unauthorized modifications',
      'Loss or theft'
    ],
    benefits: [
      'Free repairs for covered issues',
      'No deductible',
      'Transferable to new owners',
      'International coverage',
      'Priority customer service'
    ],
    terms: [
      'Valid for original purchaser',
      'Requires proof of purchase',
      'Must be registered within 30 days',
      'Regular maintenance recommended',
      'Professional cleaning required annually'
    ]
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Handle warranty registration
    console.log('Warranty registration:', registrationForm);
    alert('Warranty registration submitted successfully!');
    setActiveTab('overview');
    setRegistrationForm({
      name: '',
      email: '',
      phone: '',
      purchaseDate: '',
      serialNumber: '',
      agreeToTerms: false
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegistrationForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ShieldCheckIcon },
    { id: 'coverage', label: 'Coverage', icon: CheckCircleIcon },
    { id: 'exclusions', label: 'Exclusions', icon: ExclamationTriangleIcon },
    { id: 'terms', label: 'Terms', icon: DocumentTextIcon },
    { id: 'register', label: 'Register', icon: UserIcon }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-6">
        <div className="flex items-center space-x-3 mb-4">
          <ShieldCheckIcon className="w-8 h-8" />
          <div>
            <h2 className="text-2xl font-bold">Product Warranty</h2>
            <p className="text-gold-100">{product?.name}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{warrantyInfo.type}</div>
            <div className="text-sm text-gold-100">Warranty Type</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{warrantyInfo.duration}</div>
            <div className="text-sm text-gold-100">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">100%</div>
            <div className="text-sm text-gold-100">Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$0</div>
            <div className="text-sm text-gold-100">Deductible</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-gold-500 text-gold-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-800">Lifetime Protection</h3>
                  <p className="text-green-700 mt-1">
                    Your jewelry is protected for life against manufacturing defects and structural issues.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What's Covered</h3>
                <ul className="space-y-2">
                  {warrantyInfo.coverage.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {warrantyInfo.benefits.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <StarIcon className="w-4 h-4 text-gold-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <ClockIcon className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-800">Registration Required</h3>
                  <p className="text-blue-700 mt-1">
                    Register your warranty within 30 days of purchase to activate full coverage.
                  </p>
                  <button
                    onClick={() => setActiveTab('register')}
                    className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-3">Full Coverage Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {warrantyInfo.coverage.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircleIcon className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Coverage Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Contact Support</h4>
                    <p className="text-gray-600 text-sm">Reach out to our customer service team</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Assessment</h4>
                    <p className="text-gray-600 text-sm">We'll evaluate the issue and coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Repair/Replace</h4>
                    <p className="text-gray-600 text-sm">Free repair or replacement if covered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'exclusions' && (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-3">What's Not Covered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {warrantyInfo.exclusions.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                    <span className="text-red-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-800 mb-3">Care Recommendations</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Clean jewelry regularly with appropriate products</li>
                <li>• Store in a cool, dry place when not wearing</li>
                <li>• Avoid exposure to chemicals, perfumes, and lotions</li>
                <li>• Have professional cleaning and inspection annually</li>
                <li>• Remove jewelry before swimming or exercising</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Warranty Terms & Conditions</h3>
              <div className="space-y-4">
                {warrantyInfo.terms.map((term, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{term}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-3">Important Notes</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Warranty is non-refundable and non-transferable</li>
                <li>• Coverage begins from date of purchase</li>
                <li>• All repairs must be performed by authorized service centers</li>
                <li>• Warranty does not cover shipping costs for repairs</li>
                <li>• This warranty gives you specific legal rights</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-800 mb-2">Register Your Warranty</h3>
              <p className="text-green-700">
                Complete the form below to activate your lifetime warranty coverage.
              </p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={registrationForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={registrationForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={registrationForm.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Purchase Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="purchaseDate"
                      value={registrationForm.purchaseDate}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Serial Number (if applicable)
                </label>
                <input
                  type="text"
                  name="serialNumber"
                  value={registrationForm.serialNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Enter serial number"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={registrationForm.agreeToTerms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-gold-600 border-gray-300 rounded focus:ring-gold-500"
                />
                <label className="text-sm text-gray-700">
                  I agree to the warranty terms and conditions and confirm that all information provided is accurate.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gold-500 text-white py-3 px-6 rounded-lg hover:bg-gold-600 transition-colors font-medium"
              >
                Register Warranty
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductWarranty;