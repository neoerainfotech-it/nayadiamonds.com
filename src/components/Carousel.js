import React, { useState, useEffect } from 'react';
// Assuming this component will be saved as src/components/Carousel.js

const slideData = [
  {
    id: 1,
    title: "Luxury Jewelry Collection",
    description:
      "Exquisite craftsmanship meets timeless elegance. Our signature Collection features ethically sourced diamonds set in 18k gold.",
    buttonText: "Shop Now",
    buttonLink: "/products",
    // FIX: Using process.env.PUBLIC_URL for deployment path correction
    background: `url(${process.env.PUBLIC_URL}images/banner1.jpg) center/cover no-repeat`,
  },
  {
    id: 2,
    title: "Royal Collection",
    description:
      "Inspired by royal heritage, our collection combines traditional designs with contemporary craftsmanship for the modern connoisseur.",
    buttonText: "Explore Collection",
    buttonLink: "/Collections",
    // FIX: Using process.env.PUBLIC_URL for deployment path correction
    background: `url(${process.env.PUBLIC_URL}images/ddhome.jpeg) center/cover no-repeat`,
  },
  {
    id: 3,
    title: "Bespoke Creations",
    description:
      "Commission a unique piece tailored to your vision. Our master jewelers transform your dreams into wearable art.",
    buttonText: "Book Consultation",
    buttonLink: "/Contact",
    // FIX: Using process.env.PUBLIC_URL for deployment path correction
    background: `url(${process.env.PUBLIC_URL}images/banner4.jpeg) center/cover no-repeat`,
  },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    // Responsive container and styling using inline styles (can be complex on mobile)
    <div 
      className="carousel-container" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        height: '100vh', // Full viewport height for desktop
        width: '100%',
        // Added max-height for better mobile viewing if needed, but 100vh is fine for a hero carousel
      }}
    >
      {slideData.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          {/* Background Image Div */}
          <div
            className="slide-image"
            style={{
              background: slide.background,
              backgroundSize: 'cover', // Ensuring coverage on all screens
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 8s ease-in-out',
            }}
          ></div>
          
          {/* Content Overlay */}
          <div
            className="slide-content"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: '6rem 4rem', // Added horizontal padding for desktop
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              color: '#fff', // Ensure all text is white by default
            }}
          >
            {/* Title (Mobile adjustment via media queries if Tailwind isn't used) */}
            <h2 className="slide-title" style={{
              fontSize: '2rem', // Reduced default for better mobile fit
              '@media (min-width: 768px)': { fontSize: '3rem' }, // Adjusting font size on larger screens
              fontWeight: 600, 
              marginBottom: '1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              transform: index === currentSlide ? 'translateY(0)' : 'translateY(50px)',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'transform 1s ease-out, opacity 1s ease-out',
              transitionDelay: '0.3s',
            }}>{slide.title}</h2>
            
            {/* Description */}
            <p className="slide-description" style={{
              fontSize: '1rem', // Reduced default for better mobile fit
              '@media (min-width: 768px)': { fontSize: '1.25rem' },
              fontWeight: 300, 
              marginBottom: '2rem', 
              maxWidth: 600,
              transform: index === currentSlide ? 'translateY(0)' : 'translateY(50px)',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'transform 1s ease-out, opacity 1s ease-out',
              transitionDelay: '0.6s',
            }}>{slide.description}</p>
            
            {/* Button */}
            <a
              href={slide.buttonLink}
              className="slide-button hover:bg-gray-200 transition-colors duration-300"
              style={{
                padding: '0.75rem 2rem', 
                backgroundColor: '#fff', 
                color: '#000', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '1px', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: 'pointer',
                transform: index === currentSlide ? 'translateY(0)' : 'translateY(50px)',
                opacity: index === currentSlide ? 1 : 0,
                transition: 'transform 1s ease-out, opacity 1s ease-out',
                transitionDelay: '0.9s',
                textDecoration: 'none',
              }}
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      {/* Dots (Adjusted for better mobile placement) */}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.75rem', zIndex: 10 }}>
        {slideData.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot`}
            style={{
              width: 10, height: 10, borderRadius: '50%', backgroundColor: index === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'background-color 0.3s, transform 0.3s', transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
      
      {/* Arrows (Adjusted padding for mobile touch targets) */}
      <div style={{ position: 'absolute', top: '50%', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 1rem', transform: 'translateY(-50%)', zIndex: 10 }}>
        <div
          className="carousel-arrow prev hover:bg-gray-100 hover:bg-opacity-40 transition-colors"
          style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          onClick={handlePrevSlide}
        >
          <svg viewBox="0 0 24 24" width={24} height={24} fill="#fff"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
        </div>
        <div
          className="carousel-arrow next hover:bg-gray-100 hover:bg-opacity-40 transition-colors"
          style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          onClick={handleNextSlide}
        >
          <svg viewBox="0 0 24 24" width={24} height={24} fill="#fff"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
        </div>
      </div>
    </div>
  );
}

export default Carousel;