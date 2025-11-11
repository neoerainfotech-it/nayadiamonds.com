import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const poojaItems = [
  {
    id: 1,
    name: 'Silver Diya',
    images: ['/images/design21.jpg'],
    price: 1299,
    desc: 'Traditional handcrafted silver diya for pooja rituals and home decor.',
    category: 'Pooja Silver',
    material: 'Silver',
    rating: 4.8,
    reviews: 32,
    isNew: true,
    weight: '50g',
  },
  {
    id: 2,
    name: 'Silver Bell',
    images: ['/images/design22.jpg'],
    price: 799,
    desc: 'Pure silver pooja bell with intricate carvings for auspicious ceremonies.',
    category: 'Pooja Silver',
    material: 'Silver',
    rating: 4.7,
    reviews: 21,
    isNew: false,
    weight: '30g',
  },
  {
    id: 3,
    name: 'Silver Plate',
    images: ['/images/design23.jpg'],
    price: 2499,
    desc: 'Elegant silver plate for pooja thali, offerings, and festive occasions.',
    category: 'Pooja Silver',
    material: 'Silver',
    rating: 4.9,
    reviews: 18,
    isNew: false,
    weight: '120g',
  },
  {
    id: 4,
    name: 'Silver Kalash',
    images: ['/images/design24.jpg'],
    price: 1899,
    desc: 'Sacred silver kalash for rituals, weddings, and home temple.',
    category: 'Pooja Silver',
    material: 'Silver',
    rating: 4.6,
    reviews: 15,
    isNew: false,
    weight: '80g',
  },
];

function PoojaSilver() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-brown-900 mb-6">Pooja Silver Collection</h1>
        <p className="text-center text-brown-700 mb-8 max-w-2xl mx-auto">Discover our exclusive range of pure silver pooja items, perfect for your home temple, rituals, and festive celebrations. Each piece is crafted with devotion and attention to detail, ensuring purity and elegance for your spiritual needs.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {poojaItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/payment" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors shadow-lg">Proceed to Payment</Link>
        </div>
      </div>
    </div>
  );
}

export default PoojaSilver;
