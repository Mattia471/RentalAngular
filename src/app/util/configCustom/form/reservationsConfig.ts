import {FormConfig, MySettings} from './config';



//array heder
const Settings: MySettings[] = [
  {key: 'carId',type:'text'},
  {key: 'startDate',type:'date'},
  {key: 'endDate',type:'date'},
];



export const ReservationsFormConfig: FormConfig = {
  settings: Settings,
};
