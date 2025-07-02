import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  findAll() {
    return this.usuarioRepository.find();
    }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy({ id });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.usuarioRepository.create(updateUsuarioDto);
    return this.usuarioRepository.update(id, usuario)
  }

  remove(id: number) {
    const result = this.usuarioRepository.delete(id);
    return result.then(() => ({ message: 'Usuario eliminado exitosamente' }));
    }
}
