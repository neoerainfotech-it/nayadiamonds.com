import React from 'react';

const Loading = ({ size = 'medium', text = 'Loading...', fullScreen = false }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
  };

  const textSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xlarge: 'text-xl'
  };

  const Spinner = () => (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <svg className="w-full h-full text-gold-600" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        <div className="text-center">
          <Spinner />
          {text && (
            <p className={`mt-4 text-gray-600 ${textSizes[size]} font-medium`}>
              {text}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Spinner />
        {text && (
          <p className={`mt-4 text-gray-600 ${textSizes[size]} font-medium`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

// Skeleton loading components for different content types
export const ProductSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="aspect-square bg-gray-200" />
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded mb-2" />
      <div className="h-3 bg-gray-200 rounded mb-3 w-3/4" />
      <div className="flex items-center justify-between">
        <div className="h-6 bg-gray-200 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-12" />
      </div>
    </div>
  </div>
);

export const ProductGridSkeleton = ({ count = 8 }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {Array.from({ length: count }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))}
  </div>
);

export const ProductDetailSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Skeleton */}
      <div className="space-y-4">
        <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse" />
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
        
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
        </div>

        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-12 bg-gray-200 rounded-lg animate-pulse" />
          ))}
        </div>

        <div className="space-y-3">
          <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
          <div className="h-12 bg-gray-900 rounded-xl animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

export const CartSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items Skeleton */}
      <div className="lg:col-span-2 space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-lg animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
                <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded w-16 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Skeleton */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-fit">
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-4 animate-pulse" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex justify-between">
              <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between">
            <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-20 animate-pulse" />
          </div>
        </div>
        <div className="h-12 bg-gray-200 rounded-lg mt-6 animate-pulse" />
      </div>
    </div>
  </div>
);

export default Loading; 