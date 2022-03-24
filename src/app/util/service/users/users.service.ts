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

  private userUrl = 'api/users/';
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
    const url = `${this.userUrl}/user/`+id;
    return this.http.get<UsersModel[]>(url)
      .pipe(
      tap(_ => this.log('UTENTE Selezionato con id: ' +id)),
      catchError(this.handleError<UsersModel>('getUserById'))
    );
  }
/*
  //edit
  editUser(user : UsersModel): Observable<any> {
    return this.http.put<UsersModel[]>(this.userUrl+"/edit",user.id)
      .pipe(
      tap(_ => this.log('UTENTE MODIFICATO')),
      catchError(this.handleError<UsersModel[]>('editUser', []))
    );
  }
*/
  //delete
  deleteUser(id:number): Observable<UsersModel> {
    const url = `${this.userUrl}/delete/`+id;
    return this.http.delete<UsersModel>(url)
      .pipe(
        tap(_ => this.log(`UTENTE Eliminato con id: `+ id)),
        catchError(this.handleError<UsersModel>(`deleteUser`))
      );
  }





//stampa i messaggi di errore in console
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(methodLog: string) {
    console.log(methodLog)
  }
}
