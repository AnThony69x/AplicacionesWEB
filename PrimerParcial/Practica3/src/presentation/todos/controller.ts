import { Request, Response } from 'express';
import { CreateUsuarioUseCase } from '../../domain/use-cases/usuario/create-usuario';
import { GetUsuarioUseCase } from '../../domain/use-cases/usuario/get-usuario';
import { UpdateUsuarioUseCase } from '../../domain/use-cases/usuario/update-usuario';
import { DeleteUsuarioUseCase } from '../../domain/use-cases/usuario/delete-usuario';
import { UsuarioRepositoryImpl } from '../../infrastructure/repositories/usuario.repository.impl';

export class UsuarioController {
  private usuarioRepository = new UsuarioRepositoryImpl();

  // Crear usuario
  createUsuario = async (req: Request, res: Response) => {
    try {
      const createUseCase = new CreateUsuarioUseCase(this.usuarioRepository);
      const usuario = await createUseCase.execute(req.body);
      
      res.status(201).json({
        success: true,
        data: usuario,
        message: 'Usuario creado exitosamente'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  // Obtener usuario por ID
  getUsuario = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const getUseCase = new GetUsuarioUseCase(this.usuarioRepository);
      const usuario = await getUseCase.execute(parseInt(id));

      if (!usuario) {
        return res.status(404).json({
          success: false,
          message: 'Usuario no encontrado'
        });
      }

      res.json({
        success: true,
        data: usuario
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  // Obtener todos los usuarios
  getAllUsuarios = async (req: Request, res: Response) => {
    try {
      const usuarios = await this.usuarioRepository.findAll();
      
      res.json({
        success: true,
        data: usuarios,
        count: usuarios.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  // Actualizar usuario
  updateUsuario = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const updateUseCase = new UpdateUsuarioUseCase(this.usuarioRepository);
      const usuario = await updateUseCase.execute(parseInt(id), req.body);

      res.json({
        success: true,
        data: usuario,
        message: 'Usuario actualizado exitosamente'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  // Eliminar usuario
  deleteUsuario = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deleteUseCase = new DeleteUsuarioUseCase(this.usuarioRepository);
      const deleted = await deleteUseCase.execute(parseInt(id));

      res.json({
        success: true,
        message: 'Usuario eliminado exitosamente'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };
}