import {Injectable, Input} from '@angular/core';
import { MyTableConfig} from "../../configCustom/table/config";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsersModel} from "../../model/users";


// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private userUrl = 'http://localhost:3000/users';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient)
  {
  }

  //recupera lista intera
  getUsers(): Observable<UsersModel[]> {
    return this.http.get<UsersModel[]>(this.userUrl).pipe(
      tap(_ => this.log('UTENTI GENERATI')),
      catchError(this.handleError<UsersModel[]>('getUsers', []))
    );
  }

  //recupera utenti da id
  getUserById(id:number): Observable<any> {
    const url = `${this.userUrl}/`+id;
    return this.http.get<UsersModel[]>(url)
      .pipe(
      tap(_ => this.log('UTENTE Selezionato con id: ' +id)),
      catchError(this.handleError<UsersModel>('getUserById'))
    );
  }

  //delete
  deleteUser(id:number): Observable<UsersModel> {
    const url = `${this.userUrl}/`+id;
    return this.http.delete<UsersModel>(url)
      .pipe(
        tap(_ => this.log(`UTENTE Eliminato con id: `+ id)),
        catchError(this.handleError<UsersModel>(`deleteUser`))
      );
  }

  addUser(user: any[]): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.userUrl,user)
      .pipe(
        tap(_ => this.log("Aggiunto nuovo utente")),
        catchError(this.handleError<UsersModel>(`addUser`))
      );
  }

  editUser(user: any[],id:number): Observable<UsersModel> {
    const url = `${this.userUrl}/`+id;
    return this.http.put<UsersModel>(url,user)
      .pipe(
        tap(_ => this.log("Utente Modificato")),
        catchError(this.handleError<UsersModel>(`editUser`))
      );
  }



//stampa i messaggi di errore in console
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(methodLog: string) {
    console.log(methodLog)
  }
}
