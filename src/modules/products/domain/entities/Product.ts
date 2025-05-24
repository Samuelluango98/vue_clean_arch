export class Product {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;

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
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.fat = fat;
    this.carbs = carbs;
    this.protein = protein;
  }
}
