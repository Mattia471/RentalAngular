import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyButtonConfig} from "../../../util/configCustom/button/config";


@Component({
  selector: 'app-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.css']
})

export class ButtonCustomComponent implements OnInit {

  @Input() btn!: MyButtonConfig;

  @Output() emitter = new EventEmitter<any>();

  constructor() { }

  btnClicked(action: string): void {
    this.emitter.emit(action);
  }

  ngOnInit(): void { }

}
