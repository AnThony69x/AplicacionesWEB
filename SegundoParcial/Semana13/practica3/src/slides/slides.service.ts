import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSlideDto } from './dto/create-slide.dto';
import { UpdateSlideDto } from './dto/update-slide.dto';
import { Slide } from './entities/slide.entity';

@Injectable()
export class SlidesService {
  constructor(
    @InjectRepository(Slide)
    private readonly slideRepository: Repository<Slide>,
  ) {}

  async create(createSlideDto: CreateSlideDto): Promise<Slide> {
    const slide = this.slideRepository.create(createSlideDto);
    return await this.slideRepository.save(slide);
  }

  async findAll(): Promise<Slide[]> {
    return await this.slideRepository.find();
  }

  async findOne(id: number): Promise<Slide> {
    const slide = await this.slideRepository.findOne({ where: { id } });
    if (!slide) {
      throw new NotFoundException(`Slide con ID ${id} no encontrado`);
    }
    return slide;
  }

  async update(id: number, updateSlideDto: UpdateSlideDto): Promise<Slide> {
    await this.findOne(id); // Verificar que existe
    await this.slideRepository.update(id, updateSlideDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const slide = await this.findOne(id); // Verificar que existe
    await this.slideRepository.remove(slide);
  }

  async findByPresentacion(presentacionId: number): Promise<Slide[]> {
    return await this.slideRepository.find({ 
      where: { presentacionId },
      order: { orden: 'ASC' }
    });
  }
}