import React from 'react';

const BagIcon = ({ className = "w-6 h-6", color = "#d4af37" }) => (
  <svg
    className={className}
    fill="none"
    stroke={color}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7V6a6 6 0 1112 0v1M3 7h18l-1.5 14.5a2 2 0 01-2 1.5H6.5a2 2 0 01-2-1.5L3 7z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BagIcon;