import { delay } from 'src/core/helpers/methods';
import { RemoteDataSourceImpl } from '../../data/data_sources/RemoteDataSource';
import { ProductsRepositryImpl } from '../../data/repositories/ProductsRepositryImpl';
import { ProcductsCrud } from '../../domain/use_cases/ProductsCrud';
import { useProductsStore } from './Index';

const productsRepositryImpl = new ProductsRepositryImpl(new RemoteDataSourceImpl());

const productsCrud = new ProcductsCrud(productsRepositryImpl);

export const getProducts = async () => {
  const productsStore = useProductsStore();
  productsStore.products = [];
  productsStore.isFetchingData = true;
  await delay(3000);
  const result = await productsCrud.read();
  productsStore.isFetchingData = false;
  result.fold(
    (failure) => {
      console.log(failure.errorMessage);
    },
    (products) => {
      productsStore.products = products;
    },
  );
};
