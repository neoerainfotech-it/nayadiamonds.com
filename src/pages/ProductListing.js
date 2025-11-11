import React, { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Mock products data
  const mockProducts = [
      {
    id: 1,
    name: "Diamond Bangle",
    price: 45000,
    originalPrice: 52000,
    image: "/images/product1.png",
    video: "/videos/product1.mp4", // Add video URL
    category: "necklaces",
    material: "gold",
    occasion: "wedding",
    weight: "12.5g",
    discount: 13,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestSeller: false,
    hasVideo: true // Flag to indicate video availability
  },
  {
    id: 2,
    name: "Diamond Solitaire Watch",
    price: 75000,
    originalPrice: 85000,
    image: "/images/product2.jpg",
    video: "/videos/product2.mp4",
    category: "rings",
    material: "diamond",
    occasion: "engagement",
    weight: "1.2ct",
    discount: 12,
    rating: 4.9,
    reviews: 89,
    isNew: false,
    isBestSeller: true,
    hasVideo: true
  },
  {
    id: 3,
    name: "Diamond Drop Necklace",
    price: 28000,
    originalPrice: 32000,
    image: "/images/product3.png",
    video: "/videos/product3.mp4",
    material: "diamond",
    occasion: "casual",
    weight: "8.5g",
    discount: 13,
    rating: 4.7,
    reviews: 156,
    isNew: true,
    isBestSeller: false,
    hasVideo: true
  },
  {
    id: 4,
    name: "Diamond Stud Earrings",
    price: 8500,
    originalPrice: 12000,
    image: "/images/product4.png",
    video: "/videos/product4.mp4",
    category: "rings",
    material: "diamond",
    occasion: "casual",
    weight: "15g",
    discount: 29,
    rating: 4.6,
    reviews: 203,
    isNew: false,
    isBestSeller: true,
    hasVideo: true
  },
  {
    id: 5,
    name: "Diamond chain earring",
    price: 95000,
    originalPrice: 110000,
    image: "/images/product5.png",
    video: "/videos/product5.mp4",
    category: "earrings",
    material: "platinum",
    occasion: "wedding",
    weight: "3.2g",
    discount: 14,
    rating: 4.9,
    reviews: 67,
    isNew: true,
    isBestSeller: false,
    hasVideo: true
  },
  {
    id: 6,
    name: "Diamond with ruby earring",
    price: 35000,
    originalPrice: 42000,
    image: "/images/product7.png",
    video: "/videos/product6.mp4",
    category: "earrings",
    material: "ruby",
    occasion: "birthday",
    weight: "5.8g",
    discount: 17,
    rating: 4.5,
    reviews: 98,
    isNew: false,
    isBestSeller: true,
    hasVideo: true
  },
  {
    id: 7,
    name: "diamond wheel earring",
    price: 42000,
    originalPrice: 48000,
    image: "/images/product8.png",
    video: "/videos/product7.mp4",
    category: "earrings",
    material: "diamond",
    occasion: "anniversary",
    weight: "9.2g",
    discount: 13,
    rating: 4.7,
    reviews: 134,
    isNew: true,
    isBestSeller: false,
    hasVideo: true
  },
  {
    id: 8,
    name: "Diamond Drop necklace",
    price: 38000,
    originalPrice: 45000,
    image: "/images/product9.png",
    video: "/videos/product8.mp4",
    category: "necklaces",
    material: "diamond",
    occasion: "casual",
    weight: "2.1ct",
    discount: 16,
    rating: 4.8,
    reviews: 87,
    isNew: false,
    isBestSeller: true,
    hasVideo: true
  },
    {
      id: 9,
      name: "Gold Chain Necklace",
      price: 32000,
      originalPrice: 38000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "gold",
      occasion: "casual",
      weight: "8.7g",
      discount: 16,
      rating: 4.6,
      reviews: 156,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 10,
      name: "Diamond Tennis Bracelet",
      price: 125000,
      originalPrice: 140000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "diamond",
      occasion: "wedding",
      weight: "3.5ct",
      discount: 11,
      rating: 4.9,
      reviews: 78,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 11,
      name: "Silver Hoop Earrings",
      price: 12000,
      originalPrice: 15000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "earrings",
      material: "silver",
      occasion: "casual",
      weight: "12g",
      discount: 20,
      rating: 4.4,
      reviews: 234,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 12,
      name: "Gold Bangle Set",
      price: 55000,
      originalPrice: 65000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "gold",
      occasion: "wedding",
      weight: "18.5g",
      discount: 15,
      rating: 4.8,
      reviews: 112,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 13,
      name: "Pearl Necklace",
      price: 22000,
      originalPrice: 28000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "pearl",
      occasion: "casual",
      weight: "25g",
      discount: 21,
      rating: 4.5,
      reviews: 189,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 14,
      name: "Ruby Ring",
      price: 28000,
      originalPrice: 35000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "rings",
      material: "ruby",
      occasion: "birthday",
      weight: "1.8ct",
      discount: 20,
      rating: 4.7,
      reviews: 145,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 15,
      name: "Emerald Pendant",
      price: 18000,
      originalPrice: 22000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "pendants",
      material: "emerald",
      occasion: "casual",
      weight: "2.3ct",
      discount: 18,
      rating: 4.6,
      reviews: 167,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 16,
      name: "Gold Mangalsutra",
      price: 15000,
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "gold",
      occasion: "wedding",
      weight: "3.8g",
      discount: 17,
      rating: 4.8,
      reviews: 298,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 17,
      name: "Diamond Pendant",
      price: 45000,
      originalPrice: 52000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "pendants",
      material: "diamond",
      occasion: "engagement",
      weight: "0.8ct",
      discount: 13,
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 18,
      name: "Silver Chain Necklace",
      price: 8500,
      originalPrice: 12000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "silver",
      occasion: "casual",
      weight: "22g",
      discount: 29,
      rating: 4.3,
      reviews: 345,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 19,
      name: "Gold Nose Pin",
      price: 8500,
      originalPrice: 10000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "earrings",
      material: "gold",
      occasion: "casual",
      weight: "1.2g",
      discount: 15,
      rating: 4.7,
      reviews: 178,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 20,
      name: "Platinum Chain",
      price: 68000,
      originalPrice: 78000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "platinum",
      occasion: "casual",
      weight: "8.5g",
      discount: 13,
      rating: 4.8,
      reviews: 67,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 21,
      name: "Sapphire Ring",
      price: 32000,
      originalPrice: 38000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "rings",
      material: "sapphire",
      occasion: "birthday",
      weight: "2.1ct",
      discount: 16,
      rating: 4.6,
      reviews: 134,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 22,
      name: "Gold Toe Ring Set",
      price: 6500,
      originalPrice: 8000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "anklets",
      material: "gold",
      occasion: "casual",
      weight: "2.8g",
      discount: 19,
      rating: 4.5,
      reviews: 267,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 23,
      name: "Pearl Bracelet",
      price: 18000,
      originalPrice: 22000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "pearl",
      occasion: "casual",
      weight: "15g",
      discount: 18,
      rating: 4.7,
      reviews: 156,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 24,
      name: "Diamond Stud Earrings",
      price: 85000,
      originalPrice: 95000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "earrings",
      material: "diamond",
      occasion: "casual",
      weight: "1.5ct",
      discount: 11,
      rating: 4.9,
      reviews: 98,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 25,
      name: "Ruby Necklace",
      price: 42000,
      originalPrice: 48000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "ruby",
      occasion: "wedding",
      weight: "8.9g",
      discount: 13,
      rating: 4.8,
      reviews: 123,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 26,
      name: "Gold Finger Ring",
      price: 12000,
      originalPrice: 15000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "rings",
      material: "gold",
      occasion: "casual",
      weight: "3.2g",
      discount: 20,
      rating: 4.4,
      reviews: 289,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 27,
      name: "Emerald Earrings",
      price: 25000,
      originalPrice: 30000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "earrings",
      material: "emerald",
      occasion: "casual",
      weight: "3.8ct",
      discount: 17,
      rating: 4.6,
      reviews: 145,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 28,
      name: "Silver Ring Set",
      price: 9500,
      originalPrice: 12000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "rings",
      material: "silver",
      occasion: "casual",
      weight: "18g",
      discount: 21,
      rating: 4.3,
      reviews: 378,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 29,
      name: "Gold Payal",
      price: 28000,
      originalPrice: 35000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "anklets",
      material: "gold",
      occasion: "wedding",
      weight: "12.5g",
      discount: 20,
      rating: 4.8,
      reviews: 167,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 30,
      name: "Sapphire Pendant",
      price: 22000,
      originalPrice: 26000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "pendants",
      material: "sapphire",
      occasion: "casual",
      weight: "2.8ct",
      discount: 15,
      rating: 4.7,
      reviews: 134,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 31,
      name: "Diamond Chain",
      price: 95000,
      originalPrice: 110000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "diamond",
      occasion: "wedding",
      weight: "2.3ct",
      discount: 14,
      rating: 4.9,
      reviews: 78,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 32,
      name: "Pearl Ring",
      price: 15000,
      originalPrice: 18000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "rings",
      material: "pearl",
      occasion: "casual",
      weight: "4.2g",
      discount: 17,
      rating: 4.5,
      reviews: 234,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 33,
      name: "Gold Choker",
      price: 65000,
      originalPrice: 75000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "gold",
      occasion: "wedding",
      weight: "22.8g",
      discount: 13,
      rating: 4.8,
      reviews: 89,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 34,
      name: "Ruby Bracelet",
      price: 38000,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "ruby",
      occasion: "casual",
      weight: "11.5g",
      discount: 16,
      rating: 4.6,
      reviews: 156,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 35,
      name: "Silver Pendant",
      price: 7500,
      originalPrice: 9500,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "pendants",
      material: "silver",
      occasion: "casual",
      weight: "8.9g",
      discount: 21,
      rating: 4.4,
      reviews: 298,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 36,
      name: "Emerald Necklace",
      price: 52000,
      originalPrice: 60000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "emerald",
      occasion: "wedding",
      weight: "15.7g",
      discount: 13,
      rating: 4.8,
      reviews: 112,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 37,
      name: "Diamond Bangle",
      price: 180000,
      originalPrice: 200000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "diamond",
      occasion: "wedding",
      weight: "4.8ct",
      discount: 10,
      rating: 4.9,
      reviews: 45,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 38,
      name: "Gold Earrings Set",
      price: 35000,
      originalPrice: 42000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "earrings",
      material: "gold",
      occasion: "wedding",
      weight: "9.3g",
      discount: 17,
      rating: 4.7,
      reviews: 178,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 39,
      name: "Sapphire Necklace",
      price: 48000,
      originalPrice: 55000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "sapphire",
      occasion: "casual",
      weight: "12.4g",
      discount: 13,
      rating: 4.6,
      reviews: 134,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 40,
      name: "Pearl Pendant",
      price: 12000,
      originalPrice: 15000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "pendants",
      material: "pearl",
      occasion: "casual",
      weight: "3.1g",
      discount: 20,
      rating: 4.5,
      reviews: 267,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 41,
      name: "Platinum Ring",
      price: 85000,
      originalPrice: 95000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "rings",
      material: "platinum",
      occasion: "engagement",
      weight: "4.2g",
      discount: 11,
      rating: 4.9,
      reviews: 67,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 42,
      name: "Gold Anklet",
      price: 18000,
      originalPrice: 22000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "anklets",
      material: "gold",
      occasion: "casual",
      weight: "7.8g",
      discount: 18,
      rating: 4.6,
      reviews: 189,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 43,
      name: "Ruby Earrings",
      price: 28000,
      originalPrice: 33000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "earrings",
      material: "ruby",
      occasion: "casual",
      weight: "4.5ct",
      discount: 15,
      rating: 4.7,
      reviews: 145,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 44,
      name: "Silver Chain Bracelet",
      price: 9500,
      originalPrice: 12000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "silver",
      occasion: "casual",
      weight: "16.2g",
      discount: 21,
      rating: 4.4,
      reviews: 312,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 45,
      name: "Diamond Pendant Set",
      price: 65000,
      originalPrice: 75000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "pendants",
      material: "diamond",
      occasion: "wedding",
      weight: "1.8ct",
      discount: 13,
      rating: 4.8,
      reviews: 98,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 46,
      name: "Emerald Ring",
      price: 32000,
      originalPrice: 38000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "rings",
      material: "emerald",
      occasion: "birthday",
      weight: "2.7ct",
      discount: 16,
      rating: 4.6,
      reviews: 167,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 47,
      name: "Gold Chain Bracelet",
      price: 42000,
      originalPrice: 48000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "gold",
      occasion: "casual",
      weight: "14.3g",
      discount: 13,
      rating: 4.7,
      reviews: 134,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 48,
      name: "Sapphire Earrings",
      price: 35000,
      originalPrice: 42000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "earrings",
      material: "sapphire",
      occasion: "casual",
      weight: "3.9ct",
      discount: 17,
      rating: 4.8,
      reviews: 123,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 49,
      name: "Pearl Necklace Set",
      price: 28000,
      originalPrice: 35000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "pearl",
      occasion: "wedding",
      weight: "28.5g",
      discount: 20,
      rating: 4.7,
      reviews: 189,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 50,
      name: "Ruby Chain",
      price: 38000,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "necklaces",
      material: "ruby",
      occasion: "casual",
      weight: "9.8g",
      discount: 16,
      rating: 4.6,
      reviews: 145,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 51,
      name: "Diamond Anklet",
      price: 95000,
      originalPrice: 110000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "anklets",
      material: "diamond",
      occasion: "wedding",
      weight: "2.1ct",
      discount: 14,
      rating: 4.9,
      reviews: 67,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 52,
      name: "Gold Pendant",
      price: 22000,
      originalPrice: 26000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "pendants",
      material: "gold",
      occasion: "casual",
      weight: "4.7g",
      discount: 15,
      rating: 4.5,
      reviews: 234,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 53,
      name: "Emerald Earrings Set",
      price: 45000,
      originalPrice: 52000,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
      category: "earrings",
      material: "emerald",
      occasion: "wedding",
      weight: "6.2ct",
      discount: 13,
      rating: 4.8,
      reviews: 112,
      isNew: true,
      isBestSeller: false
    },
    {
      id: 54,
      name: "Silver Ring",
      price: 8500,
      originalPrice: 11000,
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
      category: "rings",
      material: "silver",
      occasion: "casual",
      weight: "12.8g",
      discount: 23,
      rating: 4.4,
      reviews: 345,
      isNew: false,
      isBestSeller: true
    },
    {
      id: 55,
      name: "Sapphire Bracelet",
      price: 42000,
      originalPrice: 48000,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "bracelets",
      material: "sapphire",
      occasion: "casual",
      weight: "13.5g",
      discount: 13,
      rating: 4.7,
      reviews: 156,
      isNew: true,
      isBestSeller: false
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
            setProducts(mockProducts);
            setFilteredProducts(mockProducts);
            setLoading(false);
    }, 1000);
    }, [mockProducts]);

  const applyFilters = () => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }
    // ...existing code...
  };


  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line
  }, [filters, sortBy, products, mockProducts]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading beautiful jewelry...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                All Jewelry
              </h1>
              <p className="text-gray-600">
                Discover our exquisite collection of fine jewelry
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {filteredProducts.length} products found
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search criteria
                </p>
                <button
                  onClick={() => setFilters({})}
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                {/* Products Grid */}
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {currentProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNumber = index + 1;
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={`px-3 py-2 rounded-lg border ${
                              currentPage === pageNumber
                                ? 'bg-yellow-500 text-white border-yellow-500'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {pageNumber}
                          </button>
                        );
                      })}
                      
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;