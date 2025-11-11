import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { BagContext } from '../context/CartContext';

function Bag() {
  const { bag, removeFromBag, updateQuantity, clearBag } = useContext(BagContext);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const calculateSubtotal = () => {
    return bag.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateDiscount = () => {
    if (!appliedPromo) return 0;
    const subtotal = calculateSubtotal();
    return appliedPromo.type === 'percentage' 
      ? (subtotal * appliedPromo.value) / 100
      : appliedPromo.value;
  };

  const calculateShipping = () => {
    const subtotal = calculateSubtotal();
    return subtotal >= 50000 ? 0 : 500; // Free shipping above ₹50,000
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const shipping = calculateShipping();
    return subtotal - discount + shipping;
  };

  const handlePromoCode = () => {
    // Mock promo codes
    const promoCodes = {
      'WELCOME10': { type: 'percentage', value: 10, description: '10% off on first order' },
      'FREESHIP': { type: 'shipping', value: 500, description: 'Free shipping' },
      'SAVE5000': { type: 'fixed', value: 5000, description: '₹5,000 off on orders above ₹50,000' }
    };

    const promo = promoCodes[promoCode.toUpperCase()];
    if (promo) {
      setAppliedPromo(promo);
      setPromoCode('');
    } else {
      alert('Invalid promo code. Try WELCOME10, FREESHIP, or SAVE5000');
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
  };

  // Find the most recently added item (last in the array)
  const lastAddedItem = bag.length > 0 ? bag[bag.length - 1] : null;

  if (bag.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">👜</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your bag is empty</h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any beautiful jewelry to your bag yet.
          </p>
          <Link
            to="/products"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Shopping Bag
          </h1>
          <p className="text-gray-600">
            {bag.length} item{bag.length !== 1 ? 's' : ''} in your bag
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Recently Added Item */}
        {lastAddedItem && (
          <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg flex items-center">
            <img src={lastAddedItem.image} alt={lastAddedItem.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
            <div className="flex-1">
              <div className="font-semibold text-lg text-yellow-800">Recently Added to Bag</div>
              <div className="font-bold text-gray-900">{lastAddedItem.name}</div>
              <div className="text-gray-700">Qty: {lastAddedItem.quantity} &nbsp;|&nbsp; {formatPrice(lastAddedItem.price)}</div>
            </div>
          </div>
        )}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Cart Items</h2>
                <button
                  onClick={clearBag}
                  className="text-sm text-red-600 hover:text-red-700 font-medium"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-6">
                {bag.map((item) => (
                  <div key={item.id}>
                    <div
                      className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-yellow-50 transition-colors"
                      onClick={() => setExpandedItemId(expandedItemId === item.id ? null : item.id)}
                    >
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.material} • {item.weight}
                        </p>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-gray-900">
                            {formatPrice(item.price)}
                          </span>
                          {item.originalPrice && item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatPrice(item.originalPrice)}
                            </span>
                          )}
                          {item.discount > 0 && (
                            <span className="text-sm text-green-600 font-semibold">
                              {item.discount}% OFF
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={e => { e.stopPropagation(); updateQuantity(item.id, Math.max(1, item.quantity - 1)); }}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-12 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={e => { e.stopPropagation(); updateQuantity(item.id, item.quantity + 1); }}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Item Total */}
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={e => { e.stopPropagation(); removeFromBag(item.id); }}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    {/* Expanded Details */}
                    {expandedItemId === item.id && (
                      <div className="bg-yellow-50 p-4 mt-2 rounded-lg border border-yellow-200">
                        <div className="mb-2 text-gray-800"><span className="font-semibold">Description:</span> {item.description}</div>
                        {item.features && item.features.length > 0 && (
                          <div className="mb-2">
                            <span className="font-semibold text-gray-800">Features:</span>
                            <ul className="list-disc list-inside ml-4 text-gray-700">
                              {item.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.dimensions && (
                          <div className="mb-2 text-gray-800"><span className="font-semibold">Dimensions:</span> {item.dimensions}</div>
                        )}
                        {item.badge && (
                          <div className="inline-block bg-yellow-200 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full mr-2">{item.badge}</div>
                        )}
                        {item.occasion && (
                          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">{item.occasion}</div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    onClick={handlePromoCode}
                    className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {appliedPromo && (
                  <div className="mt-2 flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-sm text-green-800">
                      {appliedPromo.description}
                    </span>
                    <button
                      onClick={removePromoCode}
                      className="text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(calculateSubtotal())}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(calculateDiscount())}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className={calculateShipping() === 0 ? 'text-green-600' : 'font-semibold'}>
                    {calculateShipping() === 0 ? 'Free' : formatPrice(calculateShipping())}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(calculateTotal())}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-gray-700">100% Hallmarked Gold</span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-gray-700">Lifetime Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-sm text-gray-700">30-day Return Policy</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full bg-yellow-500 text-black py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 text-center block"
              >
                Proceed to Checkout
              </Link>

              {/* Continue Shopping */}
              <Link
                to="/products"
                className="w-full mt-4 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-center block"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;