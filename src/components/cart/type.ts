import { Dispatch, SetStateAction } from 'react';
import { TProduct } from '../product/type';
import { CartItem } from '@/store/type';

export type TEmptyCart = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export type TCartItem = {
  product: {
    title: string;
    id: string;
    noBackground: string;
  };
};
export type IcrementeItemProps = {
  basePrice: number;
  productId: string;
  onPriceChange: (newPrice: number, productId: string) => void;
};
export type TListItems = {
  cart: CartItem[];
};
export type TPaymentProps = {
  totalPrice: number;
};
