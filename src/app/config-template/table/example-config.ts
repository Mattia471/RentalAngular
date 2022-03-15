import {MyArray, MyHeaders, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';

 const Headers: MyHeaders[] = [
  {id: 'name', name: 'Nome', },
  {id: 'surname', name: 'Cognome', },
  {id: 'email', name: 'Email', },
  {id: 'birthdate', name: 'Data Di Nascita', },
];

//array dati
export const Array: MyArray[] = [
  {id: 1, key:'name', name: 'Mattia', },
  {id: 2, key:'surname', name: 'Cucuzza', },
  {id: 3, key:'email', name: 'cucuzzamattia47@gmail.com', },
  {id: 4, key:'birthdate', name: '04-07-2001', },
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
