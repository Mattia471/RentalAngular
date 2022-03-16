import {MyArray, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';

//array dati
export const Array: MyArray[] = [
  {id: 0, name: '', surname: '',email: '', birthdate: new Date()},
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
  order: Order,
  search:Search,
  pagination:Pagination,
  array:Array
};
