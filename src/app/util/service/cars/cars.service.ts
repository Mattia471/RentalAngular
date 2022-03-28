import {Injectable, Input} from '@angular/core';
import { MyTableConfig} from "../../configCustom/table/config";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarsModel} from "../../model/cars";
import {UsersModel} from "../../model/users";



// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carUrl = 'http://localhost:3000/cars';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient)
  {
  }



  //recupera lista intera
  getCars(): Observable<CarsModel[]> {
    return this.http.get<CarsModel[]>(this.carUrl).pipe(
      tap(_ => this.log('AUTO GENERATE')),
      catchError(this.handleError<CarsModel[]>('getCars', []))
    );
  }

//recupera cars da id
  getCarById(id:number): Observable<any> {
    const url = `${this.carUrl}/`+id;
    return this.http.get<CarsModel[]>(url)
      .pipe(
        tap(_ => this.log('AUTO Selezionato con id: ' +id)),
        catchError(this.handleError<CarsModel>('getCarById'))
      );
  }

  //delete
  deleteCar(id:number): Observable<CarsModel> {
    const url = `${this.carUrl}/`+id;
    return this.http.delete<CarsModel>(url)
      .pipe(
        tap(_ => this.log(`AUTO Eliminata con id: `+ id)),
        catchError(this.handleError<CarsModel>(`deleteCar`))
      );
  }

  addCar(car: any[]): Observable<UsersModel> {
    return this.http.post<UsersModel>(this.carUrl,car)
      .pipe(
        tap(_ => this.log("Aggiunto nuova auto")),
        catchError(this.handleError<UsersModel>(`addCar`))
      );
  }

  editCar(car: any[],id:number): Observable<UsersModel> {
    const url = `${this.carUrl}/`+id;
    return this.http.put<UsersModel>(url,car)
      .pipe(
        tap(_ => this.log("Auto Modificata")),
        catchError(this.handleError<UsersModel>(`editCar`))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
