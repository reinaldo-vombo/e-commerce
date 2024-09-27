// store/cartStore.ts
import { TProduct } from '@/components/product/type';
import { toast } from 'sonner';
import { create } from 'zustand';
import { CartItem, Product } from './type';

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}
const loadCartFromLocalStorage = (): CartItem[] => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

// Save cart to local storage
const saveCartToLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
export const useCartStore = create<CartState>((set) => ({
  cart: loadCartFromLocalStorage(), // Initialize cart from local storage
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        saveCartToLocalStorage(updatedCart); // Save updated cart
        return { cart: updatedCart };
      }
      toast.success(`${product.title} foi adicionado ao carrinho`);
      const newCart = [...state.cart, { ...product, quantity: 1 }];
      saveCartToLocalStorage(newCart); // Save new cart
      return { cart: newCart };
    }),
  removeFromCart: (id) =>
    set((state) => {
      toast.success(`Item removido do carrinho`);
      const updatedCart = state.cart.filter((item) => item.id !== id);
      saveCartToLocalStorage(updatedCart); // Save updated cart
      return { cart: updatedCart };
    }),
  clearCart: () => {
    set({ cart: [] });
    localStorage.removeItem('cart'); // Clear local storage
  },
}));
