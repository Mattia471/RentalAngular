import { Component, OnInit } from '@angular/core';
import {ReservationsModel} from "../../util/model/reservations";
import {ReservationsConfig} from "../../util/configCustom/table/reservationsConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../util/service/reservations/reservations.service";
import {AuthService} from "../../util/service/authentication/auth.service";
import {ReservationsConfigCustomer} from "../../util/configCustom/table/reservationsConfigCustomer";

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservations!: ReservationsModel[];
  reservationsTableAdmin = ReservationsConfig;
  reservationsTableCustomer = ReservationsConfigCustomer;

  constructor(
    private reservationsService: ReservationsService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {


    if(this.authService.getUser()!.role) {
      this.getReservations()
    }else{
      this.getReservationsByCustomer()
    }
  }

  btnClicked($event: any) {
    switch ($event.action) {
      case 'add':
        this.router.navigate(['add/'  + 'reservations'], {relativeTo: this.route});
        break;
      case 'accept':
        this.accept($event.item);
        break;
      case 'edit':
        this.router.navigate(['edit/' + $event.item.id+ '/' + 'reservations'], {relativeTo: this.route});
        break;
      case 'decline':
        this.decline($event.item);
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

  //recuperp gli utenti dal servizio
  getReservationsByCustomer(): void {
    this.reservationsService.getReservationByCustomer(this.authService.getUser()!.id).subscribe(reservations => {
      this.reservations = reservations
    });
  }

  delete(reservation: ReservationsModel): void {
    this.reservationsService.deleteReservation(reservation.id)
      .subscribe(o => {
        this.getReservations();
      });
  }

  accept(reservation: ReservationsModel): void {
    this.reservationsService.acceptReservation(reservation)
      .subscribe(res => {
        this.getReservations();
      });
  }

  decline(reservation: ReservationsModel): void {
    this.reservationsService.declineReservation(reservation)
      .subscribe(res => {
        this.getReservations();
      });
  }

}
