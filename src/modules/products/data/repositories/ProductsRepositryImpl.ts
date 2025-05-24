import type { Product } from '../../domain/entities/Product';
import type { ProductsRepository } from '../../domain/repositories/ProductsRepository';
import type { RemoteDataSource } from '../data_sources/RemoteDataSource';

export class ProductsRepositryImpl implements ProductsRepository {
  private remoteDataSource: RemoteDataSource;

  constructor(RemoteDataSource: RemoteDataSource) {
    this.remoteDataSource = RemoteDataSource;
  }

  async getProducts(): Promise<Product[]> {
    return await this.remoteDataSource.getProducts();
  }
}
