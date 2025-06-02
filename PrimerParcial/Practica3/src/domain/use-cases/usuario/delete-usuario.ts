import { IUsuarioRepository } from '../../repositories/usuario.repository';

export class DeleteUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(id: number): Promise<boolean> {
    const existingUser = await this.usuarioRepository.findById(id);
    if (!existingUser) {
      throw new Error('Usuario no encontrado');
    }

    return await this.usuarioRepository.delete(id);
  }
}