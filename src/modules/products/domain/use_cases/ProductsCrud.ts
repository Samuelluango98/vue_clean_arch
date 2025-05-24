import type { Either } from 'src/core/helpers/Either';
import type { Product } from '../entities/Product';
import type { ProductsRepository } from '../repositories/ProductsRepository';
import type { Failure } from 'src/core/errors/Failures';

export class ProcductsCrud {
  private productsRepository: ProductsRepository;

  constructor(productsRepository: ProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async read(): Promise<Either<Failure, Product[]>> {
    return this.productsRepository.getProducts();
  }
}
