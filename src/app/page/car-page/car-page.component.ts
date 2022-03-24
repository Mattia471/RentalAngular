import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from "../../util/service/cars/cars.service";
import {CarsConfig} from "../../util/configCustom/table/carsConfig";
import {CarsModel} from "../../util/model/cars";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersModel} from "../../util/model/users";
@Component({
  selector: 'app-user-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

  cars!: CarsModel[];
  carsTable = CarsConfig;



  constructor(
    private carService: CarsService,
    private route : ActivatedRoute,
    private router: Router,
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

        break;
    }
  }

  /*delete(user: UsersModel): void {
    this.carService.de(user.id)
      .subscribe(o => {
        this.getCars();
      });
  }

*/
  //recuperp gli utenti dal servizio
  getCars(): void {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars
    });
  }

}
