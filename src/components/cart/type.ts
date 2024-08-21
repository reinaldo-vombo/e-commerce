import { Dispatch, SetStateAction } from 'react';

export type TEmptyCart = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export type TCartItem = {
  product: {
    title: string;
    price: number;
    noBackground: string;
  };
};
