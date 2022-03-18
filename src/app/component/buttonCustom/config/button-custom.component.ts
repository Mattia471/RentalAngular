import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyButtonConfig} from "../../../util/configCustom/button/config";
import {searchButton} from "../../../util/configCustom/button/searchButton";
@Component({
  selector: 'app-button-search',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})

export class ButtonCustomComponent implements OnInit {


  searchButton = searchButton;

  @Output() emitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  btnAction(action: string): void {
    this.emitter.emit(action);
  }

}
