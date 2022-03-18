import {MyArray, MyHeader, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';


//array dati
export const Array: MyArray[] = [
  {id: 0, name: '', surname: '', email: '', birthdate: new Date()},
];

//array heder
const Header: MyHeader[] = [
  {key: 'id'},
  {key: 'name'},
  {key: 'surname'},
  {key: 'email'},
  {key: 'birthdate'},
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
    itemForPage: 4,
    itemForPageOptions: [4, 8, 12, 16]
  };

export const FinalTable: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  array: Array
};
