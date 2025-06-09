export class ReservationSeat {
  constructor(
    public readonly id: string,
    public readonly reservationId: string,
    public readonly seatId: string,
    public readonly screeningId: string
  ) {}
}