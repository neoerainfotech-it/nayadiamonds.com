import React, { useState, useRef, useEffect } from 'react';
import { 
  CameraIcon, 
  PhotoIcon,
  XMarkIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  HandRaisedIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const ProductAR = ({ product, onClose }) => {
  const [isARSupported, setIsARSupported] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [cameraStream, setCameraStream] = useState(null);
  const [productPosition, setProductPosition] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showInstructions, setShowInstructions] = useState(true);
  const [arMode, setArMode] = useState('try-on'); // 'try-on' or 'view'
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if WebXR is supported
    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
        setIsARSupported(supported);
      });
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        }
      });
      
      setCameraStream(stream);
      setIsCameraActive(true);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please check permissions.');
    }
  };

  const stopCamera = React.useCallback(() => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
      setIsCameraActive(false);
    }
  }, [cameraStream]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - productPosition.x,
      y: e.clientY - productPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    setProductPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
      scale: productPosition.scale
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - productPosition.x,
        y: e.touches[0].clientY - productPosition.y
      });
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    
    setProductPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
      scale: productPosition.scale
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleScale = (delta) => {
    const newScale = Math.max(0.5, Math.min(3, productPosition.scale + delta));
    setProductPosition({
      ...productPosition,
      scale: newScale
    });
  };

  const resetProductPosition = () => {
    setProductPosition({ x: 0, y: 0, scale: 1 });
  };

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame
    ctx.drawImage(video, 0, 0);

    // Draw product overlay
    const productImage = new Image();
    productImage.src = product.images[0];
    productImage.onload = () => {
      const centerX = canvas.width / 2 + productPosition.x;
      const centerY = canvas.height / 2 + productPosition.y;
      const scaledWidth = productImage.width * productPosition.scale;
      const scaledHeight = productImage.height * productPosition.scale;

      ctx.globalAlpha = 0.8;
      ctx.drawImage(
        productImage,
        centerX - scaledWidth / 2,
        centerY - scaledHeight / 2,
        scaledWidth,
        scaledHeight
      );

      // Convert to blob and download
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${product.name}-ar-preview.jpg`;
        a.click();
        URL.revokeObjectURL(url);
      }, 'image/jpeg', 0.9);
    };
  };

  const startWebXR = async () => {
    if (!isARSupported) {
      alert('WebXR AR is not supported on this device');
      return;
    }

    try {
      await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: ['dom-overlay'],
        domOverlay: { root: containerRef.current }
      });

      // WebXR session handling would go here
      console.log('WebXR session started');
    } catch (error) {
      console.error('Error starting WebXR:', error);
      alert('Unable to start AR session');
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black bg-opacity-80 text-white">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <h2 className="text-lg font-semibold">AR Try-On</h2>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            {isFullscreen ? (
              <ArrowsPointingInIcon className="w-5 h-5" />
            ) : (
              <ArrowsPointingOutIcon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Main AR View */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Camera Video */}
        {isCameraActive ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-900 flex items-center justify-center">
            <div className="text-center text-white">
              <CameraIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-4">Camera not active</p>
              <button
                onClick={startCamera}
                className="bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors"
              >
                Start Camera
              </button>
            </div>
          </div>
        )}

        {/* Product Overlay */}
        {isCameraActive && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) translate(${productPosition.x}px, ${productPosition.y}px) scale(${productPosition.scale})`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="max-w-xs max-h-xs object-contain"
              draggable={false}
            />
          </div>
        )}

        {/* Instructions Overlay */}
        {showInstructions && (
          <div className="absolute top-4 left-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-2">AR Try-On Instructions</h3>
                <ul className="text-sm space-y-1">
                  <li>• Point camera at a flat surface</li>
                  <li>• Drag the jewelry to position it</li>
                  <li>• Use pinch gestures to resize</li>
                  <li>• Tap to capture a photo</li>
                </ul>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-white hover:text-gray-300"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Hidden Canvas for Screenshots */}
        <canvas
          ref={canvasRef}
          className="hidden"
        />
      </div>

      {/* Controls */}
      <div className="p-4 bg-black bg-opacity-80">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {!isCameraActive ? (
              <button
                onClick={startCamera}
                className="flex items-center space-x-2 bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors"
              >
                <CameraIcon className="w-5 h-5" />
                <span>Start Camera</span>
              </button>
            ) : (
              <button
                onClick={stopCamera}
                className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <CameraIcon className="w-5 h-5" />
                <span>Stop Camera</span>
              </button>
            )}

            {isARSupported && (
              <button
                onClick={startWebXR}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <EyeIcon className="w-5 h-5" />
                <span>WebXR AR</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleScale(-0.1)}
              className="p-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-colors"
            >
              -
            </button>
            <button
              onClick={resetProductPosition}
              className="flex items-center space-x-1 bg-white bg-opacity-20 text-white px-3 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
            >
              <HandRaisedIcon className="w-4 h-4" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => handleScale(0.1)}
              className="p-2 bg-white bg-opacity-20 text-white rounded-full hover:bg-opacity-30 transition-colors"
            >
              +
            </button>
            <button
              onClick={captureImage}
              className="flex items-center space-x-2 bg-gold-500 text-white px-4 py-2 rounded-lg hover:bg-gold-600 transition-colors"
            >
              <PhotoIcon className="w-5 h-5" />
              <span>Capture</span>
            </button>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="mt-3 flex justify-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-1">
            <button
              onClick={() => setArMode('try-on')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                arMode === 'try-on'
                  ? 'bg-gold-500 text-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              Try-On Mode
            </button>
            <button
              onClick={() => setArMode('view')}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                arMode === 'view'
                  ? 'bg-gold-500 text-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20'
              }`}
            >
              View Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAR;