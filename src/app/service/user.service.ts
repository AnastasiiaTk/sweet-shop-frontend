import {Injectable} from '@angular/core';
import {JwtHelper} from 'angular2-jwt';
import {User} from '../entity/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {TokenService} from './token.service';

const TOKEN_NAME = 'access_token';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  jwtHelper: JwtHelper = new JwtHelper();
  private saveUserUrl = environment.apiUrl + '/api/registration';

  constructor(private httpClient: HttpClient, private tokenService: TokenService) {
  }

  login(accessToken: string) {
    const decodedToken = this.jwtHelper.decodeToken(accessToken);
    console.log(decodedToken);
    localStorage.setItem(TOKEN_NAME, accessToken);
  }

  logout() {
    localStorage.removeItem(TOKEN_NAME);
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.saveUserUrl, user, httpOptions);
  }

  isAdmin(): boolean {
    return this.hasRole('ROLE_ADMIN');
  }

  getCurrentUsername(): string {
    return this.getDecodedToken() ? this.getDecodedToken().user_name : null;
  }

  private hasRole(roleName: string): boolean {
    let result: boolean = false;
    if (this.getDecodedToken()) {
      const authorities: Array<string> = this.getDecodedToken().authorities;
      authorities.forEach(function (value) {
        if (value == roleName) {
          result = true;
        }
      });
    }
    return result;
  }

  private getDecodedToken(): any {
    if (localStorage.getItem(TOKEN_NAME)) {
      return this.jwtHelper.decodeToken(this.tokenService.getToken());
    }
    return null;
  }

}
