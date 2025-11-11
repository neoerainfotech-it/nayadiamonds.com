import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (questionId) => {
    const newOpenQuestions = new Set(openQuestions);
    if (newOpenQuestions.has(questionId)) {
      newOpenQuestions.delete(questionId);
    } else {
      newOpenQuestions.add(questionId);
    }
    setOpenQuestions(newOpenQuestions);
  };

  const categories = [
    { id: 'general', name: 'General', icon: '❓' },
    { id: 'shopping', name: 'Shopping', icon: '🛒' },
    { id: 'jewelry', name: 'Jewelry', icon: '💎' },
    { id: 'shipping', name: 'Shipping', icon: '🚚' },
    { id: 'returns', name: 'Returns', icon: '🔄' },
    { id: 'care', name: 'Care', icon: '🧽' }
  ];

  const faqData = {
    general: [
      {
        id: 'gen1',
        question: 'What makes VJS Jewels different from other jewelry stores?',
        answer: 'VJS Jewels stands out for our 40+ years of experience, BIS hallmarked gold jewelry, GIA certified diamonds, lifetime warranty, and personalized customer service. We combine traditional craftsmanship with modern technology to create exceptional jewelry pieces.'
      },
      {
        id: 'gen2',
        question: 'Do you offer custom jewelry design services?',
        answer: 'Yes, we offer comprehensive custom jewelry design services. Our master craftsmen work closely with you to create unique pieces that reflect your personal style and preferences. From concept to completion, we ensure every detail meets your expectations.'
      },
      {
        id: 'gen3',
        question: 'What certifications do your jewelry pieces have?',
        answer: 'All our gold jewelry is BIS hallmarked, diamonds come with GIA or IGI certification, and we maintain ISO 9001:2015 quality standards. We are also members of the Responsible Jewellery Council, ensuring ethical business practices.'
      },
      {
        id: 'gen4',
        question: 'Do you provide jewelry appraisal services?',
        answer: 'Yes, we provide professional jewelry appraisal services for insurance purposes, estate planning, and resale. Our certified appraisers use current market values and provide detailed documentation for your jewelry pieces.'
      }
    ],
    shopping: [
      {
        id: 'shop1',
        question: 'How can I find the right jewelry piece for me?',
        answer: 'We offer personalized consultation services both online and in-store. Our experts can help you choose based on your style preferences, budget, occasion, and lifestyle. You can also use our size guide and care resources to make informed decisions.'
      },
      {
        id: 'shop2',
        question: 'Do you offer financing options?',
        answer: 'Yes, we offer various financing options including EMI plans, credit card installments, and special payment plans for high-value purchases. We also provide gold loan services and exchange programs for existing jewelry.'
      },
      {
        id: 'shop3',
        question: 'Can I compare different jewelry pieces?',
        answer: 'Absolutely! Our website features a product comparison tool that allows you to compare specifications, prices, and features of different jewelry pieces side by side. You can also create wishlists to save items for later comparison.'
      },
      {
        id: 'shop4',
        question: 'Do you offer discounts or promotions?',
        answer: 'We regularly offer seasonal promotions, festival discounts, and special deals for our loyal customers. Sign up for our newsletter to stay updated on the latest offers and exclusive deals.'
      }
    ],
    jewelry: [
      {
        id: 'jew1',
        question: 'What is the difference between 22K, 18K, and 14K gold?',
        answer: '22K gold contains 91.67% pure gold, 18K contains 75% pure gold, and 14K contains 58.33% pure gold. 22K is softer and more traditional, 18K offers a good balance of purity and durability, while 14K is more durable and affordable.'
      },
      {
        id: 'jew2',
        question: 'How do I know if a diamond is real?',
        answer: 'All our diamonds come with GIA or IGI certification. You can verify authenticity through the certification number on the respective institute\'s website. We also provide diamond testing services in our showrooms.'
      },
      {
        id: 'jew3',
        question: 'What are the 4C\'s of diamonds?',
        answer: 'The 4C\'s are Cut (how well the diamond is cut), Color (how colorless the diamond is), Clarity (how clear the diamond is), and Carat (the weight of the diamond). These factors determine a diamond\'s quality and value.'
      },
      {
        id: 'jew4',
        question: 'Do you sell lab-grown diamonds?',
        answer: 'Yes, we offer both natural and lab-grown diamonds. Lab-grown diamonds have identical physical and chemical properties to natural diamonds but are more affordable and environmentally friendly.'
      }
    ],
    shipping: [
      {
        id: 'ship1',
        question: 'Do you offer free shipping?',
        answer: 'Yes, we offer free shipping on all orders above ₹50,000. For orders below this amount, a nominal shipping fee of ₹200 applies. All shipments are fully insured and tracked.'
      },
      {
        id: 'ship2',
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Custom jewelry pieces may take 2-3 weeks for completion and shipping.'
      },
      {
        id: 'ship3',
        question: 'Is my jewelry insured during shipping?',
        answer: 'Yes, all jewelry shipments are fully insured against damage, loss, or theft. We use secure packaging and trusted courier services to ensure safe delivery.'
      },
      {
        id: 'ship4',
        question: 'Do you ship internationally?',
        answer: 'Currently, we ship within India. For international shipping, please contact our customer service team for special arrangements and pricing.'
      }
    ],
    returns: [
      {
        id: 'ret1',
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for all unworn jewelry in original condition with all tags and certificates intact. Custom jewelry and sale items may have different return terms.'
      },
      {
        id: 'ret2',
        question: 'How do I return an item?',
        answer: 'You can return items by visiting any of our showrooms or contacting our customer service team. We\'ll provide a return authorization and arrange for pickup or provide return shipping labels.'
      },
      {
        id: 'ret3',
        question: 'Do you offer exchanges?',
        answer: 'Yes, we offer exchanges for different sizes, styles, or pieces of equal or greater value. Exchange requests must be made within 30 days of purchase.'
      },
      {
        id: 'ret4',
        question: 'What if my jewelry has a defect?',
        answer: 'We provide lifetime warranty against manufacturing defects. If you discover a defect, please contact us immediately, and we\'ll repair or replace the item at no cost.'
      }
    ],
    care: [
      {
        id: 'care1',
        question: 'How often should I clean my jewelry?',
        answer: 'We recommend cleaning gold jewelry monthly, silver jewelry weekly, and diamond jewelry monthly. Professional cleaning should be done annually for all jewelry types.'
      },
      {
        id: 'care2',
        question: 'What\'s the best way to store jewelry?',
        answer: 'Store jewelry in individual pouches or boxes in a cool, dry place. Keep different metals separate to prevent scratching. Use anti-tarnish strips for silver jewelry.'
      },
      {
        id: 'care3',
        question: 'Can I wear jewelry while swimming?',
        answer: 'No, we recommend removing all jewelry before swimming, showering, or exercising. Chlorine, salt water, and sweat can damage jewelry and cause tarnishing.'
      },
      {
        id: 'care4',
        question: 'Do you offer jewelry repair services?',
        answer: 'Yes, we offer comprehensive repair services including chain repair, stone replacement, setting repair, and size adjustments. All repairs are done by our expert craftsmen.'
      }
    ]
  };

  const popularQuestions = [
    {
      question: 'How do I know my ring size?',
      answer: 'You can measure your ring size using our online size guide, visit our showroom for professional sizing, or request a free size kit. We recommend measuring in the evening when fingers are largest.',
      category: 'Size Guide'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and cash payments. We also offer EMI options and financing plans for eligible purchases.',
      category: 'Payment'
    },
    {
      question: 'Do you buy back old jewelry?',
      answer: 'Yes, we offer competitive buyback rates for old gold and diamond jewelry. We also provide exchange programs where you can trade in old jewelry for new pieces.',
      category: 'Buyback'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our jewelry, services, and policies. 
              Can't find what you're looking for? Contact our customer support team.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-teal-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">6</div>
                <div className="text-sm">Categories</div>
              </div>
              <div className="bg-teal-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">24+</div>
                <div className="text-sm">Questions</div>
              </div>
              <div className="bg-teal-500 bg-opacity-20 px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  activeCategory === category.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-teal-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {popularQuestions.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              {categories.find(cat => cat.id === activeCategory)?.name} Questions
            </h3>

            <div className="space-y-4">
              {faqData[activeCategory].map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <span className="text-teal-600 text-xl">
                      {openQuestions.has(faq.id) ? '−' : '+'}
                    </span>
                  </button>
                  {openQuestions.has(faq.id) && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg p-8 mb-16 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Our customer support team is here to help you with any questions or concerns. 
              We're available 24/7 to provide personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors"
              >
                Contact Support
              </Link>
              <a
                href="tel:+914423456789"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Related Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/jewelry-care"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🧽</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jewelry Care Guide</h3>
              <p className="text-gray-600">Learn how to maintain and care for your precious jewelry</p>
            </Link>
            <Link
              to="/size-guide"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">📏</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Size Guide</h3>
              <p className="text-gray-600">Find your perfect fit with our comprehensive size charts</p>
            </Link>
            <Link
              to="/about"
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">About Us</h3>
              <p className="text-gray-600">Learn about our history, values, and commitment to quality</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Shop?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Now that you have all the information you need, explore our beautiful collection 
            of jewelry and find the perfect piece for yourself or your loved ones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-500 transition-colors shadow-lg"
            >
              Browse Collection
            </Link>
            <Link
              to="/contact"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 hover:text-white transition-colors"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ; 