import { Usuario, UsuarioEntity } from '../../entities/usuario.entity';
import { IUsuarioRepository } from '../../repositories/usuario.repository';

export interface CreateUsuarioDto {
  nombre: string;
  email: string;
  password: string;
}

export class CreateUsuarioUseCase {
  constructor(private usuarioRepository: IUsuarioRepository) {}

  async execute(dto: CreateUsuarioDto): Promise<Usuario> {
    // Crear entidad de dominio
    const usuario = new UsuarioEntity(dto.nombre, dto.email, dto.password);

    // Validaciones de dominio
    if (!usuario.validarEmail()) {
      throw new Error('Email inválido');
    }

    if (!usuario.validarPassword()) {
      throw new Error('Password debe tener al menos 6 caracteres');
    }

    // Verificar que el email no exista
    const existingUser = await this.usuarioRepository.findByEmail(dto.email);
    if (existingUser) {
      throw new Error('Email ya está registrado');
    }

    // Crear usuario
    return await this.usuarioRepository.create(usuario);
  }
}