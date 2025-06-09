// domain/use-cases/tickets/get-ticket-types.usecase.ts
import { TicketType } from "../../entities/TicketType.entity";
import { TicketTypeRepository } from "../../repositories/ticket-type.repository";

export class GetTicketTypesUseCase {
  constructor(private readonly ticketTypeRepository: TicketTypeRepository) {}

  async execute(): Promise<TicketType[]> {
    return await this.ticketTypeRepository.getActiveTicketTypes();
  }
}