import {Component} from '@angular/core';
import {UserService} from './service/user.service';
import {Router} from '@angular/router';
import {BASKET_ITEMS_AMOUNT, TOKEN_NAME} from './global-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sweet-shop-angular';

  constructor(private userService: UserService, private router: Router) {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem(TOKEN_NAME)) {
      return true;
    }
    return false;
  }

  getCurrentUsername(): string {
    return this.userService.getCurrentUsername();
  }

  getBasketItemsAmount(): string {
    return localStorage.getItem(BASKET_ITEMS_AMOUNT);
  }
}
