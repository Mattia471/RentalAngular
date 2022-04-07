import {Component} from '@angular/core';
import {AuthService} from "../../util/service/authentication/auth.service";
import {TokenStorageServiceService} from "../../util/service/authentication/token-storage-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginFailed = false;
  errorMsg = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private tokenStorage: TokenStorageServiceService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.redirect()
    }
  }

  login(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);

        this.loginFailed = false;
        this.redirect();
      },
      err => {
        if (email.length == 0 || password.length == 0) {
          this.errorMsg = "inserisci tutti i campi";
        } else {
          this.errorMsg = "credenziali errate";
        }
        this.loginFailed = true;
      }
    );
  }

  redirect(): void {
    sessionStorage.setItem('role', this.tokenStorage.getUser().role);
    sessionStorage.setItem('id', this.tokenStorage.getUser().id);
    if (sessionStorage.getItem('role') === 'ADMIN') {
      this.router.navigate(['/users']);
    } else {
      this.router.navigate(['/reservations']);
    }
  }

}
