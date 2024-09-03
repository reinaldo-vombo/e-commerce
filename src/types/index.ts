import { ReactNode } from 'react';

export type LayoutProp = {
  children: ReactNode;
};
export type TProductFilters = {
  category?: 'homens' | 'mulhers' | 'crianças';
  maxPrice?: number;
};
