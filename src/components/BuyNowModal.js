import React from "react";
import { useNavigate } from "react-router-dom";
import { useBag } from '../context/CartContext';

function BuyNowModal({ product, quantity, onClose }) {
  const navigate = useNavigate();
  const { addToBag } = useBag();
  const gstRate = 0.03;
  const gst = product.price * quantity * gstRate;
  const total = product.price * quantity + gst;

  const handleProceed = () => {
    navigate("/checkout", {
      state: {
        buyNowProduct: {
          ...product,
          quantity,
          gst,
          total,
        },
      },
    });
  };

  const handleAddToCart = () => {
    addToBag({ ...product, quantity });
    navigate('/cart');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Order Summary</h2>
        <div className="flex items-center mb-4">
          <img src={product.images[0]} alt={product.name} className="w-20 h-20 rounded-lg object-cover mr-4" />
          <div>
            <div className="font-semibold text-lg">{product.name}</div>
            <div className="text-gray-600">Qty: {quantity}</div>
            <div className="text-gray-600">Price: ₹{product.price.toLocaleString()}</div>
          </div>
        </div>
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{(product.price * quantity).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (3%)</span>
            <span>₹{gst.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        <button
          onClick={handleProceed}
          className="w-full mt-6 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full mt-2 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Add to Cart
        </button>
        <button
          onClick={onClose}
          className="w-full mt-2 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default BuyNowModal;
