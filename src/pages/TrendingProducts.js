
import React from 'react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../hooks/data/products';
import '../styles/ShopCTA.css';

// Map trending products to use local images by category
const trendingProducts = allProducts
  .filter(p => p.isTrending || p.badge === 'Trending')
  .slice(0, 12)
  .map((p, idx) => {
    // Try to use a local image based on category and index
    let localImg = '';
    if (p.category && p.category.toLowerCase().includes('earring')) {
      localImg = `/images/earring_${(idx % 20) + 1}.jpg`;
    } else if (p.category && p.category.toLowerCase().includes('ring')) {
      localImg = `/images/ring_${(idx % 20) + 1}.jpg`;
    } else if (p.category && p.category.toLowerCase().includes('necklace')) {
      localImg = `/images/necklace_${(idx % 20) + 1}.jpg`;
    } else if (p.category && p.category.toLowerCase().includes('bracelet')) {
      localImg = `/images/bracelet_${(idx % 20) + 1}.jpg`;
    } else {
      localImg = `/images/design${(idx % 40) + 1}.jpg`;
    }
    return {
      ...p,
      images: [localImg],
    };
  });

const TrendingProducts = () => {
  return (
    <div className="trending-products-section">
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
            {/* No CTA button here, just the grid below */}
          </div>
        </div>
      </div>
      <div id="trending-products-list" className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-brown-900 mb-6 text-center">Trending Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingProducts.length > 0 ? trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          )) : <div className="col-span-full text-center text-brown-700">No trending products found.</div>}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
