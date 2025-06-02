import { Usuario } from '../../entities/usuario.entity';
import { IUsuarioRepository } from '../../repositories/usuario.repository';

export interface UpdateUsuarioDto {
  nombre?: string;
  email?: string;
  password?: string;
  activo?: boolean;
}

export class UpdateUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(id: number, dto: UpdateUsuarioDto): Promise<Usuario | null> {
    const existingUser = await this.usuarioRepository.findById(id);
    if (!existingUser) {
      throw new Error('Usuario no encontrado');
    }

    // Si se actualiza el email, verificar que no exista
    if (dto.email && dto.email !== existingUser.email) {
      const emailExists = await this.usuarioRepository.findByEmail(dto.email);
      if (emailExists) {
        throw new Error('Email ya está registrado');
      }
    }

    return await this.usuarioRepository.update(id, dto);
  }
}