import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TPoolTip = {
  button: any;
  children: ReactNode;
};

export type TSelect = {
  placeholder: string;
  className?: string;
  options: {
    id: number;
    name: string;
    value: string;
  }[];
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  value?: any;
};
export type SheetProps = {
  children: ReactNode;
  side: 'top' | 'bottom' | 'left' | 'right';
  trigger: any;
  className?: string;
  triggerClass?: string;
  label?: string;
  title?: string
};
export type TCarousel = {
  chlidren: ReactNode;
  className?: string;
  data: any[];
};
export type TAccordion = {
  id: string;
  title: string;
  content: any[];
};

export type TProductPrevie = {
  images: {
    color: string;
    urls: string[];
  }[];
};
export type TFileUploder = {
  formField?: any;
  maxFiles?: number;
  color?: string;
  size?: 'small' | 'medium' | 'large';
};
