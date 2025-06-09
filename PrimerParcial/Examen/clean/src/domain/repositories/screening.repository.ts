import { Screening } from "../entities/Screening.entity";

export interface ScreeningRepository {
  createScreening(screening: Screening): Promise<Screening>;
  updateScreening(id: string, screening: Partial<Screening>): Promise<Screening | null>;
  deleteScreening(id: string): Promise<boolean>;
  getScreeningById(id: string): Promise<Screening | null>;
  getScreeningsByMovieId(movieId: string): Promise<Screening[]>;
  getScreeningsByTheaterId(theaterId: string): Promise<Screening[]>;
  getActiveScreenings(): Promise<Screening[]>;
  updateAvailableSeats(screeningId: string, seatsCount: number): Promise<void>;
}