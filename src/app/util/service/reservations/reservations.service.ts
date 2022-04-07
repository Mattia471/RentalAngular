import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {MyTableConfig} from "../../configCustom/table/config";
import {ReservationsModel} from "../../model/reservations";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationUrl = 'http://localhost:8080/api/reservations';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient) {
  }

  //recupera lista intera
  getReservations(): Observable<ReservationsModel[]> {
    return this.http.get<ReservationsModel[]>(this.reservationUrl).pipe(
      tap(_ => this.log('PRENOTAZIONI GENERATE')),
    );
  }

  //recupera utenti da id
  getReservationById(id: number): Observable<any> {
    const url = `${this.reservationUrl}/id/` + id;
    return this.http.get<ReservationsModel[]>(url)
      .pipe(
        tap(_ => this.log('PRENOTAZIONE CON ID: ' + id)),
      );
  }

  //recupera utenti da id
  getReservationByCustomer(id: number): Observable<any> {
    const url = `${this.reservationUrl}/user/` + id;
    return this.http.get<ReservationsModel[]>(url)
      .pipe(
        tap(_ => this.log('PRENOTAZIONI DELL\'UTENTE CON ID: ' + id)),
      );
  }

  //delete
  deleteReservation(id: number): Observable<ReservationsModel> {
    const url = `${this.reservationUrl}/delete/` + id;
    return this.http.delete<ReservationsModel>(url)
      .pipe(
        tap(_ => this.log(`PRENOTAZIONE CON ID:` + id + ' ELIMINATO')),
      );
  }

  addReservation(object: any, userId: number): Observable<ReservationsModel> {
    const objectUser = {
      id: null,
      carId: object.carId,
      userId: userId,
      startDate: object.startDate,
      endDate: object.endDate,
      status: 'IN ATTESA'
    }
    const url = `${this.reservationUrl}/add`;
    return this.http.post<ReservationsModel>(url, objectUser)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE EFFETTUATA")),
      );
  }

  editReservation(reservation: any, userId: number): Observable<ReservationsModel> {
    const objectUser = {
      id: reservation.id,
      carId: reservation.carId,
      userId: userId,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      status: 'IN ATTESA'
    }
    const url = `${this.reservationUrl}/edit`;
    return this.http.put<ReservationsModel>(url, objectUser)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE MODIFICATA ")),
      );
  }

  acceptReservation(reservation: ReservationsModel): Observable<ReservationsModel> {
    const objectReservation = {
      id: reservation.id,
      carId: reservation.idCar,
      userId: reservation.idUser,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      status: 'CONFERMATA',
    }
    const url = `${this.reservationUrl}/accept`;
    return this.http.put<ReservationsModel>(url, objectReservation)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE CONFERMATA")),
      );
  }

  declineReservation(reservation: ReservationsModel): Observable<ReservationsModel> {
    const objectReservation = {
      id: reservation.id,
      carId: reservation.idCar,
      userId: reservation.idUser,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      status: 'RIFIUTATA',
    }
    const url = `${this.reservationUrl}/decline`;
    return this.http.put<ReservationsModel>(url, objectReservation)
      .pipe(
        tap(_ => this.log("PRENOTAZIONE RIFIUTA")),
      );
  }


  private log(methodLog: string) {
    console.log(methodLog)
  }
}
