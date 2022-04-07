import {Injectable} from '@angular/core';
import {MyTableConfig} from "../../configCustom/table/config";
import {Observable, tap} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {CarsModel} from "../../model/cars";
import {UsersModel} from "../../model/users";


// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carUrl = 'http://localhost:8080/api/cars';
  tableConfig !: MyTableConfig;

  constructor(private http: HttpClient) {
  }


  //recupera lista intera
  getCars(): Observable<CarsModel[]> {
    return this.http.get<CarsModel[]>(this.carUrl).pipe(
      tap(_ => this.log('AUTO GENERATE')),);
  }

  getCarsAvailable(startD: Date, endD: Date): Observable<CarsModel[]> {
    const url = `http://localhost:8080/api/reservations/reserved/?startD=` + startD + `&endD=` + endD;
    return this.http.get<CarsModel[]>(url).pipe(
      tap(_ => this.log('AUTO DISPONIBILI GENERATE')),
    );
  }

//recupera cars da id
  getCarById(id: number): Observable<any> {
    const url = `${this.carUrl}/car/` + id;
    return this.http.get<CarsModel[]>(url)
      .pipe(
        tap(_ => this.log('AUTO Selezionato con id: ' + id)),
      );
  }

  //delete
  deleteCar(id: number): Observable<CarsModel> {
    const url = `${this.carUrl}/delete/` + id;
    return this.http.delete<CarsModel>(url)
      .pipe(
        tap(_ => this.log(`AUTO Eliminata con id: ` + id)),
      );
  }

  addCar(car: any[]): Observable<UsersModel> {
    const url = `${this.carUrl}/add`;
    return this.http.post<UsersModel>(url, car)
      .pipe(
        tap(_ => this.log("Aggiunto nuova auto")),
      );
  }

  editCar(car: any[]): Observable<UsersModel> {
    const url = `${this.carUrl}/edit`;
    return this.http.put<UsersModel>(url, car)
      .pipe(
        tap(_ => this.log("Auto Modificata")),
      );
  }


  private log(methodLog: string) {
    console.log(methodLog)
  }
}
