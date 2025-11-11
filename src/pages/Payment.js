import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaLock, FaCreditCard, FaUniversity, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  // Expecting these from checkout
  const {
    orderTotal = 0,
    orderNumber = '',
    items = [],
    subtotal = 0,
    gst = 0,
    goldRate = null,
    billingAddress = {},
  } = location.state || {};

  const [method, setMethod] = useState('Credit Card');
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [netbankingBank, setNetbankingBank] = useState('');
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaying(true);
    setTimeout(() => {
      navigate('/payment-success', {
        state: { orderNumber, orderTotal, method }
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-yellow-100">
        <h1 className="text-3xl font-bold text-yellow-800 mb-2 text-center font-[Poppins]">Complete Your Payment</h1>
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Order Summary */}
          <div className="flex-1 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <h2 className="text-xl font-semibold text-yellow-900 mb-2">Order Summary</h2>
            <ul className="divide-y divide-yellow-100 mb-2 max-h-40 overflow-y-auto">
              {items && items.length > 0 ? items.map((item, idx) => (
                <li key={idx} className="py-2 flex justify-between items-center text-sm">
                  <span>{item.name} <span className="text-xs text-gray-500">x{item.qty || 1}</span></span>
                  <span>₹{item.price?.toLocaleString()}</span>
                </li>
              )) : <li className="py-2 text-gray-500">No items</li>}
            </ul>
            <div className="flex justify-between text-sm mb-1"><span>Subtotal</span><span>₹{subtotal?.toLocaleString()}</span></div>
            {goldRate && <div className="flex justify-between text-sm mb-1"><span>Gold Rate</span><span>₹{goldRate?.toLocaleString()}</span></div>}
            <div className="flex justify-between text-sm mb-1"><span>GST</span><span>₹{gst?.toLocaleString()}</span></div>
            <div className="flex justify-between text-base font-bold text-yellow-900 mt-2"><span>Total</span><span>₹{orderTotal?.toLocaleString()}</span></div>
          </div>
          {/* Payment Form */}
          <form className="flex-1" onSubmit={handlePayment}>
            <h2 className="text-xl font-semibold text-yellow-900 mb-2">Select Payment Method</h2>
            <div className="space-y-3 mb-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="method" value="Credit Card" checked={method === 'Credit Card'} onChange={() => setMethod('Credit Card')} className="accent-yellow-500" />
                <FaCreditCard className="text-yellow-600" /> Credit Card
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="method" value="Debit Card" checked={method === 'Debit Card'} onChange={() => setMethod('Debit Card')} className="accent-yellow-500" />
                <FaCreditCard className="text-yellow-600" /> Debit Card
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="method" value="UPI" checked={method === 'UPI'} onChange={() => setMethod('UPI')} className="accent-yellow-500" />
                <FaMobileAlt className="text-yellow-600" /> UPI
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="method" value="Netbanking" checked={method === 'Netbanking'} onChange={() => setMethod('Netbanking')} className="accent-yellow-500" />
                <FaUniversity className="text-yellow-600" /> Netbanking
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="method" value="COD" checked={method === 'COD'} onChange={() => setMethod('COD')} className="accent-yellow-500" />
                <FaMoneyBillWave className="text-yellow-600" /> Cash on Delivery
              </label>
            </div>
            {/* Payment Details */}
            {(method === 'Credit Card' || method === 'Debit Card') && (
              <div className="space-y-2 mb-4">
                <input type="text" required placeholder="Card Number" maxLength={19} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={cardDetails.number} onChange={e => setCardDetails({ ...cardDetails, number: e.target.value })} />
                <input type="text" required placeholder="Name on Card" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={cardDetails.name} onChange={e => setCardDetails({ ...cardDetails, name: e.target.value })} />
                <div className="flex gap-2">
                  <input type="text" required placeholder="MM/YY" maxLength={5} className="w-1/2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={cardDetails.expiry} onChange={e => setCardDetails({ ...cardDetails, expiry: e.target.value })} />
                  <input type="password" required placeholder="CVV" maxLength={4} className="w-1/2 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={cardDetails.cvv} onChange={e => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
                </div>
              </div>
            )}
            {method === 'UPI' && (
              <div className="mb-4">
                <input type="text" required placeholder="Enter UPI ID" className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={upiId} onChange={e => setUpiId(e.target.value)} />
              </div>
            )}
            {method === 'Netbanking' && (
              <div className="mb-4">
                <select required className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400" value={netbankingBank} onChange={e => setNetbankingBank(e.target.value)}>
                  <option value="">Select Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="Kotak">Kotak Mahindra Bank</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
            {/* Billing Address */}
            <div className="bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-100">
              <h3 className="font-semibold text-yellow-900 mb-1 text-sm">Billing Address</h3>
              {billingAddress && billingAddress.name ? (
                <div className="text-xs text-gray-700">
                  <div>{billingAddress.name}</div>
                  <div>{billingAddress.address}</div>
                  <div>{billingAddress.city}, {billingAddress.state} {billingAddress.zip}</div>
                  <div>{billingAddress.phone}</div>
                </div>
              ) : <div className="text-xs text-gray-400">No billing address provided.</div>}
            </div>
            {/* Pay Now Button */}
            <button type="submit" disabled={isPaying} className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
              <FaLock /> {isPaying ? 'Processing...' : `Pay ₹${orderTotal?.toLocaleString()}`}
            </button>
            <div className="flex justify-center mt-3">
              <img src="https://www.razorpay.com/images/payment-methods.svg" alt="Payment Methods" className="h-6" />
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">100% Secure Payments. Your data is protected.</div>
          </form>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="text-yellow-700 font-semibold">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Payment;
