import { Router } from 'express';
import { UsuarioController } from './controller';

export class UsuarioRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new UsuarioController();

    // Rutas CRUD para usuarios
    router.post('/usuarios', controller.createUsuario);
    router.get('/usuarios', controller.getAllUsuarios);
    router.get('/usuarios/:id', controller.getUsuario);
    router.put('/usuarios/:id', controller.updateUsuario);
    router.delete('/usuarios/:id', controller.deleteUsuario);

    return router;
  }
}