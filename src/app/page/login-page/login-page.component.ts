import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UsersService} from "../../util/service/users/users.service";
import {AuthService} from "../../util/service/authentication/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.authService.login(
      {
        email: this.f['email'].value,
        password: this.f['password'].value
      }
    )
      .subscribe(success => {
        if (success) {
          console.log(success)
          this.router.navigate(['/reservations']);
        }
      });
  }

}
