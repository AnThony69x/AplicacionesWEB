import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slide } from './entities/slide.entity';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';

@Injectable()
export class SlidesService {
  constructor(
    @InjectRepository(Slide)
    private slidesRepository: Repository<Slide>,
  ) {}

  create(createSlideDto: CreateSlideDto) {
    const slide = this.slidesRepository.create(createSlideDto);
    return this.slidesRepository.save(slide);
  }

  findAll() {
    return this.slidesRepository.find();
    }

  findOne(id: number) {
    return this.slidesRepository.findOneBy({ id });
  }

  update(id: number, updateSlideDto: UpdateSlideDto) {
    const slide = this.slidesRepository.create(updateSlideDto);
    return this.slidesRepository.update(id, slide)
    }

  remove(id: number) {
    const result = this.slidesRepository.delete(id);
    return result.then(() => ({ message: 'Slide eliminado exitosamente' }));
    }
}
