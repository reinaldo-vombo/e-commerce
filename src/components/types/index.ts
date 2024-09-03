import { ReactNode } from 'react';

export type TModalProps = {
  title: string;
  btn: any;
  children: ReactNode;
  className?: string;
};
export type TProduct = {
  id: string;
  title: string;
  display: string;
  brand: string;
  category: string[];
  price: number;
  noBackground: string;
  image: string;
  images: string[];
  description: string;
};
export type ExpandableProps = {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
};
