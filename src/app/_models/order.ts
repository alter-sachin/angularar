import {User} from './user';
import {OrderItem} from './orderitem';

export class Order {
  user: User;
  orderItems: Set<OrderItem>;
  createDate: Date;

  Order() {
    this.user = new User();
    this.orderItems = new Set();
  }
}
