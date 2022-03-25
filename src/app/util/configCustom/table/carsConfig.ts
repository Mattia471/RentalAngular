import {MyHeader, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';
import {AddButton} from "../button/addButton";
import {EditButton} from "../button/editButton";
import {DeleteButton} from "../button/deleteButton";



//array heder
const Header: MyHeader[] = [
  {key: 'licenseplate',label:'Targa'},
  {key: 'manufacturer',label:'Casa automobilistica'},
  {key: 'model',label:'Modello'},
  {key: 'type',label:'Tipo'},
  {key: 'year',label:'Anno'},
];

const Order: MyOrder =
  {
    orderType: 'ascending',
    defaultColumn: 'name'
  };

const Search: MySearch =
  {
    columns: ['licenseplate', 'manufacturer', 'model', 'type','year']
  };

const Pagination: MyPagination =
  {
    itemForPage: 5,
    itemForPageOptions: [5,10,15,20]
  };

export const CarsConfig: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  actions: [AddButton, EditButton,DeleteButton]
};
