import express from 'express';
import { AppDataSource } from './infrastructure/datasource/datasource.config';
import { UsuarioRoutes } from './presentation/todos/routes';

const app = express();

app.use(express.json());

// Configurar rutas
app.use('/api/v1', UsuarioRoutes.routes);

// Inicializar base de datos y servidor
AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada');
    
    app.listen(3000, () => {
      console.log('Servidor corriendo en puerto 3000');
    });
  })
  .catch((error) => {
    console.error('Error conectando a la base de datos:', error);
  });