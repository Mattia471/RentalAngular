import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../../util/configCustom/table/config";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  numberForPage!:any[];
  tableConfig !: MyTableConfig;

  constructor() {
    //this.numberForPage=FinalTable.pagination.itemForPageOptions;
  }

  ngOnInit(): void {
  }

}
