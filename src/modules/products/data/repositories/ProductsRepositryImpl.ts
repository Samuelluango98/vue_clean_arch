import { Left, Right, type Either } from 'src/core/helpers/Either';
import type { Product } from '../../domain/entities/Product';
import type { ProductsRepository } from '../../domain/repositories/ProductsRepository';
import type { RemoteDataSource } from '../data_sources/RemoteDataSource';
import { ServerFailure, type Failure } from 'src/core/errors/Failures';
import { ServerException } from 'src/core/errors/Exceptions';

export class ProductsRepositryImpl implements ProductsRepository {
  private remoteDataSource: RemoteDataSource;

  constructor(RemoteDataSource: RemoteDataSource) {
    this.remoteDataSource = RemoteDataSource;
  }

  async getProducts(): Promise<Either<Failure, Product[]>> {
    try {
      return new Right(await this.remoteDataSource.getProducts());
    } catch (error) {
      if (error instanceof ServerException) {
        return new Left(new ServerFailure(`${error.message}`));
      }
      throw error;
    }
  }
}
