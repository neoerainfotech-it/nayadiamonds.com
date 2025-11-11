import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const coins = [
  {
    id: 1,
    name: '5g Silver Coin',
    images: ['/images/design25.jpg'],
    price: 499,
    desc: 'Pure 999 silver coin, ideal for gifting and auspicious occasions.',
    category: 'Silver Coins',
    material: 'Silver',
    rating: 4.7,
    reviews: 40,
    isNew: true,
    weight: '5g',
  },
  {
    id: 2,
    name: '10g Silver Coin',
    images: ['/images/design26.jpg'],
    price: 899,
    desc: 'Finely minted 10g silver coin with elegant design and purity guarantee.',
    category: 'Silver Coins',
    material: 'Silver',
    rating: 4.8,
    reviews: 28,
    isNew: false,
    weight: '10g',
  },
  {
    id: 3,
    name: '20g Silver Coin',
    images: ['/images/design27.jpg'],
    price: 1699,
    desc: 'Premium 20g silver coin, perfect for investment and pooja.',
    category: 'Silver Coins',
    material: 'Silver',
    rating: 4.9,
    reviews: 19,
    isNew: false,
    weight: '20g',
  },
  {
    id: 4,
    name: '50g Silver Coin',
    images: ['/images/design28.jpg'],
    price: 3999,
    desc: 'Large 50g pure silver coin, a timeless keepsake for special moments.',
    category: 'Silver Coins',
    material: 'Silver',
    rating: 4.6,
    reviews: 12,
    isNew: false,
    weight: '50g',
  },
];

function SilverCoins() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-brown-900 mb-6">Silver Coins</h1>
        <p className="text-center text-brown-700 mb-8 max-w-2xl mx-auto">Shop our collection of pure silver coins, perfect for gifting, investment, and religious ceremonies. Each coin is certified for purity and comes in elegant packaging for every occasion.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {coins.map((coin) => (
            <ProductCard key={coin.id} product={coin} />
          ))}
        </div>
        <div className="text-center mt-8">
        </div>
      </div>
    </div>
  );
}

export default SilverCoins;
