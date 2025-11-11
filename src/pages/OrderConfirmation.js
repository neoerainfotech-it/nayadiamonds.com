import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const { orderNumber, orderTotal, items } = location.state || {};

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!orderNumber) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">❌</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Not Found</h1>
          <p className="text-gray-600 mb-8">
            We couldn't find your order details. Please check your order history or contact support.
          </p>
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Order Confirmed!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Order Summary Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Summary</h2>
                <p className="text-gray-600">Order #{orderNumber}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Order Total</p>
                  <p className="text-2xl font-bold text-yellow-600">{formatPrice(orderTotal)}</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Items Ordered</h3>
              <div className="space-y-4">
                {items?.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        {item.material} • {item.weight} • Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>Estimated Delivery: 3-5 business days</p>
                <p>Shipping Method: Express Delivery</p>
                <p>Tracking: Will be available within 24 hours</p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Information</h3>
              <div className="space-y-2 text-gray-600">
                <p>Payment Method: Credit Card</p>
                <p>Payment Status: Paid</p>
                <p>Transaction ID: TXN{Date.now()}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 text-xl">📧</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Email Confirmation</h4>
                <p className="text-sm text-gray-600">
                  You'll receive an email confirmation with order details within 30 minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 text-xl">📦</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Order Processing</h4>
                <p className="text-sm text-gray-600">
                  Your order will be processed and shipped within 1-2 business days.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-yellow-600 text-xl">🚚</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Tracking Updates</h4>
                <p className="text-sm text-gray-600">
                  You'll receive tracking information once your order ships.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Purchase is Protected</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm font-semibold text-gray-800">100% Hallmarked</p>
                <p className="text-xs text-gray-600">BIS Certified Gold</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-sm font-semibold text-gray-800">Lifetime Warranty</p>
                <p className="text-xs text-gray-600">On all gold jewelry</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <p className="text-sm font-semibold text-gray-800">Easy Returns</p>
                <p className="text-xs text-gray-600">30-day return policy</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔒</div>
                <p className="text-sm font-semibold text-gray-800">Secure Payment</p>
                <p className="text-xs text-gray-600">SSL encrypted</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-block border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 hover:text-black transition-colors duration-200"
              >
                Print Receipt
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Need help? Contact our customer support at{' '}
              <a href="mailto:support@vjsjewels.com" className="text-yellow-600 hover:text-yellow-700">
                support@vjsjewels.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation; 