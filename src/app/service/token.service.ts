import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TOKEN_NAME} from '../global-properties';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelperService: JwtHelperService) {
  }

  getHttpHeadersWithToken(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.getToken());
  }

  getToken(): string {
    const token = this.jwtHelperService.tokenGetter();
    if (token != null) {
      if (!this.isTokenExpired(token)) {
        return token;
      }
    }
    localStorage.removeItem(TOKEN_NAME);
    return this.jwtHelperService.tokenGetter();
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelperService.isTokenExpired(token);
  }
}
