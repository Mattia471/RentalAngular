import {MyArray, MyHeaders, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';

 const Headers: MyHeaders[] = [
  {id: 'name', name: 'Nome', },
  {id: 'surname', name: 'Cognome', },
  {id: 'email', name: 'Email', },
  {id: 'birthdate', name: 'Data Di Nascita', },
];

//array dati
export const Array: MyArray[] = [
  {id: 1, name: 'Mattia', surname: 'Cucuzza',email: 'cucuzzamattia47@gmail.com', birthdate: '04-07-2001'},
];

const Order: MyOrder=
{
  orderType : 'ascending',
  defaultColumn : 'surname'
};

const Search: MySearch=
  {
    columns: ['name','surname','email','birthdate']
  };

const Pagination: MyPagination=
  {
    itemForPage:4,
    itemForPageOptions: [4,8,12,16]
  };

export const FinalTable: MyTableConfig = {
  headers: Headers,
  order: Order,
  search:Search,
  pagination:Pagination,
  array:Array
};
