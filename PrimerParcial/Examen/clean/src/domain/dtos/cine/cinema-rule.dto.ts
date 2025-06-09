type RuleCategory = 'behavior' | 'safety' | 'general';

export class CinemaRuleDto {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly iconUrl: string,
    public readonly category: RuleCategory,
    public readonly isActive: boolean,
    public readonly order: number
  ) {}
}

export class CreateCinemaRuleDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly iconUrl: string,
    public readonly category: RuleCategory,
    public readonly order: number
  ) {}
}

export class UpdateCinemaRuleDto {
  constructor(
    public readonly title?: string,
    public readonly description?: string,
    public readonly iconUrl?: string,
    public readonly category?: RuleCategory,
    public readonly isActive?: boolean,
    public readonly order?: number
  ) {}
}