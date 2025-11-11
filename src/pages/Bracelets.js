import React from "react";
import { Link } from "react-router-dom";


export default function Bracelets() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-900">Bracelets</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-2xl">Discover our exclusive collection of bracelets, crafted with elegance and style. Choose from gold, diamond, and silver bracelets to add a touch of luxury to your look.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Gold Bracelets */}
        <Link to="/bracelets/gold" className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
          <img src={process.env.PUBLIC_URL +"/images/bracelet_040.jpg" }alt="Gold Bracelets" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
          <h2 className="text-xl font-semibold text-yellow-800 mb-2 text-center">Gold Bracelets</h2>
          <p className="text-gray-600 text-center">Timeless gold bracelets for every occasion.</p>
        </Link>
        {/* Diamond Bracelets */}
        <Link to="/bracelets/diamond" className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
          <img src={process.env.PUBLIC_URL +"/images/bracelet_051.jpg"} alt="Diamond Bracelets" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
          <h2 className="text-xl font-semibold text-yellow-800 mb-2 text-center">Diamond Bracelets</h2>
          <p className="text-gray-600 text-center">Sparkling diamond bracelets for a dazzling look.</p>
        </Link>
        {/* Silver Bracelets */}
        <Link to="/bracelets/silver" className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4 relative overflow-hidden">
          <img src={process.env.PUBLIC_URL +"/images/bracelet_053.jpg"} alt="Silver Bracelets" className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
          <h2 className="text-xl font-semibold text-yellow-800 mb-2 text-center">Silver Bracelets</h2>
          <p className="text-gray-600 text-center">Modern silver bracelets for a chic style.</p>
        </Link>
      </div>
    </div>
  );
}

