import React from 'react';
import './PromoGrid.css';

const promoItems = [
  {
    title: "One-Of-A-Kinds",
    subtitle: "Rings",
    description: "Featuring unique and hand-sourced gemstones from all over the world.",
    image: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/banner_1.jpg",
    overlayIcon: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/triangle.svg",
    link: "/rings"
  },
  {
    title: "High Tide Looks",
    subtitle: "Bangles",
    description: "Featuring unique and hand-sourced gemstones from all over the world.",
    image: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/banner_2.jpg",
    overlayIcon: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/triangle-1.svg",
    link: "/bracelets"
  },
  {
    title: "New Organic Dôme",
    subtitle: "Earrings",
    description: "From solid gold staples to diamond jewelry, browse our most-loved pieces.",
    image: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/banner_3.jpg",
    overlayIcon: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/triangle.svg",
    link: "/earrings"
  },
  {
    title: "The Tiffany Icons",
    subtitle: "Necklaces",
    description: "The Flora Necklace is a symbol of serenity, and alignment with the pace of nature.",
    image: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/banner_4.jpg",
    overlayIcon: "https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/triangle-1.svg",
    link: "/necklaces"
  }
];

const PromoGrid = () => {
  return (
    <div className="promo-grid">
      {promoItems.map((item, index) => (
        <a href={item.link} className="promo-card" key={index} target="_blank" rel="noopener noreferrer">
          <div className="promo-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
          <div className="promo-overlay">
            <img src={item.overlayIcon} alt="overlay" className="promo-shape" />
          </div>
          <div className="promo-content">
            <p className="promo-subtitle">{item.subtitle}</p>
            <h5 className="promo-title">{item.title}</h5>
            <p className="promo-description">{item.description}</p>
            <span className="promo-button">See More Products</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PromoGrid;
