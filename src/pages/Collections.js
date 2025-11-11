import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { StarIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useBag } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';

const Collections = () => {
  const navigate = useNavigate();
  const { addToBag } = useBag();
  const [selectedCollection, setSelectedCollection] = useState('all');

  // Defensive: ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];

  // Curated and elaborated collections
  // Use local images from public/images/ and randomize for each collection
  // Dynamically use all images in public/images/
  const localImages = [
    // Add more as needed, this is a sample, you can script this for all images
    'design1.jpg','design2.jpg','design3.jpg','design4.jpg','design5.jpg','design6.jpg','design7.jpg','design8.jpg','design9.jpg','design10.jpg',
    'design11.jpg','design12.jpg','design13.jpg','design14.jpg','design15.jpg','design16.jpg','design17.jpg','design18.jpg','design19.jpg','design20.jpg',
    'ring_041.jpg','ring_042.jpg','ring_043.jpg','ring_044.jpg','ring_045.jpg','ring_046.jpg','ring_047.jpg','ring_048.jpg','ring_049.jpg','ring_050.jpg',
    'earring_1.jpg','earring_2.jpg','earring_3.jpg','earring_4.jpg','earring_5.jpg','earring_6.jpg','earring_7.jpg','earring_8.jpg','earring_9.jpg','earring_10.jpg',
    'necklace_100.jpg','necklace_101.jpg','necklace_102.jpg','necklace_103.jpg','necklace_104.jpg','necklace_105.jpg','necklace_106.jpg','necklace_107.jpg','necklace_108.jpg','necklace_109.jpg',
    'bracelet_039.jpg','bracelet_040.jpg','bracelet_041.jpg','bracelet_042.jpg','bracelet_043.jpg','bracelet_044.jpg','bracelet_045.jpg','bracelet_046.jpg','bracelet_047.jpg','bracelet_048.jpg'
  ];
  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // Shuffle images for each render
  const shuffledImages = shuffleArray(localImages);
  const collections = [
    {
      id: 'all',
      name: 'All Collections',
      description: 'Explore our complete range of fine jewelry, from classic to contemporary, for every occasion and style.',
      image: shuffledImages[0],
      count: safeProducts.length
    },
    {
      id: 'diamond',
      name: 'Diamond Collection',
      description: 'Dazzling diamond rings, necklaces, earrings, and bracelets. Each piece features certified stones and timeless brilliance.',
      image: shuffledImages[1],
      count: safeProducts.filter(p => /diamond/i.test(p.material) || /diamond/i.test(p.name)).length
    },
    {
      id: 'gold',
      name: 'Gold Collection',
      description: 'Traditional and modern gold jewelry in yellow, white, and rose gold. Perfect for weddings, gifts, and daily luxury.',
      image: shuffledImages[2],
      count: safeProducts.filter(p => /gold/i.test(p.material)).length
    },
    {
      id: 'silver',
      name: 'Silver Collection',
      description: 'Elegant silver pieces for everyday wear, including minimalist and statement designs for all ages.',
      image: shuffledImages[3],
      count: safeProducts.filter(p => /silver/i.test(p.material)).length
    },
    {
      id: 'gemstones',
      name: 'Gemstone Collection',
      description: 'Vibrant jewelry featuring pearls, rubies, emeralds, sapphires, and more. Celebrate color and individuality.',
      image: shuffledImages[4],
      count: safeProducts.filter(p => /pearl|ruby|emerald|sapphire|garnet/i.test(p.material)).length
    },
    {
      id: 'rings',
      name: 'Rings',
      description: 'From engagement rings to stackable bands, find the perfect ring for every finger and milestone.',
      image: shuffledImages[5],
      count: safeProducts.filter(p => /ring/i.test(p.category)).length
    },
    {
      id: 'necklaces',
      name: 'Necklaces',
      description: 'Elegant neckpieces, from delicate chains to bold statement necklaces, for every neckline and occasion.',
      image: shuffledImages[6],
      count: safeProducts.filter(p => /necklace/i.test(p.category)).length
    },
    {
      id: 'earrings',
      name: 'Earrings',
      description: 'Studs, hoops, drops, and chandeliers—earrings for every mood, crafted in precious metals and stones.',
      image: shuffledImages[7],
      count: safeProducts.filter(p => /earring/i.test(p.category)).length
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      description: 'Graceful bangles, cuffs, and charm bracelets to adorn your wrist with style and meaning.',
      image: shuffledImages[8],
      count: safeProducts.filter(p => /bracelet/i.test(p.category)).length
    }
  ];

  // Helper to get 20 items per category, shuffled, and assign local images
  function getLimitedProducts(collectionId) {
    let filtered;
    switch (collectionId) {
      case 'diamond':
        filtered = safeProducts.filter(p => p.material?.toLowerCase().includes('diamond') || p.name?.toLowerCase().includes('diamond'));
        break;
      case 'gold':
        filtered = safeProducts.filter(p => p.material?.toLowerCase().includes('gold'));
        break;
      case 'silver':
        filtered = safeProducts.filter(p => p.material?.toLowerCase().includes('silver'));
        break;
      case 'gemstones':
        filtered = safeProducts.filter(p => p.material?.match(/pearl|ruby|emerald|sapphire|garnet/i));
        break;
      case 'rings':
        filtered = safeProducts.filter(p => p.category && p.category.toLowerCase().includes('ring'));
        break;
      case 'necklaces':
        filtered = safeProducts.filter(p => p.category && p.category.toLowerCase().includes('necklace'));
        break;
      case 'earrings':
        filtered = safeProducts.filter(p => p.category && p.category.toLowerCase().includes('earring'));
        break;
      case 'bracelets':
        filtered = safeProducts.filter(p => p.category && p.category.toLowerCase().includes('bracelet'));
        break;
      default:
        filtered = safeProducts;
    }
    filtered = shuffleArray(filtered); // Show all matching products, not just 20
    // Assign local images by category
    return filtered.map((p, idx) => {
      let img = p.images && p.images[0];
      if (p.category && p.category.toLowerCase().includes('necklace')) {
        img = `/images/necklace_${56 + (idx % 50)}.jpg`;
      } else if (p.category && p.category.toLowerCase().includes('ring')) {
        img = `/images/ring_0${41 + (idx % 10)}.jpg`;
      } else if (p.category && p.category.toLowerCase().includes('earring')) {
        img = `/images/earring_${1 + (idx % 50)}.jpg`;
      } else if (p.category && p.category.toLowerCase().includes('bracelet')) {
        img = `/images/bracelet_0${39 + (idx % 10)}.jpg`;
      }
      return { ...p, images: [img] };
    });
  }

  const getFilteredProducts = () => {
    return getLimitedProducts(selectedCollection);
  };

  const filteredProducts = getFilteredProducts();

  const collectionsGrid = [
    {
      name: 'Gold Collection',
      image: '/images/design1.jpg',
      description: 'Pure gold jewelry for every occasion. Explore rings, necklaces, earrings, and more.',
      link: '/category/gold',
    },
    {
      name: 'Diamond Collection',
      image: '/images/Diamond-Earrings-T7743_GF-600x600.jpg',
      description: 'Sparkling diamond pieces that capture the light and your heart.',
      link: '/category/diamond',
    },
    {
      name: 'Silver Collection',
      image: '/images/design10.jpg',
      description: 'Elegant silver jewelry, perfect for daily wear and special moments.',
      link: '/category/silver',
    },
    {
      name: 'Bridal Collection',
      image: '/images/Chandelier_Diamond_Wedding_Earrings_JLE35-750x500.jpg',
      description: 'Make your big day shine with our exclusive bridal sets.',
      link: '/collections/bridal',
    },
    {
      name: 'New Arrivals',
      image: '/images/ariel-elegant-diamond-earrings-jle139 (1)-750x500.jpg',
      description: 'See what’s new and trending in our store.',
      link: '/new-arrivals',
    },
    {
      name: 'Best Sellers',
      image: '/images/beautiful-fancy-peacock-earring-with-hanging-drops-11-250x250.jpg',
      description: 'Our most-loved pieces, chosen by you.',
      link: '/best-sellers',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section - improved contrast and visibility */}
      <div className="relative min-h-[420px] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#2d1600] via-[#6B1B17] to-[#FFD700]">
        {/* Background Image with dark overlay */}
        <img
          src={process.env.PUBLIC_URL +"/images/design1.jpg"}
          alt="Jewelry Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#FFD700]/30 to-black/80 z-10" />
        {/* HERO TEXT - bring to front and center */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-12">
          <div className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-black/40 rounded-full text-sm font-medium text-yellow-200 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              {collections.length} Unique Collections
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl text-yellow-100">
            Discover Our
            <span className="block text-yellow-400">Exquisite Collections</span>
          </h1>
          <p className="text-xl md:text-2xl text-yellow-200 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
            From timeless classics to contemporary masterpieces, explore our carefully curated jewelry collections that celebrate every moment and style in your life.
          </p>
          <div className="mb-8">
            <span className="inline-block bg-yellow-900/60 text-yellow-100 px-6 py-2 rounded-full font-semibold text-lg shadow-lg">
              "Elegance is the only beauty that never fades." – Audrey Hepburn
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setSelectedCollection('all')}
              className="bg-yellow-400 text-yellow-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Collections
            </button>
            <button
              onClick={() => navigate('/products')}
              className="border-2 border-yellow-400 text-yellow-100 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 hover:text-yellow-900 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-normal text-yellow-200 mb-2 font-[Poppins]">{collections.length}</div>
              <div className="text-yellow-100 font-[Poppins]">Collections</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-normal text-yellow-200 mb-2 font-[Poppins]">{safeProducts.length}</div>
              <div className="text-yellow-100 font-[Poppins]">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-normal text-yellow-200 mb-2 font-[Poppins]">25+</div>
              <div className="text-yellow-100 font-[Poppins]">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-[Poppins]">
        {/* Intro Section - Featured Collections */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Featured Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our curated collections, each designed to celebrate beauty, tradition, and craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {collectionsGrid.map((col) => (
              <div key={col.name} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={col.image} alt={col.name} className="w-full h-56 object-cover" />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-yellow-900">{col.name}</h2>
                  <p className="text-gray-700 mb-4">{col.description}</p>
                  <Link to={col.link} className="inline-block px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Categories */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-[Poppins]">Browse Our Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each collection is thoughtfully designed to meet your unique style preferences and lifestyle needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
                className={`relative cursor-pointer rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                  selectedCollection === collection.id
                    ? 'ring-4 ring-gold-500 transform scale-105'
                    : 'hover:shadow-xl hover:transform hover:scale-105'
                }`}
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{collection.name}</h3>
                  <p className="text-sm text-gray-200 mb-3">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {collection.count} items
                    </span>
                    {selectedCollection === collection.id && (
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-[Poppins] font-normal text-[#6B1B17] mb-2">
                {collections.find(c => c.id === selectedCollection)?.name?.replace('Collection', 'Jewellery')}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredProducts.length} products available
              </p>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors"
            >
              View All Products
            </button>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                We're working on adding more products to this collection.
              </p>
              <button
                onClick={() => setSelectedCollection('all')}
                className="bg-gold-600 text-white px-6 py-2 rounded-lg hover:bg-gold-700 transition-colors"
              >
                Browse All Collections
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductGallery
                  key={product.id || product.name}
                  images={product.images}
                  productName={product.name}
                  productId={product.id}
                  category={product.category}
                  price={product.price}
                  reviews={product.reviews}
                  rating={product.rating}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>

        {/* Collection Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 font-[Poppins]">Why Choose Our Collections?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-[Poppins]">Quality Assured</h3>
              <p className="text-gray-600">
                Every piece in our collections is crafted with the finest materials and meets the highest quality standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-[Poppins]">Exclusive Designs</h3>
              <p className="text-gray-600">
                Our collections feature unique designs that blend traditional craftsmanship with modern aesthetics.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-[Poppins]">Lifetime Care</h3>
              <p className="text-gray-600">
                We provide lifetime care and maintenance services for all pieces in our collections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;