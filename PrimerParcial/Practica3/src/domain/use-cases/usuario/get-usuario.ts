import { Usuario } from '../../entities/usuario.entity';
import { IUsuarioRepository } from '../../repositories/usuario.repository';

export class GetUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(id: number): Promise<Usuario | null> {
    return await this.usuarioRepository.findById(id);
  }
}