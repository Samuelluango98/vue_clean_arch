import type { Either } from 'src/core/helpers/Either';
import type { Product } from '../entities/Product';
import type { Failure } from 'src/core/errors/Failures';

export abstract class ProductsRepository {
  abstract getProducts(): Promise<Either<Failure, Product[]>>;
}
