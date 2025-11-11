// src/pages/NewArrivals.jsx
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import { products as rawProducts } from '../data/products'; // adjust import path if needed
import { normalizeUrl } from '../utils/normalizeUrl';

// fallback image used if nothing else provided
const FALLBACK_IMAGE = process.env.PUBLIC_URL + '/images/design1.jpg';

// Normalize product images and video fields into images[] (non-destructive)
function normalizeProducts(productsList = []) {
  return productsList.map((p) => {
    // collect candidates from p.images (array), p.image, p.video (optional)
    const candidates = [];
    if (Array.isArray(p.images) && p.images.length) candidates.push(...p.images);
    if (p.image) candidates.push(p.image);
    if (p.video) {
      // if video present we might later show a poster; for now we can try video in candidates too
      // but usually prefer an image. keep video as fallback
      candidates.push(p.video);
    }

    // normalize each candidate to a fully-qualified URL
    const normalized = candidates
      .map((s) => normalizeUrl(s))
      .filter(Boolean);

    return {
      ...p,
      images: normalized.length ? normalized : [FALLBACK_IMAGE],
      // also make sure product.image exists for legacy components that use it
      image: normalized.length ? normalized[0] : FALLBACK_IMAGE,
    };
  });
}

// get most recent arrival per category (or badge 'New')
function getRecentArrivalsByCategory(products) {
  if (!Array.isArray(products)) return [];
  const normalized = normalizeProducts(products);
  const byCategory = {};

  normalized.forEach((p) => {
    const cat = (p.category || 'other').toString().toLowerCase();
    // prefer explicit 'New' badge first
    if (p.badge && typeof p.badge === 'string' && p.badge.toLowerCase() === 'new') {
      if (!byCategory[cat] || !(byCategory[cat].badge && byCategory[cat].badge.toLowerCase() === 'new')) {
        byCategory[cat] = p;
      }
      return;
    }
    // else prefer most recent dateAdded
    if (p.dateAdded) {
      const existing = byCategory[cat];
      if (!existing) {
        byCategory[cat] = p;
      } else if (existing.dateAdded) {
        // compare dates robustly
        const newDate = new Date(p.dateAdded);
        const existDate = new Date(existing.dateAdded);
        if (newDate > existDate) byCategory[cat] = p;
      }
    } else if (!byCategory[cat]) {
      byCategory[cat] = p;
    }
  });

  return Object.values(byCategory);
}

// A small grid wrapper for gallery items
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

export default function NewArrivals() {
  const recentArrivals = getRecentArrivalsByCategory(rawProducts);

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
