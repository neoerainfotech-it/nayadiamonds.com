import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaStore, FaGem, FaPhoneAlt, FaUser, FaHeart, FaQuestionCircle } from 'react-icons/fa';
import { BagContext } from '../context/CartContext';
import BagIcon from './icons/BagIcon';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showGoldMenu, setShowGoldMenu] = useState(false);
  const [showDiamondMenu, setShowDiamondMenu] = useState(false);
  const [showSilverMenu, setShowSilverMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);
  const menuRefs = {
    mega: useRef(null),
    shop: useRef(null),
    gold: useRef(null),
    diamond: useRef(null),
    silver: useRef(null),
    help: useRef(null),
    about: useRef(null),
  };

  // Close all menus
  const closeAllMenus = () => {
    setShowMegaMenu(false);
    setShowShopMenu(false);
    setShowGoldMenu(false);
    setShowDiamondMenu(false);
    setShowSilverMenu(false);
    setShowHelpMenu(false);
    setShowAboutMenu(false);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !menuRefs.mega.current?.contains(event.target) &&
        !menuRefs.shop.current?.contains(event.target) &&
        !menuRefs.gold.current?.contains(event.target) &&
        !menuRefs.diamond.current?.contains(event.target) &&
        !menuRefs.silver.current?.contains(event.target) &&
        !menuRefs.help.current?.contains(event.target) &&
        !menuRefs.about.current?.contains(event.target)
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const { getBagItemCount } = useContext(BagContext);
  const navigate = useNavigate();

  const bagItemCount = getBagItemCount();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="bg-[#FFF4F0] text-[#6B1B17] sticky top-0 z-50 shadow-lg font-[Poppins] border-b border-[#FDE8E4]">
      <div className="container mx-auto px-4">
        {/* Top row: logo + search + icons */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center text-3xl font-extrabold text-yellow-900 font-[Poppins] tracking-wider">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mr-2">
              <rect width="32" height="32" rx="8" fill="#FFD700" />
              <path d="M8 20L16 6L24 20H8Z" fill="#FFF8E1" />
              <circle cx="16" cy="22" r="2" fill="#FFF8E1" />
            </svg>
            Vamana
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for gold, diamond, silver..."
                className="w-full px-4 py-2 pl-10 pr-4 text-yellow-900 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 font-[Poppins]"
              />
              <button
                type="submit"
                className="absolute left-3 top-2.5 h-5 w-5 text-yellow-500 hover:text-yellow-700"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Account */}
            <Link to="/account" className="hover:text-yellow-600 text-yellow-900">
              <FaUser size={20} />
            </Link>
            {/* Wishlist */}
            <Link to="/wishlist" className="hover:text-yellow-600 text-yellow-900">
              <FaHeart size={20} />
            </Link>
            {/* Bag */}
            <Link to="/bag" className="relative hover:text-yellow-600 text-yellow-900 flex items-center">
              <BagIcon className="w-5 h-5 mr-1" color="#FFD700" />
              <span>Bag</span>
              {bagItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {bagItemCount}
                </span>
              )}
            </Link>
            {/* Contact - move up here for better visibility */}
            <Link to="/contact" className="hover:text-yellow-600 text-yellow-900">
              <FaPhoneAlt size={20} />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-6 text-lg font-normal text-[#6B1B17] font-[Poppins] bg-[#FFF4F0] relative">
          {/* Home */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.mega}
            onClick={() => setShowMegaMenu((v) => !v)}
          >
            <Link to="/" className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-200">
              <FaHome className="mr-1" /> Home
            </Link>
            {/* Home Mega Menu with images and sources */}
            {showMegaMenu && (
              <div className="absolute left-0 top-full w-[420px] p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/new-arrivals" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/ariel-elegant-diamond-earrings-jle139 (1)-750x500.jpg" alt="New Arrivals" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>New Arrivals</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best-sellers" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/beautiful-fancy-peacock-earring-with-hanging-drops-11-250x250.jpg" alt="Best Sellers" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Best Sellers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design1.jpg" alt="Collections" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Collections</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Shop Mega Menu with images */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.shop}
            onClick={() => setShowShopMenu((v) => !v)}
          >
            <Link to="/products" className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-200">
              <FaStore className="mr-1" /> Shop
            </Link>
            {showShopMenu && (
              <div className="absolute left-0 top-full w-[480px] p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/products" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design2.jpg" alt="All Products" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>All Products</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/earrings" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/bohemia-long-drop-tassels-earrings-women.jpg" alt="Earrings" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Earrings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/rings" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design12.jpg" alt="Rings" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Rings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/necklaces" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design14.jpg" alt="Necklaces" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Necklaces</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/bracelets" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/bracelet_039.jpg" alt="Bracelets" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Bracelets</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Gold Mega Menu with images */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.gold}
            onClick={() => setShowGoldMenu((v) => !v)}
          >
            <Link to="/category/gold" className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-200">
              <FaGem className="mr-1" /> Gold
            </Link>
            {showGoldMenu && (
              <div className="absolute left-0 top-full w-[420px] p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/category/gold" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design1.jpg" alt="Gold Jewelry" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Gold Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/gold-coins" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/bracelet_040.jpg" alt="Gold Coins" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Gold Coins</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gold-rate" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design16.jpg" alt="Gold Rate" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Gold Rate</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Diamond Mega Menu with images */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.diamond}
            onClick={() => setShowDiamondMenu((v) => !v)}
          >
            <Link to="/category/diamond" className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-200">
              <FaGem className="mr-1" /> Diamond
            </Link>
            {showDiamondMenu && (
              <div className="absolute left-0 top-full w-[420px] p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/category/diamond" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/Diamond-Earrings-T7743_GF-600x600.jpg" alt="Diamond Jewelry" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Diamond Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solitaires" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design18.jpg" alt="Solitaires" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Solitaires</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/diamond-guide" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design19.jpg" alt="Diamond Guide" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Diamond Guide</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Silver Mega Menu with images */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.silver}
            onClick={() => setShowSilverMenu((v) => !v)}
          >
            <Link to="/category/silver" className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-200">
              <FaGem className="mr-1" /> Silver
            </Link>
            {showSilverMenu && (
              <div className="absolute left-0 top-full w-[420px] p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/category/silver" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design10.jpg" alt="Silver Jewelry" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Silver Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/silver/pooja" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design20.jpg" alt="Pooja Silver" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Pooja Silver</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/silver/coins" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/bracelet_041.jpg" alt="Silver Coins" className="w-14 h-14 object-cover rounded-md border border-white" />
                      <span>Silver Coins</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Help Mega Menu with icons and highlights */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.help}
            onClick={() => setShowHelpMenu((v) => !v)}
          >
            <button className="flex items-center hover:text-yellow-600 transition-all bg-transparent border-none outline-none">
              <FaQuestionCircle className="mr-1" /> Help
            </button>
            {showHelpMenu && (
              <div className="absolute left-0 top-full w-80 p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/faq" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <span className="bg-white p-2 rounded-full"><FaQuestionCircle className="text-yellow-600" /></span>
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <span className="bg-white p-2 rounded-full">↩️</span>
                      <span>Returns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <span className="bg-white p-2 rounded-full"><FaPhoneAlt className="text-yellow-600" /></span>
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* About Us Mega Menu with images and highlights */}
          <div
            className="relative cursor-pointer"
            ref={menuRefs.about}
            onClick={() => setShowAboutMenu((v) => !v)}
          >
            <Link to="/about" className="flex items-center gap-1 hover:text-yellow-600 transition-all">
              <FaUser className="mr-1" /> About Us
            </Link>
            {showAboutMenu && (
              <div className="absolute left-0 top-full w-80 p-6 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-4 z-50 animate-fadeIn border border-white">
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <Link to="/about" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design11.jpg" alt="Our Story" className="w-12 h-12 object-cover rounded-md border border-white" />
                      <span>Our Story</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#team" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design12.jpg" alt="Team" className="w-12 h-12 object-cover rounded-md border border-white" />
                      <span>Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src="/images/design13.jpg" alt="Contact" className="w-12 h-12 object-cover rounded-md border border-white" />
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

