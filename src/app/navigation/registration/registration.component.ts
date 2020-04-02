import {Component, OnInit} from '@angular/core';
import {User} from "../../entity/user";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  errorMsg: string;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }

  public saveUser(): void {
    this.errorMsg = undefined;
    if (!this.userDataIsValid()) {
      return;
    }
    this.userService.saveUser(this.user).subscribe(
      result => {
        this.navigateAfterSuccess();
      },
      error => {
        this.errorMsg = error.error.message;
      });
  }

  private navigateAfterSuccess() {
    this.router.navigate(['/login']);
  }

  private userDataIsValid(): Boolean {
    if (!this.user.username || !this.user.password || !this.user.confirmPassword) {
      this.errorMsg = 'All fields are required';
      return false;
    } else if (this.user.password != this.user.confirmPassword) {
      this.errorMsg = 'Password and ConfirmPassword should exactly match';
      return false;
    }
    return true;
  }


}
