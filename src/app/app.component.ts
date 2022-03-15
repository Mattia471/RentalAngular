import { Component } from '@angular/core';
import { SuccessBtn } from './config-template/button/example-config';
import { FinalTable} from "./config-template/table/example-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  FinalTable = FinalTable; //tabella istanziata
  SuccessBtn = SuccessBtn; //pulsante instanziato
  title = 'ButtonCustom';
}
