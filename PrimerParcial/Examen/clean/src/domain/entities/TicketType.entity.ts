export class TicketType {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public price: number,
    public readonly description: string,
    public readonly requiresValidation: boolean,
    public isActive: boolean
  ) {}

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }

  updatePrice(newPrice: number): void {
    if (newPrice < 0) throw new Error("Precio inválido");
    this.price = newPrice;
  }
}