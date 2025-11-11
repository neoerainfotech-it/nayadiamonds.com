import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { products } from '../data/products';

const SearchAutocomplete = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Save recent searches to localStorage
  const saveRecentSearch = (searchTerm) => {
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // Generate search suggestions
  const generateSuggestions = (searchQuery) => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results = [];

    // Product name matches
    const nameMatches = products.filter(product =>
      product.name.toLowerCase().includes(query)
    ).slice(0, 3);

    // Category matches
    const categoryMatches = products.filter(product =>
      product.category.toLowerCase().includes(query)
    ).slice(0, 2);

    // Material matches
    const materialMatches = products.filter(product =>
      product.material.toLowerCase().includes(query)
    ).slice(0, 2);

    // Combine and deduplicate
    const allMatches = [...nameMatches, ...categoryMatches, ...materialMatches];
    const uniqueMatches = allMatches.filter((product, index, self) =>
      index === self.findIndex(p => p.id === product.id)
    );

    return uniqueMatches.slice(0, 5);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1);

    if (value.trim()) {
      setIsLoading(true);
      // Simulate API delay
      setTimeout(() => {
        const newSuggestions = generateSuggestions(value);
        setSuggestions(newSuggestions);
        setIsLoading(false);
        setIsOpen(true);
      }, 300);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      saveRecentSearch(query.trim());
      onSearch(query.trim());
      setIsOpen(false);
      setQuery('');
    }
  };

  // Handle suggestion selection
  const handleSuggestionClick = (suggestion) => {
    saveRecentSearch(suggestion.name);
    navigate(`/product/${suggestion.id}`);
    setIsOpen(false);
    setQuery('');
  };

  // Handle recent search click
  const handleRecentSearchClick = (searchTerm) => {
    saveRecentSearch(searchTerm);
    onSearch(searchTerm);
    setIsOpen(false);
    setQuery('');
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length + recentSearches.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else if (selectedIndex >= suggestions.length && selectedIndex < suggestions.length + recentSearches.length) {
          const recentIndex = selectedIndex - suggestions.length;
          handleRecentSearchClick(recentSearches[recentIndex]);
        } else if (query.trim()) {
          handleSubmit(e);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) &&
          suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionsRef.current) {
      const selectedElement = suggestionsRef.current.children[selectedIndex];
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim() || recentSearches.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder="Search for jewelry, diamonds, gold..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 border border-gray-300"
        />
        <button
          type="submit"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {isOpen && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          {/* Loading State */}
          {isLoading && (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gold-600 mx-auto"></div>
              <p className="mt-2 text-sm">Searching...</p>
            </div>
          )}

          {/* Recent Searches */}
          {!isLoading && recentSearches.length > 0 && !query.trim() && (
            <div className="p-3 border-b border-gray-100">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Recent Searches</h3>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors ${
                    selectedIndex === index ? 'bg-gold-50 text-gold-800' : 'text-gray-700'
                  }`}
                >
                  <ClockIcon className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Product Suggestions */}
          {!isLoading && suggestions.length > 0 && (
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Products</h3>
              {suggestions.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => handleSuggestionClick(product)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors ${
                    selectedIndex === index ? 'bg-gold-50 text-gold-800' : 'text-gray-700'
                  }`}
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{product.category}</span>
                      <span>•</span>
                      <span>${product.price.toLocaleString()}</span>
                      <div className="flex items-center">
                        <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="ml-1">4.8</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && query.trim() && suggestions.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">No products found for "{query}"</p>
              <p className="text-xs mt-1">Try different keywords or browse our categories</p>
            </div>
          )}

          {/* Search All Results */}
          {!isLoading && query.trim() && suggestions.length > 0 && (
            <div className="p-3 border-t border-gray-100">
              <button
                onClick={() => handleSubmit({ preventDefault: () => {} })}
                className="w-full text-left px-3 py-2 text-sm text-gold-600 hover:text-gold-700 font-medium"
              >
                Search for "{query}" ({suggestions.length} results)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAutocomplete; 