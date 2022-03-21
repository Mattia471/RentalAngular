import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../../../util/configCustom/table/config";
import {end, start} from "@popperjs/core";
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() config!: MyTableConfig; //table generico configurazione
  @Input() data!: any[]; //dati che arrivano su cui lavorare

  dataDisplay!: any[];

  //ordinamento
  lastC!: string;
  orderType!: boolean

  //ricerca
  searchInput!: string;
  columnInput!: string;

  startPage!: number;
  endPage!: number;
  currentPage: number = 0;
  totalPages!: number;
  itemForPage!: number;

  constructor() {

  }


  //dopo che vengono inizializzati tutte le proprietà associate a dati di una direttiva
  ngOnInit(): void {
    this.getNumberOfPages()
  }

  //quando viene modificato un valore tramite direttiva si innesca questo metodo
  ngOnChanges(): void {
    if (this.data != undefined) { //esegue solo se i dati sono presenti
      this.columnInput = this.config.search.columns[0];
      this.dataDisplay = this.data;

      this.lastC = this.config.order.defaultColumn;
      this.orderType = this.getTypeOrder(this.config.order.orderType);
      this.sortBy(this.lastC);
    }
  }


  //ritorna vero o falso a seconda del cambiamento dell'ordine
  getTypeOrder(type: string): boolean {
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
      this.dataDisplay.sort((label1: any, label2: any) => { //sort permette di odinare i valori comparati
        if (label1[text] < label2[text]) {
          return -1; //ordina prima a e poi b
        }

        if (label1[text] > label2[text]) {
          return 1; // ordina prima b e poi a
        }

        return 0; //mantiene l'ordine di origine
      });
    } else { //se l'ordine è crescente
      this.dataDisplay.sort((label1: any, label2: any) => {
        if (label1[text] < label2[text]) {
          return 1;
        }

        if (label1[text] > label2[text]) {
          return -1;
        }

        return 0;
      });
    }
    this.setCurrentPage(0)
  }


  searchBy() {
    if (this.searchInput != "") {
      this.dataDisplay =
        this.data.filter(x => {
          return x
            [this.columnInput] //rendere dinamico il campo
            .toLocaleLowerCase()
            .match
            (this.searchInput.toLocaleLowerCase());
        })
    } else {
      this.dataDisplay = this.data;
    }
  }


  setItemForPage(newItemForPage: number): void {
    this.itemForPage = newItemForPage;
    this.getNumberOfPages()
    this.setCurrentPage(0)
    //console.log("numero elementi: " + this.itemForPage)
  }

  getNumberOfPages(): void {
    if (this.itemForPage === undefined) {
      this.itemForPage = this.config.pagination.itemForPage;
    }
    this.totalPages = _.ceil(this.data.length / this.itemForPage);
    //console.log("numero pagine: " + this.totalPages)
  }


  setCurrentPage(numberPage: number): void {
    this.currentPage = numberPage;
  }


}
