// store/cartStore.ts
import { TProduct } from '@/components/product/type';
import { toast } from 'sonner';
import { create } from 'zustand';
import { CartItem, Product } from './type';
import { startTransition } from 'react';
import { getCartFromCookies, updateCart } from '@/components/cart/action';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

// Save cart to local storage
const saveCartToLocalStorage = (cart: CartItem[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
};
export const useCartStore = create<CartState>((set) => ({
  cart: [], // Initialize cart from local storage
  loadCart: async () => {
    try {
      const cartFromCookies = await getCartFromCookies(); // Call the server action to get the cart
      set({ cart: cartFromCookies }); // Update the state with the cart
    } catch (error) {
      console.error('Error loading cart from cookies:', error);
    }
  },
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;
      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }
      set({ cart: updatedCart });
      toast.success(`${product.title} foi adicionado ao carrinho`);
      startTransition(async () => {
        try {
          await updateCart(updatedCart);
        } catch (error) {
          console.error('Error updating cart in cookies:', error);
        }
      });

      return { cart: updatedCart };
    }),
  removeFromCart: (id) =>
    set((state) => {
      toast.success(`Item removido do carrinho`);
      const updatedCart = state.cart.filter((item) => item.id !== id);
      set({ cart: updatedCart });
      startTransition(async () => {
        try {
          await updateCart(updatedCart); // Server action to update the cart in cookies
        } catch (error) {
          console.error('Error updating cart after removal:', error);
        }
      });
      return { cart: updatedCart };
    }),
  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem('cart'); // Clear local storage
  },
}));
