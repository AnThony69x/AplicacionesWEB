import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Presentacion } from './entities/presentacione.entity';
import { CreatePresentacioneDto } from './dto/create-presentacione.dto';
import { UpdatePresentacioneDto } from './dto/update-presentacione.dto';

@Injectable()
export class PresentacionesService {
  constructor(
    @InjectRepository(Presentacion)
    private presnsetacionesRepository: Repository<Presentacion>,
  ) {}

  create(createPresentacioneDto: CreatePresentacioneDto) {
    const presentacione = this.presnsetacionesRepository.create(createPresentacioneDto);
    return this.presnsetacionesRepository.save(presentacione);
  }

  findAll() {
    return this.presnsetacionesRepository.find();
    }

  findOne(id: number) {
    return this.presnsetacionesRepository.findOneBy({ id });
    }

  update(id: number, updatePresentacioneDto: UpdatePresentacioneDto) {
    const presentacione = this.presnsetacionesRepository.create(updatePresentacioneDto);
    return this.presnsetacionesRepository.update(id, presentacione)
    }

  remove(id: number) {
    const result = this.presnsetacionesRepository.delete(id);
    return result.then(() => ({ message: 'Presentación eliminada exitosamente' }));
    }
}
