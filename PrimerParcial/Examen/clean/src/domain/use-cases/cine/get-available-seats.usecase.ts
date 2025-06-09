// domain/use-cases/seats/get-available-seats.usecase.ts
import { Seat } from "../../entities/Seat.entity";
import { ScreeningRepository } from "../../repositories/screening.repository";
import { ReservationSeatRepository } from "../../repositories/reservation-seat.repository";
import { SeatRepository } from "../../repositories/seat.repository";

export class GetAvailableSeatsUseCase {
  constructor(
    private readonly screeningRepository: ScreeningRepository,
    private readonly reservationSeatRepository: ReservationSeatRepository,
    private readonly seatRepository: SeatRepository
  ) {}

  async execute(screeningId: string): Promise<Seat[]> {
    // 1. Obtener la función
    const screening = await this.screeningRepository.getScreeningById(screeningId);
    if (!screening) throw new Error("Screening not found");
    
    // 2. Obtener asientos ocupados para esta función
    const occupiedSeats = await this.reservationSeatRepository.getSeatsOccupiedForScreening(screeningId);
    
    // 3. Obtener todos los asientos de la sala
    const theaterSeats = await this.seatRepository.getSeatsByTheaterId(screening.theaterId);
    
    // 4. Filtrar asientos disponibles
    return theaterSeats.filter(seat => 
      seat.isAvailable && !occupiedSeats.includes(seat.id)
    );
  }
}