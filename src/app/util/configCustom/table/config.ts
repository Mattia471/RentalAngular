export class MyTableConfig {
  order!: MyOrder;
  header!: MyHeader[];
  search!: MySearch;
  pagination!: MyPagination;
  //array!: MyArray [];
}

/*array dati
export class MyArray {
  id!: number;
  name!: string;
  surname!: string;
  email!: string;
  birthdate!: Date;
}*/

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



