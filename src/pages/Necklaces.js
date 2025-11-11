import React from 'react';
import { Link } from 'react-router-dom';

function Necklaces() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">Necklaces</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Adorn yourself with our stunning necklaces, from delicate chains to bold statement pieces in gold, diamond, and silver.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link to="/necklaces/gold" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={process.env.PUBLIC_URL +"/images/design14.jpg"} alt="Gold Necklaces" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Gold Necklaces</h2>
            <p className="text-gray-700 mb-4">Timeless gold necklaces for every occasion.</p>
          </div>
        </Link>
        <Link to="/necklaces/diamond" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={process.env.PUBLIC_URL +"/images/design15.jpg"} alt="Diamond Necklaces" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Diamond Necklaces</h2>
            <p className="text-gray-700 mb-4">Dazzling diamond necklaces to make you shine.</p>
          </div>
        </Link>
        <Link to="/necklaces/silver" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <img src={process.env.PUBLIC_URL +"/images/design16.jpg"} alt="Silver Necklaces" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Silver Necklaces</h2>
            <p className="text-gray-700 mb-4">Modern silver necklaces for a chic look.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Necklaces;
