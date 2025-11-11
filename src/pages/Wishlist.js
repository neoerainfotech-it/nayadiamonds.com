import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BagContext } from '../context/CartContext';
import { HeartIcon, TrashIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const Wishlist = () => {
  const navigate = useNavigate();
  const { addToBag } = useContext(BagContext);
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Diamond Solitaire Ring",
      price: 2500,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
      material: "18K White Gold"
    },
    {
      id: 3,
      name: "Pearl Necklace",
      price: 800,
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Necklaces",
      material: "Freshwater Pearls"
    },
    {
      id: 7,
      name: "Gold Bangle Bracelet",
      price: 1200,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "Bracelets",
      material: "18K Yellow Gold"
    }
  ]);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(items => items.filter(item => item.id !== itemId));
  };

  const moveToCart = (item) => {
    addToBag(item);
    removeFromWishlist(item.id);
  };

  const moveAllToCart = () => {
    wishlistItems.forEach(item => addToBag(item));
    setWishlistItems([]);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <HeartIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-8">Start adding items to your wishlist to save them for later.</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-gold-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gold-700 transition-colors"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-gray-600 mt-2">{wishlistItems.length} items saved</p>
          </div>
          <button
            onClick={moveAllToCart}
            className="bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gold-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            <span>Move All to Cart</span>
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                >
                  <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category} • {item.material}</p>
                  </div>
                  <HeartIconSolid className="w-6 h-6 text-red-500 flex-shrink-0 ml-2" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${item.price.toLocaleString()}</span>
                  <button
                    onClick={() => moveToCart(item)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 101,
                name: "Sapphire Earrings",
                price: 950,
                image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
              },
              {
                id: 102,
                name: "Rose Gold Chain",
                price: 650,
                image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop"
              },
              {
                id: 103,
                name: "Emerald Ring",
                price: 1800,
                image: "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=400&h=400&fit=crop"
              },
              {
                id: 104,
                name: "Diamond Studs",
                price: 2200,
                image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop"
              }
            ].map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${product.price.toLocaleString()}</span>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <HeartIcon className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;