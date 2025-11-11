import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products as allProducts } from '../hooks/data/products';
import '../styles/ShopCTA.css';

// Generate a wide range of platinum products with local images
const platinumProducts = allProducts
  .filter(p => p.material && p.material.toLowerCase().includes('platinum'))
  .slice(0, 24)
  .map((p, idx) => ({
    ...p,
    images: [`/images/design${(idx % 44) + 1}.jpg`],
  }));

const Platinum = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(platinumProducts[0] || null);

  return (
    <div className="min-h-screen bg-[#f8f5f2] py-8">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-3xl font-bold text-brown-900 mb-8 text-center">Platinum Jewelry</h2>
        <p className="text-lg text-brown-700 mb-6 max-w-2xl mx-auto text-center">
          Discover our exclusive platinum jewelry collection. Modern, elegant, and crafted for a lifetime.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 product-row">
          {platinumProducts.map(product => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              {/* Icon actions on the side (wishlist, quick view, add to cart) */}
              <div className="absolute top-4 left-2 flex flex-col gap-2 z-20">
                <button className="bg-white p-2 rounded-full shadow hover:bg-yellow-500 hover:text-white transition-colors" title="Quick View" onClick={() => setQuickViewProduct(product)}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors" title="Wishlist">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:bg-green-500 hover:text-white transition-colors" title="Add to Cart">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Quick View Modal */}
        {quickViewProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
              <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500" onClick={() => setQuickViewProduct(null)}>&times;</button>
              <ProductCard product={quickViewProduct} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Platinum;
