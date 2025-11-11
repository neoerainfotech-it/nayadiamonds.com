import React, { useState } from 'react';
import { 
  ShareIcon, 
  LinkIcon, 
  CheckIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const ProductShare = ({ product, url }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: '📘',
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      action: () => shareToFacebook()
    },
    {
      name: 'Twitter',
      icon: '🐦',
      color: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600',
      action: () => shareToTwitter()
    },
    {
      name: 'Instagram',
      icon: '📷',
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700',
      action: () => shareToInstagram()
    },
    {
      name: 'Pinterest',
      icon: '📌',
      color: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      action: () => shareToPinterest()
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      action: () => shareToWhatsApp()
    },
    {
      name: 'Email',
      icon: '📧',
      color: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      action: () => shareViaEmail()
    }
  ];

  const shareText = `Check out this beautiful ${product.name} from VJS Jewels! 💎✨`;
  const shareUrl = url || window.location.href;

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    incrementShareCount();
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}&hashtags=jewelry,VJSJewels`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    incrementShareCount();
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we copy the link
    copyToClipboard(shareUrl);
    alert('Link copied! You can now paste it in your Instagram story or post.');
    incrementShareCount();
  };

  const shareToPinterest = () => {
    const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}&media=${encodeURIComponent(product.images[0])}`;
    window.open(pinterestUrl, '_blank', 'width=600,height=400');
    incrementShareCount();
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
    window.open(whatsappUrl, '_blank');
    incrementShareCount();
  };

  const shareViaEmail = () => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(`Check out this ${product.name} from VJS Jewels`)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`;
    window.location.href = emailUrl;
    incrementShareCount();
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      incrementShareCount();
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      incrementShareCount();
    }
  };

  const incrementShareCount = () => {
    setShareCount(prev => prev + 1);
    // Here you would typically send analytics to your backend
    console.log('Product shared:', product.id);
  };

  const handleShareClick = () => {
    setShowShareMenu(!showShareMenu);
  };

  return (
    <div className="relative">
      {/* Share Button */}
      <button
        onClick={handleShareClick}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
      >
        <ShareIcon className="w-5 h-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">Share</span>
        {shareCount > 0 && (
          <span className="bg-gold-100 text-gold-800 text-xs px-2 py-1 rounded-full">
            {shareCount}
          </span>
        )}
      </button>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-64">
          <div className="p-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Share this product</h3>
            
            {/* Social Media Options */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className={`flex flex-col items-center p-3 rounded-lg transition-colors ${option.color} ${option.hoverColor} text-white`}
                >
                  <span className="text-lg mb-1">{option.icon}</span>
                  <span className="text-xs font-medium">{option.name}</span>
                </button>
              ))}
            </div>

            {/* Copy Link */}
            <div className="border-t border-gray-200 pt-3">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={shareUrl}
                  readOnly
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard(shareUrl)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    copied
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gold-600 text-white hover:bg-gold-700'
                  }`}
                >
                  {copied ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : (
                    <LinkIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 mt-1">Link copied to clipboard!</p>
              )}
            </div>

            {/* Product Preview */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Share Stats */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Share count: {shareCount}</span>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <HeartIcon className="w-3 h-3 mr-1" />
                    24 likes
                  </span>
                  <span className="flex items-center">
                    <ChatBubbleLeftIcon className="w-3 h-3 mr-1" />
                    8 comments
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showShareMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
};

// Quick Share Component for product cards
export const QuickShare = ({ product, url }) => {
  const [showQuickShare, setShowQuickShare] = useState(false);

  const quickShare = () => {
    const shareText = `Check out this beautiful ${product.name} from VJS Jewels! 💎✨`;
    const shareUrl = url || window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback to copying link
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <button
      onClick={quickShare}
      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
      title="Share this product"
    >
      <ShareIcon className="w-4 h-4 text-gray-600" />
    </button>
  );
};

export default ProductShare; 