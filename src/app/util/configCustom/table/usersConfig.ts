import {/*MyArray,*/ MyHeader, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';


/*array dati
export const Array: MyArray[] = [
  {id: 0, name: '', surname: '', email: '', birthdate: new Date()},
];*/

//array heder
const Header: MyHeader[] = [
  {key: 'id',label:'id'},
  {key: 'name' ,label:'nome'},
  {key: 'surname' ,label:'cognome'},
  {key: 'email' ,label:'email'},
  {key: 'birthdate' ,label:'data di nascita'},
];

const Order: MyOrder =
  {
    orderType: 'ascending',
    defaultColumn: 'name'
  };

const Search: MySearch =
  {
    columns: ['name', 'surname', 'email', 'birthdate']
  };

const Pagination: MyPagination =
  {
    itemForPage: 5,
    itemForPageOptions: [4, 8, 12, 16]
  };

export const UsersConfig: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  //array: Array
};
