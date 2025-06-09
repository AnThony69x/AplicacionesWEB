type SeatType = 'normal' | 'vip' | 'disabled';

export class Seat {
  constructor(
    public readonly id: string,
    public readonly theaterId: string,
    public readonly row: string,
    public readonly number: number,
    public readonly type: SeatType,
    public isAvailable: boolean
  ) {}

  reserve(): void {
    if (!this.isAvailable) throw new Error("Asiento ya reservado");
    this.isAvailable = false;
  }

  release(): void {
    this.isAvailable = true;
  }
}