import React from 'react';

const solitaires = [
  {
    id: 1,
    name: 'Classic Solitaire Ring',
    carat: '1.0 ct',
    color: 'D',
    clarity: 'VVS1',
    cut: 'Excellent',
    image: '/images/diamond_ring_1.jpg',
    price: 120000,
    badge: 'GIA Certified',
  },
  {
    id: 2,
    name: 'Princess Cut Solitaire Pendant',
    carat: '0.75 ct',
    color: 'E',
    clarity: 'VS1',
    cut: 'Very Good',
    image: '/images/diamond_pendant_1.jpg',
    price: 95000,
    badge: 'Natural',
  },
  {
    id: 3,
    name: 'Solitaire Stud Earrings',
    carat: '0.5 ct each',
    color: 'F',
    clarity: 'VS2',
    cut: 'Excellent',
    image: '/images/diamond_earring_1.jpg',
    price: 80000,
    badge: 'Best Seller',
  },
];

function Solitaires() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Solitaires Collection</h1>
          <p className="text-lg text-blue-800 mb-2">Discover our handpicked selection of certified solitaire diamonds, perfect for rings, pendants, and earrings. Each piece is a symbol of timeless elegance and brilliance.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solitaires.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
              <div className="relative w-40 h-40 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover rounded-lg border border-blue-100 cursor-pointer group-hover:scale-105 transition-transform duration-300"
                />
                <div className="shop-action flex flex-col gap-2 absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button className="woosw-btn bg-white/90 p-2 rounded-full shadow hover:bg-pink-100 flex items-center justify-center" aria-label="Add to wishlist" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#e11d48" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z"></path></svg>
                  </button>
                  <button className="woobag-btn bg-white/90 p-2 rounded-full shadow hover:bg-yellow-100 flex items-center justify-center" aria-label="Add to Bag" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#f59e42" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"></path><rect x="3" y="7" width="18" height="14" rx="2"></rect><path d="M16 11a4 4 0 0 1-8 0"></path></svg>
                  </button>
                  <button className="woosq-btn bg-white/90 p-2 rounded-full shadow hover:bg-blue-100 flex items-center justify-center" aria-label="Quick View" onClick={e => { e.stopPropagation(); }}>
                    <svg width="22" height="22" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M2.05 12C3.81 7.61 7.92 4.5 12 4.5c4.08 0 8.19 3.11 9.95 7.5-1.76 4.39-5.87 7.5-9.95 7.5-4.08 0-8.19-3.11-9.95-7.5z"></path></svg>
                  </button>
                </div>
              </div>
              <h3 className="text-base font-semibold mb-1 text-blue-900 text-center">{item.name}</h3>
              <div className="text-blue-700 font-bold mb-2 text-center">₹{item.price}</div>
              <div className="text-sm text-gray-500 mb-2 text-center">{item.carat} • {item.color} • {item.clarity} • {item.cut}</div>
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition text-center mt-1"
                // onClick={() => handleBuyNow(item)}
              >
                Make Your Order
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Why Choose a Solitaire?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-blue-50 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold mb-2">Timeless Beauty</h4>
              <p className="text-blue-800 text-sm">Solitaires never go out of style and are perfect for every occasion.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">🔬</div>
              <h4 className="font-semibold mb-2">Certified Quality</h4>
              <p className="text-blue-800 text-sm">All our solitaires are GIA certified for authenticity and value.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 shadow text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold mb-2">Perfect Gift</h4>
              <p className="text-blue-800 text-sm">A solitaire is a cherished gift for engagements, anniversaries, and milestones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solitaires;
