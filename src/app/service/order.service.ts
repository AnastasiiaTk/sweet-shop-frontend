import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BasketUUIDService} from './basket-uuid.service';
import {TokenService} from './token.service';
import {Observable} from 'rxjs';
import {OrderDTO} from '../dto/orderDTO';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private saveOrderUrl = environment.apiUrl + '/order/save';

  private getOrdersUrl = environment.apiUrl + '/order/getOrders';

  constructor(private httpClient: HttpClient, private basketUUIDService: BasketUUIDService, private tokenService: TokenService) {
  }

  saveOrder(): Observable<void> {
    return this.httpClient.post<void>(this.saveOrderUrl, {},
      {
        headers: this.tokenService.getHttpHeadersWithToken(),
        params: this.basketUUIDService.createHttpParamsWithBasketUuid()
      });
  }

  getUserOrders(): Observable<Array<OrderDTO>> {
    return this.httpClient.get<Array<OrderDTO>>(this.getOrdersUrl, {
      headers: this.tokenService.getHttpHeadersWithToken()
    });
  }
}
