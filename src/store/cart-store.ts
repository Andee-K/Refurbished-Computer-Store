import { create } from "zustand";
import type { Product, CartItem } from "../types";

type CartStore = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

const useCartStore = create<CartStore>((set) => ({
  // Cart State
  cart: [],

  // If the product is already in the cart, increase its quantity
  // Otherwise, add it as a new item with quantity 1
  addToCart: (product: Product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.product.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        const cartItem = {
          product: product,
          quantity: 1,
        };
        return { cart: [...state.cart, cartItem] };
      }
    }),

  // If product quantity is 1, remove it from cart
  // Otherwise, decrease its quantity by 1
  removeFromCart: (id: string) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.product.id === id);

      if (existingItem && existingItem.quantity === 1) {
        return { cart: state.cart.filter((item) => item.product.id !== id) };
      } else {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.product.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      }
    }),

  // Clear cart
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;
