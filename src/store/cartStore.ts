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

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      toast.message(`${product.title}`, {
        description: 'Foi adicionado ao carrinho',
      });
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => {
      toast.success(`Item removido do carrinho`);
      return {
        cart: state.cart.filter((item) => item.id !== id),
      };
    }),
  clearCart: () => set({ cart: [] }),
}));
