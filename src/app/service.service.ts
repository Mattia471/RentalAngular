import {Injectable, Input} from '@angular/core';
import {MyArray, MyTableConfig} from "./config-template/table/config";
import {Array} from "./config-template/table/example-config";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Input () tableConfig !: MyTableConfig ;


  //Observable ->
  getUsers(): Observable<MyArray[]>{
    return this.http.get<MyArray[]>(this.userUrl)
  }

  private userUrl = 'users';
  constructor
  (
    private http: HttpClient
  ){

  }
}
