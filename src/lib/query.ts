import { TProduct } from '@/components/product/type';
import { PRODUCTS } from '@/constant/site-content';
import { TProductFilters } from '@/types';

export const fechLocalData = async (option?: TProductFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  let filterdProduct = PRODUCTS;

  if (option?.category) {
    filterdProduct = filterdProduct.map((product) => {
      return product.category === option.category;
    });
  }
  if (option?.maxPrice) {
    filterdProduct = filterdProduct.map((product) => {
      return product.price <= (option.maxPrice as number);
    });
  }
  return filterdProduct;
};
