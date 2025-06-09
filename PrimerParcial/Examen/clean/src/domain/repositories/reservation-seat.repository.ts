import { ReservationSeat } from "../entities/ReservationSeat.entity";

export interface ReservationSeatRepository {
  createReservationSeat(reservationSeat: ReservationSeat): Promise<ReservationSeat>;
  deleteReservationSeat(id: string): Promise<boolean>;
  getReservationSeatsByReservationId(reservationId: string): Promise<ReservationSeat[]>;
  getReservationSeatsByScreeningId(screeningId: string): Promise<ReservationSeat[]>;
  getSeatsOccupiedForScreening(screeningId: string): Promise<string[]>;
}