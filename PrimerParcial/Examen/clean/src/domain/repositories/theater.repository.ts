// domain/repositories/theater.repository.ts
import { Theater } from "../entities/Theater.entity";

export interface TheaterRepository {
  createTheater(theater: Theater): Promise<Theater>;
  updateTheater(id: string, theater: Partial<Theater>): Promise<Theater | null>;
  deleteTheater(id: string): Promise<boolean>;
  getTheaterById(id: string): Promise<Theater | null>;
  getAllTheaters(): Promise<Theater[]>;
  getActiveTheaters(): Promise<Theater[]>;
}