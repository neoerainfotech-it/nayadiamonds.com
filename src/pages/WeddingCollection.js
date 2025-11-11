import React from 'react';

function WeddingCollection() {
  return (
    <div className="min-h-screen bg-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-yellow-800 mb-8 text-center">Wedding Jewelry Collection</h1>
        <p className="text-lg text-yellow-900 mb-8 text-center max-w-2xl mx-auto">
          Discover our exclusive range of bridal and wedding jewelry sets, crafted for your special day. From traditional gold and diamond sets to modern designs, find the perfect match for your wedding look.
        </p>
        {/* Add your wedding jewelry product grid or components here */}
        <div className="text-center text-yellow-700 mt-16">
          <span>More wedding jewelry coming soon! Explore our <a href="/collections/bridal" className="underline text-yellow-800">Bridal Collection</a> for now.</span>
        </div>
      </div>
    </div>
  );
}

export default WeddingCollection;
