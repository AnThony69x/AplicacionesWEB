export class Theater {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly capacity: number,
    public readonly rows: number,
    public readonly seatsPerRow: number,
    public isActive: boolean
  ) {}

  getTotalSeats(): number {
    return this.rows * this.seatsPerRow;
  }

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }
}