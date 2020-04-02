import {User} from '../entity/user';
import {ProductDTO} from './ProductDTO';
import {OrderItemDTO} from './OrderItemDTO';

export class OrderDTO {

  orderId: number;
  date: Date;
  user: User;
  productsDTO: ProductDTO[];
  groupedProducts: OrderItemDTO[] = [];
}
