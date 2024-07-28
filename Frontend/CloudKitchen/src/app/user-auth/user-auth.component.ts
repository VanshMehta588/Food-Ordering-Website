import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { signUp } from '../services/data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  userLogin: any;
  constructor(private user: UserService, private router: Router) {}
  showLogin: boolean = true;
  showSignUp: boolean = false;
  authError: string = '';
  userLoginForm!: FormGroup;
  userSignUpForm!: FormGroup;
  isUserLogin: boolean = false;

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
    // this.userSignUpForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // });
    //this.user.userAuthReload();
  }

  signUp(data: signUp) {
    debugger;
    this.user.userSignUp(data).subscribe((c) => {
      alert('SignUp SuccessFully');
      // localStorage.setItem('user',JSON.stringify(data));
      // this.router.navigate(['/']);
      this.showSignUp = true;
      this.showLogin = false;
    });
  }
  login() {
    // this.authError = "";
    // console.warn(data);
    debugger;
    this.user.userLogin(this.userLoginForm.value).subscribe({
      next: (res: any) => {
        alert(res.message);

        this.user
          .getUserByEmail(this.userLoginForm.value.email)
          .subscribe((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            this.router.navigate(['/']);
            this.userLoginForm.reset();
          });
      },
      error: (err) => {
        alert(err?.error.message);
      },
    });
    // this.user.isLoginError.subscribe((isError) => {
    //   if (isError) {
    //     this.authError = "Email or password is not correct"
    //   }
    // })
  }

  login1() {}
  openLogin() {
    this.showSignUp = true;
    this.showLogin = false;
  }
  openSignUp() {
    this.showLogin = true;
    this.showSignUp = false;
  }
}
