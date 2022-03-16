import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {MyArray} from "./config-template/table/config";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, name: 'Mattia', surname: 'Cucuzza',email: 'cucuzzamattia47@gmail.com', birthdate: new Date("2021/06/23")},
      {id: 2, name: 'Francesco', surname: 'Barone',email: 'cucuzzamattia23@gmail.com', birthdate:  new Date("2021/05/23")},
      {id: 3, name: 'Giulia', surname: 'Molfetta',email: 'cucuzzgftia12@gmail.com', birthdate:  new Date("2021/04/23")},
    ];
    return {users};
  }



  genId(users: MyArray[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
