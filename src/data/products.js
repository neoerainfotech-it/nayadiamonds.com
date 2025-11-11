// src/hooks/data/products.js
// Rich product dataset: local images/videos use process.env.PUBLIC_URL so CRA + GitHub Pages resolve correctly.

const pub = (p) => process.env.PUBLIC_URL + p;

export const products = [
  {
    id: 1,
    name: "Diamond Bangle",
    price: 45000,
    originalPrice: 52000,
    image: pub("/images/product1.png"),
    video: pub("/videos/product1.mp4"),
    category: "necklaces",
    material: "gold",
    occasion: "wedding",
    weight: "12.5g",
    discount: 13,
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isBestSeller: false,
    hasVideo: true
  },
  {
    id: 2,
    name: "Diamond Solitaire Watch",
    price: 75000,
    originalPrice: 85000,
    image: pub("/images/product2.jpg"),
    video: pub("/videos/product2.mp4"),
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
    image: pub("/images/product3.png"),
    video: pub("/videos/product3.mp4"),
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
    image: pub("/images/product4.png"),
    video: pub("/videos/product4.mp4"),
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
    image: pub("/images/product5.png"),
    video: pub("/videos/product5.mp4"),
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
    image: pub("/images/product7.png"),
    video: pub("/videos/product6.mp4"),
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
    image: pub("/images/product8.png"),
    video: pub("/videos/product7.mp4"),
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
    image: pub("/images/product9.png"),
    video: pub("/videos/product8.mp4"),
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
    name: "GoldMangalsutra",
    price: 450,
    category: "Necklaces",
    material: "22K Gold",
    occasion: "Traditional",
    description: "Traditional mangalsutra necklace with black beads and gold pendant. Sacred symbol of marriage.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["22K Gold", "Black Beads", "Traditional Design", "Adjustable Length"],
    weight: "8.5g",
    dimensions: "22 inches",
    dateAdded: "2024-01-07"
  },
  {
    id: 10,
    name: "SilverAnklet",
    price: 120,
    category: "Anklets",
    material: "925 Silver",
    occasion: "Casual",
    description: "Delicate silver anklet with small bells and traditional design. Perfect for casual and traditional wear.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["925 Silver", "Small Bells", "Adjustable Chain", "Traditional Design"],
    weight: "6.2g",
    dimensions: "10 inches",
    dateAdded: "2024-01-13"
  },
  {
    id: 11,
    name: "RubyPendant",
    price: 750,
    category: "Pendants",
    material: "14K Yellow Gold",
    occasion: "Special",
    description: "Beautiful ruby pendant with natural ruby stone set in yellow gold. Perfect gift for special occasions.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Natural Ruby", "14K Yellow Gold", "18 inch Chain", "Lobster Clasp"],
    weight: "3.8g",
    dimensions: "6mm ruby",
    dateAdded: "2024-01-16"
  },
  {
    id: 12,
    name: "PlatinumWeddingBand",
    price: 3200,
    category: "Rings",
    material: "Platinum",
    occasion: "Wedding",
    description: "Elegant platinum wedding band with comfort fit design. Perfect for wedding ceremonies.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Platinum", "Comfort Fit", "Lifetime Warranty", "Hallmarked"],
    sizes: ["6", "7", "8", "9", "10", "11"],
    weight: "6.5g",
    dimensions: "4mm width",
    dateAdded: "2024-01-18"
  },
  {
    id: 13,
    name: "GoldNoseRing",
    price: 280,
    category: "Nose Rings",
    material: "22K Gold",
    occasion: "Traditional",
    description: "Traditional gold nose ring with intricate designs. Perfect for traditional Indian wear.",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["22K Gold", "Traditional Design", "Adjustable Size", "Secure Fit"],
    weight: "2.1g",
    dimensions: "8mm diameter",
    dateAdded: "2024-01-20"
  },
  {
    id: 14,
    name: "DiamondPaveRing",
    price: 1900,
    category: "Rings",
    material: "14K White Gold",
    occasion: "Engagement",
    description: "Stunning diamond pave ring with multiple small diamonds set in white gold. Perfect for engagement.",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Pave Setting", "14K White Gold", "Multiple Diamonds", "Elegant Design"],
    sizes: ["5", "6", "7", "8", "9"],
    weight: "3.8g",
    dimensions: "3mm band width",
    dateAdded: "2024-01-22"
  },
  {
    id: 15,
    name: "PearlEarrings",
    price: 420,
    category: "Earrings",
    material: "Freshwater Pearls",
    occasion: "Casual",
    description: "Elegant pearl earrings with freshwater pearls and sterling silver findings. Perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Freshwater Pearls", "Sterling Silver", "Post Back", "8mm Pearls"],
    weight: "4.5g",
    dimensions: "8mm pearls",
    dateAdded: "2024-01-24"
  },
  {
    id: 16,
    name: "GoldChainNecklace",
    price: 850,
    category: "Necklaces",
    material: "18K Yellow Gold",
    occasion: "Casual",
    description: "Classic gold chain necklace with elegant design. Perfect for layering or wearing alone.",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["18K Yellow Gold", "Lobster Clasp", "18 inches", "Classic Design"],
    weight: "7.2g",
    dimensions: "18 inches",
    dateAdded: "2024-01-26"
  },
  {
    id: 17,
    name: "SilverBracelet",
    price: 180,
    category: "Bracelets",
    material: "925 Silver",
    occasion: "Casual",
    description: "Elegant silver bracelet with adjustable chain and secure clasp. Perfect for everyday wear.",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["925 Silver", "Adjustable Chain", "Secure Clasp", "7.5 inches"],
    weight: "5.8g",
    dimensions: "7.5 inches",
    dateAdded: "2024-01-28"
  },
  {
    id: 18,
    name: "GarnetRing",
    price: 380,
    category: "Rings",
    material: "14K Yellow Gold",
    occasion: "Casual",
    description: "Beautiful garnet ring with deep red stone set in yellow gold. Perfect for casual and formal wear.",
    images: [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Natural Garnet", "14K Yellow Gold", "Classic Setting", "6mm Stone"],
    sizes: ["5", "6", "7", "8", "9"],
    weight: "2.9g",
    dimensions: "6mm garnet",
    dateAdded: "2024-01-30"
  },
  {
    id: 19,
    name: "GoldHoopEarrings",
    price: 650,
    category: "Earrings",
    material: "14K Yellow Gold",
    occasion: "Casual",
    description: "Classic gold hoop earrings with elegant design. Perfect for everyday wear and special occasions.",
    images: [
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["14K Yellow Gold", "Hoop Design", "Secure Closure", "20mm diameter"],
    weight: "4.2g",
    dimensions: "20mm diameter",
    dateAdded: "2024-02-01"
  },
  {
    id: 20,
    name: "DiamondNecklace",
    price: 2800,
    category: "Necklaces",
    material: "14K White Gold",
    occasion: "Formal",
    description: "Stunning diamond necklace with multiple diamonds set in white gold. Perfect for formal events.",
    images: [
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&crop=face"
    ],
    features: ["Multiple Diamonds", "14K White Gold", "Adjustable Length", "Lobster Clasp"],
    weight: "6.8g",
    dimensions: "16-18 inches",
    dateAdded: "2024-02-03"
  },

  // 20 Necklaces (local images use pub())
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1000 + i,
    name: `Elegant Gold Necklace ${i + 1}`,
    price: 2500 + i * 100,
    category: 'Necklaces',
    material: '18K Yellow Gold',
    occasion: ['Wedding', 'Party', 'Festive', 'Casual'][i % 4],
    description: `Premium handcrafted gold necklace, design #${i + 1}.`,
    images: [
      pub(`/images/necklace_${56 + (i % 50)}.jpg`)
    ],
    features: ['18K Gold', 'Handcrafted', 'Hallmarked', 'Premium Quality'],
    weight: `${(8 + i * 0.5).toFixed(1)}g`,
    dimensions: `${16 + (i % 5)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Best Seller', 'New', 'Trending'][i % 3],
    tags: [(['Best Seller', 'New', 'Trending'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),

  // 20 Rings
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1100 + i,
    name: `Diamond Ring ${i + 1}`,
    price: 1800 + i * 80,
    category: 'Rings',
    material: '18K White Gold',
    occasion: ['Engagement', 'Anniversary', 'Gift', 'Casual'][i % 4],
    description: `Sparkling diamond ring, style #${i + 1}.`,
    images: [
      pub(`/images/ring_${41 + (i % 10)}.jpg`)
    ],
    features: ['Diamond', '18K White Gold', 'Certified', 'Elegant'],
    weight: `${(2 + i * 0.2).toFixed(1)}g`,
    dimensions: `${6 + (i % 3)}mm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Popular', 'Exclusive', 'Limited'][i % 3]
  })),

  // 20 Earrings
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1200 + i,
    name: `Pearl Drop Earrings ${i + 1}`,
    price: 950 + i * 60,
    category: 'Earrings',
    material: 'Freshwater Pearls',
    occasion: ['Party', 'Festive', 'Gift', 'Casual'][i % 4],
    description: `Elegant pearl drop earrings, edition #${i + 1}.`,
    images: [
      pub(`/images/earring_${1 + (i % 50)}.jpg`)
    ],
    features: ['Pearl', 'Sterling Silver', 'Handcrafted', 'Premium'],
    weight: `${(3 + i * 0.1).toFixed(1)}g`,
    dimensions: `${5 + (i % 2)}cm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['New', 'Trending', 'Best Seller'][i % 3],
    tags: [(['New', 'Trending', 'Best Seller'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),

  // 20 Bracelets (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1300 + i,
    name: `Classic Gold Bracelet ${i + 1}`,
    price: 1200 + i * 70,
    category: 'Bracelets',
    material: '22K Gold',
    occasion: ['Wedding', 'Gift', 'Festive', 'Casual'][i % 4],
    description: `Classic gold bracelet, model #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['22K Gold', 'Adjustable', 'Hallmarked', 'Premium'],
    weight: `${(5 + i * 0.3).toFixed(1)}g`,
    dimensions: `${7 + (i % 2)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Best Seller', 'Limited', 'Exclusive'][i % 3],
    tags: [(['Best Seller', 'Limited', 'Exclusive'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),

  // 20 Pendants (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1400 + i,
    name: `Gemstone Pendant ${i + 1}`,
    price: 800 + i * 50,
    category: 'Pendants',
    material: 'Gemstones',
    occasion: ['Gift', 'Anniversary', 'Party', 'Casual'][i % 4],
    description: `Colorful gemstone pendant, piece #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1603561591411-07134e71a2b9?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['Gemstone', 'Sterling Silver', 'Handcrafted', 'Premium'],
    weight: `${(2 + i * 0.15).toFixed(2)}g`,
    dimensions: `${3 + (i % 2)}cm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Popular', 'New', 'Trending'][i % 3]
  })),

  // 20 Bangles (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1500 + i,
    name: `Designer Gold Bangle ${i + 1}`,
    price: 1600 + i * 90,
    category: 'Bangles',
    material: '18K Yellow Gold',
    occasion: ['Wedding', 'Festive', 'Gift', 'Casual'][i % 4],
    description: `Designer gold bangle, style #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['18K Gold', 'Handcrafted', 'Hallmarked', 'Premium'],
    weight: `${(6 + i * 0.4).toFixed(1)}g`,
    dimensions: `${(2.4 + (i % 4) * 0.2).toFixed(2)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Exclusive', 'Best Seller', 'Limited'][i % 3],
    tags: [(['Exclusive', 'Best Seller', 'Limited'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),

  // 20 Anklets (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1600 + i,
    name: `Silver Anklet ${i + 1}`,
    price: 400 + i * 20,
    category: 'Anklets',
    material: '925 Silver',
    occasion: ['Festive', 'Gift', 'Party', 'Casual'][i % 4],
    description: `Delicate silver anklet, edition #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['925 Silver', 'Adjustable', 'Handcrafted', 'Premium'],
    weight: `${(2 + i * 0.1).toFixed(1)}g`,
    dimensions: `${9 + (i % 2)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Trending', 'New', 'Popular'][i % 3]
  })),

  // 20 Nose Rings (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1700 + i,
    name: `Gold Nose Ring ${i + 1}`,
    price: 300 + i * 10,
    category: 'Nose Rings',
    material: '22K Gold',
    occasion: ['Traditional', 'Festive', 'Gift', 'Casual'][i % 4],
    description: `Traditional gold nose ring, design #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['22K Gold', 'Handcrafted', 'Hallmarked', 'Premium'],
    weight: `${(1 + i * 0.05).toFixed(2)}g`,
    dimensions: `${8 + (i % 2)}mm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Best Seller', 'Exclusive', 'Limited'][i % 3]
  })),

  // 20 Chains (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1800 + i,
    name: `Gold Chain ${i + 1}`,
    price: 900 + i * 40,
    category: 'Chains',
    material: '18K Yellow Gold',
    occasion: ['Wedding', 'Gift', 'Party', 'Casual'][i % 4],
    description: `Classic gold chain, model #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['18K Gold', 'Handcrafted', 'Hallmarked', 'Premium'],
    weight: `${(4 + i * 0.2).toFixed(1)}g`,
    dimensions: `${18 + (i % 3)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Popular', 'Trending', 'Best Seller'][i % 3]
  })),

  // 20 Mangalsutra (external images kept)
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1900 + i,
    name: `Traditional Mangalsutra ${i + 1}`,
    price: 1100 + i * 60,
    category: 'Mangalsutra',
    material: '22K Gold',
    occasion: ['Wedding', 'Festive', 'Gift', 'Casual'][i % 4],
    description: `Traditional mangalsutra, design #${i + 1}.`,
    images: [
      `https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop&sig=${i}`
    ],
    features: ['22K Gold', 'Black Beads', 'Handcrafted', 'Premium'],
    weight: `${(7 + i * 0.3).toFixed(1)}g`,
    dimensions: `${20 + (i % 2)} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Exclusive', 'Best Seller', 'Limited'][i % 3]
  }))
];
