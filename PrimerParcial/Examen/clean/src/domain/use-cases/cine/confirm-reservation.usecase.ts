import { Reservation } from "../../entities/Reservation.entity";
import { ReservationRepository } from "../../repositories/reservation.repository";

export class ConfirmReservationUseCase {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async execute(reservationId: string): Promise<Reservation> {
    const reservation = await this.reservationRepository.confirmReservation(reservationId);
    if (!reservation) throw new Error("Reservation not found");
    return reservation;
  }
}