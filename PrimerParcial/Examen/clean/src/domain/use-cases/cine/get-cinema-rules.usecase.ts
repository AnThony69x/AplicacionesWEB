import { CinemaRule } from "../../entities/CinemaRule.entity";
import { CinemaRuleRepository } from "../../repositories/cinema-rule.repository";

export class GetCinemaRulesUseCase {
  constructor(private readonly cinemaRuleRepository: CinemaRuleRepository) {}

  async execute(): Promise<CinemaRule[]> {
    return await this.cinemaRuleRepository.getActiveCinemaRules();
  }
}