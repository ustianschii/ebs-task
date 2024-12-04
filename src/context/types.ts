import { ReactNode } from "react";

export type CartItem = {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
  title: string;
};

export type CartContextType = {
  cart: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: number) => void;
  clearCart: () => void;
};

export type CartProviderProps = {
  children: ReactNode;
};
