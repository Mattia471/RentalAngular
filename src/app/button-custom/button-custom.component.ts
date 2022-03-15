import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyButtonConfig} from "../config-template/button/config";

@Component({
  selector: 'app-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})

export class ButtonCustomComponent implements OnInit {

  @Input()
  buttonConfig!: MyButtonConfig;

  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.onClick.emit("ciao");
  }

}
