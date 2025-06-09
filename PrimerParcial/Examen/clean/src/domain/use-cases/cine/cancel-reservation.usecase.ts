// domain/use-cases/reservations/cancel-reservation.usecase.ts
import { Reservation } from "../../entities/Reservation.entity";
import { ReservationRepository } from "../../repositories/reservation.repository";
import { ReservationSeatRepository } from "../../repositories/reservation-seat.repository";
import { ScreeningRepository } from "../../repositories/screening.repository";

export class CancelReservationUseCase {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly reservationSeatRepository: ReservationSeatRepository,
    private readonly screeningRepository: ScreeningRepository
  ) {}

  async execute(reservationId: string): Promise<Reservation> {
    // Obtener reserva
    const reservation = await this.reservationRepository.getReservationById(reservationId);
    if (!reservation) throw new Error("Reservation not found");
    
    // Cancelar reserva
    const canceledReservation = await this.reservationRepository.cancelReservation(reservationId);
    if (!canceledReservation) throw new Error("Failed to cancel reservation");
    
    // Obtener asientos reservados
    const reservationSeats = await this.reservationSeatRepository.getReservationSeatsByReservationId(reservationId);
    const seatIds = reservationSeats.map(rs => rs.seatId);
    
    // Liberar asientos en la función
    await this.screeningRepository.updateAvailableSeats(
      reservation.screeningId, 
      -seatIds.length // Sumar los asientos de vuelta
    );
    
    // Eliminar relación con asientos
    await Promise.all(
      reservationSeats.map(rs => 
        this.reservationSeatRepository.deleteReservationSeat(rs.id)
      )
    );

    return canceledReservation;
  }
}