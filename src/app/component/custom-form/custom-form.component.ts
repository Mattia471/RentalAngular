import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UsersModel} from "../../util/model/users";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {


  @Input() item !: any;

  @Input() classes: any;
  @Input() obj: any;
  @Input() keys: any;
  @Input() data: any;
  @Input() typeOfData: any;
  @Input() form: any;


  constructor(
    private usersService: UsersService,
    private carsService: CarsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmitAdd(object: any[]) {
    if (this.classes === 'users') {
      this.usersService.addUser(object)
        .subscribe(o => {

        });
    } else {
      this.carsService.addCar(object)
        .subscribe(o => {

        });
    }

    this.router.navigate(['/' + this.classes], {relativeTo: this.route});
  }

  onSubmitEdit(object: any[], id: any) {
    if (this.classes === 'users') {
      this.usersService.editUser(object, id)
        .subscribe(o => {

        });
    } else {
      this.carsService.editCar(object, id)
        .subscribe(o => {

        });
    }

    this.router.navigate(['/' + this.classes], {relativeTo: this.route});
  }
}
