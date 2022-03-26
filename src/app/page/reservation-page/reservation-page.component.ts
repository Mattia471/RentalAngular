import { Component, OnInit } from '@angular/core';
import {ReservationsModel} from "../../util/model/reservations";
import {ReservationsConfig} from "../../util/configCustom/table/reservationsConfig";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../util/service/reservations/reservations.service";

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  reservations!: ReservationsModel[];
  reservationsTable = ReservationsConfig;

  constructor(
    private service: ReservationsService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
  }

}
