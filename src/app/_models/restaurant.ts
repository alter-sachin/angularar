import {Dish} from './dish';

export class Restaurant {
  id: number;
  name: String;
  address: String;
  phoneNumbers: String[];
  menu: Dish[];
  createDate: Date;
}
