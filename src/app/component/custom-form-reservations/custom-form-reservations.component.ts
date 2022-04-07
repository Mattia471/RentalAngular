import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from "../../util/service/users/users.service";
import {CarsService} from "../../util/service/cars/cars.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {CarsModel} from "../../util/model/cars";
import {CarsConfigAdmin} from "../../util/configCustom/table/carsConfig";
import {AuthService} from "../../util/service/authentication/auth.service";
import {ReservationsModel} from "../../util/model/reservations";
import {TokenStorageServiceService} from "../../util/service/authentication/token-storage-service.service";

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
  carsTable = CarsConfigAdmin;

  constructor(
     private usersService: UsersService,
     private carsService: CarsService,
     private reservationsService : ReservationsService,
     private router: Router,
     private route: ActivatedRoute,
     private loginService: AuthService,
     private auth : TokenStorageServiceService
  ) {
  }

  ngOnInit(): void {

  }

  onSubmitSearch(startD: Date,endD:Date) {
      this.carsService.getCarsAvailable(startD,endD)
        .subscribe(cars => {
          this.carAvailable=cars
        });
  }

  onSubmitPrenota(object: any[]) {
      this.reservationsService.addReservation(object,this.auth.getUser().id)
        .subscribe(o => {
          this.router.navigate(['/' + this.classes], {relativeTo: this.route});
        });


  }

  onSubmitEdit(object: any[]) {
      this.reservationsService.editReservation(object,this.auth.getUser().id)
        .subscribe(o => {
          this.router.navigate(['/' + this.classes], {relativeTo: this.route});
        });
  }
}
