import { Movie } from "./Movie.entity";
import { Theater } from "./Theater.entity";

type ScreeningStatus = 'scheduled' | 'in-progress' | 'finished' | 'cancelled';

export class Screening {
  constructor(
    public readonly id: string,
    public readonly movieId: string,
    public readonly theaterId: string,
    public readonly date: Date,
    public readonly startTime: string,
    public readonly endTime: string,
    public availableSeats: number,
    public status: ScreeningStatus
  ) {}

  updateSeatsAvailability(seatsCount: number): void {
    if (seatsCount > this.availableSeats) {
      throw new Error("No hay suficientes asientos disponibles");
    }
    this.availableSeats -= seatsCount;
  }

  cancelScreening(): void {
    this.status = 'cancelled';
  }

  startScreening(): void {
    this.status = 'in-progress';
  }

  endScreening(): void {
    this.status = 'finished';
  }
}