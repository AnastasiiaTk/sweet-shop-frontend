import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthenticationService} from '../../service/authentication.service';
import {User} from '../../entity/user';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;
  redirectUrl: string;

  user: User = new User();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    this.redirectUrl = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  ngOnInit(): void {
    this.userService.logout();
  }

  login() {
    this.error = undefined;
    if (!this.loginDataIsValid()) {
      return;
    }
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(
        result => {
          if (result) {
            this.userService.login(result);
            this.navigateAfterSuccess();
          } else {
            this.error = 'Username or password is incorrect';
          }
        },
        error => {
          this.error = 'Username or password is incorrect';
        }
      );
  }

  private navigateAfterSuccess() {
    this.router.navigate(['/home']);
  }

  private loginDataIsValid(): Boolean {
    if (!this.user.username || !this.user.password) {
      this.error = 'Username and password should not be empty';
      return false;
    }
    return true;
  }
}
