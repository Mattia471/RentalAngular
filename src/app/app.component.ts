import { Component } from '@angular/core';
import { FinalTable} from "./util/configCustom/table/example-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  FinalTable = FinalTable; //tabella istanziata
}
