import {Ingredient} from './ingredient';

export class Dish {
  id: number;
  name: String;
  price: Number;
  modelLocation: String;
  ingredients: Ingredient[];
  description: String;
}
