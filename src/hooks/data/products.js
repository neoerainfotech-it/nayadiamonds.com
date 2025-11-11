// src/hooks/data/products.js
// Export a products array. Local/static images use process.env.PUBLIC_URL so CRA builds correct paths.

export const products = [
  // Diamond Jewelry (local images using PUBLIC_URL)
  {
    id: 1,
    name: "DiamondSolitaireRing",
    price: 2500,
    originalPrice: 3000,
    discount: 17,
    category: "Rings",
    material: "18K White Gold",
    occasion: "Engagement",
    description:
      "A timeless diamond solitaire ring featuring a brilliant-cut diamond set in elegant white gold. Perfect for engagement and special occasions.",
    images: [
      process.env.PUBLIC_URL + "/images/design3.jpg",
      process.env.PUBLIC_URL + "/images/diamond_ring_1.jpg",
      process.env.PUBLIC_URL + "/images/design1.jpg",
    ],
    features: ["GIA Certified", "Brilliant Cut", "18K White Gold", "Lifetime Warranty"],
    sizes: ["5", "6", "7", "8", "9"],
    weight: "2.5g",
    dimensions: "6.5mm center stone",
    dateAdded: "2024-01-15",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "DiamondTennisBracelet",
    price: 1800,
    category: "Bracelets",
    material: "14K White Gold",
    occasion: "Formal",
    description:
      "Elegant tennis bracelet with round brilliant diamonds set in white gold. Perfect for formal events and everyday luxury.",
    images: [
      process.env.PUBLIC_URL + "/images/design2.jpg",
      process.env.PUBLIC_URL + "/images/design4.jpg"
    ],
    features: ["Round Brilliant Diamonds", "14K White Gold", "Adjustable Length", "Secure Clasp"],
    weight: "8.2g",
    dimensions: "7.5 inches",
    dateAdded: "2024-01-10",
    badge: "Popular"
  },
  {
    id: 3,
    name: "PearlNecklace",
    price: 800,
    category: "Necklaces",
    material: "Freshwater Pearls",
    occasion: "Casual",
    description:
      "Classic freshwater pearl necklace with lustrous pearls and elegant design. Suitable for both casual and formal wear.",
    images: [
      process.env.PUBLIC_URL + "/images/design5.jpg",
      process.env.PUBLIC_URL + "/images/design6.jpg"
    ],
    features: ["Freshwater Pearls", "Sterling Silver Clasp", "18 inches", "Natural Luster"],
    weight: "12g",
    dimensions: "18 inches",
    dateAdded: "2024-01-08"
  },
  {
    id: 4,
    name: "GoldBangleBracelet",
    price: 1200,
    category: "Bracelets",
    material: "18K Yellow Gold",
    occasion: "Traditional",
    description:
      "Traditional gold bangle bracelet with intricate designs. Perfect for traditional ceremonies and daily wear.",
    images: [
      process.env.PUBLIC_URL + "/images/design7.jpg",
      process.env.PUBLIC_URL + "/images/design8.jpg"
    ],
    features: ["18K Yellow Gold", "Traditional Design", "Adjustable Fit", "Hallmarked"],
    sizes: ["2.4", "2.6", "2.8", "3.0"],
    weight: "15.5g",
    dimensions: "2.8 inches diameter",
    dateAdded: "2024-01-05"
  },
  {
    id: 5,
    name: "SapphireEarrings",
    price: 950,
    category: "Earrings",
    material: "14K White Gold",
    occasion: "Formal",
    description:
      "Elegant sapphire earrings with round-cut sapphires set in white gold. Perfect for formal occasions.",
    images: [
      process.env.PUBLIC_URL + "/images/earring_1.jpg",
      process.env.PUBLIC_URL + "/images/earring_2.jpg"
    ],
    features: ["Natural Sapphires", "14K White Gold", "Post Back", "Matching Pair"],
    weight: "3.2g",
    dimensions: "6mm sapphires",
    dateAdded: "2024-01-12"
  },
  {
    id: 6,
    name: "RoseGoldChain",
    price: 650,
    category: "Necklaces",
    material: "14K Rose Gold",
    occasion: "Casual",
    description: "Delicate rose gold chain necklace with modern design. Perfect for layering or wearing alone.",
    images: [
      process.env.PUBLIC_URL + "/images/design9.jpg",
      process.env.PUBLIC_URL + "/images/design10.jpg"
    ],
    features: ["14K Rose Gold", "Lobster Clasp", "16 inches", "Layering Style"],
    weight: "4.8g",
    dimensions: "16 inches",
    dateAdded: "2024-01-14"
  },
  {
    id: 7,
    name: "EmeraldRing",
    price: 1800,
    category: "Rings",
    material: "18K Yellow Gold",
    occasion: "Special",
    description:
      "Stunning emerald ring with a natural emerald center stone surrounded by diamonds in yellow gold.",
    images: [
      process.env.PUBLIC_URL + "/images/ring_041.jpg",
      process.env.PUBLIC_URL + "/images/ring_042.jpg"
    ],
    features: ["Natural Emerald", "Diamond Accents", "18K Yellow Gold", "GIA Certified"],
    sizes: ["5", "6", "7", "8", "9"],
    weight: "4.2g",
    dimensions: "8mm emerald",
    dateAdded: "2024-01-11"
  },
  {
    id: 8,
    name: "DiamondStuds",
    price: 2200,
    category: "Earrings",
    material: "14K White Gold",
    occasion: "Everyday",
    description: "Classic diamond stud earrings with brilliant-cut diamonds. Perfect for everyday wear and special occasions.",
    images: [
      process.env.PUBLIC_URL + "/images/design11.jpg",
      process.env.PUBLIC_URL + "/images/design12.jpg"
    ],
    features: ["Brilliant Cut Diamonds", "14K White Gold", "Screw Back", "0.5ct total"],
    weight: "2.8g",
    dimensions: "4mm diamonds",
    dateAdded: "2024-01-09"
  },
  {
    id: 9,
    name: "GoldMangalsutra",
    price: 450,
    category: "Necklaces",
    material: "22K Gold",
    occasion: "Traditional",
    description:
      "Traditional mangalsutra necklace with black beads and gold pendant. Sacred symbol of marriage.",
    images: [
      process.env.PUBLIC_URL + "/images/design13.jpg",
      process.env.PUBLIC_URL + "/images/design14.jpg"
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
      process.env.PUBLIC_URL + "/images/design15.jpg",
      process.env.PUBLIC_URL + "/images/design16.jpg"
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
    description:
      "Beautiful ruby pendant with natural ruby stone set in yellow gold. Perfect gift for special occasions.",
    images: [
      process.env.PUBLIC_URL + "/images/design17.jpg",
      process.env.PUBLIC_URL + "/images/design18.jpg"
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
      process.env.PUBLIC_URL + "/images/design19.jpg",
      process.env.PUBLIC_URL + "/images/design20.jpg"
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
      process.env.PUBLIC_URL + "/images/design21.jpg",
      process.env.PUBLIC_URL + "/images/design22.jpg"
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
    description:
      "Stunning diamond pave ring with multiple small diamonds set in white gold. Perfect for engagement.",
    images: [
      process.env.PUBLIC_URL + "/images/design23.jpg",
      process.env.PUBLIC_URL + "/images/design24.jpg"
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
      process.env.PUBLIC_URL + "/images/design25.jpg",
      process.env.PUBLIC_URL + "/images/design26.jpg"
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
      process.env.PUBLIC_URL + "/images/design27.jpg",
      process.env.PUBLIC_URL + "/images/design28.jpg"
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
      process.env.PUBLIC_URL + "/images/design29.jpg",
      process.env.PUBLIC_URL + "/images/design30.jpg"
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
      process.env.PUBLIC_URL + "/images/design31.jpg",
      process.env.PUBLIC_URL + "/images/design32.jpg"
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
      process.env.PUBLIC_URL + "/images/design33.jpg",
      process.env.PUBLIC_URL + "/images/design34.jpg"
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
      process.env.PUBLIC_URL + "/images/design35.jpg",
      process.env.PUBLIC_URL + "/images/design36.jpg"
    ],
    features: ["Multiple Diamonds", "14K White Gold", "Adjustable Length", "Lobster Clasp"],
    weight: "6.8g",
    dimensions: "16-18 inches",
    dateAdded: "2024-02-03"
  },

  // --- AUTO-GENERATED MASSIVE JEWELRY PRODUCT LIST (keeps external placeholders) ---
  ...Array.from({ length: 100 }, (_, i) => {
    const categories = [
      'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Anklets', 'Nose Rings', 'Bangles', 'Chains', 'Mangalsutra', 'Toe Rings', 'Brooches', 'Cufflinks', 'Gemstone', 'Diamond', 'Gold', 'Silver', 'Platinum', 'Kids', 'Men', 'Women'
    ];
    const materials = [
      '18K Yellow Gold', '14K White Gold', '22K Gold', '925 Silver', 'Platinum', 'Rose Gold', 'Freshwater Pearls', 'Gemstones', 'Diamond', 'Sapphire', 'Emerald', 'Ruby', 'Garnet', 'Topaz', 'Citrine', 'Amethyst', 'Turquoise', 'Onyx', 'Coral', 'Opal'
    ];
    const category = categories[i % categories.length];
    const material = materials[i % materials.length];
    const id = 21 + i;
    return {
      id,
      name: `${material.split(' ')[0]} ${category} ${id}`,
      price: 500 + (i * 25) % 5000,
      originalPrice: 600 + (i * 30) % 6000,
      discount: Math.floor(Math.random() * 20) + 5,
      category,
      material,
      occasion: ['Casual', 'Formal', 'Engagement', 'Wedding', 'Traditional', 'Special'][i % 6],
      description: `Beautiful ${category.toLowerCase()} made of ${material}, perfect for ${['everyday wear', 'special occasions', 'gifting', 'festivals', 'weddings', 'parties'][i % 6]}.`,
      images: [
        // keep external placeholders for autogenerated items
        `https://images.unsplash.com/photo-1600000000000-${i}?w=600&h=600&fit=crop`,
        `https://images.unsplash.com/photo-1600000000000-${i}?w=600&h=600&fit=crop&crop=face`
      ],
      features: [
        material,
        `${category} Design`,
        'Hallmarked',
        'Premium Quality',
        'Lifetime Warranty'
      ],
      sizes: ['5', '6', '7', '8', '9', '2.4', '2.6', '2.8', '3.0'],
      weight: `${(2 + (i % 20) * 0.5).toFixed(1)}g`,
      dimensions: `${6 + (i % 10)}mm`,
      dateAdded: `2024-02-${(i % 28) + 1}`,
      badge: ['Best Seller', 'Popular', 'New', 'Limited', 'Exclusive', 'Trending'][i % 6]
    };
  }),

  // --- ADDITIONAL AUTO-GENERATED PRODUCTS (external placeholders) ---
  ...Array.from({ length: 200 }, (_, i) => {
    const categories = [
      'Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Anklets', 'Nose Rings', 'Bangles', 'Chains', 'Mangalsutra', 'Toe Rings', 'Brooches', 'Cufflinks', 'Gemstone', 'Diamond', 'Gold', 'Silver', 'Platinum', 'Kids', 'Men', 'Women'
    ];
    const materials = [
      '18K Yellow Gold', '14K White Gold', '22K Gold', '925 Silver', 'Platinum', 'Rose Gold', 'Freshwater Pearls', 'Gemstones', 'Diamond', 'Sapphire', 'Emerald', 'Ruby', 'Garnet', 'Topaz', 'Citrine', 'Amethyst', 'Turquoise', 'Onyx', 'Coral', 'Opal'
    ];
    const category = categories[(i + 100) % categories.length];
    const material = materials[(i + 100) % materials.length];
    const id = 121 + i;
    return {
      id,
      name: `${material.split(' ')[0]} ${category} ${id}`,
      price: 700 + (i * 35) % 7000,
      originalPrice: 900 + (i * 40) % 9000,
      discount: Math.floor(Math.random() * 25) + 5,
      category,
      material,
      occasion: ['Casual', 'Formal', 'Engagement', 'Wedding', 'Traditional', 'Special'][(i + 2) % 6],
      description: `Premium ${category.toLowerCase()} crafted from ${material}, ideal for ${['everyday wear', 'special occasions', 'gifting', 'festivals', 'weddings', 'parties'][(i + 2) % 6]}.`,
      images: [
        `https://images.unsplash.com/photo-1610000000000-${i}?w=600&h=600&fit=crop`,
        `https://images.unsplash.com/photo-1610000000000-${i}?w=600&h=600&fit=crop&crop=face`
      ],
      features: [
        material,
        `${category} Design`,
        'Hallmarked',
        'Premium Quality',
        'Lifetime Warranty'
      ],
      sizes: ['5', '6', '7', '8', '9', '2.4', '2.6', '2.8', '3.0'],
      weight: `${(2.5 + (i % 25) * 0.6).toFixed(1)}g`,
      dimensions: `${7 + (i % 12)}mm`,
      dateAdded: `2024-03-${(i % 28) + 1}`,
      badge: ['Best Seller', 'Popular', 'New', 'Limited', 'Exclusive', 'Trending'][(i + 2) % 6]
    };
  })
];
