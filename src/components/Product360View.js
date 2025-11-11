import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowPathIcon, 
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

const Product360View = ({ images = [], productName }) => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(2);
  
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);

  // Sample 360-degree images - replace with actual image URLs
  const imageData = images.length > 0 ? images : Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    url: `https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop&rotation=${i * 10}`,
    angle: i * 10
  }));

  useEffect(() => {
    if (isAutoRotating) {
      const animate = () => {
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMouseX(e.clientX);
    setIsAutoRotating(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMouseX;
    const sensitivity = 0.5;
    const newAngle = currentAngle + deltaX * sensitivity;
    
    setCurrentAngle(newAngle);
    setLastMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setLastMouseX(e.touches[0].clientX);
      setIsAutoRotating(false);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;

    const deltaX = e.touches[0].clientX - lastMouseX;
    const sensitivity = 0.5;
    const newAngle = currentAngle + deltaX * sensitivity;
    
    setCurrentAngle(newAngle);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 10 : -10;
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

  if (imageData.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">360° view not available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 360° Viewer Container */}
      <div
        ref={containerRef}
        className={`relative bg-gray-100 rounded-lg overflow-hidden ${
          isFullscreen ? 'fixed inset-0 z-50' : 'aspect-square'
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
          ref={imageRef}
          src={getCurrentImage().url}
          alt={`${productName} at ${Math.round(currentAngle)}°`}
          className="w-full h-full object-contain select-none"
          draggable={false}
        />

        {/* Controls Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={toggleAutoRotation}
            className={`p-2 rounded-full transition-all ${
              isAutoRotating
                ? 'bg-gold-500 text-white'
                : 'bg-white bg-opacity-80 text-gray-700 hover:bg-opacity-100'
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
            className="p-2 bg-white bg-opacity-80 text-gray-700 rounded-full hover:bg-opacity-100 transition-all"
            title="Reset view"
          >
            <ArrowPathIcon className="w-5 h-5" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 bg-white bg-opacity-80 text-gray-700 rounded-full hover:bg-opacity-100 transition-all"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? (
              <ArrowsPointingInIcon className="w-5 h-5" />
            ) : (
              <ArrowsPointingOutIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Angle Indicator */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
          {Math.round(currentAngle)}°
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-xs">
          Drag to rotate • Scroll to zoom
        </div>
      </div>

      {/* Angle Presets */}
      <div className="grid grid-cols-6 gap-2">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <button
            key={angle}
            onClick={() => jumpToAngle(angle)}
            className={`p-2 rounded-lg text-sm transition-all ${
              Math.abs(currentAngle - angle) < 10
                ? 'bg-gold-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {angle}°
          </button>
        ))}
      </div>

      {/* Rotation Speed Control */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Rotation Speed
        </label>
        <input
          type="range"
          min="0.5"
          max="5"
          step="0.5"
          value={rotationSpeed}
          onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Slow</span>
          <span>Fast</span>
        </div>
      </div>

      {/* Information */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-2">
          360° Interactive View
        </h3>
        <p className="text-sm text-gray-600">
          Explore the {productName} from every angle. Drag to rotate manually or use auto-rotation to see all details.
        </p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #d4af37;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default Product360View; 