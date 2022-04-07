import {FormConfig, MySettings} from './config';



//array heder
const Settings: MySettings[] = [
  {key: 'name',type:'text'},
  {key: 'surname',type:'text'},
  {key: 'email',type:'text'},
  {key: 'password',type:'text'},
  {key: 'birthdate',type:'date'},
];





export const UsersFormConfig: FormConfig = {
  settings: Settings,
};
