import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {FormControl, FormGroup} from "@angular/forms";
import {UsersModel} from "../../util/model/users";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {CarsModel} from "../../util/model/cars";
import {ReservationsConfig} from "../../util/configCustom/table/reservationsConfig";
import {CarsConfig} from "../../util/configCustom/table/carsConfig";
import {AuthService} from "../../util/service/authentication/auth.service";

@Component({
  selector: 'app-custom-form-reservations',
  templateUrl: './custom-form-reservations.component.html',
  styleUrls: ['./custom-form-reservations.component.css']
})
export class CustomFormReservationsComponent implements OnInit {


  @Input() item !: any;

  @Input() classes: any;
  @Input() obj: any;
  @Input() keys: any;
  @Input() data: any;
  @Input() typeOfData: any;
  @Input() form: any;
  @Input() carsAvailable: any;


  carAvailable!:CarsModel[];
  carsTable = CarsConfig;

  constructor(
     private usersService: UsersService,
     private carsService: CarsService,
     private reservationsService : ReservationsService,
     private router: Router,
     private route: ActivatedRoute,
     private loginService: AuthService,
  ) {
  }

  ngOnInit(): void {

  }

  onSubmitSearch(object: any[]) {
      this.carsService.getCars()
        .subscribe(cars => {
          this.carAvailable=cars
        });
  }

  onSubmitPrenota(object: any[]) {
    this.usersService.getUserByEmail(this.loginService.getUser()!.email).subscribe(user =>{
      this.reservationsService.addReservation(object,user[0])
        .subscribe(o => {
          this.router.navigate(['/' + this.classes], {relativeTo: this.route});
        });
    })

  }

  onSubmitEdit(object: any[], id: any) {
      this.reservationsService.editReservation(object, id)
        .subscribe(o => {
          this.router.navigate(['/' + this.classes], {relativeTo: this.route});
        });
  }
}
