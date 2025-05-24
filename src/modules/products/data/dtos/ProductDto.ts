/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from '../../domain/entities/Product';

export class ProductDto extends Product {
  constructor({
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  }: {
    id: string;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }) {
    super({
      id,
      name,
      calories,
      fat,
      carbs,
      protein,
    });
  }

  static fromJson = (json: Record<string, any>): ProductDto => {
    return new ProductDto({
      id: json.id,
      name: json.name,
      calories: json.calories,
      fat: json.fat,
      carbs: json.carbs,
      protein: json.protein,
    });
  };

  static toJson = (product: ProductDto): Record<string, any> => {
    return {
      id: product.id,
      name: product.name,
      calories: product.calories,
      fat: product.fat,
      carbs: product.carbs,
      protein: product.protein,
    };
  };
}
