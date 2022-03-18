import {Injectable, Input} from '@angular/core';
import {MyArray, MyTableConfig} from "../configCustom/table/config";
import {Array} from "../configCustom/table/usersConfig";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'api/users/';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient)
  {
  }

  //recupera lista intera
  getUsers(): Observable<MyArray[]> {
    return this.http.get<MyArray[]>(this.userUrl)
  }


}
