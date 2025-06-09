import { CinemaRule } from "../entities/CinemaRule.entity";

export interface CinemaRuleRepository {
  createCinemaRule(rule: CinemaRule): Promise<CinemaRule>;
  updateCinemaRule(id: string, rule: Partial<CinemaRule>): Promise<CinemaRule | null>;
  deleteCinemaRule(id: string): Promise<boolean>;
  getCinemaRuleById(id: string): Promise<CinemaRule | null>;
  getAllCinemaRules(): Promise<CinemaRule[]>;
  getActiveCinemaRules(): Promise<CinemaRule[]>;
  getRulesByCategory(category: string): Promise<CinemaRule[]>;
}