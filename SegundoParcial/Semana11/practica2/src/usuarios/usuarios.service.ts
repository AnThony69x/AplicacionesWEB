import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioInput: CreateUsuarioInput): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(createUsuarioInput);
    return this.usuarioRepository.save(usuario);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);
    }
    return usuario;
  }

  async update(id: string, updateUsuarioInput: UpdateUsuarioInput): Promise<Usuario> {
    await this.usuarioRepository.update(id, updateUsuarioInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Usuario> {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.delete(id);
    return usuario;
  }
}
