import { Component, OnInit } from '@angular/core';
import {ReservationsModel} from "../../util/model/reservations";
import {ReservationsConfig} from "../../util/configCustom/table/reservationsConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {CarsModel} from "../../util/model/cars";

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservations!: ReservationsModel[];
  reservationsTable = ReservationsConfig;

  constructor(
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getReservations()
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add/'  + 'reservations'], {relativeTo: this.route});
        break;
      case 'edit':
        this.router.navigate(['edit/' + $event.item.id+ '/' + 'reservations'], {relativeTo: this.route});
        break;
      case 'delete':
        this.delete($event.item);
        break;
    }
  }


  //recuperp gli utenti dal servizio
  getReservations(): void {
    this.reservationsService.getReservations().subscribe(reservations => {
      this.reservations = reservations
    });
  }

  delete(reservation: ReservationsModel): void {
    this.reservationsService.deleteReservation(reservation.id)
      .subscribe(o => {
        this.getReservations();
      });
  }

}
