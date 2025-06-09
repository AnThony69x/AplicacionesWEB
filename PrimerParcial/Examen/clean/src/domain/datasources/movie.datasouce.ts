import { CreateMovieDto, UpdateMovieDto } from '../dtos/cine/movie.dto';
import { Movie } from '../entities/Movie.entity';

// Interfaz abstracta - solo definición de métodos
export abstract class MovieDatasource {
  abstract create(createMovieDto: CreateMovieDto): Promise<Movie>;
  abstract getAll(): Promise<Movie[]>;
  abstract findById(id: string): Promise<Movie>;
  abstract updateById(updateMovieDto: UpdateMovieDto): Promise<Movie>;
  abstract deleteById(id: string): Promise<Movie>;
}