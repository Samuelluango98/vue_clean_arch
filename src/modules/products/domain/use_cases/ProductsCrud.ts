import type { Product } from '../entities/Product';
import type { ProductsRepository } from '../repositories/ProductsRepository';

export class ProcductsCrud {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async getProducts(): Promise<Product[]> {
    return this.productsRepository.getProducts();
  }
}
