import React from 'react';
import { Link } from 'react-router-dom';

const bridalImages = [
  '/images/design1.jpg', '/images/design2.jpg', '/images/design3.jpg', '/images/design4.jpg',
  '/images/design5.jpg', '/images/design6.jpg', '/images/design7.jpg', '/images/design8.jpg',
  '/images/design9.jpg', '/images/design10.jpg', '/images/bracelet_039.jpg', '/images/necklace_100.jpg'
];

function BridalCollection() {
  return (
    <div className="min-h-screen bg-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-900 mb-8 text-center">Bridal Collection</h1>
        <p className="text-lg text-yellow-800 mb-8 text-center">Timeless wedding jewelry sets, mangalsutras, and bridal accessories for your special day.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {bridalImages.map((img, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={img} alt={`Bridal Jewelry ${i + 1}`} className="w-full h-56 object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Bridal Piece #{i + 1}</h3>
              <Link to="/make-order" className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">Make Your Order</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BridalCollection;
