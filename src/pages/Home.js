// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import ProductCard from '../components/ProductCard';
// import Marquee from "react-fast-marquee";
import '../styles/home.css';
import { products as allProducts } from '../hooks/data/products';
import DualCTA from '../components/DualCTA';
import OfferTicker from '../components/OfferTicker';
import PromoGrid from '../components/PromoGrid';
import ShopCTA from '../components/ShopCTA';
import MaterialCarousel from '../components/MaterialCarousel';
import OrderButton from '../components/OrderButton';
import CustomerReviewCarousel from '../components/CustomerReviewCarousel';
 
function Home() {
  // --- Local images (use PUBLIC_URL so CRA builds correct paths) ---
  const localImages = [
<<<<<<< HEAD
    process.env.PUBLIC_URL + '/images/design1.jpg',
    process.env.PUBLIC_URL + '/images/design2.jpg',
    process.env.PUBLIC_URL + '/images/design3.jpg',
    process.env.PUBLIC_URL + '/images/design4.jpg',
    process.env.PUBLIC_URL + '/images/design5.jpg',
    process.env.PUBLIC_URL + '/images/design6.jpg',
    process.env.PUBLIC_URL + '/images/design7.jpg',
    process.env.PUBLIC_URL + '/images/design8.jpg',
    process.env.PUBLIC_URL + '/images/design9.jpg',
    process.env.PUBLIC_URL + '/images/design10.jpg',
    process.env.PUBLIC_URL + '/images/ring_041.jpg',
    process.env.PUBLIC_URL + '/images/ring_042.jpg',
    process.env.PUBLIC_URL + '/images/ring_043.jpg',
    process.env.PUBLIC_URL + '/images/ring_044.jpg',
    process.env.PUBLIC_URL + '/images/ring_045.jpg',
    process.env.PUBLIC_URL + '/images/ring_046.jpg',
    process.env.PUBLIC_URL + '/images/earring_1.jpg',
    process.env.PUBLIC_URL + '/images/earring_2.jpg',
    process.env.PUBLIC_URL + '/images/earring_3.jpg',
    process.env.PUBLIC_URL + '/images/earring_4.jpg',
    process.env.PUBLIC_URL + '/images/necklace_100.jpg',
    process.env.PUBLIC_URL + '/images/necklace_101.jpg',
    process.env.PUBLIC_URL + '/images/bracelet_039.jpg',
    process.env.PUBLIC_URL + '/images/bracelet_040.jpg'
=======
    './images/design1.jpg', '/images/design2.jpg', '/images/design3.jpg', '/images/design4.jpg',
    '/images/design5.jpg', '/images/design6.jpg', '/images/design7.jpg', '/images/design8.jpg',
    '/images/design9.jpg', '/images/design10.jpg', '/images/ring_041.jpg', '/images/ring_042.jpg',
    '/images/ring_043.jpg', '/images/ring_044.jpg', '/images/ring_045.jpg', '/images/ring_046.jpg',
    '/images/earring_1.jpg', '/images/earring_2.jpg', '/images/earring_3.jpg', '/images/earring_4.jpg',
    '/images/necklace_100.jpg', '/images/necklace_101.jpg', '/images/bracelet_039.jpg', '/images/bracelet_040.jpg'
>>>>>>> fc7af602c089ea64c583589e03d6197bf7b44692
  ];
 
  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
 
  // ✅ UPDATED: New Arrivals now use your real video + new products
  const newArrivals = allProducts
    .filter((p) => p.isNew || p.hasVideo)
    .slice(0, 8);
 
  // --- Best Sellers (use local images) ---
  const shuffledBestSellerImages = shuffleArray(localImages);
  const bestSellersRaw = allProducts.filter(p => p.isBestSeller || p.badge === 'Best Seller').slice(0, 8);
  const bestSellers = bestSellersRaw.map((p, i) => ({
    ...p,
    images: [p.image || shuffledBestSellerImages[i % shuffledBestSellerImages.length]]
  }));
 
  // --- Occasions (example - you can add more) ---
  const occasions = [
    { name: 'Engagement', image: process.env.PUBLIC_URL + '/images/design18.jpg', link: '/collections/engagement' },
    { name: 'Wedding', image: process.env.PUBLIC_URL + '/images/design19.jpg', link: '/collections/wedding' },
    { name: 'Gifts', image: process.env.PUBLIC_URL + '/images/design20.jpg', link: '/collections/gifts' }
  ];
 
  // --- Materials ---
  const materials = [
    { name: 'Gold', image: process.env.PUBLIC_URL + '/images/design3.jpg', link: '/category/gold' },
    { name: 'Diamond', image: process.env.PUBLIC_URL + '/images/design10.jpg', link: '/category/diamond' },
    { name: 'Silver', image: process.env.PUBLIC_URL + '/images/ring_041.jpg', link: '/category/silver' },
    { name: 'Platinum', image: process.env.PUBLIC_URL + '/images/design17.jpg', link: '/category/platinum' }
  ];
 
  // --- Featured Collections ---
  const collections = [
    { name: 'Bridal Collection', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop', link: '/collections/bridal' },
    { name: 'Festive Collection', image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&h=400&fit=crop', link: '/collections/festive' },
    { name: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop', link: '/collections/everyday' }
  ];
 
  // Blog/Guides/Trends Section - images fixed to PUBLIC_URL
  const blogGuides = [
    {
      title: 'How to Care for Your Jewelry',
      desc: 'Tips and tricks to keep your jewelry sparkling and safe for years to come.',
      link: '/blog/jewelry-care',
      image: process.env.PUBLIC_URL + '/images/design11.jpg',
    },
    {
      title: '2025 Jewelry Trends',
      desc: 'Discover the latest styles, colors, and designs making waves this year.',
      link: '/blog/trends-2025',
      image: process.env.PUBLIC_URL + '/images/design12.jpg',
    },
    {
      title: 'Buying Guide',
      desc: 'Everything you need to know before buying gold, diamond, or gemstone jewelry.',
      link: '/blog/buying-guide',
      image: process.env.PUBLIC_URL + '/images/design13.jpg',
    },
    {
      title: 'Diamond Solitaires',
      desc: 'Explore our exclusive collection of certified solitaire diamonds for rings, pendants, and earrings.',
      link: '/solitaires',
      image: process.env.PUBLIC_URL + '/images/diamond_ring_1.jpg',
    },
    {
      title: 'Diamond Buying Guide',
      desc: 'A step-by-step guide to picking the perfect diamond for your needs, including the 4Cs and more.',
      link: '/diamond-guide',
      image: process.env.PUBLIC_URL + '/images/design14.jpg',
    },
    {
      title: 'Wedding Jewelry Inspiration',
      desc: 'Explore our favorite bridal looks and jewelry sets for your big day.',
      link: '/blog/wedding-inspiration',
      image: process.env.PUBLIC_URL + '/images/design15.jpg',
    },
    {
      title: 'Gemstone Meanings',
      desc: 'Learn about the symbolism and benefits of popular gemstones.',
      link: '/blog/gemstone-meanings',
      image: process.env.PUBLIC_URL + '/images/design16.jpg',
    },
  ];
 
  // Instagram Gallery - generate urls against PUBLIC_URL
  const instagramImages = Array.from({ length: 16 }, (_, i) =>
    process.env.PUBLIC_URL + `/images/design${(i % 44) + 1}.jpg`
  );
 
  return (
    <div className="min-h-screen home-container bg-[#f8f5f2]">
      {/* Hero Carousel */}
      <section className="mb-8">
        <Carousel />
      </section>
 
      <OfferTicker />
      <section className="mb-8">
        <DualCTA />
      </section>
 
      {/* Categories */}
      <section className="home-section">
        <h2 className="section-title">Shop by Category</h2>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem' }}>
          <PromoGrid />
        </div>
      </section>
 
      {/* Trending / CTA */}
      <section className="home-section">
        <ShopCTA />
      </section>
 
      {/* ✅ Updated New Arrivals Section */}
      <section className="home-section">
        <h2 className="section-title">New Arrivals</h2>
        <p className="text-lg text-brown-700 mb-6 max-w-2xl mx-auto text-center">
          Discover the latest additions to our collection — crafted with precision, beauty, and now featuring stunning video previews.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 product-row">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/new-arrivals"
            className="inline-block bg-yellow-500 text-brown-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
          >
            View All New Arrivals
          </Link>
        </div>
      </section>
 
      {/* Best Sellers Section */}
      <section className="home-section">
        <h2 className="section-title">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 product-row">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
 
      {/* Shop by Material Carousel */}
      <MaterialCarousel />
 
      {/* Featured Collections */}
      <section className="home-section">
        <h2 className="section-title">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-xl p-4" style={{ background: '#fff' }}>
          {collections.map((c, idx) => (
            <Link key={idx} to={c.link} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              <img src={c.image} alt={c.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{c.name}</h3>
                <p className="text-sm text-gray-600 mb-2">Explore our curated {c.name.toLowerCase()}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
 
      {/* Video/Media Section */}
      <section className="home-section">
        <h2 className="section-title">Jewelry Showcase</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <video controls className="rounded-xl shadow-lg w-full md:w-2/3 h-80 object-cover" poster={process.env.PUBLIC_URL + '/images/ddhome.jpg'}>
            <source src={process.env.PUBLIC_URL + '/media/vamana-showcase.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-brown-900 text-lg font-semibold">Experience the brilliance of Naya Diamonds Jewels in motion!</div>
        </div>
      </section>
 
      {/* Blog/Guides/Trends Section */}
      <section className="home-section">
        <h2 className="section-title">Jewelry Guides & Trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogGuides.map((guide, idx) => (
            <div key={idx} className="bg-yellow-50 rounded-lg p-6 shadow flex flex-col items-center">
              <img src={guide.image} alt={guide.title} className="rounded-lg mb-4 w-full h-32 object-cover" />
              <h4 className="font-semibold text-brown-900 mb-2">{guide.title}</h4>
              <p className="text-brown-700 text-sm mb-2">{guide.desc}</p>
              <Link to={guide.link} className={`text-yellow-700 font-semibold mt-2 inline-block ${guide.link === '/solitaires' || guide.link === '/diamond-guide' ? 'underline underline-offset-4 decoration-blue-500' : ''}`}>Read More</Link>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link to="/solitaires" className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg">Shop Solitaires</Link>
          <Link to="/diamond-guide" className="bg-blue-100 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-200 transition-colors shadow-lg border border-blue-200">Diamond Buying Guide</Link>
        </div>
      </section>
 
      {/* Social/Instagram Gallery Section */}
      <section className="home-section">
        <h2 className="section-title">#Naya Jewels On Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((img, i) => (
            <a
              key={i}
              href="https://instagram.com/yourbrand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <img
                src={img}
                alt={`Vamana Instagram ${i + 1}`}
                className="rounded-lg shadow object-cover w-full h-40 p-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </a>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer" className="text-yellow-700 font-semibold">Follow us @yourbrand</a>
        </div>
      </section>
 
      {/* Newsletter Signup Section */}
      <section className="home-section bg-yellow-50 rounded-lg shadow-lg my-12 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-brown-900 mb-2">Get Exclusive Offers & Updates</h3>
            <p className="text-brown-700 mb-4">Sign up for our newsletter and never miss a new collection or special deal. Subscribers get a 10% welcome discount!</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-l-lg border border-yellow-300 focus:outline-none" />
              <button type="submit" className="bg-yellow-500 text-brown-900 px-6 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors">Subscribe</button>
            </form>
          </div>
          <img src={process.env.PUBLIC_URL + '/images/design10.jpg'} alt="Newsletter" className="rounded-lg shadow w-48 h-32 object-cover" />
        </div>
      </section>
 
      {/* Expanded Home Content */}
      <section className="home-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <img src={process.env.PUBLIC_URL + '/images/ring_059.jpg'} alt="Vamana Jewels Banner" className="rounded-xl shadow-lg w-full h-80 object-cover" />
            <div>
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Why Choose Naya Jewels?</h3>
              <ul className="list-disc pl-6 text-brown-700 space-y-2">
                <li>Unmatched craftsmanship and quality assurance</li>
                <li>Exclusive, contemporary, and traditional designs</li>
                <li>Ethically sourced materials and certified stones</li>
                <li>Personalized customer service and aftercare</li>
                <li>Secure shopping and easy returns</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-yellow-100 rounded-lg p-6 shadow">
              <h4 className="font-semibold text-brown-900 mb-2">Customer Stories</h4>
              <p className="text-brown-700 text-sm">“I found the perfect engagement ring at Naya Jewels. The quality and service were outstanding!”</p>
              <span className="block mt-2 text-xs text-brown-500">- Priya S.</span>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 shadow">
              <h4 className="font-semibold text-brown-900 mb-2">Our Promise</h4>
              <p className="text-brown-700 text-sm">Every piece is hallmarked and comes with a lifetime warranty. Shop with confidence and style.</p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-6 shadow">
              <h4 className="font-semibold text-brown-900 mb-2">Exclusive Offers</h4>
              <p className="text-brown-700 text-sm">Sign up for our newsletter to get early access to new collections and special discounts.</p>
            </div>
          </div>
        </div>
      </section>
 
      {/* Store Locator/Virtual Try-On/FAQ Section */}
      <section className="home-section">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold text-brown-900 mb-2">Store Locator</h4>
            <p className="text-brown-700 text-sm">Find your nearest Naya Jewels store and book a personalized appointment. We have 20+ locations across India.</p>
            <Link to="/stores" className="text-yellow-700 font-semibold mt-2 inline-block">Find a Store</Link>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold text-brown-900 mb-2">Virtual Try-On</h4>
            <p className="text-brown-700 text-sm">Try jewelry virtually from the comfort of your home using our AR experience. Works on mobile and desktop!</p>
            <Link to="/virtual-tryon" className="text-yellow-700 font-semibold mt-2 inline-block">Try Now</Link>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h4 className="font-semibold text-brown-900 mb-2">Need Help?</h4>
            <p className="text-brown-700 text-sm">Visit our FAQ or contact our support team for assistance. Our experts are available 24/7 for your queries.</p>
            <Link to="/faq" className="text-yellow-700 font-semibold mt-2 inline-block">FAQ & Support</Link>
          </div>
        </div>
      </section>
 
      {/* Customer Reviews Carousel */}
      <CustomerReviewCarousel />
    </div>
  );
}
<<<<<<< HEAD
 
=======

>>>>>>> fc7af602c089ea64c583589e03d6197bf7b44692
export default Home;
