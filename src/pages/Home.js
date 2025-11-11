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
  // Mock featured products data
  // ...existing code...

  // ...existing code...

  // --- New Arrivals (sample, use local images) ---
  const localImages = [
    './images/design1.jpg', '/images/design2.jpg', '/images/design3.jpg', '/images/design4.jpg',
    '/images/design5.jpg', '/images/design6.jpg', '/images/design7.jpg', '/images/design8.jpg',
    '/images/design9.jpg', '/images/design10.jpg', '/images/ring_041.jpg', '/images/ring_042.jpg',
    '/images/ring_043.jpg', '/images/ring_044.jpg', '/images/ring_045.jpg', '/images/ring_046.jpg',
    '/images/earring_1.jpg', '/images/earring_2.jpg', '/images/earring_3.jpg', '/images/earring_4.jpg',
    '/images/necklace_100.jpg', '/images/necklace_101.jpg', '/images/bracelet_039.jpg', '/images/bracelet_040.jpg'
  ];
  function shuffleArray(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  // Assign a local image to each new arrival product
  const shuffledImages = shuffleArray(localImages);
  const newArrivals = allProducts.slice(-8).map((p, i) => ({
    ...p,
    isNew: true,
    images: [shuffledImages[i % shuffledImages.length]]
  }));

  // --- Best Sellers (use local images) ---
  // Shuffle local images for best sellers as well
  const shuffledBestSellerImages = shuffleArray(localImages);
  const bestSellersRaw = allProducts.filter(p => p.badge === 'Best Seller').slice(0, 8);
  const bestSellers = bestSellersRaw.map((p, i) => ({
    ...p,
    images: [shuffledBestSellerImages[i % shuffledBestSellerImages.length]]
  }));

  // --- Occasions (use local images) ---
  

  // --- Materials ---
  const materials = [
    { name: 'Gold', image: '/images/design3.jpg', link: '/category/gold' },
    { name: 'Diamond', image: '/images/design10.jpg', link: '/category/diamond' },
    { name: 'Silver', image: '/images/ring_041.jpg', link: '/category/silver' },
    { name: 'Platinum', image: '/images/design17.jpg', link: '/category/platinum' }
  ];

  // --- Featured Collections ---
  const collections = [
    { name: 'Bridal Collection', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop', link: '/collections/bridal' },
    { name: 'Festive Collection', image: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&h=400&fit=crop', link: '/collections/festive' },
    { name: 'Everyday Elegance', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop', link: '/collections/everyday' }
  ];

  // Blog/Guides/Trends Section - more entries
  const blogGuides = [
    {
      title: 'How to Care for Your Jewelry',
      desc: 'Tips and tricks to keep your jewelry sparkling and safe for years to come.',
      link: '/blog/jewelry-care',
      image: '/images/design11.jpg',
    },
    {
      title: '2025 Jewelry Trends',
      desc: 'Discover the latest styles, colors, and designs making waves this year.',
      link: '/blog/trends-2025',
      image: '/images/design12.jpg',
    },
    {
      title: 'Buying Guide',
      desc: 'Everything you need to know before buying gold, diamond, or gemstone jewelry.',
      link: '/blog/buying-guide',
      image: '/images/design13.jpg',
    },
    {
      title: 'Diamond Solitaires',
      desc: 'Explore our exclusive collection of certified solitaire diamonds for rings, pendants, and earrings.',
      link: '/solitaires',
      image: '/images/diamond_ring_1.jpg',
    },
    {
      title: 'Diamond Buying Guide',
      desc: 'A step-by-step guide to picking the perfect diamond for your needs, including the 4Cs and more.',
      link: '/diamond-guide',
      image: '/images/design14.jpg',
    },
    {
      title: 'Wedding Jewelry Inspiration',
      desc: 'Explore our favorite bridal looks and jewelry sets for your big day.',
      link: '/blog/wedding-inspiration',
      image: '/images/design15.jpg',
    },
    {
      title: 'Gemstone Meanings',
      desc: 'Learn about the symbolism and benefits of popular gemstones.',
      link: '/blog/gemstone-meanings',
      image: '/images/design16.jpg',
    },
  ];

  // Instagram Gallery - more images
  const instagramImages = Array.from({ length: 16 }, (_, i) => `/images/design${(i % 44) + 1}.jpg`);

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

      {/* Marquee Transition */}
      {/* <Marquee className="mb-0 py-2 bg-yellow-100 text-brown-800 font-semibold text-lg" gradient={false} speed={60}>
        Shop by Category &nbsp;|&nbsp; Trending Jewelry &nbsp;|&nbsp; New Arrivals &nbsp;|&nbsp; Best Sellers &nbsp;|&nbsp; Festive Offers &nbsp;|&nbsp; Free Shipping on Orders Above ₹50,000
      </Marquee> */}
      {/* Trust Badges */}
      

      {/* Marquee Transition */}
      {/* <Marquee className="mb-0 py-2 bg-yellow-100 text-brown-800 font-semibold text-lg" gradient={false} speed={60}>
        Explore Gold, Silver, Diamond & Gemstone Collections &nbsp;|&nbsp; Trending Now &nbsp;|&nbsp; Shop with Confidence
      </Marquee> */}
      {/* Categories */}
      <section className="home-section">
        <h2 className="section-title">Shop by Category</h2>
        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem' }}>
          <PromoGrid />
        </div>
      </section>

      {/* Marquee Transition */}
      {/* <Marquee className="mb-0 py-2 bg-yellow-100 text-brown-800 font-semibold text-lg" gradient={false} speed={60}>
        Trending Jewelry &nbsp;|&nbsp; Handpicked for You &nbsp;|&nbsp; Limited Time Offers
      </Marquee> */}
      {/* Trending Products */}
      <section className="home-section">
        <ShopCTA />
      </section>

      {/* Marquee Transition */}
      {/* <Marquee className="mb-0 py-2 bg-yellow-100 text-brown-800 font-semibold text-lg" gradient={false} speed={60}>
        Discover New Arrivals &nbsp;|&nbsp; Shop the Latest Trends &nbsp;|&nbsp; Vamana Jewels Exclusive
      </Marquee> */}
  
      

      {/* Marquee Transition */}
      {/* <Marquee className="mb-0 py-2 bg-yellow-100 text-brown-800 font-semibold text-lg" gradient={false} speed={60}>
        Thank you for visiting Vamana Jewels &nbsp;|&nbsp; Shop with Trust &nbsp;|&nbsp; Crafted for You
      </Marquee> */}
      {/* New Arrivals Section */}
      <section className="home-section">
        <h2 className="section-title">New Arrivals</h2>
        <p className="text-lg text-brown-700 mb-6 max-w-2xl mx-auto text-center">
          Discover the latest additions to our collection. Handpicked for their elegance and craftsmanship, these new arrivals are sure to dazzle and delight. Shop the freshest trends in gold, diamond, silver, and more.
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
          {/* Bridal Collection */}
          <Link to="/collections/bridal" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop" alt="Bridal Collection" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Bridal Collection</h3>
              <p className="text-sm text-gray-600 mb-2">Timeless wedding jewelry sets, mangalsutras, and bridal accessories for your special day.</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">New Arrivals</span>
            </div>
          </Link>
          {/* Festive Collection */}
          <Link to="/collections/festive" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?w=600&h=400&fit=crop" alt="Festive Collection" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Festive Collection</h3>
              <p className="text-sm text-gray-600 mb-2">Celebrate every occasion with vibrant, statement pieces and traditional festive jewelry.</p>
              <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold">Limited Edition</span>
            </div>
          </Link>
          {/* Everyday Elegance */}
          <Link to="/collections/everyday" className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=400&fit=crop" alt="Everyday Elegance" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Everyday Elegance</h3>
              <p className="text-sm text-gray-600 mb-2">Minimalist gold, diamond, and silver jewelry for daily wear and effortless style.</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Best Seller</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Video/Media Section */}
      <section className="home-section">
        <h2 className="section-title">Jewelry Showcase</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <video controls className="rounded-xl shadow-lg w-full md:w-2/3 h-80 object-cover" poster="/hero images/ddhome.jpg">
            <source src={process.env.PUBLIC_URL +"/media/vamana-showcase.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-brown-900 text-lg font-semibold">Experience the brilliance of Vamana Jewels in motion!</div>
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
        <h2 className="section-title">#VamanaJewels On Instagram</h2>
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
          <img src={process.env.PUBLIC_URL +"/images/design10.jpg"} alt="Newsletter" className="rounded-lg shadow w-48 h-32 object-cover" />
        </div>
      </section>
      {/* Expanded Home Content: Banners, Stories, Testimonials, More */}
      <section className="home-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <img src={process.env.PUBLIC_URL +"/public/images/ring_059.jpg"} alt="Vamana Jewels Banner" className="rounded-xl shadow-lg w-full h-80 object-cover" />
            <div>
              <h3 className="text-2xl font-bold text-brown-900 mb-4">Why Choose Vamana Jewels?</h3>
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
              <p className="text-brown-700 text-sm">“I found the perfect engagement ring at Vamana Jewels. The quality and service were outstanding!”</p>
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
            <p className="text-brown-700 text-sm">Find your nearest Vamana Jewels store and book a personalized appointment. We have 20+ locations across India.</p>
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

export default Home;
