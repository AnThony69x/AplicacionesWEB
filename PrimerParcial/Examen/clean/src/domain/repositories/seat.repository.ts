// domain/repositories/seat.repository.ts
import { Seat } from "../entities/Seat.entity";

export interface SeatRepository {
  createSeat(seat: Seat): Promise<Seat>;
  updateSeat(id: string, seat: Partial<Seat>): Promise<Seat | null>;
  deleteSeat(id: string): Promise<boolean>;
  getSeatById(id: string): Promise<Seat | null>;
  getSeatsByTheaterId(theaterId: string): Promise<Seat[]>;
  getAvailableSeatsByTheaterId(theaterId: string): Promise<Seat[]>;
  updateSeatAvailability(id: string, isAvailable: boolean): Promise<void>;
}