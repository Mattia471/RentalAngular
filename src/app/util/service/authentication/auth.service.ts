import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, mapTo, Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UsersService} from "../users/users.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tokens} from "../../model/tokens";
import {UsersModel} from "../../model/users";


@Injectable({
  providedIn: 'root',
})

export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(`http://localhost:8080/api/login`, {email, password}, {headers});
  }

  isUserLoggedIn(): boolean {
    return !(sessionStorage.getItem('auth-token') === null);
  }

  logOut(): void {
    window.sessionStorage.clear();
  }
}
