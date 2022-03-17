import {Component, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {MyArray, MyHeader, MySearch, MyTableConfig} from "../config-template/table/config";
import {UsersService} from "../service.service";
import {FinalTable} from "../config-template/table/example-config";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //creazione oggetto servizio
  users: MyArray[] = [];
  header!:any[];
  public searchInput!: string;

  tableConfig !: MyTableConfig;
  //ordinamento
  lastC!: string;
  orderType!: boolean

  //ricerca
  columnSearch!: string[];
  constructor
  (
    private service: UsersService,
    private renderer: Renderer2,
  ) {
  }




  ngOnInit(): void {

    this.header=FinalTable.header;
    this.getUsers();


    this.lastC = this.tableConfig.order.defaultColumn;
    this.orderType = this.getTypeOfType(this.tableConfig.order.orderType);
    this.sortBy(this.lastC);


    this.columnSearch = this.tableConfig.search.columns;
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
      this.users.sort((label1:any, label2:any) => { //sort permette di odinare i valori comparati
        if (label1[text] < label2[text]) {
          return -1; //ordina prima a e poi b
        }

        if (label1[text] > label2[text]) {
          return 1; // ordina prima b e poi a
        }

        return 0; //mantiene l'ordine di origine
      });
    } else { //se l'ordine è crescente
      this.users.sort((label1:any, label2:any) => {
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

  /*ricerca da stringa
  searchBy(input: string): void {
    /*if (this.lastC === label) {
      this.orderType = !this.orderType;

    } else {
      this.lastC = label;
      this.orderType = true;
    }

    if (input) {
      this.users.sort((label1:any, label2:any) => {
        if (label1[input] < label2[input]) {
          return -1;
        }

        if (label1[input] > label2[input]) {
          return 1;
        }

        return 0;
      });
    } else {
      this.users.sort((label1:any, label2:any) => {
        if (label1[input] < label2[input]) {
          return 1;
        }

        if (label1[input] > label2[input]) {
          return -1;
        }

        return 0;
      });
    }
  }
*/

  //INSERIRE FUNZIONE RICERCA PER STRINGA QUI


}
