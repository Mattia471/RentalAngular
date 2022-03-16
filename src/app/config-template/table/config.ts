export class MyTableConfig {
  order!: MyOrder;
  search!: MySearch;
  pagination!: MyPagination;
  array!: MyArray [];
}

//array dati
export class MyArray {
  id!: number;
  name!: string;
  surname!: string;
  email!: string;
  birthdate!: string;
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



