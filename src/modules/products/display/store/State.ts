import type { Product } from '../../domain/entities/Product';

export const useProductsState = () => {
  return {
    products: [] as Array<Product>,
    isFetchingData: false,
  };
};
