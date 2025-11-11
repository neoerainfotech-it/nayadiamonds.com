import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Placeholder for fetching products
    setProducts([]);
  }, []);
  return products;
};

export default useProducts; 