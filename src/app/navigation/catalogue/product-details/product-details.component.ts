import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../../entity/product';
import {ProductService} from '../../../service/product.service';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {BasketComponent} from '../../basket/basket.component';
import {BasketService} from '../../../service/basket.service';
import {BASKET_ITEMS_AMOUNT, PRODUCT_SAVED_MSG} from '../../../global-properties';
import {ProductDTO} from '../../../dto/ProductDTO';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsComponent implements OnInit {

  constructor(public productService: ProductService, private route: ActivatedRoute,
              private basketComponent: BasketComponent, private basketService: BasketService) {
  }

  productDTO: ProductDTO = new ProductDTO();

  basketInfoMessage: string;

  ngOnInit() {
    this.productDTO.product = new Product();
    this.basketInfoMessage = null;
    this.findProductById();
  }

  addProductToBasket(product: Product): void {
    let currItemsAmount = +localStorage.getItem(BASKET_ITEMS_AMOUNT);
    this.basketService.addProductToBasket(new Array(1).fill(product)).subscribe(() => {
      this.basketInfoMessage = PRODUCT_SAVED_MSG;
      currItemsAmount++;
      localStorage.setItem(BASKET_ITEMS_AMOUNT, currItemsAmount.toString());
    });
  }

  private findProductById(): void {
    this.productService.getProductById(this.route.snapshot.params.productId).subscribe((productDTO: ProductDTO) => {
      this.productDTO = productDTO;
    }, error => {
      console.log(error);
    });
  }

}
