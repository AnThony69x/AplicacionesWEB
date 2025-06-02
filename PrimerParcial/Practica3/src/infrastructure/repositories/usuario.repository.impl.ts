import { Repository } from 'typeorm';
import { AppDataSource } from '../datasource/datasource.config';
import { UsuarioDataSource } from '../datasource/usuario.datasource';
import { IUsuarioRepository } from '../../domain/repositories/usuario.repository';
import { Usuario } from '../../domain/entities/usuario.entity';

export class UsuarioRepositoryImpl implements IUsuarioRepository {
  private repository: Repository<UsuarioDataSource>;

  constructor() {
    this.repository = AppDataSource.getRepository(UsuarioDataSource);
  }

  async create(usuario: Usuario): Promise<Usuario> {
    const newUsuario = this.repository.create({
      nombre: usuario.nombre,
      email: usuario.email,
      password: usuario.password,
      activo: usuario.activo ?? true
    });

    const saved = await this.repository.save(newUsuario);
    return this.mapToEntity(saved);
  }

  async findById(id: number): Promise<Usuario | null> {
    const usuario = await this.repository.findOne({ where: { id } });
    return usuario ? this.mapToEntity(usuario) : null;
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    const usuario = await this.repository.findOne({ where: { email } });
    return usuario ? this.mapToEntity(usuario) : null;
  }

  async findAll(): Promise<Usuario[]> {
    const usuarios = await this.repository.find();
    return usuarios.map(usuario => this.mapToEntity(usuario));
  }

  async update(id: number, usuario: Partial<Usuario>): Promise<Usuario | null> {
    await this.repository.update(id, usuario);
    const updated = await this.repository.findOne({ where: { id } });
    return updated ? this.mapToEntity(updated) : null;
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected !== 0;
  }

  private mapToEntity(dataSource: UsuarioDataSource): Usuario {
    return {
      id: dataSource.id,
      nombre: dataSource.nombre,
      email: dataSource.email,
      password: dataSource.password,
      activo: dataSource.activo,
      fechaCreacion: dataSource.fechaCreacion,
      fechaActualizacion: dataSource.fechaActualizacion
    };
  }
}