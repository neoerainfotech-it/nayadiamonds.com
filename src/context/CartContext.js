import React, { createContext, useState, useContext } from 'react';

const BagContext = createContext();

export const useBag = () => {
  const context = useContext(BagContext);
  if (!context) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
};

export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState([]);
  const [notification, setNotification] = useState('');

  const addToBag = (product) => {
    setBag(prevBag => {
      const existingItem = prevBag.find(item => item.id === product.id);

      if (existingItem) {
        setNotification(`${product.name} quantity updated in bag!`);
        return prevBag.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setNotification(`${product.name} added to bag!`);
        return [...prevBag, { ...product, quantity: 1 }];
      }
    });
    setTimeout(() => setNotification(''), 2000);
  };

  const removeFromBag = (productId) => {
    setBag(prevBag => prevBag.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromBag(productId);
      return;
    }

    setBag(prevBag =>
      prevBag.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearBag = () => {
    setBag([]);
  };

  const getBagTotal = () => {
    return bag.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getBagItemCount = () => {
    return bag.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    bag,
    addToBag,
    removeFromBag,
    updateQuantity,
    clearBag,
    getBagTotal,
    getBagItemCount,
    notification
  };

  return (
    <BagContext.Provider value={value}>
      {children}
      {notification && (
        <div style={{
          position: 'fixed',
          top: 20,
          right: 20,
          background: '#333',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: 5,
          zIndex: 1000
        }}>
          {notification}
        </div>
      )}
    </BagContext.Provider>
  );
};

export { BagContext };