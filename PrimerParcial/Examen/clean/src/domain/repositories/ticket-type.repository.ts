import { TicketType } from "../entities/TicketType.entity";

export interface TicketTypeRepository {
  createTicketType(ticketType: TicketType): Promise<TicketType>;
  updateTicketType(id: string, ticketType: Partial<TicketType>): Promise<TicketType | null>;
  deleteTicketType(id: string): Promise<boolean>;
  getTicketTypeById(id: string): Promise<TicketType | null>;
  getAllTicketTypes(): Promise<TicketType[]>;
  getActiveTicketTypes(): Promise<TicketType[]>;
  getTicketTypeByName(name: string): Promise<TicketType | null>;
}