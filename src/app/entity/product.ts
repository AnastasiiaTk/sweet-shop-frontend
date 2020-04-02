import {Category} from './category';

export class Product {
  productId: number = null;
  name: string;
  price: number;
  description: string;
  available: boolean = true;
  photoPath: string;
  category: Category;
}
