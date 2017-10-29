import {Ingredient} from './ingredient';

export class Dish {
  id: number;
  name: String;
  price: Number;
  ingredients: Ingredient[];
  description: String;
}
