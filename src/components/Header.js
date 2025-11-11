// src/components/Header.jsx
import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaStore,
  FaGem,
  FaPhoneAlt,
  FaUser,
  FaHeart,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { BagContext } from '../context/CartContext';
import BagIcon from './icons/BagIcon';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  // desktop/mega menus (controlled individually)
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showShopMenu, setShowShopMenu] = useState(false);
  const [showGoldMenu, setShowGoldMenu] = useState(false);
  const [showDiamondMenu, setShowDiamondMenu] = useState(false);
  const [showSilverMenu, setShowSilverMenu] = useState(false);
  const [showHelpMenu, setShowHelpMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const navigate = useNavigate();
  const { getBagItemCount } = useContext(BagContext);
  const bagItemCount = getBagItemCount();

  // refs used for "click outside to close" behavior
  const containerRef = useRef(null);
  const megaRef = useRef(null);
  const shopRef = useRef(null);
  const goldRef = useRef(null);
  const diamondRef = useRef(null);
  const silverRef = useRef(null);
  const helpRef = useRef(null);
  const aboutRef = useRef(null);

  // Close menus helper
  const closeAllMenus = () => {
    setShowMegaMenu(false);
    setShowShopMenu(false);
    setShowGoldMenu(false);
    setShowDiamondMenu(false);
    setShowSilverMenu(false);
    setShowHelpMenu(false);
    setShowAboutMenu(false);
  };

  // Click outside to close (for desktop menus)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current) return;
      const target = e.target;
      if (
        !containerRef.current.contains(target) &&
        !megaRef.current?.contains(target) &&
        !shopRef.current?.contains(target) &&
        !goldRef.current?.contains(target) &&
        !diamondRef.current?.contains(target) &&
        !silverRef.current?.contains(target) &&
        !helpRef.current?.contains(target) &&
        !aboutRef.current?.contains(target)
      ) {
        closeAllMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setSearchQuery('');
      setOpenMobileSearch(false);
    }
  };

  // Helper to build PUBLIC_URL paths for clarity
  const pub = (path) => process.env.PUBLIC_URL + path;

  return (
    <header
      className="bg-[#FFF4F0] text-[#6B1B17] sticky top-0 z-50 shadow-lg font-[Poppins] border-b border-[#FDE8E4]"
      ref={containerRef}
    >
      <div className="container mx-auto px-4">
        {/* Top row: logo + search (desktop) + icons */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center text-2xl md:text-3xl font-extrabold text-yellow-900 tracking-wider"
            aria-label="Naya Diamonds - Home"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 32 32"
              fill="none"
              className="mr-2"
              aria-hidden
            >
              <rect width="32" height="32" rx="8" fill="#FFD700" />
              <path d="M8 20L16 6L24 20H8Z" fill="#FFF8E1" />
              <circle cx="16" cy="22" r="2" fill="#FFF8E1" />
            </svg>
            <span className="select-none">Naya Diamonds</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for gold, diamond, silver..."
                className="w-full px-4 py-2 pl-10 pr-4 text-yellow-900 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                aria-label="Search products"
              />
              <button
                type="submit"
                className="absolute left-3 top-2.5 h-5 w-5 text-yellow-500 hover:text-yellow-700"
                aria-label="Submit search"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-3">
            {/* Mobile search toggle */}
            <button
              type="button"
              onClick={() => setOpenMobileSearch((s) => !s)}
              className="md:hidden p-2 rounded-full hover:bg-yellow-100"
              aria-label="Open search"
            >
              <svg className="w-5 h-5 text-yellow-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account */}
            <Link to="/account" className="hover:text-yellow-600 text-yellow-900 p-2 rounded-full" aria-label="Account">
              <FaUser size={18} />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="hover:text-yellow-600 text-yellow-900 p-2 rounded-full" aria-label="Wishlist">
              <FaHeart size={18} />
            </Link>

            {/* Bag */}
            <Link to="/bag" className="relative hover:text-yellow-600 text-yellow-900 flex items-center p-2 rounded-md" aria-label="Bag">
              <BagIcon className="w-5 h-5 mr-1" color="#FFD700" />
              <span className="hidden md:inline">Bag</span>
              {bagItemCount > 0 && (
                <span className="absolute -top-2 -right-0 bg-yellow-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {bagItemCount}
                </span>
              )}
            </Link>

            {/* Contact */}
            <Link to="/contact" className="hover:text-yellow-600 text-yellow-900 p-2 rounded-full" aria-label="Contact">
              <FaPhoneAlt size={18} />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpenMobileMenu((s) => !s)}
              className="md:hidden p-2 rounded-md ml-1"
              aria-label="Toggle menu"
            >
              {openMobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile search input (collapsible) */}
        {openMobileSearch && (
          <div className="md:hidden mb-3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for gold, diamond, silver..."
                className="w-full px-4 py-2 pl-10 pr-4 text-yellow-900 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button type="submit" className="absolute left-3 top-2.5 h-5 w-5 text-yellow-500 hover:text-yellow-700" aria-label="Submit search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Desktop Navigation (hidden on very small screens) */}
        <nav className="hidden md:flex items-center justify-center space-x-6 text-lg font-normal text-[#6B1B17] bg-[#FFF4F0] relative py-2">
          {/* Home */}
          <div className="relative" ref={megaRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowMegaMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
              aria-haspopup="true"
              aria-expanded={showMegaMenu}
            >
              <FaHome className="mr-1" /> Home
            </button>

            {showMegaMenu && (
              <div className="absolute left-0 top-full w-[420px] p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/new-arrivals" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design3.jpg')} alt="New Arrivals" className="w-14 h-14 object-cover rounded-md border" />
                      <span>New Arrivals</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/best-sellers" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design4.jpg')} alt="Best Sellers" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Best Sellers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design1.jpg')} alt="Collections" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Collections</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Shop */}
          <div className="relative" ref={shopRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowShopMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
              aria-haspopup="true"
              aria-expanded={showShopMenu}
            >
              <FaStore className="mr-1" /> Shop
            </button>

            {showShopMenu && (
              <div className="absolute left-0 top-full w-[520px] p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="grid grid-cols-2 gap-3 text-gray-700">
                  <li>
                    <Link to="/category/earrings" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/earring_1.jpg')} alt="Earrings" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Earrings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/rings" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design12.jpg')} alt="Rings" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Rings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/necklaces" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design14.jpg')} alt="Necklaces" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Necklaces</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/bracelets" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/bracelet_039.jpg')} alt="Bracelets" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Bracelets</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Gold */}
          <div className="relative" ref={goldRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowGoldMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
            >
              <FaGem className="mr-1" /> Gold
            </button>

            {showGoldMenu && (
              <div className="absolute left-0 top-full w-[420px] p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/category/gold" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design1.jpg')} alt="Gold Jewelry" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Gold Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/collections/gold-coins" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/bracelet_040.jpg')} alt="Gold Coins" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Gold Coins</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Diamond */}
          <div className="relative" ref={diamondRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowDiamondMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
            >
              <FaGem className="mr-1" /> Diamond
            </button>

            {showDiamondMenu && (
              <div className="absolute left-0 top-full w-[420px] p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/category/diamond" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/ring_041.jpg')} alt="Diamond Jewelry" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Diamond Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/solitaires" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design18.jpg')} alt="Solitaires" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Solitaires</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Silver */}
          <div className="relative" ref={silverRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowSilverMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
            >
              <FaGem className="mr-1" /> Silver
            </button>

            {showSilverMenu && (
              <div className="absolute left-0 top-full w-[420px] p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link to="/category/silver" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/design10.jpg')} alt="Silver Jewelry" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Silver Jewelry</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/silver/coins" className="flex items-center gap-3 hover:text-[#A03A2B]">
                      <img src={pub('/images/bracelet_041.jpg')} alt="Silver Coins" className="w-14 h-14 object-cover rounded-md border" />
                      <span>Silver Coins</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Help */}
          <div className="relative" ref={helpRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowHelpMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
            >
              <FaQuestionCircle className="mr-1" /> Help
            </button>

            {showHelpMenu && (
              <div className="absolute left-0 top-full w-64 p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link to="/faq" className="flex items-center gap-2 hover:text-[#A03A2B]">
                      <FaQuestionCircle className="text-yellow-600" />
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="flex items-center gap-2 hover:text-[#A03A2B]">
                      <span>↩️</span>
                      <span>Returns</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="flex items-center gap-2 hover:text-[#A03A2B]">
                      <FaPhoneAlt className="text-yellow-600" />
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* About */}
          <div className="relative" ref={aboutRef}>
            <button
              onClick={() => {
                closeAllMenus();
                setShowAboutMenu((v) => !v);
              }}
              className="flex items-center gap-1 hover:text-[#A03A2B] transition-all duration-150"
            >
              <FaUser className="mr-1" /> About Us
            </button>

            {showAboutMenu && (
              <div className="absolute left-0 top-full w-64 p-4 bg-white text-[#6B1B17] shadow-2xl rounded-lg mt-3 z-50 border">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link to="/about" className="flex items-center gap-2 hover:text-[#A03A2B]">
                      <img src={pub('/images/design11.jpg')} alt="Our Story" className="w-10 h-10 object-cover rounded-md border" />
                      <span>Our Story</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#team" className="flex items-center gap-2 hover:text-[#A03A2B]">
                      <img src={pub('/images/design12.jpg')} alt="Team" className="w-10 h-10 object-cover rounded-md border" />
                      <span>Team</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu (slide down) */}
        {openMobileMenu && (
          <div className="md:hidden bg-[#FFF4F0] border-t border-[#FDE8E4] pb-4">
            <div className="px-4 pt-4 space-y-3">
              <Link to="/new-arrivals" className="block py-2 px-3 rounded hover:bg-yellow-50">New Arrivals</Link>
              <Link to="/best-sellers" className="block py-2 px-3 rounded hover:bg-yellow-50">Best Sellers</Link>
              <Link to="/products" className="block py-2 px-3 rounded hover:bg-yellow-50">All Products</Link>
              <Link to="/category/earrings" className="block py-2 px-3 rounded hover:bg-yellow-50">Earrings</Link>
              <Link to="/category/rings" className="block py-2 px-3 rounded hover:bg-yellow-50">Rings</Link>
              <Link to="/category/necklaces" className="block py-2 px-3 rounded hover:bg-yellow-50">Necklaces</Link>
              <Link to="/category/bracelets" className="block py-2 px-3 rounded hover:bg-yellow-50">Bracelets</Link>
              <Link to="/category/gold" className="block py-2 px-3 rounded hover:bg-yellow-50">Gold</Link>
              <Link to="/category/diamond" className="block py-2 px-3 rounded hover:bg-yellow-50">Diamond</Link>
              <Link to="/category/silver" className="block py-2 px-3 rounded hover:bg-yellow-50">Silver</Link>
              <Link to="/about" className="block py-2 px-3 rounded hover:bg-yellow-50">About Us</Link>
              <Link to="/faq" className="block py-2 px-3 rounded hover:bg-yellow-50">Help / FAQ</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
