import {Injectable, Input} from '@angular/core';
import { MyTableConfig} from "../../configCustom/table/config";
import {catchError, Observable, of, tap} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CarsModel} from "../../model/cars";



// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carUrl = 'api/cars/';
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



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
