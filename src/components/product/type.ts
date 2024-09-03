export type TProduct = {
  id: string;
  title: string;
  display: string;
  brand: string;
  style: string[];
  size: number[];
  category: string;
  price: number;
  gallery: { image: string; name: string }[];
  noBackground: string;
  image: string;
  images: {
    color: string;
    urls: string[];
  }[];
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
