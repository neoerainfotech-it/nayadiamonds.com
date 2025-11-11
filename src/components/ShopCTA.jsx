

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShopCTA.css';

const ShopCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="cta-container">
      <div className="cta-inner">
        {/* Corner SVGs */}
        <svg className="corner-image top-left" viewBox="0 0 24 24" fill="white" opacity="0.7">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
          <path d="M12 6a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V7a1 1 0 011-1z"/>
        </svg>
        <svg className="corner-image top-right" viewBox="0 0 24 24" fill="white" opacity="0.7">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
          <path d="M12 8l3.5 3.5-3.5 3.5-3.5-3.5z"/>
        </svg>
        <svg className="corner-image bottom-left" viewBox="0 0 24 24" fill="white" opacity="0.7">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
          <path d="M8 13a1 1 0 110-2h8a1 1 0 110 2H8z"/>
        </svg>
        <svg className="corner-image bottom-right" viewBox="0 0 24 24" fill="white" opacity="0.7">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"/>
          <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m9.9-1.4a8 8 0 010 11.3m-11.3 0a8 8 0 010-11.3"/>
        </svg>
        <div className="cta-content">
          <div className="cta-subtitle">Vamana Collections</div>
          <h2 className="cta-title">Shop The Latest Trends</h2>
          <div className="cta-description">
            Exceptional Handcrafted Design to Enhance <br /> the Magnificent Glow
          </div>
          <button className="cta-plain-button" onClick={() => navigate('/trending-products')}>
            View Trending Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCTA;
