import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {UsersModel} from "../../model/users";
import {MyTableConfig} from "../../configCustom/table/config";
import {ReservationsModel} from "../../model/reservations";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationUrl = 'http://localhost:3000/reservations';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient)
  {
  }

  //recupera lista intera
  getReservations(): Observable<ReservationsModel[]> {
    return this.http.get<ReservationsModel[]>(this.reservationUrl).pipe(
      tap(_ => this.log('UTENTI GENERATI')),
      catchError(this.handleError<ReservationsModel[]>('getUsers', []))
    );
  }

  //recupera utenti da id
  getReservationById(id:number): Observable<any> {
    const url = `${this.reservationUrl}/`+id;
    return this.http.get<ReservationsModel[]>(url)
      .pipe(
        tap(_ => this.log('UTENTE Selezionato con id: ' +id)),
        catchError(this.handleError<ReservationsModel>('getReservationById'))
      );
  }

  //delete
  deleteReservation(id:number): Observable<ReservationsModel> {
    const url = `${this.reservationUrl}/`+id;
    return this.http.delete<ReservationsModel>(url)
      .pipe(
        tap(_ => this.log(`UTENTE Eliminato con id: `+ id)),
        catchError(this.handleError<ReservationsModel>(`deleteReservation`))
      );
  }

  addReservation(user: any[]): Observable<ReservationsModel> {
    return this.http.post<ReservationsModel>(this.reservationUrl,user)
      .pipe(
        tap(_ => this.log("Aggiunto nuovo utente")),
        catchError(this.handleError<ReservationsModel>(`addReservation`))
      );
  }

  editReservation(user: any[],id:number): Observable<ReservationsModel> {
    const url = `${this.reservationUrl}/`+id;
    return this.http.put<ReservationsModel>(url,user)
      .pipe(
        tap(_ => this.log("Utente Modificato")),
        catchError(this.handleError<ReservationsModel>(`editReservation`))
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
