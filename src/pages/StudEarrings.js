import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBag } from "../context/CartContext";

const studImages = Array.from({ length: 50 }, (_, i) => `/images/earring_${i + 1}.jpg`);

const products = studImages.map((img, idx) => ({
  id: idx + 1,
  name: `Stud Earring ${idx + 1}`,
  price: 499 + idx * 10,
  image: img,
  description: "Elegant stud earring with premium finish.",
}));

function StudEarrings() {
  const { addToBag } = useBag();
  const navigate = useNavigate();
  const [quickView, setQuickView] = useState(null);

  const handleAddToCart = (product) => {
    addToBag(product);
  };

  const handleOrderNow = (product) => {
    navigate("/checkout", { state: { buyNowProduct: { ...product, quantity: 1 } } });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-900 font-[Poppins]">
        Stud Earrings
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
            <div className="relative w-32 h-32 mb-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg border border-gray-100 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                onClick={() => setQuickView(product)}
              />
              {/* Icon Overlay */}
              <div className="shop-action flex flex-col gap-2 absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {/* Wishlist/Like */}
                <button
                  className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center"
                  aria-label="Add to wishlist"
                  onClick={e => { e.stopPropagation(); }}
                >
                  <svg width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"></path></svg>
                </button>
                {/* Add to Bag */}
                <button
                  className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center"
                  aria-label="Add to Bag"
                  onClick={e => { e.stopPropagation(); handleAddToCart(product); }}
                >
                  <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"></path><rect x="3" y="7" width="18" height="14" rx="2"></rect><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
                </button>
                {/* Quick View */}
                <button
                  className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center"
                  aria-label="Quick View"
                  onClick={e => { e.stopPropagation(); setQuickView(product); }}
                >
                  <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"></path></svg>
                </button>
              </div>
            </div>
            <h2 className="text-base font-semibold mb-1 text-yellow-900 text-center">{product.name}</h2>
            <div className="text-yellow-700 font-bold mb-2 text-center">₹{product.price}</div>
            <div className="text-sm text-gray-500 mb-2 text-center">Stud Earrings</div>
            {/* Order Now Button below price */}
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-center mt-1" onClick={() => handleOrderNow(product)}>
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
                Add to Cart
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

export default StudEarrings;
