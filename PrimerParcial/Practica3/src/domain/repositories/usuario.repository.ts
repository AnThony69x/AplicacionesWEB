import { Usuario } from '../entities/usuario.entity';

export interface IUsuarioRepository {
  create(usuario: Usuario): Promise<Usuario>;
  findById(id: number): Promise<Usuario | null>;
  findByEmail(email: string): Promise<Usuario | null>;
  findAll(): Promise<Usuario[]>;
  update(id: number, usuario: Partial<Usuario>): Promise<Usuario | null>;
  delete(id: number): Promise<boolean>;
}