// app.ts
import express from 'express';
import movieRoutes from './presentation/movies/routes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Registrar rutas de películas
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Using in-memory JSON datasource for movies');
});