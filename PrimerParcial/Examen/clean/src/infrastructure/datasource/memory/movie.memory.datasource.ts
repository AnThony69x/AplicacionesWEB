import { Movie } from "../../../domain/entities/Movie.entity";
import { MovieRepository } from "../../../domain/repositories/movie.repository";
import moviesData from "../../../data/movies.json";

export class MovieMemoryDataSource implements MovieRepository {
  private movies: Movie[];

  constructor() {
    // Cargar datos iniciales desde el JSON
    this.movies = moviesData.map(m => 
      new Movie(
        m.id,
        m.title,
        m.description,
        m.duration,
        m.genre,
        m.rating,
        m.posterUrl,
        m.isActive
      )
    );
  }

  async createMovie(movie: Movie): Promise<Movie> {
    this.movies.push(movie);
    return movie;
  }

  async updateMovie(id: string, update: Partial<Movie>): Promise<Movie | null> {
    const index = this.movies.findIndex(m => m.id === id);
    if (index === -1) return null;
    
    this.movies[index] = { ...this.movies[index], ...update };
    return this.movies[index];
  }

  async deleteMovie(id: string): Promise<boolean> {
    const initialLength = this.movies.length;
    this.movies = this.movies.filter(movie => movie.id !== id);
    return this.movies.length < initialLength;
  }

  async getMovieById(id: string): Promise<Movie | null> {
    return this.movies.find(movie => movie.id === id) || null;
  }

  async getAllMovies(): Promise<Movie[]> {
    return this.movies;
  }

  async getActiveMovies(): Promise<Movie[]> {
    return this.movies.filter(movie => movie.isActive);
  }

  async getMoviesByGenre(genre: string): Promise<Movie[]> {
    return this.movies.filter(movie => 
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  }
}