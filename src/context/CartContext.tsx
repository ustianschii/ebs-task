import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContextType, CartItem, CartProviderProps } from "./types";

export const addItemToCartFn = (
  cart: CartItem[],
  item: CartItem
): CartItem[] => {
  const existing = cart.find((cartItem) => cartItem.id === item.id);
  if (existing) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export const removeItemFromCartFn = (
  cart: CartItem[],
  id: number
): CartItem[] => cart.filter((item) => item.id !== id);

export const incrementFn = (cart: CartItem[], id: number): CartItem[] =>
  cart.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );

export const decrementFn = (cart: CartItem[], id: number): CartItem[] => {
  const updatedCart = cart.map((cartItem) =>
    cartItem.id === id && cartItem.quantity > 1
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return updatedCart.filter((cartItem) => cartItem.quantity > 0);
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : [];

  const [cart, setCart] = useState<CartItem[]>(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => addItemToCartFn(prevCart, item));
  };

  const removeItemFromCart = (id: number) => {
    setCart((prevCart) => removeItemFromCartFn(prevCart, id));
  };

  const increment = (id: number) => {
    setCart((prevCart) => incrementFn(prevCart, id));
  };

  const decrement = (id: number) => {
    setCart((prevCart) => decrementFn(prevCart, id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("CartContext is undefined");
  }
  return context;
};
