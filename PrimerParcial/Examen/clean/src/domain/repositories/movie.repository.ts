import { Movie } from "../entities/Movie.entity";

export interface MovieRepository {
  createMovie(movie: Movie): Promise<Movie>;
  updateMovie(id: string, movie: Partial<Movie>): Promise<Movie | null>;
  deleteMovie(id: string): Promise<boolean>;
  getMovieById(id: string): Promise<Movie | null>;
  getAllMovies(): Promise<Movie[]>;
  getActiveMovies(): Promise<Movie[]>;
  getMoviesByGenre(genre: string): Promise<Movie[]>;
}