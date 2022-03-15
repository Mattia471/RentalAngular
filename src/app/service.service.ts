import {Injectable, Input} from '@angular/core';
import {MyArray, MyTableConfig} from "./config-template/table/config";
import {Array} from "./config-template/table/example-config";
import {Observable, of} from "rxjs";

// permette di rendere il servizio visibile ai componenti per l'utilizzo
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Input () tableConfig !: MyTableConfig ;

  getUsers(): Observable<MyArray[]>{
    return of(Array);
  }

  constructor()
  {

  }
}
