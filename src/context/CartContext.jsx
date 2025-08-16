import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.id === plant.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...plant, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty } : item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
