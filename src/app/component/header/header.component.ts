import { Component, OnInit } from '@angular/core';
import {MyTableConfig} from "../../util/configCustom/table/config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //tableConfig !: MyTableConfig;

  constructor() { }

  ngOnInit(): void {

  }

}

