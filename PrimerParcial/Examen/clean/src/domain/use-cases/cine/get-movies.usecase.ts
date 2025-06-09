import { Movie } from "../../entities/Movie.entity";
import { MovieRepository } from "../../repositories/movie.repository";

export class GetMoviesUseCase {
  constructor(private readonly movieRepository: MovieRepository) {}

  async execute(): Promise<Movie[]> {
    return await this.movieRepository.getActiveMovies();
  }
}