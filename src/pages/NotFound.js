import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="container mx-auto py-24 px-4 text-center">
    <h1 className="text-6xl font-bold text-[#d4af37] mb-4 font-serif">404</h1>
    <p className="text-xl text-gray-700 mb-8">Sorry, the page you’re looking for doesn’t exist.</p>
    <Link
      to="/"
      className="inline-block bg-[#d4af37] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#bfa16b] transition"
    >
      Go Home
    </Link>
  </section>
);

export default NotFound;