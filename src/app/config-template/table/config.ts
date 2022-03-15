export class MyTableConfig {
  headers!: MyHeaders [];
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  array!: MyArray [];
}

//array dati
export class MyArray {
  id!: number;
  key!: string;
  name!: string;
}


//contenuto header colonne
export class MyHeaders {
  id!: string;
  name!: string;
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



