import {Injectable, Input} from '@angular/core';
import {MyArray, MyTableConfig} from "./config-template/table/config";
import {Array} from "./config-template/table/example-config";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';

// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'api/users';
  @Input() tableConfig !: MyTableConfig;
  private numOrder = 1;

  constructor(private http: HttpClient) {
  }

  //recupera lista intera
  getUsers(): Observable<MyArray[]> {
    return this.http.get<MyArray[]>(this.userUrl)
  }

  //recupera utente tramite id
  getUserById(id: number): Observable<MyArray> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<MyArray>(url);
  }


  searchUser(term: string): Observable<MyArray[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<MyArray[]>(`${this.userUrl}/?name=${term}`);
  }


}
