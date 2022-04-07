import {FormConfig, MySettings} from './config';



//array heder
const Settings: MySettings[] = [
  {key: 'licensePlate',type:'text'},
  {key: 'manufacturer',type:'text'},
  {key: 'model',type:'text'},
  {key: 'type',type:'text'},
  {key: 'year',type:'text'},
];



export const CarsFormConfig: FormConfig = {
  settings: Settings,
};
