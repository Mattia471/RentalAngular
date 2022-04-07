import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(): boolean {
    if (sessionStorage.getItem('role') !== 'ADMIN') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
