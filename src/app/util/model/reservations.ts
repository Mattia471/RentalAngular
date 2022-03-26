export interface ReservationsModel {
  id: number;
  userId: number;
  carId: number;
  startDate: string;
  endDate: string;
  status: boolean;
}
