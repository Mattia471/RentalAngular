import {Injectable} from '@angular/core';
import {MyTableConfig} from "../../configCustom/table/config";
import {Observable, tap} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {UsersModel} from "../../model/users";


// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'http://localhost:8080/api/users';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient) {
  }

  //recupera lista intera
  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.userUrl).pipe(
      tap(_ => this.log('UTENTI GENERATI'))
    );
  }


  //recupera utenti da id
  getUserById(id: number): Observable<any> {
    const url = `${this.userUrl}/user/` + id;
    return this.http.get<UsersModel[]>(url)
      .pipe(
        tap(_ => this.log('UTENTE Selezionato con id: ' + id)),
      );
  }

  //delete
  deleteUser(id: number): Observable<UsersModel> {
    const url = `${this.userUrl}/delete/` + id;
    return this.http.delete<UsersModel>(url)
      .pipe(
        tap(_ => this.log(`UTENTE Eliminato con id: ` + id)),
      );
  }

  addUser(user: any[]): Observable<UsersModel> {
    const url = `${this.userUrl}/add`;
    return this.http.post<UsersModel>(url, user)
      .pipe(
        tap(_ => this.log("Aggiunto nuovo utente")),
      );
  }

  editUser(user: any[]): Observable<UsersModel> {
    const url = `${this.userUrl}/edit`;
    return this.http.put<UsersModel>(url, user)
      .pipe(
        tap(_ => this.log("Utente Modificato")),
      );
  }

  private log(methodLog: string) {
    console.log(methodLog)
  }
}
