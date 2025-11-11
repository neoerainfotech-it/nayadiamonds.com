import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: [
        '+91 44 2345 6789',
        '+91 44 2345 6790'
      ],
      description: 'Call us for immediate assistance'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      details: [
        'info@vjsjewels.com',
        'support@vjsjewels.com'
      ],
      description: 'Send us an email anytime'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: [
        'VJS Jewels Showroom',
        '123 Anna Salai, Chennai - 600002'
      ],
      description: 'Visit our flagship store'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: [
        'Mon - Sat: 10:00 AM - 8:00 PM',
        'Sunday: 11:00 AM - 6:00 PM'
      ],
      description: 'We\'re here to serve you'
    }
  ];

  const storeLocations = [
    {
      name: 'Chennai - Anna Salai',
      address: '123 Anna Salai, Chennai - 600002',
      phone: '+91 44 2345 6789',
      hours: '10:00 AM - 8:00 PM',
      features: ['Gold Jewelry', 'Diamond Collection', 'Custom Design']
    },
    {
      name: 'Chennai - T Nagar',
      address: '456 Pondy Bazaar, T Nagar, Chennai - 600017',
      phone: '+91 44 2345 6790',
      hours: '10:00 AM - 8:00 PM',
      features: ['Silver Jewelry', 'Gemstones', 'Repairs']
    },
    {
      name: 'Chennai - Adyar',
      address: '789 LB Road, Adyar, Chennai - 600020',
      phone: '+91 44 2345 6791',
      hours: '10:00 AM - 8:00 PM',
      features: ['Wedding Collection', 'Antique Jewelry', 'Appraisal']
    }
  ];

  const faqs = [
    {
      question: 'Do you offer free shipping?',
      answer: 'Yes, we offer free shipping on all orders above ₹50,000. For orders below this amount, a nominal shipping fee of ₹200 applies.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn jewelry. Items must be in their original condition with all tags and certificates intact.'
    },
    {
      question: 'Do you provide jewelry certification?',
      answer: 'Yes, all our jewelry comes with proper certification. Gold jewelry is hallmarked, and diamonds come with GIA or IGI certificates.'
    },
    {
      question: 'Can I customize jewelry designs?',
      answer: 'Absolutely! We offer custom jewelry design services. You can work with our master craftsmen to create your perfect piece.'
    },
    {
      question: 'Do you offer jewelry insurance?',
      answer: 'Yes, we provide jewelry insurance options for high-value pieces. Our insurance covers damage, loss, and theft.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-600 to-yellow-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Contact Badge */}
            <div className="inline-flex items-center bg-yellow-500 bg-opacity-20 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl mr-3">💬</span>
              <span className="font-semibold">24/7 Customer Support</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in <span className="text-yellow-300">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed mb-8">
              We're here to help you find the perfect jewelry piece. Whether you need expert advice, 
              custom design consultation, or have questions about our collections, our team is ready to assist you.
            </p>
            
            {/* Quick Contact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">24hrs</div>
                <div className="text-sm text-yellow-100">Response Time</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">3</div>
                <div className="text-sm text-yellow-100">Showrooms</div>
              </div>
              <div className="bg-yellow-500 bg-opacity-20 px-6 py-4 rounded-lg backdrop-blur-sm">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm text-yellow-100">Satisfaction</div>
              </div>
            </div>
            
            {/* Contact Methods */}
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">📞</span>
                <span>Call: +91 44 2345 6789</span>
              </div>
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">✉️</span>
                <span>Email: info@vjsjewels.com</span>
              </div>
              <div className="flex items-center bg-yellow-500 bg-opacity-20 px-4 py-2 rounded-full">
                <span className="mr-2">💬</span>
                <span>Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-yellow-300 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 text-yellow-300 opacity-20">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800">Thank you for your message! We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="custom">Custom Design</option>
                    <option value="repair">Jewelry Repair</option>
                    <option value="appraisal">Jewelry Appraisal</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gold-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-gold-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                    <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Store Locations */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Store Locations</h3>
              <div className="space-y-4">
                {storeLocations.map((store, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">{store.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">{store.address}</p>
                    <p className="text-gray-600 text-sm mb-2">Phone: {store.phone}</p>
                    <p className="text-gray-600 text-sm mb-3">Hours: {store.hours}</p>
                    <div className="flex flex-wrap gap-2">
                      {store.features.map((feature, idx) => (
                        <span key={idx} className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Find Us</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map will be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">VJS Jewels - Anna Salai, Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 