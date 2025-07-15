import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';
import { Presentacion } from './entities/presentacion.entity';

@Injectable()
export class PresentacionesService {
  constructor(
    @InjectRepository(Presentacion)
    private readonly presentacionRepository: Repository<Presentacion>,
  ) {}

  async create(createPresentacionDto: CreatePresentacionDto): Promise<Presentacion> {
    const presentacion = this.presentacionRepository.create(createPresentacionDto);
    return await this.presentacionRepository.save(presentacion);
  }

  async findAll(): Promise<Presentacion[]> {
    return await this.presentacionRepository.find();
  }

  async findOne(id: number): Promise<Presentacion> {
    const presentacion = await this.presentacionRepository.findOne({ where: { id } });
    if (!presentacion) {
      throw new NotFoundException(`Presentación con ID ${id} no encontrada`);
    }
    return presentacion;
  }

  async update(id: number, updatePresentacionDto: UpdatePresentacionDto): Promise<Presentacion> {
    await this.findOne(id); // Verificar que existe
    await this.presentacionRepository.update(id, updatePresentacionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const presentacion = await this.findOne(id); // Verificar que existe
    await this.presentacionRepository.remove(presentacion);
  }

  async findByUsuario(usuarioId: number): Promise<Presentacion[]> {
    return await this.presentacionRepository.find({ where: { usuarioId } });
  }

  async findByFecha(fecha: string): Promise<Presentacion[]> {
    return await this.presentacionRepository.find({ where: { fecha } });
  }
}