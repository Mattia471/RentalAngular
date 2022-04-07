import {MyHeader, MyOrder, MyPagination, MySearch, MyTableConfig} from './config';
import {AddButton} from "../button/addButton";
import {EditButton} from "../button/editButton";
import {DeleteButton} from "../button/deleteButton";
import {AcceptButton} from "../button/acceptButton";
import {DeclineButton} from "../button/declineButton";

//array heder
const Header: MyHeader[] = [
  {key: 'idUser',label:'Utente'},
  {key: 'idCar',label:'Auto'},
  {key: 'startDate',label:'Inizio Noleggio'},
  {key: 'endDate',label:'Fine noleggio'},
  {key: 'status',label:'Stato Prenotazione'},
];

const Order: MyOrder =
  {
    orderType: 'ascending',
    defaultColumn: 'startDate'
  };

const Search: MySearch =
  {
    columns: ['idUser', 'idCar', 'startDate', 'endDate','status']
  };

const Pagination: MyPagination =
  {
    itemForPage: 5,
    itemForPageOptions: [5,10,15,20]
  };

export const ReservationsConfig: MyTableConfig = {
  order: Order,
  header: Header,
  search: Search,
  pagination: Pagination,
  actions: [AddButton, EditButton,DeleteButton],
  actionsReservations: [AcceptButton,DeclineButton]
};
