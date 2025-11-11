import React, { useState, useContext } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { BagContext } from '../context/CartContext';
import QuickView from './QuickView';
import { useNavigate } from 'react-router-dom';

const ProductGallery = ({ images, productName, productId, category, price = '', reviews = 0, rating = 4.0, product = {} }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToBag } = useContext(BagContext);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();
  // Icon SVGs
  const HeartIcon = (
    <svg width="22" height="22" fill={isWishlisted ? '#e11d48' : 'none'} stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" /></svg>
  );
  const BagIcon = (
    <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M16 11a4 4 0 0 1-8 0"/></svg>
  );
  const EyeIcon = (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"/></svg>
  );

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };


  const handleLightboxClose = React.useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const handlePrevious = React.useCallback(() => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = React.useCallback(() => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);




  const handleKeyDown = React.useCallback((e) => {
    if (!isLightboxOpen) return;
    switch (e.key) {
      case 'Escape':
        handleLightboxClose();
        break;
      case 'ArrowLeft':
        handlePrevious();
        break;
      case 'ArrowRight':
        handleNext();
        break;
      default:
        break;
    }
  }, [isLightboxOpen, handleLightboxClose, handlePrevious, handleNext]);

  React.useEffect(() => {
    if (isLightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen, handleKeyDown]);

  // --- Action Handlers ---
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToBag({
      id: productId,
      name: productName,
      category,
      price,
      images,
      ...product,
      quantity: 1
    });
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted((w) => !w);
    // TODO: Integrate with real wishlist context
  };

  // const handleCompare = (e) => { /* unused */ };

  const handleQuickView = (e) => {
    e?.stopPropagation && e.stopPropagation();
    setShowQuickView(true);
  };

  return (
    <>
      <div className="space-y-4">
        <div className="product-block group border border-gray-200 p-4 rounded-2xl transition-shadow hover:shadow-xl bg-white">
          <div className="product-transition relative">
            {/* Product Labels (badges, etc.) */}
            <div className="product-labels absolute top-3 left-3 z-10 flex flex-col gap-2">
              {/* Example: <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">NEW</span> */}
            </div>
            <div className="product-image image-main aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center relative">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  loading="lazy"
                  decoding="async"
                  width={360}
                  height={360}
                  src={img}
                  className={`gallery-image w-full h-full object-cover rounded-xl ${
                    idx === selectedImage
                      ? 'active'
                      : idx === (selectedImage - 1 + images.length) % images.length
                      ? 'prev'
                      : ''
                  }`}
                  alt={productName}
                  style={{ pointerEvents: idx === selectedImage ? 'auto' : 'none' }}
                />
              ))}
            </div>
            {/* Overlayed shop actions */}
            <div className="tooltip-left group-action absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="shop-action flex flex-col gap-2">
                <button className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center" onClick={handleWishlist} aria-label="Add to wishlist">
                  {HeartIcon}
                </button>
                <button className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center" onClick={handleAddToCart} aria-label="Add to Bag">
                  {BagIcon}
                </button>
                <button className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center" onClick={handleQuickView} aria-label="Quick View">
                  {EyeIcon}
                </button>
              </div>
            </div>
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all z-10"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all z-10"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm z-10">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
          {/* Product Caption */}
          <div className="product-caption mt-4">
            <div className="posted-in text-sm text-gray-500 mb-1">
              <span role="link" tabIndex={0} className="text-blue-600 underline cursor-pointer" rel="tag">{category}</span>
            </div>
            <h3 className="woocommerce-loop-product__title text-lg font-semibold mb-1">
              <button type="button" className="hover:text-pink-600 transition-colors underline" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={handleQuickView}>
                {productName}
              </button>
            </h3>
            <div className="count-review flex items-center gap-2 mb-2">
              <div className="star-rating flex items-center" role="img" aria-label={`Rated ${rating} out of 5`}>
                <span style={{ width: `${Math.round((rating / 5) * 100)}%` }} className="block text-yellow-400">
                  {'★'.repeat(Math.round(rating))}
                </span>
                <span className="text-gray-400 ml-1">({reviews} Reviews)</span>
              </div>
            </div>
            <div className="product-caption-bottom flex items-center justify-between mt-2">
              <span className="price text-xl font-bold text-pink-600">
                <span className="woocommerce-Price-amount amount">
                  <bdi>{price}<span className="woocommerce-Price-currencySymbol">₹</span></bdi>
                </span>
              </span>
              <button className="button product_type_simple order_now_button bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600 transition-colors" onClick={() => {
                navigate('/checkout', { state: { buyNowProduct: { id: productId, name: productName, category, price, images, ...product, quantity: 1 } } });
              }}>
                Make Your Order
              </button>
            </div>
          </div>
        </div>
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-4 mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-gold-600 ring-2 ring-gold-200'
                    : 'border-gray-200 hover:border-gold-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${productName} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={handleLightboxClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
            >
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
            {/* Main Image */}
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt={`${productName} ${selectedImage + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all"
                  aria-label="Previous image"
                  >
                    <ChevronLeftIcon className="w-8 h-8 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRightIcon className="w-8 h-8 text-gray-700" />
                  </button>
                </>
              )}
              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                  {selectedImage + 1} of {images.length}
                </div>
              )}
            </div>
            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="mt-6 flex justify-center space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-white'
                        : 'border-gray-400 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productName} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
            {/* Instructions */}
            <div className="mt-4 text-center text-white text-sm">
              <p>Use arrow keys to navigate • Press ESC to close</p>
            </div>
          </div>
        </div>
      )}
      {/* Quick View Modal */}
      {showQuickView && (
        <QuickView
          product={{ id: productId, name: productName, category, price, images, ...product }}
          isOpen={showQuickView}
          onClose={() => setShowQuickView(false)}
        />
      )}
    </>
  );
};

export default ProductGallery;