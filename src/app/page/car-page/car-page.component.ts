import {Component, Input, OnInit} from '@angular/core';
import { MyTableConfig} from "../../util/configCustom/table/config";
import {CarsService} from "../../util/service/cars/cars.service";
import {CarsConfig} from "../../util/configCustom/table/carsConfig";
import {CarsModel} from "../../util/model/cars";
@Component({
  selector: 'app-user-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  cars!: CarsModel[];
  carsTable = CarsConfig;




  constructor(private service: CarsService) { }

  ngOnInit(): void {
    this.getCars();
  }

  //recuperp gli utenti dal servizio
  getCars(): void {
    this.service.getCars().subscribe(cars => {
      this.cars = cars
    });
  }


}
