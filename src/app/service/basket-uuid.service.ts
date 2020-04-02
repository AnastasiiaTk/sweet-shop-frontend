import {Injectable} from '@angular/core';
import {v1 as uuid} from 'uuid';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketUUIDService {

  private basketUUIDName = 'basketUUID';

  constructor() {
  }

  generateUUID(): string {
    const uuidValue = uuid();
    sessionStorage.setItem(this.basketUUIDName, uuidValue);
    return uuidValue;
  }

  getUUID(): string {
    if (!sessionStorage.getItem(this.basketUUIDName)) {
      this.generateUUID();
    }
    return sessionStorage.getItem(this.basketUUIDName);
  }

  createHttpParamsWithBasketUuid(): HttpParams {
    return new HttpParams().set(this.basketUUIDName, this.getUUID());
  }


}
