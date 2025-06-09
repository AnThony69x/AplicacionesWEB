// domain/dtos/reservation.dto.ts
type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export class ReservationDto {
  constructor(
    public readonly id: string,
    public readonly screeningId: string,
    public readonly userId: string | null,
    public readonly ticketTypeId: string,
    public readonly totalAmount: number,
    public readonly status: ReservationStatus,
    public readonly createdAt: Date,
    public readonly expiresAt: Date
  ) {}
}

export class CreateReservationDto {
  constructor(
    public readonly screeningId: string,
    public readonly userId: string | null,
    public readonly ticketTypeId: string,
    public readonly totalAmount: number,
    public readonly expiresAt: Date
  ) {}
}

export class UpdateReservationDto {
  constructor(
    public readonly status?: ReservationStatus,
    public readonly expiresAt?: Date
  ) {}
}