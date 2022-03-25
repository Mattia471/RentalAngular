import {/*MyArray,*/ MyHeader, MyOrder, MyPagination, MySearch, MyTableActionEnum, MyTableConfig} from './config';
import {AddButton} from "../button/addButton";
import {EditButton} from "../button/editButton";
import {DeleteButton} from "../button/deleteButton";


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
    itemForPageOptions: [5,10,15,20]
  };

export const UsersConfig: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  actions: [AddButton,EditButton,DeleteButton]
};
