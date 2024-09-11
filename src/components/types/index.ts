import { ReactNode } from 'react';

export type TModalProps = {
  title: string;
  btn: any;
  children: ReactNode;
  className?: string;
};

export type ExpandableProps = {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
};
