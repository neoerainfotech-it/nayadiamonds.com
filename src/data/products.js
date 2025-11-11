// Rich product dataset: 20 items per major category (Necklaces, Rings, Earrings, Bracelets, Pendants, Bangles, Anklets, Nose Rings, Chains, Mangalsutra)
export const products = [
  // 20 Necklaces
  ...Array.from({ length: 20 }, (_, i) => ({
    id: 1000 + i,
    name: `Elegant Gold Necklace ${i + 1}`,
    price: 2500 + i * 100,
    category: 'Necklaces',
    material: '18K Yellow Gold',
    occasion: ['Wedding', 'Party', 'Festive', 'Casual'][i % 4],
    description: `Premium handcrafted gold necklace, design #${i + 1}.`,
    images: [
      `/images/necklace_${56 + (i % 50)}.jpg`
    ],
    features: ['18K Gold', 'Handcrafted', 'Hallmarked', 'Premium Quality'],
    weight: `${8 + i * 0.5}g`,
    dimensions: `${16 + i % 5} inches`,
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
      `/images/ring_0${41 + (i % 10)}.jpg`
    ],
    features: ['Diamond', '18K White Gold', 'Certified', 'Elegant'],
    weight: `${2 + i * 0.2}g`,
    dimensions: `${6 + i % 3}mm`,
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
      `/images/earring_${1 + (i % 50)}.jpg`
    ],
    features: ['Pearl', 'Sterling Silver', 'Handcrafted', 'Premium'],
    weight: `${3 + i * 0.1}g`,
    dimensions: `${5 + i % 2}cm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['New', 'Trending', 'Best Seller'][i % 3],
    tags: [(['New', 'Trending', 'Best Seller'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),
  // 20 Bracelets
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
    weight: `${5 + i * 0.3}g`,
    dimensions: `${7 + i % 2} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Best Seller', 'Limited', 'Exclusive'][i % 3],
    tags: [(['Best Seller', 'Limited', 'Exclusive'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),
  // 20 Pendants
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
    weight: `${2 + i * 0.15}g`,
    dimensions: `${3 + i % 2}cm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Popular', 'New', 'Trending'][i % 3]
  })),
  // 20 Bangles
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
    weight: `${6 + i * 0.4}g`,
    dimensions: `${2.4 + (i % 4) * 0.2} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Exclusive', 'Best Seller', 'Limited'][i % 3],
    tags: [(['Exclusive', 'Best Seller', 'Limited'][i % 3] === 'Best Seller') ? 'bestseller' : '']
  })),
  // 20 Anklets
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
    weight: `${2 + i * 0.1}g`,
    dimensions: `${9 + i % 2} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Trending', 'New', 'Popular'][i % 3]
  })),
  // 20 Nose Rings
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
    weight: `${1 + i * 0.05}g`,
    dimensions: `${8 + i % 2}mm`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Best Seller', 'Exclusive', 'Limited'][i % 3]
  })),
  // 20 Chains
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
    weight: `${4 + i * 0.2}g`,
    dimensions: `${18 + i % 3} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Popular', 'Trending', 'Best Seller'][i % 3]
  })),
  // 20 Mangalsutra
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
    weight: `${7 + i * 0.3}g`,
    dimensions: `${20 + i % 2} inches`,
    dateAdded: `2024-03-${(i % 28) + 1}`,
    badge: ['Exclusive', 'Best Seller', 'Limited'][i % 3]
  })),
];
