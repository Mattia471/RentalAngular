import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UsersModel} from "../../util/model/users";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {


  @Input() item !: any;

  @Input() classes: any;
  @Input() obj:any;
  @Input() keys:any;
  @Input() data:any;
  @Input() typeOfData:any;
  @Input() form:any;


  constructor(
    private usersService: UsersService,
    private carsService: CarsService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmitAdd(user: any[]){
    this.usersService.addUser(user)
      .subscribe(o => {

      });
    console.log(this.form.value);
  }

  onSubmitEdit(user: any[]){

    this.usersService.editUser(user)
      .subscribe(o => {

      });
    console.log(this.form.value);
  }
}
