import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowPathIcon, 
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

const Product360View = ({ images = [], productName = "Jewelry Piece" }) => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(2);
  
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Sample 360-degree images - REPLACE WITH ACTUAL IMAGE ARRAY from props
  // The placeholder URL uses a dynamic Unsplash link, but ensures PUBLIC_URL is used 
  // IF images array is empty, making it deployment safe.
  const imageData = images.length > 0 ? images : Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    // FIX: Using PUBLIC_URL for a local placeholder image path if needed
    url: `${process.env.PUBLIC_URL}/images/placeholder-360.png`,
    angle: i * 10
  }));

  useEffect(() => {
    if (isAutoRotating) {
      const animate = () => {
        // Clamp angle between 0 and 360
        setCurrentAngle(prev => (prev + rotationSpeed) % 360);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoRotating, rotationSpeed]);

  // Handle Fullscreen toggle
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleAutoRotation = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // --- Mouse Handlers ---
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent accidental image drag
    setIsDragging(true);
    setLastMouseX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const sensitivity = isFullscreen ? 0.2 : 0.5; // Lower sensitivity in fullscreen
    const newAngle = currentAngle + deltaX * sensitivity;
    
    setCurrentAngle(newAngle);
    setLastMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // --- Touch Handlers (for mobile responsiveness) ---
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastMouseX(e.touches[0].clientX);
      setIsAutoRotating(false);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    e.preventDefault(); // Prevents vertical scroll while dragging horizontally

    const deltaX = e.touches[0].clientX - lastMouseX;
    const sensitivity = isFullscreen ? 0.2 : 0.5;
    const newAngle = currentAngle + deltaX * sensitivity;
    
    setCurrentAngle(newAngle);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // --- Wheel Handler (Zoom/Scroll) ---
  const handleWheel = (e) => {
     // NOTE: This logic currently rotates on wheel, not zooms, matching implementation
     e.preventDefault();
     const delta = e.deltaY > 0 ? 5 : -5; // Reduced sensitivity
     setCurrentAngle(prev => (prev + delta) % 360);
  };

  const getCurrentImage = () => {
    const angle = Math.round(currentAngle) % 360;
    const imageIndex = Math.floor((angle / 360) * imageData.length);
    return imageData[imageIndex] || imageData[0];
  };

  const jumpToAngle = (angle) => {
    setCurrentAngle(angle);
    setIsAutoRotating(false);
  };

  const resetView = () => {
    setCurrentAngle(0);
    setIsAutoRotating(false);
  };

  if (imageData.length === 0 && images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">360° view not available</p>
      </div>
    );
  }

  // Calculate the index for image display
  const angle = Math.round(currentAngle) % 360;
  const imageIndex = Math.floor((angle / 360) * imageData.length);
  const currentImage = imageData[imageIndex] || imageData[0];


  return (
    <div className="space-y-4">
      {/* 360° Viewer Container */}
      <div
        ref={containerRef}
        // Responsive aspect ratio container: always square unless fullscreen
        className={`relative bg-gray-100 rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 ${
          isFullscreen ? 'fixed inset-0 z-[100] w-full h-full bg-black' : 'aspect-square max-w-full mx-auto' 
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* Main Image */}
        <img
          src={currentImage.url}
          alt={`${productName} at ${Math.round(currentAngle)}°`}
          className="w-full h-full object-contain select-none"
          draggable={false}
        />

        {/* Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={toggleAutoRotation}
            // FIX: Using standard Tailwind yellow for gold-like color
            className={`p-2 rounded-full shadow-md transition-all ${
              isAutoRotating
                ? 'bg-yellow-600 text-white' // Active color
                : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100'
            }`}
            title={isAutoRotating ? 'Stop rotation' : 'Start rotation'}
          >
            {isAutoRotating ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={resetView}
            className="p-2 bg-white bg-opacity-90 text-gray-700 rounded-full hover:bg-opacity-100 transition-all shadow-md"
            title="Reset view"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white bg-opacity-90 text-gray-700 rounded-full hover:bg-opacity-100 transition-all shadow-md"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <ArrowsPointingInIcon className="w-5 h-5" />
            ) : (
              <ArrowsPointingOutIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Angle Indicator (Mobile Friendly) */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
          {Math.round(angle)}°
        </div>

        {/* Instructions (Mobile Friendly) */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs hidden sm:block">
          Drag to rotate • Scroll to zoom
        </div>
      </div>

      {/* Angle Presets (Mobile Friendly) */}
      <div className="grid grid-cols-6 gap-2">
        {[0, 60, 120, 180, 240, 300].map((presetAngle) => (
          <button
            key={presetAngle}
            onClick={() => jumpToAngle(presetAngle)}
            className={`p-2 rounded-lg text-xs sm:text-sm font-medium transition-all shadow-sm ${
              Math.abs(angle - presetAngle) < 10
                ? 'bg-yellow-600 text-white scale-105' // Active color
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {presetAngle}°
          </button>
        ))}
      </div>

      {/* Rotation Speed Control */}
      <div className="space-y-2 p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <label className="block text-sm font-medium text-gray-700">
          Auto-Rotation Speed: {rotationSpeed}x
        </label>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.5"
          value={rotationSpeed}
          onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          className="w-full h-2 bg-yellow-100 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>

      {/* Information */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-2">
          360° Interactive View
        </h3>
        <p className="text-sm text-gray-600">
          Explore the **{productName}** from every angle. Drag to rotate manually or use auto-rotation to see all details.
        </p>
      </div>

      <style jsx>{`
        /* Custom styles for the range slider thumb */
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #d4af37; /* Gold shade */
          cursor: pointer;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #d4af37; /* Gold shade */
          cursor: pointer;
          border: none;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default Product360View;