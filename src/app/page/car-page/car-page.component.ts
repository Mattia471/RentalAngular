import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from "../../util/service/cars/cars.service";
import {CarsConfigAdmin} from "../../util/configCustom/table/carsConfig";
import {CarsModel} from "../../util/model/cars";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../util/service/authentication/auth.service";
import {CarsConfigCustomer} from "../../util/configCustom/table/carsConfigCustomer";
@Component({
  selector: 'app-user-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  cars!: CarsModel[];
  carsTableAdmin = CarsConfigAdmin;
  carsTableCustomer = CarsConfigCustomer;


  constructor(
     public carService: CarsService,
     public route : ActivatedRoute,
     public router: Router,
     public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add/'  + 'cars'], {relativeTo: this.route});
        break;
      case 'edit':
        this.router.navigate(['edit/' + $event.item.id+ '/' + 'cars'], {relativeTo: this.route});
        break;
      case 'delete':
        this.delete($event.item);
        break;
    }
  }

  //recuperp gli utenti dal servizio
  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars
    });
  }

  delete(car: CarsModel): void {
    this.carService.deleteCar(car.id)
      .subscribe(o => {
        this.getCars();
      });
  }


}
