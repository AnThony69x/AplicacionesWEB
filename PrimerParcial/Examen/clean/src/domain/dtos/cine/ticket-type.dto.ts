export class TicketTypeDto {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly description: string,
    public readonly requiresValidation: boolean,
    public readonly isActive: boolean
  ) {}
}

export class CreateTicketTypeDto {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly description: string,
    public readonly requiresValidation: boolean
  ) {}
}

export class UpdateTicketTypeDto {
  constructor(
    public readonly name?: string,
    public readonly price?: number,
    public readonly description?: string,
    public readonly requiresValidation?: boolean,
    public readonly isActive?: boolean
  ) {}
}