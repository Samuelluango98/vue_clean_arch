import type { ProductDto } from '../dtos/ProductDto';

export abstract class RemoteDataSource {
  abstract getProducts(): Promise<ProductDto[]>;
}

export class RemoteDataSourceImpl implements RemoteDataSource {
  async getProducts(): Promise<ProductDto[]> {
    return Promise.resolve([]);
  }
}
