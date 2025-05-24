import { ServerException } from 'src/core/errors/Exceptions';
import { ProductDto } from '../dtos/ProductDto';
import { collection, getDocs } from 'firebase/firestore';
import db from 'src/core/config/firebase';

export abstract class RemoteDataSource {
  abstract getProducts(): Promise<ProductDto[]>;
}

export class RemoteDataSourceImpl implements RemoteDataSource {
  async getProducts(): Promise<ProductDto[]> {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      return querySnapshot.docs.map((doc) => ProductDto.fromJson(doc.data()));
    } catch (error) {
      throw new ServerException(`RemoteDataSource, getProducts: ${String(error)}`);
    }
  }
}
