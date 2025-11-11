import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BagContext } from '../context/CartContext';
import { products } from '../data/products';
import { StarIcon, HeartIcon, ShareIcon, TruckIcon, ShieldCheckIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import ProductVideo from '../components/ProductVideo';
import Product360View from '../components/Product360View';
import ProductAR from '../components/ProductAR';
import ProductLiveChat from '../components/ProductLiveChat';
import ProductWarranty from '../components/ProductWarranty';
import BuyNowModal from '../components/BuyNowModal';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToBag, bagItems } = useContext(BagContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [showAR, setShowAR] = useState(false);
  const [show360View, setShow360View] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showWarranty, setShowWarranty] = useState(false);
  const [showBuyNow, setShowBuyNow] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const cartItem = bagItems.find(item => item.id === parseInt(id));

  useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    addToBag({
      ...product,
      size: selectedSize,
      quantity
    });
  };

  const handleBuyNow = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Please select a size');
      return;
    }
    setShowBuyNow(true);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      date: '2024-01-15',
      title: 'Absolutely stunning!',
      comment: 'This necklace is even more beautiful in person. The craftsmanship is exceptional and it looks perfect with any outfit.',
      verified: true
    },
    {
      id: 2,
      user: 'Michael R.',
      rating: 4,
      date: '2024-01-10',
      title: 'Great quality, fast delivery',
      comment: 'The ring is exactly as described. The gold finish is perfect and it arrived well-packaged. Highly recommend!',
      verified: true
    },
    {
      id: 3,
      user: 'Emily T.',
      rating: 5,
      date: '2024-01-08',
      title: 'Perfect gift for my wife',
      comment: 'My wife loves this bracelet! The design is elegant and the quality is outstanding. Worth every penny.',
      verified: true
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 font-[Poppins]">
      {/* Breadcrumb */}
      <div className="bg-transparent border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-lg font-semibold tracking-wide">
            <button
              onClick={() => navigate('/')}
              className="text-black hover:text-yellow-600 transition-colors capitalize"
            >
              Home
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate('/products')}
              className="text-black hover:text-yellow-600 transition-colors capitalize"
            >
              Shop
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate('/collections')}
              className="text-black hover:text-yellow-600 transition-colors capitalize"
            >
              Collections
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => navigate('/contact')}
              className="text-black hover:text-yellow-600 transition-colors capitalize"
            >
              Contact
            </button>
            <span className="text-gray-400">/</span>
            <span className="text-black capitalize">{product.name.replace(/([A-Z])/g, ' $1').trim()}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-700 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-gold-400' : 'border-gray-600 hover:border-gold-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold text-white drop-shadow-lg">{product.name}</h1>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartIcon className="w-6 h-6 text-red-400" />
                    ) : (
                      <HeartIcon className="w-6 h-6 text-gray-300" />
                    )}
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
                    <ShareIcon className="w-6 h-6 text-gray-300" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-200">
                    {averageRating.toFixed(1)} ({reviews.length} reviews)
                  </span>
                </div>
                {product.badge && (
                  <span className="bg-red-600 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-white drop-shadow">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-green-700 text-white text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {product.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Select Size</h3>
                <div className="grid grid-cols-4 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 border-2 rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-gold-400 bg-gold-50 text-gold-700'
                          : 'border-gray-600 hover:border-gold-400 text-gray-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                >
                  -
                </button>
                <span className="w-16 text-center text-lg font-medium text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-gold-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gold-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>{cartItem ? 'Update Cart' : 'Add to Cart'}</span>
                {cartItem && <span className="bg-white text-gold-600 px-2 py-1 rounded-full text-sm">{cartItem.quantity}</span>}
              </button>
              <button
                onClick={handleBuyNow}
                className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Interactive Features */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t">
              <button
                onClick={() => setShowAR(true)}
                className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-600 rounded-lg hover:border-gold-400 hover:bg-gold-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-300">Try AR</span>
              </button>
              <button
                onClick={() => setShow360View(true)}
                className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-600 rounded-lg hover:border-gold-400 hover:bg-gold-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-300">360° View</span>
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-600 rounded-lg hover:border-gold-400 hover:bg-gold-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-300">Watch Video</span>
              </button>
              <button
                onClick={() => setShowWarranty(true)}
                className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-gray-600 rounded-lg hover:border-gold-400 hover:bg-gold-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-300">Warranty</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-3">
                <TruckIcon className="w-6 h-6 text-gold-600" />
                <div>
                  <p className="font-medium text-gray-300">Free Shipping</p>
                  <p className="text-sm text-gray-400">On orders over $500</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheckIcon className="w-6 h-6 text-gold-600" />
                <div>
                  <p className="font-medium text-gray-300">Secure Payment</p>
                  <p className="text-sm text-gray-400">100% secure checkout</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ArrowPathIcon className="w-6 h-6 text-gold-600" />
                <div>
                  <p className="font-medium text-gray-300">Easy Returns</p>
                  <p className="text-sm text-gray-400">30 day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-600">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Specifications' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'shipping', label: 'Shipping & Returns' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-gold-600 text-gold-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">Features</h4>
                    <ul className="space-y-2 text-gray-300">
                      {product.features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-gold-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200 mb-3">Care Instructions</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">•</span>
                        Store in a cool, dry place
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">•</span>
                        Clean with a soft cloth
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">•</span>
                        Avoid contact with chemicals
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold-600 mr-2">•</span>
                        Professional cleaning recommended annually
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-4">Product Details</h4>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Material</dt>
                      <dd className="font-medium text-gray-300">{product.material}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Category</dt>
                      <dd className="font-medium text-gray-300">{product.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-400">Occasion</dt>
                      <dd className="font-medium text-gray-300">{product.occasion}</dd>
                    </div>
                    {product.weight && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Weight</dt>
                        <dd className="font-medium text-gray-300">{product.weight}</dd>
                      </div>
                    )}
                    {product.dimensions && (
                      <div className="flex justify-between">
                        <dt className="text-gray-400">Dimensions</dt>
                        <dd className="font-medium text-gray-300">{product.dimensions}</dd>
                      </div>
                    )}
                  </dl>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-4">Certification</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-gold-600 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Hallmark Certified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-gold-600 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Conflict-Free Diamonds</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center">
                        <span className="text-gold-600 font-bold text-sm">✓</span>
                      </div>
                      <span className="text-gray-300">Lifetime Warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-200">Customer Reviews</h3>
                    <p className="text-gray-400 mt-1">{reviews.length} reviews</p>
                  </div>
                  <button className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors">
                    Write a Review
                  </button>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-600 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-200">{review.user}</h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <StarIcon
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-medium text-gray-200 mb-2">{review.title}</h5>
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-4">Shipping Information</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gold-600 pl-4">
                      <h5 className="font-medium text-gray-300">Standard Shipping</h5>
                      <p className="text-gray-400 text-sm">5-7 business days</p>
                      <p className="text-gray-400 text-sm">Free on orders over $500</p>
                    </div>
                    <div className="border-l-4 border-gold-600 pl-4">
                      <h5 className="font-medium text-gray-300">Express Shipping</h5>
                      <p className="text-gray-400 text-sm">2-3 business days</p>
                      <p className="text-gray-400 text-sm">$25.00</p>
                    </div>
                    <div className="border-l-4 border-gold-600 pl-4">
                      <h5 className="font-medium text-gray-300">Overnight Shipping</h5>
                      <p className="text-gray-400 text-sm">Next business day</p>
                      <p className="text-gray-400 text-sm">$45.00</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-200 mb-4">Returns & Exchanges</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-green-600 pl-4">
                      <h5 className="font-medium text-gray-300">30-Day Returns</h5>
                      <p className="text-gray-400 text-sm">Full refund or exchange</p>
                      <p className="text-gray-400 text-sm">Item must be unworn</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h5 className="font-medium text-gray-300">Lifetime Warranty</h5>
                      <p className="text-gray-400 text-sm">Covers manufacturing defects</p>
                      <p className="text-gray-400 text-sm">Free repairs and maintenance</p>
                    </div>
                    <div className="border-l-4 border-green-600 pl-4">
                      <h5 className="font-medium text-gray-300">Size Exchanges</h5>
                      <p className="text-gray-400 text-sm">Free size exchanges</p>
                      <p className="text-gray-400 text-sm">Within 60 days</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-200 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAR && (
        <ProductAR 
          product={product} 
          onClose={() => setShowAR(false)} 
        />
      )}

      {show360View && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">360° Interactive View</h3>
              <button
                onClick={() => setShow360View(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <Product360View productName={product.name} />
            </div>
          </div>
        </div>
      )}

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Product Video</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ProductVideo productName={product.name} />
            </div>
          </div>
        </div>
      )}

      {showWarranty && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-lg font-semibold">Warranty Information</h3>
              <button
                onClick={() => setShowWarranty(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Close</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ProductWarranty product={product} />
            </div>
          </div>
        </div>
      )}

      {/* Live Chat */}
      <ProductLiveChat product={product} />

      {/* Show BuyNowModal if triggered */}
      {showBuyNow && (
        <BuyNowModal
          product={product}
          quantity={quantity}
          onClose={() => setShowBuyNow(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;