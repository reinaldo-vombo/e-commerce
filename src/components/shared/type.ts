import { Dispatch, ReactNode, SetStateAction } from 'react';

export type TPoolTip = {
  button: any;
  children: ReactNode;
};

export type TSelect = {
  placeholder: string;
  className?: string;
  options: string[];
  name?: string;
  disabled?: boolean;
};
export type SheetProps = {
  children: ReactNode;
  side: 'top' | 'bottom' | 'left' | 'right';
  trigger: any;
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
  maxFiles?: number;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  setPreview: React.Dispatch<
    React.SetStateAction<
      (File & {
        preview: string;
      })[]
    >
  >;
};
