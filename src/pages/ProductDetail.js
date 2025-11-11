import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BagContext } from '../context/CartContext';
import { products } from '../data/products';
import ProductVideo from '../components/ProductVideo';
import Product360View from '../components/Product360View';
import ProductAR from '../components/ProductAR';
import ProductLiveChat from '../components/ProductLiveChat';
import ProductWarranty from '../components/ProductWarranty';
import BuyNowModal from '../components/BuyNowModal';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToBag, bagItems = [] } = useContext(BagContext);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // ✅ Find product safely
  const product = Array.isArray(products)
    ? products.find((p) => String(p.id) === String(id))
    : null;

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
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // ✅ Handle both old and new product structures
  const productImages = product.images
    ? product.images
    : product.image
    ? [product.image]
    : ['/images/placeholder.jpg'];

  const handleAddToCart = () => {
    addToBag({ ...product, quantity });
  };

  const handleBuyNow = () => setShowBuyNow(true);

  return (
    <div className="min-h-screen bg-gray-50 font-[Poppins]">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex space-x-2 text-lg font-semibold">
            <button onClick={() => navigate('/')} className="text-gray-700 hover:text-yellow-600">Home</button>
            <span className="text-gray-400">/</span>
            <span className="text-black capitalize">
              {product.name?.replace(/([A-Z])/g, ' $1').trim() || 'Product'}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images / Video */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
            {showVideo && product.hasVideo && product.video ? (
              <video controls autoPlay className="w-full h-full object-cover rounded-2xl">
                <source src={product.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Thumbnail selector (only for multiple images) */}
          {productImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg border-2 overflow-hidden transition-all ${
                    selectedImage === index ? 'border-yellow-500' : 'border-transparent hover:border-yellow-400'
                  }`}
                >
                  <img src={img} alt={`${product.name}-${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* ✅ Video toggle */}
          {product.hasVideo && (
            <button
              onClick={() => setShowVideo(!showVideo)}
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              {showVideo ? 'Show Images' : 'Play Product Video'}
            </button>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-5 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center space-x-3">
            <span className="text-2xl font-semibold text-yellow-600">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-lg">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center text-yellow-500">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>{index < Math.round(product.rating || 0) ? '★' : '☆'}</span>
            ))}
            <span className="text-gray-600 ml-2 text-sm">({product.reviews || 0} reviews)</span>
          </div>

          {/* Description / Attributes */}
          <div className="text-gray-700 space-y-1">
            {product.description && <p>{product.description}</p>}
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Occasion:</strong> {product.occasion}</p>
            <p><strong>Weight:</strong> {product.weight}</p>
            <p><strong>Category:</strong> {product.category}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Buy Now
            </button>
          </div>

          {/* Labels */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.isNew && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">New Arrival</span>
            )}
            {product.isBestSeller && (
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">Best Seller</span>
            )}
          </div>
        </div>
      </div>

      {/* Buy Now Modal */}
      {showBuyNow && (
        <BuyNowModal
          product={product}
          quantity={quantity}
          onClose={() => setShowBuyNow(false)}
        />
      )}

      {/* Live Chat */}
      <ProductLiveChat product={product} />
    </div>
  );
};

export default ProductDetail;
