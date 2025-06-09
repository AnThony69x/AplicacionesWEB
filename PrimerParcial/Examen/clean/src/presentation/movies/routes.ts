import { Router } from 'express';
import { MovieController } from '../movies/controller';

const router = Router();
const movieController = new MovieController();

// GET /api/movies - Obtener todas las películas activas
router.get('/', movieController.getActiveMovies);

// GET /api/movies/:id - Obtener película por ID
router.get('/:id', movieController.getMovieById);

// POST /api/movies - Crear nueva película
router.post('/', movieController.createMovie);

export default router;