import Solitaires from './pages/Solitaires';
import DiamondGuide from './pages/DiamondGuide';
import GoldCoins from './pages/GoldCoins';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BagProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import Bag from './pages/Bag';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Wishlist from './pages/Wishlist';
import SearchResults from './pages/SearchResults';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
import GoldJewelry from './pages/GoldJewelry';
import SilverJewelry from './pages/SilverJewelry';
import Platinum from './pages/Platinum';
import DiamondJewelry from './pages/DiamondJewelry';
import JewelryCare from './pages/JewelryCare';
import SizeGuide from './pages/SizeGuide';
import FAQ from './pages/FAQ';
import WeddingCollection from './pages/WeddingCollection';
import NewArrivals from './pages/NewArrivals';
import BestSellers from './pages/BestSellers';
import StudEarrings from './pages/StudEarrings';
import Earrings from './pages/Earrings';
import Rings from './pages/Rings';
import Necklaces from './pages/Necklaces';
import GoldRing from './pages/GoldRing';
import DiamondRing from './pages/DiamondRing';
import SilverRing from './pages/SilverRing';
import TrendingProducts from './pages/TrendingProducts';
import GoldNecklaces from './pages/GoldNecklaces';
import DiamondNecklaces from './pages/DiamondNecklaces';
import SilverNecklaces from './pages/SilverNecklaces';
import Bracelets from './pages/Bracelets';
import GoldBracelets from './pages/GoldBracelets';
import BridalCollection from './pages/BridalCollection';
import FestiveCollection from './pages/FestiveCollection';
import EverydayElegance from './pages/EverydayElegance';
import DiamondBracelets from './pages/DiamondBracelets';
import SilverBracelets from './pages/SilverBracelets';
import PoojaSilver from './pages/PoojaSilver';
import SilverCoins from './pages/SilverCoins';
import Trends2025 from './pages/Trends2025';
import BuyingGuide from './pages/BuyingGuide';
import WeddingInspiration from './pages/WeddingInspiration';
import GemstoneMeanings from './pages/GemstoneMeanings';

function App() {
  return (
    <AuthProvider>
      <BagProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/bag" element={<Bag />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/gold-coins" element={<GoldCoins />} />
            <Route path="/solitaires" element={<Solitaires />} />
            <Route path="/diamond-guide" element={<DiamondGuide />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/best-sellers" element={<BestSellers />} />
            <Route path="/collections/bridal" element={<BridalCollection />} />
            <Route path="/collections/festive" element={<FestiveCollection />} />
            <Route path="/collections/everyday-elegance" element={<EverydayElegance />} />
            <Route path="/category/earrings" element={<Earrings />} />
            <Route path="/category/earrings/studs" element={<StudEarrings />} />
            <Route path="/category/rings" element={<Rings />} />
            <Route path="/category/necklaces" element={<Necklaces />} />
            <Route path="/goldring" element={<GoldRing />} />
            <Route path="/diamondring" element={<DiamondRing />} />
            <Route path="/silverring" element={<SilverRing />} />
            <Route path="/account" element={<Account />} />
            <Route path="/category/gold" element={<GoldJewelry />} />
            <Route path="/category/silver" element={<SilverJewelry />} />
            <Route path="/category/silver/pooja" element={<PoojaSilver />} />
            <Route path="/category/silver/coins" element={<SilverCoins />} />
            <Route path="/category/diamond" element={<DiamondJewelry />} />
            <Route path="/category/platinum" element={<Platinum />} />
            <Route path="/jewelry-care" element={<JewelryCare />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/category/wedding" element={<WeddingCollection />} />
            <Route path="/trending-products" element={<TrendingProducts />} />
            <Route path="/necklaces/gold" element={<GoldNecklaces />} />
            <Route path="/necklaces/diamond" element={<DiamondNecklaces />} />
            <Route path="/necklaces/silver" element={<SilverNecklaces />} />
            {/* Bracelets main and subpages */}
            <Route path="/bracelets" element={<Bracelets />} />
            <Route path="/bracelets/gold" element={<GoldBracelets />} />
            <Route path="/bracelets/diamond" element={<DiamondBracelets />} />
            <Route path="/bracelets/silver" element={<SilverBracelets />} />
            <Route path="/blog/jewelry-care" element={<JewelryCare />} />
            <Route path="/blog/trends-2025" element={<Trends2025 />} />
            <Route path="/blog/buying-guide" element={<BuyingGuide />} />
            <Route path="/blog/wedding-inspiration" element={<WeddingInspiration />} />
            <Route path="/blog/gemstone-meanings" element={<GemstoneMeanings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </BagProvider>
    </AuthProvider>
  );
}

export default App;
