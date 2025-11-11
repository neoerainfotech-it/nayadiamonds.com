import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BagContext } from '../context/CartContext';
import { products as allProducts } from '../hooks/data/products';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bag, clearBag } = useContext(BagContext);
  // Support buyNowProduct from query params (for QuickView Buy Now)
  let buyNowProduct = location.state?.buyNowProduct;
  if (!buyNowProduct && location.search.includes('buyNowProductId')) {
    const params = new URLSearchParams(location.search);
    const id = params.get('buyNowProductId');
    const quantity = parseInt(params.get('quantity') || '1', 10);
    const found = allProducts.find(p => String(p.id) === String(id));
    if (found) {
      buyNowProduct = { ...found, quantity };
    }
  }

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', pincode: '', country: 'India',
    cardNumber: '', cardName: '', expiryMonth: '', expiryYear: '', cvv: '',
    saveInfo: false, giftWrap: false, specialInstructions: ''
  });
  const [paymentMethod] = useState('credit-card');

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR', minimumFractionDigits: 0
    }).format(price);
  };

  const isGoldProduct = (item) => item.material?.toLowerCase().includes('gold');
  const isDiamondProduct = (item) => item.material?.toLowerCase().includes('diamond');
  const isSilverProduct = (item) => item.material?.toLowerCase().includes('silver');

  const getGoldBreakdown = (item) => {
    const goldRate = item.goldRate || 6000;
    const weight = item.weight || 10;
    const makingCharges = item.makingCharges || 5000;
    const goldPrice = goldRate * weight;
    const gst = 0.03 * (goldPrice + makingCharges);
    const total = goldPrice + makingCharges + gst;
    return { goldRate, weight, goldPrice, netMaking: makingCharges, gst, total };
  };
  const getGST = (item) => {
    // GST is 3% of price for all jewelry
    let base = 0;
    if (isGoldProduct(item)) {
      const breakdown = getGoldBreakdown(item);
      base = breakdown.goldPrice + breakdown.netMaking;
    } else {
      base = (item.price || 0) * (item.quantity || 1);
    }
    if (isNaN(base) || !isFinite(base)) base = 0;
    return 0.03 * base;
  };

  const items = buyNowProduct ? [buyNowProduct] : bag;

  // Subtotal should include making charges for all items
  const calculateSubtotal = () => {
    const itemsList = buyNowProduct ? [buyNowProduct] : bag;
    return itemsList.reduce((sum, item) => {
      const price = (item.price || 0) * (item.quantity || 1);
      const makingCharges = item.makingCharges ? (item.makingCharges * (item.quantity || 1)) : 0;
      return sum + price + makingCharges;
    }, 0);
  };

  const calculateShipping = () => calculateSubtotal() >= 50000 ? 0 : 500;
  const calculateGiftWrap = () => formData.giftWrap ? 200 : 0;
  // Calculate GST for all items (3% of price + making charges for each item)
  const calculateGST = () => {
    const itemsList = buyNowProduct ? [buyNowProduct] : bag;
    return itemsList.reduce((sum, item) => {
      const price = (item.price || 0) * (item.quantity || 1);
      const makingCharges = item.makingCharges ? (item.makingCharges * (item.quantity || 1)) : 0;
      return sum + 0.03 * (price + makingCharges);
    }, 0);
  };

  // Total includes subtotal, shipping, gift wrap, and GST
  const calculateTotal = () => calculateSubtotal() + calculateShipping() + calculateGiftWrap() + calculateGST();

  // handleInputChange is not used, so removed to clear lint error

  const handleNext = () => {
    // Always go to payment page on continue
    const orderNumber = 'VAMANA' + Date.now();
    let orderTotal, goldRate, gst, subtotal;
    if (buyNowProduct) {
      if (isGoldProduct(buyNowProduct)) {
        const breakdown = getGoldBreakdown(buyNowProduct);
        orderTotal = breakdown.total;
        goldRate = breakdown.goldRate;
        gst = breakdown.gst;
        subtotal = breakdown.goldPrice + breakdown.netMaking;
      } else {
        orderTotal = buyNowProduct.price * buyNowProduct.quantity;
        subtotal = buyNowProduct.price * buyNowProduct.quantity;
        gst = 0;
        goldRate = null;
      }
    } else {
      orderTotal = calculateTotal();
      subtotal = calculateSubtotal();
      gst = 0.03 * subtotal;
      goldRate = null;
    }
    // Compose billing address from formData
    const billingAddress = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.pincode,
      phone: formData.phone,
    };
    navigate('/payment', {
      state: { orderTotal, orderNumber, items, subtotal, gst, goldRate, billingAddress }
    });
    if (!buyNowProduct) clearBag();
  };

  const handleBack = () => setStep(step - 1);

  // Removed unused validateShippingInfo and validatePaymentInfo to clear lint warnings

  const handleConfirm = () => {
    setIsProcessing(true);
    const orderNumber = 'VAMANA' + Date.now();
    const orderTotal = buyNowProduct
      ? (isGoldProduct(buyNowProduct) ? getGoldBreakdown(buyNowProduct).total : buyNowProduct.price * buyNowProduct.quantity)
      : calculateTotal();

    setTimeout(() => {
      navigate('/payment', {
        state: { orderTotal, orderNumber, items }
      });
      if (!buyNowProduct) clearBag();
      setIsProcessing(false);
    }, 1500); // Simulated delay
  };

  if (!buyNowProduct && bag.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">
            Add some beautiful jewelry to your cart to proceed with checkout.
          </p>
          <Link
            to="/products"
            className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center tracking-wide">Checkout & Bill Summary</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Bill Summary Card */}
          <div className="md:w-2/3">
            <div className="bg-yellow-50 rounded-xl shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center gap-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 7V6a2 2 0 012-2h12a2 2 0 012 2v1" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="7" width="16" height="13" rx="2" fill="#FFFDE7" stroke="#FFD700" strokeWidth="2"/><path d="M8 11h8M8 15h4" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
                Bill Payment Summary
              </h2>
              <div className="divide-y divide-yellow-100">
                {items.map((item) => {
                  // Material-specific price label and GST calculation
                  let label = 'Price';
                  let price = (item.price || 0) * (item.quantity || 1);
                  let gst = 0;
                  let breakdown = null;
                  let showBreakdown = false;
                  let makingCharges = item.makingCharges ? (item.makingCharges * (item.quantity || 1)) : 0;
                  if (isGoldProduct(item)) {
                    label = 'Gold Price';
                    breakdown = getGoldBreakdown(item);
                    // Use item.price for gold products if available, else fallback to breakdown.goldPrice
                    price = (item.price || breakdown.goldPrice || 0) * (item.quantity || 1);
                    gst = breakdown.gst;
                    showBreakdown = true;
                  } else if (isDiamondProduct(item)) {
                    label = 'Diamond Price';
                    price = (item.price || 0) * (item.quantity || 1);
                    gst = 0.03 * price;
                  } else if (isSilverProduct(item)) {
                    label = 'Silver Price';
                    price = (item.price || 0) * (item.quantity || 1);
                    gst = 0.03 * price;
                  } else if (item.material) {
                    label = item.material.charAt(0).toUpperCase() + item.material.slice(1) + ' Price';
                    price = (item.price || 0) * (item.quantity || 1);
                    gst = 0.03 * price;
                  } else {
                    price = (item.price || 0) * (item.quantity || 1);
                    gst = 0.03 * price;
                  }
                  // Prevent NaN
                  if (isNaN(price) || !isFinite(price)) price = 0;
                  if (isNaN(gst) || !isFinite(gst) || gst === 0) gst = 50; // Minimum GST fallback
                  // Discount for gold
                  const discount = isGoldProduct(item) && item.discount ? (breakdown.goldPrice + breakdown.netMaking) * (item.discount / 100) : 0;
                  // Calculate total for all types
                  let total = 0;
                  if (showBreakdown) {
                    // Gold: goldPrice + makingCharges + gst - discount
                    total = breakdown.goldPrice + breakdown.netMaking + gst - discount;
                  } else {
                    // Others: price + makingCharges + gst
                    total = price + makingCharges + gst;
                  }
                  return (
                    <div key={item.id} className="py-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image || item.images?.[0]} alt={item.name} className="w-20 h-20 rounded-lg object-cover border border-yellow-200 shadow" />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-lg text-yellow-900 truncate">{item.name}</div>
                          <div className="text-sm text-yellow-700">Qty: {item.quantity}</div>
                          <div className="text-sm text-yellow-700">Material: {item.material}</div>
                        </div>
                        <div className="text-lg font-bold text-yellow-800 whitespace-nowrap">{formatPrice(price)}</div>
                      </div>
                      {showBreakdown ? (
                        <>
                          <div className="flex justify-between text-base mb-1">
                            <span>Gold Price ({formatPrice(breakdown.goldRate)} x {breakdown.weight}g)</span>
                            <span>{formatPrice(breakdown.goldPrice)}</span>
                          </div>
                          <div className="flex justify-between text-base mb-1">
                            <span>Making Charges</span>
                            <span>{formatPrice(breakdown.netMaking)}</span>
                          </div>
                          {discount > 0 && (
                            <div className="flex justify-between text-base mb-1">
                              <span>Discount</span>
                              <span className="text-green-700">- {formatPrice(discount)}</span>
                            </div>
                          )}
                        </>
                      ) : (
                        makingCharges > 0 && (
                          <div className="flex justify-between text-base mb-1">
                            <span>Making Charges</span>
                            <span>{formatPrice(makingCharges)}</span>
                          </div>
                        )
                      )}
                      <div className="flex justify-between text-base mb-1">
                        <span>GST (3%)</span>
                        <span>{formatPrice(gst)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold border-t pt-3 mt-3">
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 space-y-2 text-yellow-900">
                <div className="flex justify-between text-base">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(calculateSubtotal())}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span>Shipping</span>
                  <span className={calculateShipping() === 0 ? 'text-green-600 font-semibold' : 'font-semibold'}>
                    {calculateShipping() === 0 ? 'Free' : formatPrice(calculateShipping())}
                  </span>
                </div>
                {formData.giftWrap && (
                  <div className="flex justify-between text-base">
                    <span>Gift Wrapping</span>
                    <span className="font-semibold">{formatPrice(calculateGiftWrap())}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold border-t pt-3 mt-3">
                  <span>Total</span>
                  <span>{formatPrice(calculateTotal())}</span>
                </div>
              </div>
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 border border-yellow-300 text-yellow-700 rounded-lg font-semibold hover:bg-yellow-50 transition-colors"
                >
                  Back
                </button>
              )}
              <div className="ml-auto">
                {step < 3 ? (
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleConfirm}
                    disabled={isProcessing}
                    className="px-8 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      'Confirm & Pay'
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* Customer & Shipping Details */}
          <div className="md:w-1/3 bg-yellow-50 rounded-xl shadow p-6 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Customer Details</h3>
              <div className="text-yellow-900">
                <div>{formData.firstName} {formData.lastName}</div>
                <div className="text-sm">{formData.email}</div>
                <div className="text-sm">{formData.phone}</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Shipping Address</h3>
              <div className="text-yellow-900 text-sm">
                <div>{formData.address}</div>
                <div>{formData.city}, {formData.state} {formData.pincode}</div>
                <div>{formData.country}</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Payment Method</h3>
              <div className="text-yellow-900 text-sm capitalize">{paymentMethod.replace('-', ' ')}</div>
              {paymentMethod === 'credit-card' && formData.cardNumber && (
                <div className="text-yellow-700 text-xs mt-1">Card ending in {formData.cardNumber.slice(-4)}</div>
              )}
            </div>
            {formData.giftWrap && (
              <div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Gift Message</h3>
                <div className="text-yellow-900 text-sm whitespace-pre-line">{formData.specialInstructions}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
