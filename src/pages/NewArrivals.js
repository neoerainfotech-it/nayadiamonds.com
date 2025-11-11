import React from "react";
import ProductGallery from "../components/ProductGallery";
import { products } from "../data/products";

// Get the most recent arrivals from each jewelry category (e.g., rings, earrings, necklaces, bracelets, etc.)
// Assume each product has a 'category' and a 'dateAdded' (ISO string or timestamp)
// If not, fallback to badge 'New' as before
function getRecentArrivalsByCategory(products) {
  if (!Array.isArray(products)) return [];
  // Group by category and pick the most recent in each
  const byCategory = {};
  products.forEach((p) => {
    const cat = p.category || 'other';
    // Prefer products with badge 'New', else by most recent dateAdded
    if (
      p.badge && typeof p.badge === 'string' && p.badge.toLowerCase() === 'new'
    ) {
      if (!byCategory[cat] || !(byCategory[cat].badge && byCategory[cat].badge.toLowerCase() === 'new')) {
        byCategory[cat] = p;
      }
    } else if (p.dateAdded) {
      if (!byCategory[cat] || (byCategory[cat].dateAdded && new Date(p.dateAdded) > new Date(byCategory[cat].dateAdded))) {
        byCategory[cat] = p;
      }
    } else if (!byCategory[cat]) {
      byCategory[cat] = p;
    }
  });
  // Ensure images array exists
  return Object.values(byCategory).map((p) => ({
    ...p,
    images: Array.isArray(p.images) ? p.images : [],
  }));
}

// Helper: fallback gallery for multiple products
function ProductGalleryGallery({ products = [], emptyMessage }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <div className="text-center text-gray-400 py-12">{emptyMessage || "No products found."}</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
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
  );
}

const recentArrivals = getRecentArrivalsByCategory(products);

export default function NewArrivals() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-900 font-[Poppins]">New Arrivals</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">
        Explore the latest arrivals in every jewelry category. Discover our freshest designs in rings, earrings, necklaces, bracelets, and more—each piece handpicked for its beauty and craftsmanship.
      </p>
      <ProductGalleryGallery products={recentArrivals} emptyMessage="No new arrivals at the moment." />
    </div>
  );
}
