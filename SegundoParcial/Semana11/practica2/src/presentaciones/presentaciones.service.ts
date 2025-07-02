import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presentacion } from './entities/presentacion.entity';
import { CreatePresentacionInput } from './dto/create-presentacione.input';
import { UpdatePresentacionInput } from './dto/update-presentacione.input';

@Injectable()
export class PresentacionesService {
  constructor(
    @InjectRepository(Presentacion)
    private readonly presentacionRepository: Repository<Presentacion>,
  ) {}

  create(createPresentacionInput: CreatePresentacionInput): Promise<Presentacion> {
    const presentacion = this.presentacionRepository.create(createPresentacionInput);
    return this.presentacionRepository.save(presentacion);
  }

  findAll(): Promise<Presentacion[]> {
    return this.presentacionRepository.find();
  }

  async findOne(id: string): Promise<Presentacion> {
    const presentacion = await this.presentacionRepository.findOneBy({ id });
    if (!presentacion) {
      throw new Error(`Presentacion with id ${id} not found`);
    }
    return presentacion;
  }

  async update(id: string, updatePresentacionInput: UpdatePresentacionInput): Promise<Presentacion> {
    await this.presentacionRepository.update(id, updatePresentacionInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<Presentacion> {
    const presentacion = await this.findOne(id);
    await this.presentacionRepository.delete(id);
    return presentacion;
  }
}
