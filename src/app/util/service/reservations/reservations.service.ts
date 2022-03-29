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
        tap(_ => this.log('PRENOTAZIONE CON ID: ' +id)),
        catchError(this.handleError<ReservationsModel>('getReservationById'))
      );
  }

  //delete
  deleteReservation(id:number): Observable<ReservationsModel> {
    const url = `${this.reservationUrl}/`+id;
    return this.http.delete<ReservationsModel>(url)
      .pipe(
        tap(_ => this.log(`PRENOTAZIONE CON ID:`+ id +' ELIMINATO')),
        catchError(this.handleError<ReservationsModel>(`deleteReservation`))
      );
  }

  addReservation(object: any,user: UsersModel): Observable<ReservationsModel> {
    const x = {
      id: null,
      carId: object.carId,
      userId: user.id,
      startDate: object.startDate,
      endDate: object.endDate,
      status: 'IN ATTESA'
    }
    return this.http.post<ReservationsModel>(this.reservationUrl,x)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE EFFETTUATA")),
        catchError(this.handleError<ReservationsModel>(`addReservation`))
      );
  }

  editReservation(user: any[],id:number): Observable<ReservationsModel> {
    const url = `${this.reservationUrl}/`+id;
    return this.http.put<ReservationsModel>(url,user)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE MODIFICATA")),
        catchError(this.handleError<ReservationsModel>(`editReservation`))
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
