import {Component, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {MyArray, MyTableConfig} from "../config-template/table/config";
import {UsersService} from "../service.service";
import {Sort} from "../sort";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //creazione oggetto servizio
  users: MyArray[] = [];
  public searchInput!: string;

  @Input() tableConfig !: MyTableConfig;
  @Input() appSort!: Array<any>;

  constructor
  (
    private service: UsersService,
    private renderer: Renderer2,
    private targetElem: ElementRef
  ) {
  }

  //recuper gli utenti dal servizio
  getUsers(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users
      console.log(this.users)
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }


  //CAPIRE PERCHE' NON VISUALIZZA L'ORDINE CAMBIATO
  //ordinamento al click
  sortDate() {
    //creazione oggetto della classe Sort
    const sort = new Sort(); //singleton pattern

    const elem = this.targetElem.nativeElement;

    const order = elem.getAttribute("data-order");
    const type = elem.getAttribute("data-type");
    const property = elem.getAttribute("data-name");
    if (order === "desc"){ //se l'ordine è decrescente
      this.appSort.sort(sort.startSort(property,order,type)); //ordina
      elem.setAttribute("data-order","asc") //setta metadato cella in crescente
    }else{
      this.appSort.sort(sort.startSort(property,order,type)); //ordina
      elem.setAttribute("data-order","desc") //setta metadato cella in decrescente
    }
  }


  //INSERIRE FUNZIONE RICERCA PER STRINGA QUI


}
