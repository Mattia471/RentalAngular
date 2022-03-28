import {FormConfig, MySettings} from './config';



//array heder
const Settings: MySettings[] = [
  {key: 'userId',type:'text'},
  {key: 'carId',type:'text'},
  {key: 'startDate',type:'date'},
  {key: 'endDate',type:'date'},
  {key: 'status',type:'text'},
];



export const ReservationsFormConfig: FormConfig = {
  settings: Settings,
};
