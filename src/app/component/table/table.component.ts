import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {MyArray, MyHeader, MySearch, MyTableConfig} from "../../util/configCustom/table/config";
import {UsersService} from "../../util/service/service.service";
import {FinalTable} from "../../util/configCustom/table/example-config";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  FinalTable!: MyTableConfig;

  users: MyArray[] = [];
  header!: any[];

  public searchInput!: string;

  //ordinamento
  lastC!: string;
  orderType!: boolean

  //ricerca
  filteredList!: any[];
  currentFilter = '';

  constructor(private service: UsersService,) {

  }

  ngOnInit(): void {
    this.header = FinalTable.header;
    this.getUsers();
    this.lastC = FinalTable.order.defaultColumn;
    this.orderType = this.getTypeOfType(this.FinalTable.order.orderType);
    this.sortBy(this.lastC);
  }


  //recuperp gli utenti dal servizio
  getUsers(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users
      console.log(this.users)
    });
  }

  //ritorna vero o falso a seconda del cambiamento dell'ordine
  getTypeOfType(type: string): boolean {
    return !(type === 'ascending');
  }

  //ordinamento
  sortBy(text: string): void {
    if (this.lastC === text) {
      this.orderType = !this.orderType;

    } else {
      this.lastC = text;
      this.orderType = true;
    }

    if (this.orderType) { //se l'ordine è decrescente
      this.users.sort((label1: any, label2: any) => { //sort permette di odinare i valori comparati
        if (label1[text] < label2[text]) {
          return -1; //ordina prima a e poi b
        }

        if (label1[text] > label2[text]) {
          return 1; // ordina prima b e poi a
        }

        return 0; //mantiene l'ordine di origine
      });
    } else { //se l'ordine è crescente
      this.users.sort((label1: any, label2: any) => {
        if (label1[text] < label2[text]) {
          return 1;
        }

        if (label1[text] > label2[text]) {
          return -1;
        }

        return 0;
      });
    }
  }

  //ricerca da stringa
  searchBy(input: string, select: string): void {
    /*f (!this.users) {
      return this.users;
    }
    if (!input) {
      return output;
    }
    input = input.toLocaleLowerCase();

    return output.filter(it => {
      return it.toLocaleLowerCase().includes(input);
    });
*/
  }


}
