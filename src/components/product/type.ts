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

export type TProductProps = {
  props: TProduct;
};
export type TProductModal = {
  title: string;
  price: number;
  image: string;
  description: string;
};
