import { Reservation } from "../entities/Reservation.entity";

export interface ReservationRepository {
  createReservation(reservation: Reservation): Promise<Reservation>;
  updateReservation(id: string, reservation: Partial<Reservation>): Promise<Reservation | null>;
  deleteReservation(id: string): Promise<boolean>;
  getReservationById(id: string): Promise<Reservation | null>;
  getReservationsByUserId(userId: string): Promise<Reservation[]>;
  getReservationsByScreeningId(screeningId: string): Promise<Reservation[]>;
  confirmReservation(id: string): Promise<Reservation | null>;
  cancelReservation(id: string): Promise<Reservation | null>;
  getExpiredReservations(): Promise<Reservation[]>;
}