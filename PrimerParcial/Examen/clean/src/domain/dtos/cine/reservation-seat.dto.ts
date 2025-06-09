// domain/dtos/reservation-seat.dto.ts
export class ReservationSeatDto {
  constructor(
    public readonly id: string,
    public readonly reservationId: string,
    public readonly seatId: string,
    public readonly screeningId: string
  ) {}
}

export class CreateReservationSeatDto {
  constructor(
    public readonly reservationId: string,
    public readonly seatId: string,
    public readonly screeningId: string
  ) {}
}