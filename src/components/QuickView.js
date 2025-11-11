import React, { useState, useContext } from 'react';
import { XMarkIcon, HeartIcon, StarIcon, ShareIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { BagContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const QuickView = ({ product, isOpen, onClose }) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToBag } = useContext(BagContext);

  if (!isOpen || !product) return null;

  // Defensive: ensure images is always an array
  const images = Array.isArray(product.images) && product.images.length > 0 ? product.images : [product.image || '/images/placeholder.jpg'];

  // Ensure selectedImage is always in bounds
  const safeSelectedImage = Math.min(selectedImage, images.length - 1);

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
    onClose();
  };

  const handleBuyNow = () => {
    onClose();
    navigate('/checkout', { state: { buyNowProduct: { ...product, quantity } } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Quick View</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                {product.video ? (
                  <video
                    src={product.video}
                    autoPlay
                    muted
                    loop
                    controls
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={images[safeSelectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${safeSelectedImage === index ? 'border-gold-600' : 'border-gray-200'
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
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartIconSolid className="w-6 h-6 text-red-500" />
                    ) : (
                      <HeartIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">4.8 (24 reviews)</span>
                  </div>
                  {product.badge && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  {product.description || "No description available for this product."}
                </p>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Size</h3>
                  <div className="grid grid-cols-4 gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-4 border-2 rounded-lg font-medium transition-all ${selectedSize === size
                            ? 'border-gold-600 bg-gold-50 text-gold-700'
                            : 'border-gray-200 hover:border-gold-400 text-gray-700'
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-gold-400 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-2 text-lg font-bold text-gray-900">
                Total: ₹{(product.price * quantity).toLocaleString()}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gold-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gold-700 transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => navigator.share ? navigator.share({ title: product.name, url: window.location.href }) : alert('Share not supported on this device.')}
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  <ShareIcon className="w-5 h-5" /> Share
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="w-full flex items-center justify-center gap-2 border border-yellow-400 text-yellow-700 py-3 px-6 rounded-xl font-semibold hover:bg-yellow-50 transition-colors"
                  onClick={onClose}
                >
                  View Details
                </Link>
              </div>

              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Category:</span>
                    <span className="ml-2 font-medium text-gray-900">{product.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Material:</span>
                    <span className="ml-2 font-medium text-gray-900">{product.material}</span>
                  </div>
                  {product.weight && (
                    <div>
                      <span className="text-gray-600">Weight:</span>
                      <span className="ml-2 font-medium text-gray-900">{product.weight}</span>
                    </div>
                  )}
                  {product.occasion && (
                    <div>
                      <span className="text-gray-600">Occasion:</span>
                      <span className="ml-2 font-medium text-gray-900">{product.occasion}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 ? (
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-gold-600 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-6 text-gray-500">
                  No special features listed for this product.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;