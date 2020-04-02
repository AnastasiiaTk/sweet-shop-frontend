import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Product} from '../entity/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BasketUUIDService} from './basket-uuid.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private httpClient: HttpClient, private basketUuidService: BasketUUIDService) {
  }

  private addToBasketUrl: string = environment.apiUrl + '/basket/addToBasket';

  private deleteProductUrl: string = environment.apiUrl + '/basket/deleteProduct';

  private getBasketItemsUrl: string = environment.apiUrl + '/basket/getBasketItems';

  addProductToBasket(products: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.addToBasketUrl, products,
      {params: this.basketUuidService.createHttpParamsWithBasketUuid()});
  }

  deleteProductFromBasket(products: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.deleteProductUrl, products,
      {params: this.basketUuidService.createHttpParamsWithBasketUuid()});
  }

  getBasketItems(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(this.getBasketItemsUrl, {params: this.basketUuidService.createHttpParamsWithBasketUuid()});
  }
}
