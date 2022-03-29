import {MyButtonConfig} from "../button/config";

export class MyTableConfig {
  order!: MyOrder;
  header!: MyHeader[];
  search!: MySearch;
  pagination!: MyPagination;
  actions !: MyButtonConfig [];
  actionsReservations!: MyButtonConfig[]
}

export enum MyTableActionEnum {
  ADD , EDIT , DELETE
}

export enum MyTableActionEnumReservation {
  ACCEPT , DECLINE
}

//array dati
export class MyHeader {
  key!: string;
  label!: string;
}

//ordinamento colonne
export class MyOrder {
  defaultColumn!: string;
  orderType!: string;
}

//numero oggetti per pagina
export class MyPagination {
 itemForPage!: number;
 itemForPageOptions!: number[];
}

//cerca con filtro
export class MySearch {
  columns!:string[];
}



