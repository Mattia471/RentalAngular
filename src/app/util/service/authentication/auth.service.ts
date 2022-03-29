import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, mapTo, Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UsersService} from "../users/users.service";
import {HttpClient} from "@angular/common/http";
import {Tokens} from "../../model/tokens";
import {UsersModel} from "../../model/users";


@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser!: UsersModel | null;

  constructor(private http: HttpClient) {
  }

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.get<any>(`http://localhost:3000/users?email=` + user.email)
      .pipe(
        tap(next => {
          this.doLoginUser(next[0])
        }),
        mapTo(true),
        catchError(error => {

          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    return this.http.post<any>(`http://localhost:3000/users`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(`http://localhost:3000/users`, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.jwt);
    }));
  }

  getUser() {
    /*console.log(this.loggedUser)*/
    return this.loggedUser
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(email: UsersModel) {
    this.loggedUser = email;
    this.storeTokens('PROVA TOKEN');
  }

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: string) {
    localStorage.setItem(this.JWT_TOKEN, tokens);
    /*localStorage.setItem(this.REFRESH_TOKEN, tokens);*/
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
