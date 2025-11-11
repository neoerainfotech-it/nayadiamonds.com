import React from 'react';
import { Link } from 'react-router-dom';

const everydayImages = [
  '/images/design21.jpg', '/images/design22.jpg', '/images/design23.jpg', '/images/design24.jpg',
  '/images/design25.jpg', '/images/design26.jpg', '/images/design27.jpg', '/images/design28.jpg',
  '/images/design29.jpg', '/images/design30.jpg', '/images/earring_1.jpg', '/images/earring_2.jpg'
];

function EverydayElegance() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">Everyday Elegance</h1>
        <p className="text-lg text-blue-800 mb-8 text-center">Minimalist gold, diamond, and silver jewelry for daily wear and effortless style.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {everydayImages.map((img, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={img} alt={`Everyday Jewelry ${i + 1}`} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Everyday Piece #{i + 1}</h3>
              <Link to="/make-order" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition">Make Your Order</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EverydayElegance;
