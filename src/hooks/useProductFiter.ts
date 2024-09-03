import { PRODUCTS } from '@/constant/site-content';
import { useMemo, useState } from 'react';
import { FilterOptions } from './type';

const useProductFiter = (initialFilter: FilterOptions = {}) => {
  const [filters, setFilters] = useState<FilterOptions>(initialFilter);

  const filterdProduct = useMemo(() => {
    return PRODUCTS.filter((produt) => {
      const matchesCategory = filters.category
        ? produt.category === filters.category
        : true;
      const matchesPrice =
        filters.minPrice || filters.maxPrice
          ? produt.price >= (filters.minPrice || 0) &&
            produt.price <= (filters.maxPrice || Infinity)
          : true;
      const matchesSize = filters.size
        ? produt.size?.includes(filters.size)
        : true;
      const matchesBrand = filters.brand
        ? produt.brand === filters.brand
        : true;
      return matchesCategory && matchesPrice && matchesSize && matchesBrand;
    });
  }, [filters]);
  return {
    filters,
    setFilters,
    filterdProduct,
  };
};

export default useProductFiter;
