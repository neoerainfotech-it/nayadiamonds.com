import React from 'react';

const OrderButton = ({ children = "Make Your Order", className = "", ...props }) => (
  <button
    className={`w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 mt-3 shadow ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default OrderButton;
