import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// NOTE: We are removing "./MaterialCarousel.css" and using Tailwind for layout.

const materialItems = [
  {
    title: "Gold",
    // FIX: Using PUBLIC_URL for deployment path resolution
    img: process.env.PUBLIC_URL + "images/design3.jpg", 
    link: "/category/gold",
  },
  {
    title: "Diamond",
    // FIX: Using PUBLIC_URL for deployment path resolution
    img: process.env.PUBLIC_URL + "images/design10.jpg",
    link: "/category/diamond",
  },
  {
    title: "Silver",
    // FIX: Using PUBLIC_URL for deployment path resolution
    img: process.env.PUBLIC_URL + "images/ring_041.jpg",
    link: "/category/silver",
  },
  {
    title: "Platinum",
    // FIX: Using PUBLIC_URL for deployment path resolution
    img: process.env.PUBLIC_URL + "images/design17.jpg",
    link: "/category/platinum",
  },
];

const MaterialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const containerRef = useRef();

  // Basic mobile touch control logic (simplified for horizontal swipe)
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50; 

    if (diff > swipeThreshold) {
      // Swipe Left (Go Next)
      updateIndex(currentIndex + 1);
    } else if (diff < -swipeThreshold) {
      // Swipe Right (Go Previous)
      updateIndex(currentIndex - 1);
    }
  };


  const updateIndex = (newIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const total = materialItems.length;
    const index = (newIndex + total) % total;
    setCurrentIndex(index);

    setTimeout(() => {
      isAnimating.current = false;
    }, 500);
  };

  // Click Handler (Divided into halves for navigation)
  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX;

    // Determine if click is on the left half (prev) or right half (next)
    if (clickX < rect.left + rect.width / 2) {
      updateIndex(currentIndex - 1);
    } else {
      updateIndex(currentIndex + 1);
    }
  };

  // Calculate the translational style for the centered card effect
  const trackStyle = {
    transform: `translateX(calc(-${currentIndex * 100}% + (100% / 2) - 50%))`
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        Shop by Material
      </h2>

      {/* Main Container for Carousel (Hides Overflow, Enables Click) */}
      <div 
        className="relative w-full max-w-7xl mx-auto cursor-pointer select-none"
        ref={containerRef}
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Track Container - Centers the cards */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={trackStyle}
        >
          {materialItems.map((item, i) => (
            <Link 
              to={item.link} 
              key={i} 
              // Card Styling (Ensures every item takes up a fraction of the view)
              className="flex-shrink-0 w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2 md:p-3 relative group"
              style={{ transform: `scale(${i === currentIndex ? 1.05 : 0.9})`, opacity: i === currentIndex ? 1 : 0.6 }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-yellow-100 transition-all duration-300 hover:shadow-2xl">
                {/* Image */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Title Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center p-4 transition-opacity duration-300 group-hover:bg-opacity-50">
                  <div className="text-white text-xl md:text-2xl font-semibold uppercase tracking-widest bg-yellow-600 px-4 py-1 rounded-full opacity-90">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation Arrows (Optional, but good for usability) */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 pointer-events-none">
          <button
            onClick={(e) => { e.stopPropagation(); updateIndex(currentIndex - 1); }}
            className="p-3 rounded-full bg-white bg-opacity-80 shadow-lg pointer-events-auto hover:bg-opacity-100 transition-colors"
          >
            &lt;
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); updateIndex(currentIndex + 1); }}
            className="p-3 rounded-full bg-white bg-opacity-80 shadow-lg pointer-events-auto hover:bg-opacity-100 transition-colors"
          >
            &gt;
          </button>
        </div>

      </div>
    </section>
  );
};

export default MaterialCarousel;