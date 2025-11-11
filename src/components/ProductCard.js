import React, { useState, useContext } from 'react';
import { BagContext } from '../context/CartContext';
import QuickView from './QuickView';

function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const { addToBag } = useContext(BagContext);
  // Use react-router navigation
  let routerNavigate;
  try {
    // eslint-disable-next-line
    routerNavigate = require('react-router-dom').useNavigate();
  } catch {}

  const productData = product;

  const handleAddToCart = () => {
    if (addToBag) {
      addToBag(productData);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Remove image flip on image click, add overlay button for flipping
  const handleNextImage = (e) => {
    e.stopPropagation();
    if (productData.images && productData.images.length > 1) {
      setCurrentImage((prev) => (prev + 1) % productData.images.length);
    }
  };

  // Open Quick View on card click
  const handleCardClick = (e) => {
    e.preventDefault();
    setShowQuickView(true);
  };

  return (
    <>
      <div
        className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer"
        onClick={handleCardClick}
      >
        {/* Product Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={productData.images ? productData.images[currentImage] : productData.image}
            alt={productData.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Next Image Button (overlay) */}
          {productData.images && productData.images.length > 1 && (
            <button
              onClick={handleNextImage}
              className="absolute bottom-3 right-3 bg-white bg-opacity-80 hover:bg-yellow-500 text-gray-800 hover:text-white p-2 rounded-full shadow-md transition-colors"
              aria-label="Next Image"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {productData.isNew && (
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                NEW
              </span>
            )}
            {productData.isBestSeller && (
              <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                BEST SELLER
              </span>
            )}
            {productData.discount > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {productData.discount}% OFF
              </span>
            )}
          </div>
          {/* Shop Action Icons Overlay */}
          <div className="shop-action flex flex-col gap-2 absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            {/* Wishlist */}
            <button
              className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center"
              aria-label="Add to wishlist"
              onClick={e => { e.stopPropagation(); setIsWishlisted(!isWishlisted); }}
            >
              <svg width="22" height="22" fill={isWishlisted ? '#e11d48' : 'none'} stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"></path></svg>
            </button>
            {/* Add to Bag */}
            <button
              className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center"
              aria-label="Add to Bag"
              onClick={e => { e.stopPropagation(); handleAddToCart(); }}
            >
              <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"></path><rect x="3" y="7" width="18" height="14" rx="2"></rect><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
            </button>
            {/* Quick View */}
            <button
              className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center"
              aria-label="Quick View"
              onClick={e => { e.stopPropagation(); setShowQuickView(true); }}
            >
              <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"></path></svg>
            </button>
          </div>
        </div>
        {/* Product Info */}
        <div className="p-4">
          {/* Category and Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500 font-medium">{productData.category}</span>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill={i < Math.floor(productData.rating) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-1">({productData.reviews})</span>
            </div>
          </div>
          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-yellow-600 transition-colors line-clamp-2">
            {productData.name}
          </h3>
          {/* Material and Weight */}
          <div className="text-sm text-gray-600 mb-3">
            <span className="font-medium">{productData.material}</span>
            {productData.weight && (
              <span className="ml-2">• {productData.weight}</span>
            )}
          </div>
          {/* Pricing */}
          <div className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                {formatPrice(productData.price)}
              </span>
              {productData.originalPrice && productData.originalPrice > productData.price && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(productData.originalPrice)}
                </span>
              )}
            </div>
            {productData.discount > 0 && (
              <span className="text-sm text-green-600 font-semibold">
                Save {formatPrice(productData.originalPrice - productData.price)}
              </span>
            )}
            {/* Order Now Button below price */}
            <button
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 mt-3 shadow"
              onClick={e => {
                e.stopPropagation();
                if (routerNavigate) {
                  routerNavigate('/checkout', { state: { buyNowProduct: { ...productData, quantity: 1 } } });
                } else if (window && window.location) {
                  window.location.href = `/checkout?buyNowProductId=${productData.id}&quantity=1`;
                }
              }}
            >
              Make Your Order
            </button>
          </div>
        </div>
      </div>
      {/* Quick View Modal */}
      {showQuickView && (
        <QuickView
          product={productData}
          isOpen={showQuickView}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
}

export default ProductCard;