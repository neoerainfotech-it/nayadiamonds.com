import React, { useState } from "react";
import { useBag } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const goldRingProducts = [
  {
    id: "gold-ring-1",
    name: "Classic Gold Ring",
    price: 5999,
    category: "Gold Rings",
    description: "A timeless classic gold ring, crafted in 22K gold. Perfect for every occasion.",
    image: "/images/ring_041.jpg",
  },
  {
    id: "gold-ring-2",
    name: "Modern Gold Band",
    price: 6499,
    category: "Gold Rings",
    description: "A sleek, modern gold band for everyday elegance.",
    image: "/images/ring_042.jpg",
  },
  {
    id: "gold-ring-3",
    name: "Textured Gold Ring",
    price: 6999,
    category: "Gold Rings",
    description: "A textured gold ring with a unique finish, 22K gold.",
    image: "/images/ring_043.jpg",
  },
  {
    id: "gold-ring-4",
    name: "Antique Gold Ring",
    price: 7999,
    category: "Gold Rings",
    description: "Antique-inspired gold ring with intricate details.",
    image: "/images/ring_044.jpg",
  },
  {
    id: "gold-ring-5",
    name: "Minimalist Gold Ring",
    price: 5599,
    category: "Gold Rings",
    description: "Minimalist 22K gold ring for a subtle statement.",
    image: "/images/ring_045.jpg",
  },
];


export default function GoldRing() {
  const { addToBag } = useBag();
  const navigate = useNavigate();
  const [quickView, setQuickView] = useState(null);
  const [wishlisted, setWishlisted] = useState({});

  const HeartIcon = (active) => (
    <svg width="22" height="22" fill={active ? '#e11d48' : 'none'} stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" /></svg>
  );
  const BagIcon = (
    <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M16 11a4 4 0 0 1-8 0"/></svg>
  );
  const EyeIcon = (
    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"/></svg>
  );

  const handleAddToCart = (product) => {
    addToBag({ ...product, quantity: 1 });
  };
  const handleOrderNow = (product) => {
    navigate('/checkout', { state: { buyNowProduct: { ...product, quantity: 1 } } });
  };
  const handleWishlist = (id) => {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900 text-center">Gold Rings</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto text-center">Explore our collection of gold rings, crafted in 22K gold for every occasion.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {goldRingProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-shadow relative"
          >
            {/* Action Icons (show only on hover) */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center" onClick={() => handleWishlist(product.id)} aria-label="Add to wishlist">
                {HeartIcon(wishlisted[product.id])}
              </button>
              <button className="bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center" onClick={() => handleAddToCart(product)} aria-label="Add to Bag">
                {BagIcon}
              </button>
              <button className="bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center" onClick={() => setQuickView(product)} aria-label="Quick View">
                {EyeIcon}
              </button>
            </div>
            <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-lg mb-4 border border-gray-100" />
            <h2 className="text-xl font-semibold mb-1 text-yellow-900 text-center">
              <button type="button" className="hover:text-pink-600 transition-colors underline" style={{background:'none',border:'none',padding:0,cursor:'pointer'}} onClick={() => setQuickView(product)}>
                {product.name}
              </button>
            </h2>
            <div className="text-yellow-700 font-bold mb-2 text-center">₹{product.price}</div>
            <div className="text-sm text-gray-500 mb-2 text-center">{product.category}</div>
            <p className="text-gray-700 mb-4 text-center">{product.description}</p>
            <button
              className="mt-auto w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
              onClick={() => handleOrderNow(product)}
            >
              Make Your Order
            </button>
          </div>
        ))}
      </div>
      {/* Quick View Modal */}
      {quickView && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl" onClick={() => setQuickView(null)}>&times;</button>
            <img src={quickView.image} alt={quickView.name} className="w-48 h-48 object-cover rounded-lg mx-auto mb-4" />
            <h2 className="text-xl font-bold text-yellow-900 mb-2 text-center">{quickView.name}</h2>
            <div className="text-yellow-700 font-bold mb-2 text-center">₹{quickView.price}</div>
            <p className="text-gray-700 mb-4 text-center">{quickView.description}</p>
            <div className="flex gap-2 justify-center mb-2">
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition" onClick={() => { handleAddToCart(quickView); setQuickView(null); }}>
                Add to Bag
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition" onClick={() => { handleOrderNow(quickView); setQuickView(null); }}>
                Make Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
