import {Component, Input, OnInit} from '@angular/core';
import {MyTableConfig} from "../config-template/table/config";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input () tableConfig !: MyTableConfig ;

  constructor() { }

  ngOnInit(): void {
  }

}
