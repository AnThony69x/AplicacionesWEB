// domain/use-cases/screenings/get-screenings.usecase.ts
import { Screening } from "../../entities/Screening.entity";
import { ScreeningRepository } from "../../repositories/screening.repository";

export class GetScreeningsUseCase {
  constructor(private readonly screeningRepository: ScreeningRepository) {}

  async execute(movieId: string): Promise<Screening[]> {
    if (!movieId) throw new Error("Movie ID is required");
    return await this.screeningRepository.getScreeningsByMovieId(movieId);
  }
}