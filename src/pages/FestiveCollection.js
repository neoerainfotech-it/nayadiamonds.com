import React from 'react';
import { Link } from 'react-router-dom';

const festiveImages = [
  '/images/design11.jpg', '/images/design12.jpg', '/images/design13.jpg', '/images/design14.jpg',
  '/images/design15.jpg', '/images/design16.jpg', '/images/design17.jpg', '/images/design18.jpg',
  '/images/design19.jpg', '/images/design20.jpg', '/images/bracelet_040.jpg', '/images/necklace_101.jpg'
];

function FestiveCollection() {
  return (
    <div className="min-h-screen bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-pink-900 mb-8 text-center">Festive Collection</h1>
        <p className="text-lg text-pink-800 mb-8 text-center">Celebrate every occasion with vibrant, statement pieces and traditional festive jewelry.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {festiveImages.map((img, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={img} alt={`Festive Jewelry ${i + 1}`} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Festive Piece #{i + 1}</h3>
              <Link to="/make-order" className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-400 transition">Make Your Order</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FestiveCollection;
