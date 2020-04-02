import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../entity/product';
import {BasketService} from '../../service/basket.service';
import {from} from 'rxjs/observable/from';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {BasketItem} from '../../entity/BasketItem';
import {BASKET_ITEMS_AMOUNT, TOKEN_NAME} from '../../global-properties';
import {OrderService} from '../../service/order.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class BasketComponent implements OnInit {

  constructor(private basketService: BasketService, private orderService: OrderService, private router: Router) {
  }

  products: Product[] = [];
  basketItems: BasketItem[] = [];
  totalPrice = 0.0;

  ngOnInit() {
    this.getBasketItems();
  }

  getBasketItems(): void {
    const resultItems: BasketItem[] = [];
    this.basketService.getBasketItems().subscribe((result: Product[]) => {
        this.products = result;
        this.calculateTotalPrice();
        const groupedProducts = from(result).pipe(
          groupBy(product => product.productId),
          mergeMap(group => group.pipe(toArray()))
        );
        const subscribe = groupedProducts.subscribe(val => {
          const item: BasketItem = new BasketItem();
          item.product = val[0];
          item.amount = val.length;
          resultItems.push(item);
        });
        this.basketItems = resultItems;
        localStorage.setItem(BASKET_ITEMS_AMOUNT, (this.products.length).toString());
      }
    );
  }

  calculateTotalPrice(): void {
    let result = 0.0;
    this.products.forEach(function(product) {
        result += product.price;
      }
    );
    this.totalPrice = result;
  }

  changeProductAmount(productItem: BasketItem, event): void {
    const difference = event.target.value - productItem.amount;
    const productListRequest = Array(Math.abs(difference)).fill(productItem.product);
    if (difference < 0) {
      this.basketService.deleteProductFromBasket(productListRequest).subscribe(() => this.getBasketItems());
    } else {
      this.basketService.addProductToBasket(productListRequest).subscribe(() => this.getBasketItems());
    }
  }

  deleteItem(productItem: BasketItem): void {
    const productListRequest = Array(Math.abs(productItem.amount)).fill(productItem.product);
    this.basketService.deleteProductFromBasket(productListRequest).subscribe(() => this.getBasketItems());
  }

  saveOrder(): void {
    if (localStorage.getItem(TOKEN_NAME)) {
      this.orderService.saveOrder().subscribe(() => {
        localStorage.setItem(BASKET_ITEMS_AMOUNT, '0');
        this.router.navigate(['/userOrders']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

}
