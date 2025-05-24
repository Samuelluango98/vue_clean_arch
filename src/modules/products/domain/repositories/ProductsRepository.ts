import type { Product } from '../entities/Product';

export abstract class ProductsRepository {
  abstract getProducts(): Promise<Product[]>;
}
