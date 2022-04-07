import {MyHeader, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';


//array heder
const Header: MyHeader[] = [
  {key: 'licensePlate', label: 'Targa'},
  {key: 'manufacturer', label: 'Casa automobilistica'},
  {key: 'model', label: 'Modello'},
  {key: 'type', label: 'Tipo'},
  {key: 'year', label: 'Anno'},
];

const Order: MyOrder =
  {
    orderType: 'ascending',
    defaultColumn: 'model'
  };

const Search: MySearch =
  {
    columns: ['licensePlate', 'manufacturer', 'model', 'type', 'year']
  };

const Pagination: MyPagination =
  {
    itemForPage: 5,
    itemForPageOptions: [5, 10, 15, 20]
  };

export const CarsConfigCustomer: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  actions: [],
  actionsReservations: []
};
