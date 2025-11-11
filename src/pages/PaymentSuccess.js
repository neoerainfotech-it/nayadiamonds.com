import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PaymentSuccess() {
  const location = useLocation();
  const { orderNumber, orderTotal, method } = location.state || {};

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-gray-700 mb-4">Thank you for your purchase.</p>
        <div className="mb-4">
          <div className="text-lg font-semibold">Order Number: <span className="text-green-800">{orderNumber}</span></div>
          <div className="text-lg font-semibold">Amount Paid: <span className="text-green-800">₹{orderTotal?.toLocaleString()}</span></div>
          <div className="text-md mt-2">Payment Method: <span className="text-green-800">{method}</span></div>
        </div>
        <Link to="/" className="inline-block mt-4 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">Back to Home</Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
