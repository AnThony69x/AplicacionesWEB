// presentation/controllers/movie.controller.ts
import { Request, Response } from 'express';
import { GetMoviesUseCase } from '../../domain/use-cases/cine/get-movies.usecase';
import { MovieMemoryDataSource } from '../../infrastructure/datasource/memory/movie.memory.datasource';
import { Movie } from '../../domain/entities/Movie.entity';

export class MovieController {
  private getMoviesUseCase: GetMoviesUseCase;

  constructor() {
    const movieDataSource = new MovieMemoryDataSource();
    this.getMoviesUseCase = new GetMoviesUseCase(movieDataSource);
  }

  async getActiveMovies(req: Request, res: Response) {
    try {
      const movies = await this.getMoviesUseCase.execute();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getMovieById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const movieDataSource = new MovieMemoryDataSource();
      const movie = await movieDataSource.getMovieById(id);
      
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createMovie(req: Request, res: Response) {
    try {
      const movieDataSource = new MovieMemoryDataSource();
      const newMovie = new Movie(
        Date.now().toString(), // ID temporal
        req.body.title,
        req.body.description,
        req.body.duration,
        req.body.genre,
        req.body.rating,
        req.body.posterUrl,
        true
      );
      
      const createdMovie = await movieDataSource.createMovie(newMovie);
      res.status(201).json(createdMovie);
    } catch (error) {
      res.status(400).json({ error: 'Invalid request data' });
    }
  }
}