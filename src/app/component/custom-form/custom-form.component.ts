import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() item !: any;

  @Input() classes: any;
  @Input() user:any;
  @Input() keys:any;
  @Input() data:any;
  @Input() typeOfData:any;
  //

  constructor(
    private usersService: UsersService,
    private carsService: CarsService
  ) {
  }

  ngOnInit(): void {
    /*console.log(this.data)
    console.log(this.keys)*/
  }

}
