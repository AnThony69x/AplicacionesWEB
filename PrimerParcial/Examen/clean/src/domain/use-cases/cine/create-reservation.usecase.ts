import { Reservation } from "../../entities/Reservation.entity";
import { ReservationSeat } from "../../entities/ReservationSeat.entity";
import { ReservationRepository } from "../../repositories/reservation.repository";
import { ReservationSeatRepository } from "../../repositories/reservation-seat.repository";
import { ScreeningRepository } from "../../repositories/screening.repository";
import { TicketTypeRepository } from "../../repositories/ticket-type.repository";

export class CreateReservationUseCase {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    private readonly reservationSeatRepository: ReservationSeatRepository,
    private readonly screeningRepository: ScreeningRepository,
    private readonly ticketTypeRepository: TicketTypeRepository
  ) {}

  async execute(data: {
    screeningId: string;
    userId: string | null;
    ticketTypeId: string;
    seatIds: string[];
  }): Promise<Reservation> {
    const { screeningId, userId, ticketTypeId, seatIds } = data;

    // Validar función
    const screening = await this.screeningRepository.getScreeningById(screeningId);
    if (!screening || screening.status !== "scheduled") {
      throw new Error("Invalid screening");
    }

    // Validar tipo de entrada
    const ticketType = await this.ticketTypeRepository.getTicketTypeById(ticketTypeId);
    if (!ticketType || !ticketType.isActive) {
      throw new Error("Invalid ticket type");
    }

    // Validar asientos
    if (seatIds.length === 0) throw new Error("At least one seat is required");
    
    // Verificar disponibilidad de asientos
    const occupiedSeats = await this.reservationSeatRepository.getSeatsOccupiedForScreening(screeningId);
    const isAnySeatOccupied = seatIds.some(id => occupiedSeats.includes(id));
    if (isAnySeatOccupied) {
      throw new Error("One or more seats are already occupied");
    }

    // Calcular monto total
    const totalAmount = ticketType.price * seatIds.length;

    // Crear reserva
    const reservation = new Reservation(
      "generated-id", // En implementación real se generaría un UUID
      screeningId,
      userId,
      ticketTypeId,
      totalAmount,
      "pending",
      new Date(),
      new Date(Date.now() + 15*60000) // Expira en 15 minutos
    );

    // Guardar reserva
    const createdReservation = await this.reservationRepository.createReservation(reservation);

    // Crear ReservationSeat para cada asiento
    await Promise.all(seatIds.map(seatId => {
      const reservationSeat = new ReservationSeat(
        `generated-id-${seatId}`,
        createdReservation.id,
        seatId,
        screeningId
      );
      return this.reservationSeatRepository.createReservationSeat(reservationSeat);
    }));

    // Actualizar asientos disponibles en la función
    await this.screeningRepository.updateAvailableSeats(screeningId, seatIds.length);

    return createdReservation;
  }
}