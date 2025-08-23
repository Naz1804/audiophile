// /context/CartContext.js
'use client'
import { createContext, useContext, useState } from 'react';

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, quantity) => {
  if (!product || !product.id) {
    console.warn("Product is missing or invalid:", product);
    return;
  }

  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === product.id);

    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity }];
    }
  });
};


  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCartItems([])

  const updateQuantity = (id, newQuantity) => {
  if (newQuantity < 1) return; // Prevent removing if < 1

  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    )
  );
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

