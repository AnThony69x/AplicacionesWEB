type RuleCategory = 'behavior' | 'safety' | 'general';

export class CinemaRule {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly iconUrl: string,
    public readonly category: RuleCategory,
    public isActive: boolean,
    public order: number
  ) {}

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }

  changeOrder(newOrder: number): void {
    if (newOrder < 0) throw new Error("Orden inválido");
    this.order = newOrder;
  }
}