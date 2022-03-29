import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }

  canLoad() {
    if (!this.authService.isLoggedIn() || !this.authService.getUser()?.role) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
