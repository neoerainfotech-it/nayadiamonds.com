import React from 'react';
import { Link } from 'react-router-dom';

function Earrings() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">Earrings</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Explore our diverse range of earrings, from classic studs to statement danglers. Find the perfect pair for every occasion.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link to="/category/earrings/studs" className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
          <img src="/images/bohemia-long-drop-tassels-earrings-women.jpg" alt="Stud Earrings" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Stud Earrings</h2>
            <p className="text-gray-700 mb-4">Timeless and elegant, perfect for everyday wear.</p>
            <span className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Shop Studs</span>
          </div>
        </Link>
        <div className="block bg-white rounded-lg shadow-lg overflow-hidden opacity-60 cursor-not-allowed">
          <img src="/images/bohemian-thread-dangle-earrings-soriee-drop.jpg" alt="Dangle Earrings" className="w-full h-56 object-cover" />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Dangle Earrings</h2>
            <p className="text-gray-700 mb-4">Coming soon: Statement pieces for special occasions.</p>
            <span className="inline-block px-4 py-2 bg-gray-300 text-gray-600 rounded">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earrings;
