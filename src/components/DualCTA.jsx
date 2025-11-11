import React from 'react';
import './DualCTA.css';

const DualCTA = () => {
  return (
    <div className="dual-cta-container">
      <div className="cta-box" style={{ backgroundImage: `url('https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/h1_bn-1.jpg')` }}>
        <div className="cta-overlay" />
        <div className="cta-content">
          <p className="cta-subtitle">OUR EARRINGS</p>
          <h3 className="cta-title">Add These <br /> To Your Style Roster.</h3>
          <p className="cta-description">Grab the deal right now! you can get extra 15% off this season.</p>
          <a href="/category/earrings" className="cta-button">Shop Now</a>
        </div>
      </div>

      <div className="cta-box" style={{ backgroundImage: `url('https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/h1_bn-2.jpg')` }}>
        <div className="cta-overlay" />
        <div className="cta-content">
          <p className="cta-subtitle">FAVORITE ITEMS</p>
          <h3 className="cta-title">Unique <br /> Engagement Rings</h3>
          <p className="cta-description">From special antique diamonds to one of-a-kind colored gemstones</p>
          <a href="/category/rings" className="cta-button">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default DualCTA;
