type ReservationStatus = 'pending' | 'confirmed' | 'cancelled';

export class Reservation {
  constructor(
    public readonly id: string,
    public readonly screeningId: string,
    public readonly userId: string | null,
    public readonly ticketTypeId: string,
    public totalAmount: number,
    public status: ReservationStatus,
    public readonly createdAt: Date,
    public expiresAt: Date
  ) {}

  confirm(): void {
    if (this.status !== 'pending') throw new Error("Reserva no confirmable");
    this.status = 'confirmed';
  }

  cancel(): void {
    if (this.status === 'cancelled') throw new Error("Reserva ya cancelada");
    this.status = 'cancelled';
  }

  calculateExpiration(validMinutes: number): void {
    const expiration = new Date(this.createdAt);
    expiration.setMinutes(expiration.getMinutes() + validMinutes);
    this.expiresAt = expiration;
  }
}