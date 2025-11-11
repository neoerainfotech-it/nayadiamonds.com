import React from 'react';

function Rings() {
  // Example images for each section
  const goldRingImage = '/images/ring_041.jpg';
  const diamondRingImage = '/images/Diamond-Earrings-SMT337_GF-600x600.jpg';
  const silverRingImage = '/images/ring_051.jpg';

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">Rings</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Discover our exquisite collection of rings, crafted in gold, diamond, and silver. Perfect for engagements, weddings, or everyday elegance.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Gold Rings Section */}
        <div className="block bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img src={goldRingImage} alt="Gold Ring" className="w-full h-56 object-cover" />
          <div className="p-5 flex-1 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Gold Rings</h2>
            <p className="text-gray-700 mb-4 text-center">Classic and contemporary gold rings for every style.</p>
            <a href="/goldring" className="mt-auto inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">View Details</a>
          </div>
        </div>
        {/* Diamond Rings Section */}
        <div className="block bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img src={diamondRingImage} alt="Diamond Ring" className="w-full h-56 object-cover" />
          <div className="p-5 flex-1 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Diamond Rings</h2>
            <p className="text-gray-700 mb-4 text-center">Sparkling diamond rings for special moments.</p>
            <a href="/diamondring" className="mt-auto inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">View Details</a>
          </div>
        </div>
        {/* Silver Rings Section */}
        <div className="block bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
          <img src={silverRingImage} alt="Silver Ring" className="w-full h-56 object-cover" />
          <div className="p-5 flex-1 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2 text-yellow-900">Silver Rings</h2>
            <p className="text-gray-700 mb-4 text-center">Elegant silver rings for a modern touch.</p>
            <a href="/silverring" className="mt-auto inline-block px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rings;
